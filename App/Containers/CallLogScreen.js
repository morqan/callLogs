import React, { Component } from 'react'
import { Text, View, FlatList, Image, Linking } from 'react-native'
import { connect } from 'react-redux'
import Spinner from '../Components/Spinner'
import Icon from 'react-native-vector-icons/AntDesign'
import UserAvatar from 'react-native-user-avatar';
import { PermissionsAndroid } from 'react-native';
import CallLogs from 'react-native-call-log'
import { Images } from '../Themes'
import {RectButton} from "react-native-gesture-handler";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CallLogScreenStyle'


class CallLogScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      data: [],
      error: null,
      next: '',
      loading: true,
      limit: 'limit=10&page=1'
    }
  }

  componentDidMount =  async() => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
        {
          title: 'Call Log Example',
          message:
            'Access your call logs',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log(CallLogs);
        CallLogs.load(25).then(lastLogs => {
          console.log(lastLogs)
          this.setState({data: lastLogs, loading: false})

        });
      } else {
        console.log('Call Log permission denied');
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  renderOrdersItem = ({item}) => {
    item.created = new Date(item.created)
    const name = item.name ? item.name : item.phoneNumber
    const phone = item.phoneNumber
    return (

        <View orderId={item.index} style={styles.orderBox}>
          <UserAvatar size={65} name={name} />
          <View style={styles.callInfo}>
            <Text style={styles.orderTitle}>{name}</Text>
            <View style={styles.callStatusBox}>
              {/*<Icon style={{paddingLeft: 3}} name='right' size={16} color='#000080' />*/}
              <Text style={styles.callDate}>{item.dateTime}</Text>
            </View>
          </View>
          <View style={styles.mediumTM}>
            <RectButton  style={styles.orderContainer} onPress={() => Linking.openURL(`https://wa.me/${phone}`)}>
              <View accessible>
                <Image source={Images.whatsAppLogo} style={styles.mediumLogo} />
              </View>
             </RectButton>
            <Image source={Images.whatsAppLogo} style={styles.mediumLogo} />
          </View>
        </View>

    )
  };

  renderContent = () => {
    const {data} = this.state
    if (data.length !== 0) {
      return <View><FlatList
        renderItem={this.renderOrdersItem}
        keyExtractor={(item, index) => index.toString()}
        // onScrollEndDrag={this.getNextItems}
        data={data} disableVirtualization /></View>
    } else {
      return <View style={styles.zeroOrderBox}><Text style={styles.zeroOrder}>Sizin heç bir sifarişiniz yoxdur.</Text></View>
    }
  }

  render () {
    if (this.state.loading === true) {
      return <Spinner size='large' />
    }
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CallLogScreen)
