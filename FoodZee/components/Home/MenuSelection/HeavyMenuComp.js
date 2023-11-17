import {FlashList} from '@shopify/flash-list';
import {View, Text} from 'react-native';
import Item from './Item';
import DIMEN from '../../../dimen/dimen';
import FDColor from '../../../Colors/FDColor';
import BBXHeader from '../CommonComp/BBXHeader';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import BevBtn from '../../CommonUI/BevBtn';
import SCREEN_NAME from '../../Util/Constants';

const HeavyMenuComp = () => {
  const value = useSelector(state => state.order.value);

  const navigation = useNavigation();

  const resList = [
    {
      rId: 1,
      name: 'Biryani',
      price: 20,
    },
    {
      rId: 2,
      name: 'Veg Biryani',
      price: 40,
    },
  ];
  const showItem = ({item, index}) => {
    return <Item ele={item} key={index} />;
  };

  const goToCheckOut = () => {
    navigation.navigate(SCREEN_NAME.checkoutTab);
  };
  return (
    <View
      style={{
        paddingTop: DIMEN.marginMedium,
        backgroundColor: FDColor.gray7,
        flex: 1,
      }}>
      {/* <FlashList renderItem={showItem} estimatedItemSize={90} data={resList} /> */}
      {resList.map((ele, index) => {
        return showItem({item: ele, index});
      })}
      {value > 0 && (
        <BevBtn onBtnPress={goToCheckOut} buttonName="CheckOut"></BevBtn>
      )}
    </View>
  );
};

export default HeavyMenuComp;
