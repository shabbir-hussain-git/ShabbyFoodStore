import {Text, StyleSheet, View, Pressable} from 'react-native';
import BBXHeader from '../CommonComp/BBXHeader';
import {useSelector} from 'react-redux';
import FDColor from '../../../Colors/FDColor';
import DIMEN from '../../../dimen/dimen';
import Icon from 'react-native-vector-icons/FontAwesome';
import BevBtn from '../../CommonUI/BevBtn';

const CheckoutTab = () => {
  const order = useSelector(state => state.order);
  // console.log('order', order);
  // console.log(JSON.stringify(order));
  // const order = {
  //   value: 4,
  //   orderMap: {
  //     1: [
  //       {rId: 1, name: 'Biryani', price: 20},
  //       {rId: 1, name: 'Biryani', price: 20},
  //     ],
  //     2: [
  //       {rId: 2, name: 'Veg Biryani', price: 40},
  //       {rId: 2, name: 'Veg Biryani', price: 40},
  //     ],
  //   },
  // };
  const orderArr = [];
  let i = 0;
  for (let ele in order.orderMap) {
    console.log('ele ', ele);
    let t = order.orderMap[ele];
    let map = {
      name: '',
      totalQuantity: 0,
      totalPrice: 0,
    };
    if (t.length > 0) {
      map.name = t[0].name;
      map.totalQuantity = t.length;
      map.totalPrice = map.totalQuantity * t[0].price;
    }
    orderArr.push(
      <View style={styles.orderView} key={i}>
        <View style={styles.h1}>
          <Text style={styles.nameStyle}>{map.name}</Text>
          <Text style={styles.priceStyle}>Rupee: {map.totalPrice}</Text>
        </View>

        <View style={styles.h2}>
          <Pressable onPress={() => {}} style={styles.addBtn}>
            <Pressable>
              <Icon name="minus" size={20} color="#fff" />
            </Pressable>

            <Text>{map.totalQuantity}</Text>
            <Pressable>
              <Icon name="plus" size={20} color="#fff" />
            </Pressable>
          </Pressable>
          {/* <Text>{map.totalPrice}</Text> */}
        </View>
      </View>,
    );
    i++;
  }
  const doPayment = () => {};
  return (
    <>
      <BBXHeader title="Checkout" />
      <View style={styles.container}>
        <View style={styles.orderSection}>{orderArr}</View>
        <BevBtn onBtnPress={doPayment} buttonName="Proceed To Order"></BevBtn>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FDColor.gray7,
  },
  orderSection: {
    backgroundColor: FDColor.white,
    minHeight: 200,
    margin: DIMEN.marginMedium,
    borderRadius: DIMEN.marginMedium,
    gap: 10,
  },
  orderView: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  nameStyle: {
    fontSize: DIMEN.size20,
    color: FDColor.black,
    fontWeight: 'bold',
  },
  priceStyle: {
    fontSize: DIMEN.size18,
    color: FDColor.black,
  },
  h1: {
    flex: 1,
  },
  h2: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-end',
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

export default CheckoutTab;
