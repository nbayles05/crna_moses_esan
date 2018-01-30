import { StyleSheet } from 'react-native';

import { theme } from "../../index"
const  { color, padding, windowWidth } = theme;

const styles = StyleSheet.create({
    wrapper:{
        justifyContent:"center",
        alignItems:"center"
    },

    errorText:{
        color: color.red,
        width: (windowWidth - 45),
        marginTop: 20
    },

    buttonContainer:{
        marginVertical: padding * 2,
        width: (windowWidth - 45),
        borderRadius:4
    },

    button:{
        backgroundColor: color.main
    },

    buttonText:{
        color:color.white,
        fontWeight:"500"
    },

});

export default styles;