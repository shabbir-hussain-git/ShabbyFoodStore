import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import FDColor from '../../Colors/FDColor';
import DIMEN from '../../dimen/dimen';
import BevBtn from '../CommonUI/BevBtn';
import InputWithText from '../CommonUI/InputWithText';
import {useState} from 'react';
import Services from '../Util/Services';
import {useNavigation} from '@react-navigation/native';
import SCREEN_NAME from '../Util/Constants';
import auth from '@react-native-firebase/auth';
import Loader from '../CommonUI/Loader';

const RegisterActivity = props => {
  const [email, emailHandler] = useState('');
  const [password, passwordHandler] = useState('');
  const [loading, loadingHandler] = useState(false);
  const navigation = useNavigation();
  const doLogin = async () => {
    loadingHandler(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        loadingHandler(false);
      })
      .catch(error => {
        loadingHandler(false);
        Alert.alert('', error.code);
        // if (error.code === 'auth/email-already-in-use') {
        //   console.log('That email address is already in use!');
        // }

        // if (error.code === 'auth/invalid-email') {
        //   console.log('That email address is invalid!');
        // }
      });
  };

  const takeMeToLogin = () => {
    navigation.navigate(SCREEN_NAME.Login);
  };
  return (
    <>
      {loading && <Loader></Loader>}
      <View style={styles.container}>
        <View style={styles.imageSection}>
          {/* <Image style={styles.imageStyle} source={BevLogo} /> */}

          <View>
            <Text style={styles.titleText}>Register</Text>
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
          </View>
          <View style={styles.inputSection}>
            <BevBtn buttonName="Register" onBtnPress={doLogin}></BevBtn>
            <View style={styles.paddingTopBottom}>
              <Text onPress={takeMeToLogin} style={[styles.register]}>
                Already have an account?{' '}
                <Text style={styles.forgetPassword}>Login</Text>
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

export default RegisterActivity;
