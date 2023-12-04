import { useState,useEffect } from "react";
import { View,Text,Image,StyleSheet,useWindowDimensions} from "react-native"
export default  Card = ({char,id}) => {
  const [data,setData] = useState([])
  const [hp,setHp] = useState()
  const [moves,setMoves] = useState([])
  const {height, width} = useWindowDimensions();
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.abilities)
      setHp(json.base_experience)
      setMoves(json.moves)
    } catch (error) {
      alert(error);
    }
  }

  if (data.length === 0){
    fetchData(char.url)
  }

  return (
    <View style={[styles.outerBox,{height:height-100,width:width-50}]}>
        <View style={styles.hpView}>
             <Text style={styles.hpText}>❤️HP : {hp}</Text>
        </View>
        <Image 
            source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}} 
            style={styles.image}
        />
        <View style={styles.innerView}>
            <Text style={styles.headText}>{char.name}</Text>
            <View style={styles.abilities}>
                <Text style={styles.legend}>Abilities</Text>
                {
                    data.map((ab,index)=>(
                        <Text style={styles.text} key={index}>
                           {ab.ability.name}
                        </Text>
                    ))
                }
            </View>
            <View style={styles.abilities}>
            <Text style={styles.legend}>Moves</Text>
                {
                    moves.map((ab,index)=>{
                        if (index > 1){
                            return
                        }else{
                            return(
                                <Text style={styles.text} key={index}>
                                {ab.move.name}
                                </Text>
                            )
                        }
                        
                    })
                }
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    outerBox : {
        position:"relative",
        borderWidth:5,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        margin:10,
        width: 250,
        height: 250,
    },
    innerView:{
        padding:15,
        flex:0.4,
        alignSelf:"stretch",
        gap:10
    },
    headText:{
        color:"teal",
        marginBottom:10,
        fontSize:30,
        fontFamily:"serif",
        textTransform:"capitalize"
    },
    abilities:{
        marginVertical:10,
        borderWidth:2,
        flexDirection:"row",
        justifyContent:"center",
        flexWrap:"wrap",
        padding:10,
        borderRadius:15,
        gap:5
    },
    text:{
        color:"white",
        backgroundColor:"black",
        fontSize:15,
        fontFamily:"sans-serif",
        borderWidth:1,
        borderRadius:5,
        alignSelf:"center",
        padding:10,
        textTransform:"capitalize"
    },
    hpView:{
        position:"absolute",
        top:20,
        right:20
    },
    hpText:{
        color:"teal",
        fontSize:17,
        fontFamily:"serif"
    },
    legend:{
        color:"teal",
        position:"absolute",
        top:-15,
        left:30,
        fontSize:18,
        zIndex:1,
        backgroundColor:"white",
    }
})

