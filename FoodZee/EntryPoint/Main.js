import {NavigationContainer} from '@react-navigation/native';
import LoginActivity from '../components/AuthFlow/LoginActivity';
import RegisterActivity from '../components/AuthFlow/RegisterActivity';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/Home/Home';
import {useEffect, useState} from 'react';
import BevContext from '../store/store';
import Util from '../components/Util/Util';
import AppCache from '../components/Util/AppCache';
import Loader from '../components/CommonUI/Loader';
import auth from '@react-native-firebase/auth';
import {store} from '../store';
import {Provider} from 'react-redux';
import SCREEN_NAME from '../components/Util/Constants';
import MenuSelection from '../components/Home/MenuSelection/MenuSelection';
const Stack = createNativeStackNavigator();

const Main = props => {
  const [stateOfApp, stateOfAppHandler] = useState('Login');

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    console.log(user);
    setUser(user);
    if (user?.email) {
      AppCache.user = user;
      loginSuccess();
    }
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const loginSuccess = () => {
    stateOfAppHandler('valid');
    // stateOfAppHandler('Login');
  };
  const logOut = async () => {
    await Util.removeUserToken();
    stateOfAppHandler('Login');
  };
  let initialState = {
    userToken: '',
    loginSuccess: loginSuccess,
    logOut: logOut,
  };
  return (
    <Provider store={store}>
      {initializing && <Loader loading={initializing}></Loader>}
      <BevContext.Provider value={initialState}>
        <NavigationContainer>
          {stateOfApp != 'valid' && (
            <Stack.Navigator>
              {stateOfApp == 'Login' && (
                <Stack.Group screenOptions={{headerShown: false}}>
                  <Stack.Screen name="Login" component={LoginActivity} />
                  <Stack.Screen name="Register" component={RegisterActivity} />
                </Stack.Group>
              )}
            </Stack.Navigator>
          )}
          {stateOfApp == 'valid' && (
            //  <Home></Home>
            <Stack.Navigator>
              <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name={SCREEN_NAME.Home} component={Home} />
                <Stack.Screen
                  name={SCREEN_NAME.menuSelection}
                  component={MenuSelection}
                />
              </Stack.Group>
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </BevContext.Provider>
    </Provider>
  );
};

export default Main;
