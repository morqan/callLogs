import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native'
import styles from './Styles/SpinnerStyle'

export default class Spinner extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  render () {
    const {size} = this.props
    return (
      <View style={styles.container}>
        <ActivityIndicator size={size || 'large'} color='#0000ff' />
      </View>
    )
  }
}
