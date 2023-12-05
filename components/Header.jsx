import {View,Text,StyleSheet,useWindowDimensions} from "react-native"

const Header = ({text}) => {
const {height, width} = useWindowDimensions();
  return (
    <View style={[styles.outer,{width:width-50}]}>
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    outer:{
        borderWidth:5,
        padding:20,
        borderRadius:15,
        marginVertical:5,
        alignItems:"center"
    },
    text:{
        fontFamily:"serif",
        fontWeight:"bold",
        fontSize:20,
        color:"teal",
    }
})
export default Header