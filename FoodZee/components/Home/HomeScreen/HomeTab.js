import {Text, View} from 'react-native';
import BBXHeader from '../CommonComp/BBXHeader';
import auth from '@react-native-firebase/auth';
import BevBtn from '../../CommonUI/BevBtn';

import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../../slice/orderSlice';
import RestaurentActivity from '../Restaurent/RestaurentActivity';
import DIMEN from '../../../dimen/dimen';

const HomeTab = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.order.value);

  const signOut = () => {
    dispatch(increment());
    // auth()
    //   .signOut()
    //   .then(() => console.log('User signed out!'));
  };

  return (
    <>
      <BBXHeader title="Home" />
      {/* <Text>I am HomeScreen2-{count}</Text>
      <BevBtn onBtnPress={signOut} buttonName="SignOut"></BevBtn> */}
      <RestaurentActivity></RestaurentActivity>
    </>
  );
};

export default HomeTab;
