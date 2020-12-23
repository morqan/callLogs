import { StyleSheet, Dimensions } from 'react-native'
import {ApplicationStyles, Metrics} from '../../Themes/'
const {width} = Dimensions.get('window')
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  zeroOrderBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  zeroOrder: {
    fontSize: width * 0.06
  },
  orderContainer: {
    backgroundColor: '#fff',

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 0
    // },
    // shadowOpacity: 0.28,
    // shadowRadius: 1.00,
    // elevation: 2,

  },
  orderBox: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    paddingVertical: width * 0.05,
    marginHorizontal: width * 0.04,
  },
  callInfo: {
    marginHorizontal: width * 0.04,
  },
  callStatusBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderTitle: {
    fontSize: width * 0.06,
    fontWeight: '600',
    marginBottom: width * 0.01,
  },
  callDate: {
    fontSize: width * 0.04,
    color: '#696969',
    // marginHorizontal: width * 0.04,
  },
  mediumTM: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: width * 0.02
  },
  orderStatus: {
    fontSize: width * 0.04,
    color: '#32CD32',
    fontWeight: '700',
  },
  mediumLogo: {
    height: width * 0.09,
    width: width * 0.09,
    resizeMode: 'contain'
  }
})
