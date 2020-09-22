import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home_Screen from './src/components/screeners/HomeScreen';
import Detail_Screen from './src/components/screeners/DetailScreen';









const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions= {
                {
                    headerStyle: {
                        backgroundColor: "#D3DEAB"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }
            } >
                <Stack.Screen 
                    name="Home"
                    component={Home_Screen} 
                    options= {
                        {
                            title: "Home Screen"
                        }
                    }
                />
                <Stack.Screen 
                    name="Details"
                    component={Detail_Screen}
                    options= {
                        {
                            title: "Detail Screen"
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

