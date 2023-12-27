import { View,Text,Button,StyleSheet } from "react-native"

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <Text>
             HomeScreen
        </Text>
        <Button title="Fetch Cards" onPress={() => navigation.navigate('PokemonCards') } />
    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})