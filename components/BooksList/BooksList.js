import React from 'react';
import {View, FlatList} from "react-native";
import { Books } from '../../data/dummyData';
import BookTile from './BookTile';
import * as OpenAnything from 'react-native-openanything';

const BooksList = ({navigation, pdfUrl}) => {

  
    function renderBookItem(itemData){

        function pressHandler(){
            // navigation.navigate('View Book', {
            //     bookId : itemData.item.id,
            //   });

            try{
                OpenAnything.Pdf(`${itemData.item.pdfUrl}`);
            } catch(e){

            }
            
        }


        return (
          <BookTile
           title={itemData.item.title}
           img={itemData.item.img}
           onPress={pressHandler}
          />
        );
    }
    return (
            <FlatList 
             data={Books}
             numColumns={2}
             keyExtractor={(item) => item.id}
             renderItem={renderBookItem}
            />
    );

}

export default BooksList;
