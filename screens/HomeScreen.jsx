import { useState } from "react"
import { View,Text,Pressable,StyleSheet,TextInput } from "react-native"

const HomeScreen = ({navigation}) => {
  const [name,setName] = useState('')
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>
             HI TELL US UR NAME...
        </Text>
        <TextInput style={styles.input} onChangeText={setName} / >
        <Pressable style={styles.button} onPress={() => navigation.navigate('PokemonCards',{name:name}) } >
          <Text style={styles.heading}>Fetch Cards</Text>
        </Pressable>
    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        gap:10
    },
    heading:{
      fontFamily:"serif"
    },
    input:{
      borderWidth:2,
      minWidth:180,
      borderRadius:20,
      padding:10,
    },
    button:{
      borderWidth:1,
      borderRadius:10,
      backgroundColor:"white",
      padding:10
    }
})