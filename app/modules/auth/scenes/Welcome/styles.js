import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const {padding, color, fontSize, windowWidth } = theme;

const styles = StyleSheet.create({
    container:{
        paddingVertical: padding * 2,
        justifyContent:"center",
        alignItems:"center"
    },

    buttonContainer:{
        marginVertical: padding * 2,
        width: (windowWidth - 45),
        borderRadius:4,
        borderWidth: 1
    },

    socialButton:{
        paddingVertical: padding * 2,
        borderWidth: 0
    },

    button:{
        backgroundColor: color.white
    },

    buttonText:{
        color:color.black,
        fontWeight:"500"
    },

    termsAndCondition:{
        textAlign:"center",
        color:color.black,
        marginVertical: padding * 4,
        marginHorizontal: padding * 2
    }
});

export default styles;