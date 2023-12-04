import { StyleSheet,SafeAreaView,View ,FlatList} from 'react-native';
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
    <SafeAreaView>
      <FlatList
        contentContainerStyle = {styles.container}
        data={data}
        renderItem={({item,index}) => (
          item?
          <Card char={item} id={index+1}/>
          : <View></View>
        )}

        keyExtractor={(item,index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:80,
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    gap:100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
