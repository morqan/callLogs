import { createAppContainer } from 'react-navigation'
import CallLogScreen from '../Containers/CallLogScreen'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  CallLogScreen: {
    screen: CallLogScreen ,
    navigationOptions: {
      header: null
    }
  },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  // headerMode: 'none',
  initialRouteName: 'CallLogScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
