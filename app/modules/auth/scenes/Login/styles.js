import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const {color, windowWidth, padding} = theme;

const styles = StyleSheet.create({
    forgotText:{
        width: windowWidth - 45,
        fontSize: fontSize.regular,
        textAlign:"right",
        color:color.black,
        marginBottom: padding

    }
});

export default styles;