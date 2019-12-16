import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from "./components/HomeScreen"
import DetailScreen from "./components/DetailScreen"
import About from "./components/About";

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Detail: {screen: DetailScreen},
});

const AboutNavigator = createStackNavigator({
    About:{screen:About}
})

AppNavigator = createDrawerNavigator({
  Home:MainNavigator,
  About:AboutNavigator
})

const App = createAppContainer(AppNavigator);

export default App;