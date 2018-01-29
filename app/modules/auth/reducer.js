import {AsyncStorage} from 'react-native';

import * as t from './actionTypes';

let initialState = { loggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.LOGIN_SUCCESS:
            var user = action.data;
            var refreshToken = user.refreshToken;
          
           // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['refreshToken', refreshToken],
                ['user', JSON.stringify(user)]
            ]);

            state = Object.assign({}, state, {loggedIn: true, user: user });

            return state;

        case t.LOGGED_OUT:
            let keys = ['refreshToken', 'user'];
            AsyncStorage.multiRemove(keys);
            
            state = Object.assign({}, state, {loggedIn: false, user: null });

            return state;

        default:
            return state;
    }
};

export default authReducer;