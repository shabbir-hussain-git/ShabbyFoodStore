import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import FoodTemp from '../../../Images/biryani.jpeg';
import DIMEN from '../../../dimen/dimen';
import FDColor from '../../../Colors/FDColor';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SCREEN_NAME from '../../Util/Constants';

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../../slice/orderSlice';

const Item = ({ele}) => {
  const orderData = useSelector(state => state.order);
  // console.log(orderData);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const [quantity, quantityHandler] = useState(0);
  const quantity = orderData.orderMap[ele.rId]?.length || 0;
  const increaseQuantity = () => {
    // quantityHandler(prev => ++prev);
    dispatch(increment(ele));
  };
  const decreaseQuantity = () => {
    if (quantity > 0) {
      dispatch(decrement(ele));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sec1}>
        <Image style={styles.imgStyle} source={FoodTemp} />
      </View>
      <View style={styles.sec2}>
        <View>
          <Text style={styles.nameStyle}>{ele.name}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Pressable onPress={increaseQuantity} style={styles.addBtn}>
            {quantity > 0 && (
              <Pressable onPress={decreaseQuantity}>
                <Icon name="minus" size={20} color="#fff" />
              </Pressable>
            )}
            <Text>Add</Text>
          </Pressable>
          {/* {quantity > 0 && (
            <Pressable onPress={goToCheckOut} style={styles.addBtn}>
              <Text>CheckOut</Text>
            </Pressable>
          )} */}
        </View>

        {quantity > 0 && (
          <View>
            <Text style={styles.nameStyle}>
              {quantity} * {ele.price} = {quantity * ele.price}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'gray',
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: DIMEN.marginMedium,
    marginBottom: 10,
  },
  imgStyle: {
    height: 120,
    width: 'auto',
    borderTopLeftRadius: DIMEN.marginMedium,
    borderBottomLeftRadius: DIMEN.marginMedium,
  },
  sec1: {
    flex: 1.5,
    borderTopLeftRadius: DIMEN.marginMedium,
    borderBottomLeftRadius: DIMEN.marginMedium,
  },
  sec2: {
    paddingTop: DIMEN.marginSmall,
    flex: 2,
    backgroundColor: FDColor.white,
    paddingStart: DIMEN.marginMedium,
    gap: DIMEN.marginSmall * 3,
    borderTopRightRadius: DIMEN.marginMedium,
    borderBottomRightRadius: DIMEN.marginMedium,
  },
  nameStyle: {
    fontSize: DIMEN.size20,
    color: FDColor.black,
    fontWeight: 'bold',
  },
  addBtn: {
    backgroundColor: 'pink',
    width: DIMEN.size85,
    height: DIMEN.size30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export default Item;
