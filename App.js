
import React from 'react';
import { View, FlatList, Button, TextInput} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import {Icon, Text, ListItem} from 'react-native-elements'

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
  
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentWillMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2da837dbc4a04db985d2867b91c9962c')
    .then(resp => resp.json())
    .then(data => this.setState({data : data.articles}))
  }

  render() {
    const {navigate} = this.props.navigation;
    console.log(this.state.data)
    return (
      <View style={styles.screen}>
        {
          this.state.data.map((item, i) => 
            <Text>
               {item.title}</Text>
            
          )
        }
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