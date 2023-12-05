import { StyleSheet,SafeAreaView,View ,FlatList,Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from './components/Card';
import Header from './components/Header';
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
        ItemSeparatorComponent={<View style={{height:20}}></View>}
        ListEmptyComponent={<Text>No Items Found</Text>}
        ListHeaderComponent={<Header text="Pokemon Cards"/>}
        ListFooterComponent={<Header text="Thats All For Now"/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:15,
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
