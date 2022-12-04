import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import BooksList from './components/BooksList/BooksList';
import ViewBook from './components/ViewBook';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

     <>
     <StatusBar style="dark"/>
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Al Sadiq Academy" component={BooksList} />
         <Stack.Screen name="View Book" component={ViewBook} />
       </Stack.Navigator>
     </NavigationContainer>
     
     </>
      
  );
};


