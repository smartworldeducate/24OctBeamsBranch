import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import colors from '../Styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
import Ficon from 'react-native-fontawesome-pro';

const InputBackground = ({
  style,
  dateText,
  dateFun,
  iconName,
  iconColor,
  onChange,
  onChangeText,
  placeholder,
  Value,
  placeholderColor,
  maxLength,
  keyboardType,
  multiline,
  onPressIn,
  autoFocus,
  onFocus,
  editable,
  secureTextEntry,
  returnKeyType,
  numberOfLines,
  ref,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={dateFun}
      style={{
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 0.16,
          justifyContent: 'center',
          alignItems: 'center',
          // paddingHorizontal: wp('1'),
          backgroundColor: '#FDEB13',
          borderRadius: wp('10'),
        }}>
        <Ficon type="light" name={iconName} color={iconColor} size={25} />
      </View>

      <View
        style={{
          flex: 0.7,
          height: hp('7'),
          justifyContent: 'center',
          paddingLeft: wp(1),
        }}>
        <View style={{justifyContent: 'center', marginTop: hp(3.5)}}>
          {dateText != '' ? (
            <Text>{dateText}</Text>
          ) : (
            <Text style={styles.inpText}>Tue, Jun 27, 2023</Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={dateFun}
        style={{
          flex: 0.14,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor:'red'
        }}>
        <Ficon type="light" name="angles-up-down" color="#cdcdcd" size={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default InputBackground;

const styles = EStyleSheet.create({
  zetext1: {
    fontSize: '0.72rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    color: '#343434',
    fontStyle: 'normal',
  },
  ztitle: {
    fontSize: hp(1.5),
    fontWeight: '600',
    marginTop: hp(1),
    fontFamily: fontFamily.ceraBlack,
  },
  textInputCustomStyle: {
    fontSize: hp('1.65'),
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('3'),
    color: colors.loginIconColor,
  },
  btc: {
    paddingLeft: hp(0.5),
    fontSize: hp(2),
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
  },
  inpText: {
    fontSize: '0.7rem',
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('2'),
    color: '#363636',
    fontWait: '500',
    fontFamily: fontFamily.ceraMedium,
  },
});
