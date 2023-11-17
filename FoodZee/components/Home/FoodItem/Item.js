import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import FoodTemp from '../../../Images/food.webp';
import DIMEN from '../../../dimen/dimen';
import FDColor from '../../../Colors/FDColor';
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = ({ele, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.sec1}>
        <Image style={styles.imgStyle} source={FoodTemp} />
      </View>
      <View style={styles.sec2}>
        <View>
          <Text style={styles.nameStyle}>{ele.name}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.st2}>{ele.rating}</Text>
          <Text style={styles.st2}>{ele.reviews}</Text>
        </View>
        {/* <View>
          <Text style={styles.st3} numberOfLines={1}>
            {ele.address1}
          </Text>
        </View> */}
        <View style={styles.v1}>
          {/* <Text style={styles.st3}>{ele.address2}</Text> */}
          {/* <Icon name="circle" size={10} color={FDColor.gray7} /> */}
          <Text style={styles.st3}>{ele.estDist}</Text>
        </View>
      </View>
    </Pressable>
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
    gap: DIMEN.marginSmall * 4,
    borderTopRightRadius: DIMEN.marginMedium,
    borderBottomRightRadius: DIMEN.marginMedium,
  },
  nameStyle: {
    fontSize: DIMEN.size20,
    color: FDColor.black,
    fontWeight: 'bold',
  },
  st2: {
    fontSize: DIMEN.size15,
    color: FDColor.black,
    fontWeight: 'bold',
  },
  st3: {
    fontSize: DIMEN.size15,
    color: FDColor.gray7,
  },
  v1: {
    flexDirection: 'row',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default Item;
