
import React from 'react';
import { Text, View, Button, TextInput} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import {Icon} from 'react-native-elements'

const styles = {
  screen : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}


class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home'
  }
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.screen}>
        <Text>Welcome to Home</Text>       
        <Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />
  <Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Local News'
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>Second screen</Text>
      </View>
    );
  }
}



// const AppNavigator = createStackNavigator({
//   HomeScreen: { screen: HomeScreen},
//   SecondScreen: {screen: SecondScreen}
// })

const Tabs = createBottomTabNavigator({   
    HomeScreen: { screen: HomeScreen},
    LocalNews: {screen: SecondScreen}
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName ;

      if (routeName === 'HomeScreen'){
        iconName = 'home'
      }
      else if (routeName === 'LocalNews') {
        iconName = 'compass'
      }
      return <Icon name={iconName} type='font-awesome' />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  }
}

)


export default createAppContainer(Tabs);