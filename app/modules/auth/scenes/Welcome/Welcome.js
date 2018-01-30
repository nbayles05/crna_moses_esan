import React from 'react';
import {Text, View, Button as RNButton} from 'react-native';

import {Button, SocialIcon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import {actions as auth, constants as c} from "../../index"
const {} = auth;

import styles from "./styles"
import AuthContainer from "../../components/AuthContainer"

import { theme } from "../../index"
const { color } = theme;

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {}

        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }
    
    render() {
        return (
            <AuthContainer>
                <View style={styles.container}>
                    <SocialIcon
                        raised
                        button
                        type='facebook'
                        title='Continue with Facebook'
                        iconSize={19}
                        style={[styles.buttonContainer, styles.socialButton]}
                        onPress={this.onSignInWithFacebook}/>
                </View>
                <View style={styles.container}>
                    <Button
                        raised
                        title={'Sign Up with Email'}
                        borderRadius={4}
                        containerViewStyle={styles.buttonContainer}
                        buttonStyle={styles.button}
                        textStyle={styles.buttonText}
                        onPress={Actions.Register}/>
                    <RNButton
                        title={'Already have an account?'}
                        color={color.main}
                        onPress={Actions.Login}/>

                    <Text style={styles.termsAndCondition}>
                        By signing up, you agree with the Terms of Service and Privacy Policy</Text>
                </View>
            </AuthContainer>
        );
    }
}


export default connect(null, {})(Welcome);