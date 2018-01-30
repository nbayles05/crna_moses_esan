import * as t from './actionTypes';
import * as api from './api';
import firebase from '../../config/firebase'

export function register(data, successCB, errorCB) {
    return (dispatch) => {
        api.register(data, function (success, data, error) {
            if (success) {
                dispatch({type: t.LOGIN_SUCCESS, data: data});
                successCB();
            }else if (error) errorCB(error)
        });
    };
}

export function login(data, successCB, errorCB) {
    return (dispatch) => {
        api.login(data, function (success, data, error) {
            if (success) {
                dispatch({type: t.LOGIN_SUCCESS, data: data});
                successCB();
            }else if (error) errorCB(error)
        });
    };
}

export function resetPassword(data, successCB, errorCB) {
    return (dispatch) => {
        api.resetPassword(data, function (success, data, error) {
            if (success) successCB();
            else if (error) errorCB(error)
        });
    };
}

export function signOut(successCB, errorCB) {
    return (dispatch) => {
        api.signOut(function (success, data, error) {
            if (success) {
                dispatch({type: t.LOGGED_OUT});
                successCB();
            }else if (error) errorCB(error)
        });
    };
}

export function checkLoginStatus(callback) {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            const isLoggedIn = (user !== null);

            if (isLoggedIn) dispatch({type: t.LOGIN_SUCCESS, data: user})
            else dispatch({type: t.LOGGED_OUT});

            callback(isLoggedIn);
        });
    };
}