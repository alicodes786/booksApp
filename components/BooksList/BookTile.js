import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native';

const BookTile = ({title, img, onPress}) => {
    
  return (
    
    <View style={styles.bookItem}>
      <Pressable android_ripple={{color : '#ccc'}} 
      onPress={onPress}
      >
         
        <Image source={{uri : img}} style={styles.image} />
       <View style={styles.bookTitle}>
         <Text>{title}</Text>
        </View> 
        
      </Pressable>
    </View>
  );
}


export default BookTile;


const styles = StyleSheet.create({
    bookItem: {
    flex: 1,
    margin: 16,
    height:150,
    borderRadius:8,
    elevation: 4,
    backgroundColor:'white',
    marginHorizontal:40,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset:{width: 0, height: 2},
    shadowRadius: 8,
    overflow:Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    image: {
        width: 250,
        height:100,
        
    },
    bookTitle: {
      // flex:1,
      paddingTop:20,
      justifyContent:'center',
      alignItems:'center',


    }
})

