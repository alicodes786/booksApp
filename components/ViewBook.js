import React from 'react';
import { View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview'



const ViewBook = ({pdfUrl}) => {
    const PdfReader = ({ pdfUrl }) => 
    <WebView javaScriptEnabled={true} style={{ flex: 1 }} source={{ uri :pdfUrl }} />
    return (
        <View style={styles.container}>
          <PdfReader pdfUrl={""}  />
        </View>
        
    )
}

export default ViewBook;

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})