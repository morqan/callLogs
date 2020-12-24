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
  },
  addBtnBox: {
    backgroundColor: '#1e88e5',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: width * 0.18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addBtn: {
    backgroundColor: '#fff',
    borderRadius: 100,
    height: width * 0.15,
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width * 0.15,

  },
  addBtnText: {
    fontSize: width * 0.1,
    fontWeight: '900',
    marginBottom: 5,
    color: '#1e88e5',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: width * 0.08,
    borderRadius: 10
  },
  phoneInput: {
    fontSize: width * 0.037,
    width: '100%',
    backgroundColor: '#f4f6f8',
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.04,
    borderRadius: 10
  },
  whaAppWhite: {
    height: width * 0.09,
    width: width * 0.09,
    resizeMode: 'contain'
  },
  whAppBtn: {
    backgroundColor: '#25d366',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: width * 0.04,
    paddingVertical: width * 0.04,
    borderRadius: 10
  }
})
