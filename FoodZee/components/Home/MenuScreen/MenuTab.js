import {ActivityIndicator, View} from 'react-native';
import BBXHeader from '../CommonComp/BBXHeader';
import {useEffect, useState} from 'react';
import DIMEN from '../../../dimen/dimen';
import FDColor from '../../../Colors/FDColor';

// uncomment for fast rendering
let FoodItemExp = null;

// uncomment for slow rendering
// import FoodItemActivity from '../FoodItem/FoodItemActivity';
// let FoodItemExp = FoodItemActivity;

const MenuTab = () => {
  const [showExp, showExpHandler] = useState(
    FoodItemExp == null ? false : true,
  );

  useEffect(() => {
    if (FoodItemExp == null) {
      FoodItemExp = require('../FoodItem/FoodItemActivity').default;
    }
    showExpHandler(true);
    return () => {
      FoodItemExp = null;
      showExpHandler(false);
    };
  }, []);
  return (
    <>
      <BBXHeader title="Menu">
        {!showExp && <ActivityIndicator size="large" />}
      </BBXHeader>
      <View
        style={{
          flex: 1,
          paddingTop: DIMEN.marginMedium,
          backgroundColor: FDColor.gray7,
        }}>
        {showExp && <FoodItemExp />}
      </View>
    </>
  );
};

export default MenuTab;
