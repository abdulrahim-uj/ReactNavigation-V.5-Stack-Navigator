import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';







const HomeScreen = ({navigation}) => {
    return(
        <SafeAreaView 
            style={
                {
                    flex: 1, 
                    alignItems: "center", 
                    justifyContent: "center"}}>
            <View 
                style={
                    {
                        flex: 1, 
                        alignItems: "center", 
                        justifyContent: "center"}}>
                <Text>Home Screen</Text>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate("Details")
                    }
                    style={
                        {
                            backgroundColor: "#FF2D55",
                            paddingHorizontal: 30,
                            paddingVertical: 7,
                            textAlign: "center",
                            borderRadius: 3,
                        }
                    }
                    >
                    <Text style={
                        {
                            color: "#fff",
                            fontSize: 15
                        }
                    }>Go To Details Screen
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const DetailScreen = ({navigation}) => {
    return(
        <SafeAreaView 
            style={
                {
                    flex: 1, 
                    alignItems: "center", 
                    justifyContent: "center"}}>
            <View 
                style={
                    {
                        flex: 1, 
                        alignItems: "center", 
                        justifyContent: "center"}}>
                <Text>Detail Screen</Text>

                <View style={
                    {
                        paddingBottom: 10,
                    }
                }>
                    <TouchableOpacity 
                        onPress={
                            () => navigation.push("Details")
                        }
                        style={
                            {
                                backgroundColor: "#FF2D55",
                                paddingHorizontal: 30,
                                paddingVertical: 7,
                                textAlign: "center",
                                borderRadius: 3,
                            }
                        }
                        >
                        <Text style={
                            {
                                color: "#fff",
                                fontSize: 15
                            }
                        }>Detail Screen ... Again 
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={
                    {
                        paddingBottom: 10,
                    }
                }>
                    <TouchableOpacity 
                        onPress={
                            () => navigation.navigate("Home")
                        }
                        style={
                            {
                                backgroundColor: "#FF2D55",
                                paddingHorizontal: 30,
                                paddingVertical: 7,
                                textAlign: "center",
                                borderRadius: 3,
                            }
                        }
                        >
                        <Text style={
                            {
                                color: "#fff",
                                fontSize: 15
                            }
                        }>Go To Home
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={
                    {
                        paddingBottom: 10,
                    }
                }>
                    <TouchableOpacity 
                        onPress={
                            () => navigation.goBack()
                        }
                        style={
                            {
                                backgroundColor: "#FF2D55",
                                paddingHorizontal: 30,
                                paddingVertical: 7,
                                textAlign: "center",
                                borderRadius: 3,
                            }
                        }
                        >
                        <Text style={
                            {
                                color: "#fff",
                                fontSize: 15
                            }
                        }>Go Back
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={
                    {
                        paddingBottom: 10,
                    }
                }>
                    <TouchableOpacity 
                        onPress={
                            () => navigation.popToTop()
                        }
                        style={
                            {
                                backgroundColor: "#FF2D55",
                                paddingHorizontal: 30,
                                paddingVertical: 7,
                                textAlign: "center",
                                borderRadius: 3,
                            }
                        }
                        >
                        <Text style={
                            {
                                color: "#fff",
                                fontSize: 15
                            }
                        }>Go To The First Screen
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions= {
                {
                    headerStyle: {
                        backgroundColor: "red"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }
            }>
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen} 
                    options= {
                        {
                            title: "Home Screen"
                        }
                    }
                />
                <Stack.Screen 
                    name="Details"
                    component={DetailScreen}
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