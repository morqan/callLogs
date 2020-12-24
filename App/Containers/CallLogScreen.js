import React, { Component } from 'react'
import { Text, View, FlatList, Image, Linking, TouchableOpacity, BackHandler } from 'react-native'
import { connect } from 'react-redux'
import Spinner from '../Components/Spinner'
import UserAvatar from 'react-native-user-avatar';
import { PermissionsAndroid } from 'react-native';
import CallLogs from 'react-native-call-log'
import { Images } from '../Themes'
import {RectButton} from "react-native-gesture-handler";
import Modal from 'react-native-modal';
import PhoneInput from 'react-native-phone-input'
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
      isModalVisible: false,
      newPhone: ''
    }
  }

  componentDidMount = async () => {
    const {navigation} = this.props;
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
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    navigation.addListener ('willFocus', () =>{
      // do whatever you want to do when focused
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    });

  }

  componentWillUnmount() {
    // this.closeApp.remove();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    console.log('componentWillUnmount')
  }

  handleBackButton = () =>{
    //add your code
    console.log(this.props.navigation.isFocused(), 'test')
    let { routeName } = this.props.navigation.state;
    const {isModalVisible} = this.state
    console.log(routeName)
    BackHandler.exitApp();
    return true;
  };

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
            {/*<Image source={Images.whatsAppLogo} style={styles.mediumLogo} />*/}
          </View>
        </View>

    )
  };

  renderFlatList = () => {
    const {data} = this.state
    if (data.length !== 0) {
      return (
          <View>
            <FlatList
            renderItem={this.renderOrdersItem}
            keyExtractor={(item, index) => index.toString()}
            // onScrollEndDrag={this.getNextItems}
            data={data} disableVirtualization
            ListFooterComponent={<View style={{ height: 0, marginBottom: 90 }}></View>}/>
        </View>
    ) } else {
      return <View style={styles.zeroOrderBox}><Text style={styles.zeroOrder}>Sizin heç bir sifarişiniz yoxdur.</Text></View>
    }
  }

  onChangePhoneNumber = () => {
    this.setState({
      countryCode: this.phone.getCountryCode(),
      newPhone: this.phone.getValue()
    })
  }

  openModal = () => {
    this.setState({
      isModalVisible: true
    })
  }
  goToWhatsApp = () => {
    const {newPhone} = this.state
    console.log(newPhone)
    this.setState({
      isModalVisible: !this.state.isModalVisible,

    })

    Linking.openURL(`https://wa.me/${newPhone}`)
  }
  render () {
    const {isModalVisible, loading, newPhone} = this.state
    if (loading) {
      return <Spinner size='large' />
    }
    return (
      <View style={styles.container}>
        {this.renderFlatList()}
        <View style={styles.addBtnBox}>
          <RectButton style={styles.addBtn} onPress={this.openModal}>
            <View accessible>
              <Text style={styles.addBtnText}>+</Text>
            </View>
          </RectButton>
        </View>
        <Modal isVisible={isModalVisible}
               onBackdropPress={() => {
                 this.setState({isModalVisible: !this.state.isModalVisible})
               }}
               onBackButtonPress={() => {
                 this.setState({isModalVisible: !this.state.isModalVisible})
               }}
        >
          <View style={styles.modalBox}>
            <PhoneInput
              onChangePhoneNumber={this.onChangePhoneNumber} initialCountry='az' flagStyle={{borderRadius: 10}}
              value={newPhone} style={styles.phoneInput} ref={ref => { this.phone = ref }} />
            {/*<RectButton style={styles.addBtn} onPress={this.goToWhatsApp}>*/}
            {/*  <View accessible>*/}
            {/*    <Text style={styles.addBtnText}>wh</Text>*/}
            {/*  </View>*/}
            {/*</RectButton>*/}


            <TouchableOpacity style={styles.whAppBtn} activeOpacity={0.5} onPress={this.goToWhatsApp}>
              <Image source={Images.whatsAppLogo}
                     style={styles.whaAppWhite} />
            </TouchableOpacity>
          </View>
        </Modal>
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
