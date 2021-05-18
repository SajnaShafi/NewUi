import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,Alert} from 'react-native';
import {Card, Button} from 'react-native-paper';

const Home = (props,{navigation}) => {

     const [data,setData] = useState([])
     const [loading,setLoading]= useState(true)
    

   // console.log(data,loading)
   
     const fetchData = ()=>{
        fetch("http://172.20.10.2:5000/posts")
        .then(res=>res.json())
        .then(results=>{
    
             setData(results)
             setLoading(false)
    

        }).catch(err=>{
            Alert.alert("someting went wrong")
        })
     }
    
     useEffect(()=>{
          fetchData()
     },[])
    
    const renderList = ((item)=>{
          return(
            
            
            <Card style={styles.mycard}
            onPress={()=>props.navigation.navigate('Profile',{item})}
            >
                <View style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.Name}</Text>   
                       
                </View>
                
           </Card>
            
          )
    })
   return(
       <View style={{flex:1}}>
         
    
        <FlatList
              data={data}
              renderItem={({item})=>{
                return renderList(item)
              }}
              keyExtractor={item=>item._id}
              onRefresh={()=>fetchData()}
              refreshing={loading}
              />
        
        
           
          
       </View>
    
   ) 
            }
    
const theme = {
    colors:{
        primary:"#6495ed",

    }
}

const styles = StyleSheet.create({
    mycard:{
        margin:9,
        padding:8,
        position: 'relative'

       
    },
    cardView:{
         flexDirection:"row",
         padding:6,
         alignItems: 'center'
         
        
    },
    text:{
        fontSize:18,
    },
    button: {
      position: 'relative',
      margin: 16,
     // right: 0,
      //bottom: 50,
      //top:50,
      
      
    },
    
})

export default Home;

