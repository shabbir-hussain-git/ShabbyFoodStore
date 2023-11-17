import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import FDColor from '../../Colors/FDColor';
import DIMEN from '../../dimen/dimen';
import BevBtn from '../CommonUI/BevBtn';
import InputWithText from '../CommonUI/InputWithText';
import {useState, useContext, useEffect} from 'react';
import Services from '../Util/Services';
import Loader from '../CommonUI/Loader';
import BevContext from '../../store/store';
import Util from '../Util/Util';
import {useNavigation} from '@react-navigation/native';
import SCREEN_NAME from '../Util/Constants';
import auth from '@react-native-firebase/auth';
import AppCache from '../Util/AppCache';

const LoginActivity = props => {
  const navigation = useNavigation();

  const ctx = useContext(BevContext);
  const [loading, loadingHandler] = useState(false);
  const [email, emailHandler] = useState('');
  const [password, passwordHandler] = useState('');

  const doLogin = async () => {
    let emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (email == '' && !email.match(emailFormat)) {
      Alert.alert('', 'Please enter a valid Email Id.');
      return;
    }
    if (password == '') {
      Alert.alert('', 'Please enter a valid Password.');
      return;
    }
    loadingHandler(true);
    // let loginResult = await Services.doLogin(email, password, null);
    try {
      let loginResult = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
    } catch (error) {
      Alert.alert('', error.code);
    }
    loadingHandler(false);
  };

  const takeMeToReg = () => {
    navigation.navigate(SCREEN_NAME.Register);
  };
  return (
    <>
      <View style={styles.container}>
        {loading && <Loader loading={loading}></Loader>}
        <View style={styles.imageSection}>
          {/* <Image style={styles.imageStyle} source={BevLogo} /> */}

          <View>
            <Text style={styles.titleText}>Login-1</Text>
          </View>
        </View>
        <View style={styles.contentSection}>
          <View style={styles.inputSection}>
            <InputWithText
              value={email}
              onChangeText={emailHandler}
              secureTextEntry={false}
              keyboardType="email-address"
              label="Email address"
              placeholder="Enter your email address"></InputWithText>
          </View>
          <View style={styles.inputSection}>
            <InputWithText
              value={password}
              onChangeText={passwordHandler}
              secureTextEntry={true}
              label="Password"
              placeholder="Enter a password"></InputWithText>
            <Text style={[styles.forgetPassword]}>Forget Password?</Text>
          </View>
          <View style={styles.inputSection}>
            <BevBtn buttonName="Login" onBtnPress={doLogin}></BevBtn>
            <View style={styles.paddingTopBottom}>
              <Text style={[styles.register]}>
                Don't have an account?{' '}
                <Text onPress={takeMeToReg} style={styles.forgetPassword}>
                  Register for free
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: FDColor.black,
  },
  forgetPassword: {
    fontSize: DIMEN.size16,
    color: FDColor.blue100,
    textAlign: 'right',
  },
  alignRight: {},
  register: {
    fontSize: DIMEN.size16,
    color: FDColor.white,
    textAlign: 'center',
  },
  paddingTopBottom: {
    paddingVertical: DIMEN.marginMedium,
  },
  titleText: {
    fontSize: DIMEN.size24,
    color: FDColor.white,
    fontFamily: 'HelveticaNeueLTStd-Bd',
  },
  inputSection: {
    marginHorizontal: DIMEN.size20,
    marginVertical: DIMEN.marginMedium,
  },
  imageStyle: {
    height: 60,
    width: '100%',
    resizeMode: 'contain',
  },
  imageSection: {
    marginHorizontal: '10%',
    flex: 1.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentSection: {
    flex: 6.5,
  },
});

export default LoginActivity;
