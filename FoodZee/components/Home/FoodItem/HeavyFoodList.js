import {FlashList} from '@shopify/flash-list';
import {View} from 'react-native';
import Item from './Item';
import DIMEN from '../../../dimen/dimen';
import FDColor from '../../../Colors/FDColor';
import {useNavigation} from '@react-navigation/native';
import SCREEN_NAME from '../../Util/Constants';

const HeavyFoodList = () => {
  const navigation = useNavigation();

  const resList = [
    {
      rId: 1,
      name: 'Asian',
      rating: 4.2,
      reviews: '(10k+)',
      estTime: '25 - 30m',
      address1: 'Home Food, North Indian super delicious',
      address2: 'Hitec City',
      estDist: '25 - 30m',
    },
  ];
  const showItem = (item, index) => {
    return <Item onPress={openMenuSelection} ele={item} key={index} />;
  };

  const openMenuSelection = item => {
    // console.log(item);
    navigation.navigate(SCREEN_NAME.menuSelection);
  };

  return (
    // <FlashList renderItem={showItem} estimatedItemSize={90} data={resList} />
    <>
      {resList.map((ele, index) => {
        return showItem(ele, index);
      })}
    </>
  );
};

export default HeavyFoodList;
