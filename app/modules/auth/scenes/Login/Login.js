import React from 'react';
import {Button as RNButton} from 'react-native';

import { Text } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { actions as auth } from "../../index"
const { login, resetPassword } = auth;

import Form from "../../components/Form"
import AuthContainer from "../../components/AuthContainer"
import styles from "./styles"

import { theme } from "../../index"
const { color } = theme;

const fields = [
    {
        key:'email',
        label: "Email Address",
        placeholder:"Email",
        autoFocus:false,
        secureTextEntry:false,
        // value: "",
        value: "test@hotmail.com",
        type: "email"
    },
    {
        key:'password',
        label: "Password",
        placeholder:"Password",
        autoFocus:false,
        secureTextEntry:true,
        value: "testpwd",
        // value: "",
        type: "password"
    }
];

const error = {
    general: '',
    email: "",
    password: ""
}

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            error: error
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    onSubmit(data) {
        this.setState({error: error}); //clear out error messages

        this.props.login(data, this.onSuccess, this.onError)
    }

    onForgotPassword() {
        Actions.ForgotPassword()
    }

    onSuccess() {
        Actions.Main()
    }

    onError(error) {
        let errObj = this.state.error;

        if (error.hasOwnProperty("message")) {
            errObj['general'] = error.message;
        } else {
            let keys = Object.keys(error);
            keys.map((key, index) => {
                errObj[key] = error[key];
            })
        }

        this.setState({error: errObj});
    }

    render() {
        return (
            <AuthContainer>
                <Form fields={fields} onSubmit={this.onSubmit} buttonTitle={"Login"} error={this.state.error}/>
                <Text style={styles.forgotText} onPress={this.onForgotPassword}>Forgot password?</Text>

                <RNButton
                    title={'Don\'t have an account?'}
                    color={color.main}
                    onPress={() => Actions.popTo('Welcome')}/>

            </AuthContainer>
        );
    }
}

export default connect(null, { login, resetPassword })(Login);