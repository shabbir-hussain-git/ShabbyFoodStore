import {FlashList} from '@shopify/flash-list';
import {View, ScrollView} from 'react-native';
import Item from './Item';
import DIMEN from '../../../dimen/dimen';
import FDColor from '../../../Colors/FDColor';
import {useNavigation} from '@react-navigation/native';
import SCREEN_NAME from '../../Util/Constants';
import HeavyFoodList from './HeavyFoodList';
import {useEffect, useState} from 'react';
import Loader from '../../CommonUI/Loader';

const FoodItemActivity = () => {
  // uncomment for heavy load
  let heavyView = [];
  for (let index = 0; index < 500; index++) {
    heavyView.push(<HeavyFoodList key={index} />);
  }

  // uncomment for fast load
  // const [heavyView, heavyViewHandler] = useState([]);

  // const [showLoader, showLoaderHandler] = useState(true);

  // useEffect(() => {
  //   let temp = [];
  //   for (let index = 0; index < 500; index++) {
  //     temp.push(<HeavyFoodList key={index} />);
  //   }
  //   showLoaderHandler(false);
  //   heavyViewHandler(temp);
  // }, []);
  return (
    <>
      {/* {showLoader && <Loader />} */}
      <ScrollView
        style={{
          flex: 1,
          paddingTop: DIMEN.marginMedium,
          backgroundColor: FDColor.gray7,
        }}>
        {heavyView}
      </ScrollView>
    </>
  );
};

export default FoodItemActivity;

{
  /* <FlashList renderItem={showItem} estimatedItemSize={90} data={resList} /> */
}
