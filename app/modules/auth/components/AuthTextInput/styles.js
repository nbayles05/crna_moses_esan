import { StyleSheet } from 'react-native';

import { theme } from "../../index"
const { padding, windowWidth } = theme;

const styles = StyleSheet.create({
    container:{
        paddingVertical: padding + (padding / 3),
        justifyContent:"center"
    },

    inputContainer:{
        width: windowWidth - 45
    }
});

export default styles;