import {FlashList} from '@shopify/flash-list';
import {ActivityIndicator, View} from 'react-native';
import Item from './Item';
import DIMEN from '../../../dimen/dimen';
import FDColor from '../../../Colors/FDColor';
import BBXHeader from '../CommonComp/BBXHeader';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import BevBtn from '../../CommonUI/BevBtn';
import SCREEN_NAME from '../../Util/Constants';
import {useEffect, useState} from 'react';
// import Loader from '../../CommonUI/Loader';
// import Loader from '../../CommonUI/Loader';

// code for fast render
let ExpComp = null;

// code for slow render
// import SuperHeavyMenu from './SuperHeavyMenu';
// let ExpComp = SuperHeavyMenu;

const MenuSelection = () => {
  const navigation = useNavigation();

  const [mountExp, mountExpHandler] = useState(ExpComp == null ? false : true);

  console.log('mountExp ', mountExp);
  useEffect(() => {
    if (ExpComp == null) {
      ExpComp = require('./SuperHeavyMenu').default;
      mountExpHandler(true);
    }
    return () => {
      mountExpHandler(false);
      ExpComp = null;
    };
  }, []);
  return (
    <>
      <BBXHeader navigation={navigation} title="Menu Selection">
        {!mountExp && <ActivityIndicator size="large" />}
      </BBXHeader>
      {mountExp && <ExpComp />}
    </>
  );
};

export default MenuSelection;
