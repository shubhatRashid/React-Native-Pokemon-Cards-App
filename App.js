import { StyleSheet,ScrollView,View } from 'react-native';
import Card from './components/Card';
import { useState } from 'react';

export default function App() {
  const [data,setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon',
      );
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      alert(error);
    }
  }

  
  if (data.length === 0){
    fetchData()
  }
  
  return (
    <ScrollView >
      <View style={styles.container}>
        {data.map((char,index) =>( 
          char ?
          <Card key={index} char={char} id={index+1}/>
          :
          <View></View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:50,
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    gap:100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
