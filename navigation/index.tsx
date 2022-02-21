import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { View } from '../components/Themed';
import {
  Octicons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/* Header */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions = {{
      headerStyle : {
        backgroundColor: Colors.light.tint, 
      },
      headerTintColor : Colors.light.background,
      headerTitleAlign : 'left',
      headerTitleStyle : {
        fontWeight : 'bold',
        }
    }}>
    <Stack.Screen 
      name="Root" 
      component={BottomTabNavigator} 
      options={{
        title : "Chat",
        headerRight: () => (
          <View style = {{
            flexDirection: 'row',
            backgroundColor : 'transparent',
            width : 60,
            justifyContent : 'space-between',
            marginRight : 10
          }}>
            <Octicons name='search' size={22} color = "#fff" />
            <MaterialCommunityIcons name = "dots-vertical" size={22} color = "#fff"/>
          </View>
        )
    }} />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route })  => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
              backgroundColor : 'transparent'
            }}>
              <FontAwesome5 name="video" size={22} color={'white'} />
              <MaterialIcons name="call" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        })}
      />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="TabOne"
        component={ChatsScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: "",
          tabBarIcon: ({ color }) => <Feather name="message-square" size={22} color="#000" />,
        })}
      />
    </BottomTab.Navigator>
  );
}

