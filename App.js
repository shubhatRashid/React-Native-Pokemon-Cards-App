import { StyleSheet,SafeAreaView,View ,FlatList,Text,ActivityIndicator} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from './components/Card';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)
  const [refreshing,setRefreshing] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon',
      );
      const json = await response.json();
      setData(json.results);
      setLoading(false)
    } catch (error) {
      alert(error);
    }
  }

  const handleRefresh = () => {
    setRefreshing(true)
    fetchData()
    alert("refreshed")
    setRefreshing(false)
  }
  
  if (data.length === 0){
    fetchData()
  }
  
  if (loading){
    return (
      <View style = {styles.loading}>
        <ActivityIndicator  size="large"/>
      </View>
    )
  }else
  
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
        refreshing = {refreshing}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading : {
    flex:1,
    alignItems : "center",
    justifyContent:'center'
  }
});
