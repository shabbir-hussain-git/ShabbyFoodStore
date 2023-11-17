import {FlashList} from '@shopify/flash-list';
import {View} from 'react-native';
import Item from './Item';
import DIMEN from '../../../dimen/dimen';
import FDColor from '../../../Colors/FDColor';

const RestaurentActivity = () => {
  const resList = [
    {
      rId: 1,
      name: 'Homely',
      rating: 4.2,
      reviews: '(10k+)',
      estTime: '21 mins',
      address1: 'Home Food, North Indian super delicious',
      address2: 'Hitec City',
      estDist: '2.2 km',
    },
    {
      rId: 2,
      name: 'Taste of Italy',
      rating: 4.5,
      reviews: '(8k+)',
      estTime: '30 mins',
      address1: '123 Main Street',
      address2: 'Little Italy',
      estDist: '5.5 km',
    },
    {
      rId: 3,
      name: 'Sushi Haven',
      rating: 4.0,
      reviews: '(6k+)',
      estTime: '25 mins',
      address1: '456 Sushi Street',
      address2: 'Downtown',
      estDist: '3.0 km',
    },
    {
      rId: 4,
      name: 'Burger Barn',
      rating: 4.3,
      reviews: '(12k+)',
      estTime: '20 mins',
      address1: '789 Burger Avenue',
      address2: 'City Center',
      estDist: '1.8 km',
    },
    {
      rId: 5,
      name: 'Mediterranean Delight',
      rating: 4.7,
      reviews: '(9k+)',
      estTime: '35 mins',
      address1: '321 Olive Street',
      address2: 'Mediterranean Square',
      estDist: '6.3 km',
    },
    {
      rId: 6,
      name: 'Café de Paris',
      rating: 4.1,
      reviews: '(7k+)',
      estTime: '15 mins',
      address1: '101 French Lane',
      address2: 'Café District',
      estDist: '1.2 km',
    },
    {
      rId: 7,
      name: 'Mexican Fiesta',
      rating: 4.4,
      reviews: '(11k+)',
      estTime: '28 mins',
      address1: '567 Taco Avenue',
      address2: 'Fiesta Plaza',
      estDist: '4.7 km',
    },
    {
      rId: 8,
      name: 'Thai Spice House',
      rating: 4.6,
      reviews: '(10k+)',
      estTime: '22 mins',
      address1: '876 Thai Street',
      address2: 'Spice Town',
      estDist: '3.9 km',
    },
    {
      rId: 9,
      name: 'Sizzle Steakhouse',
      rating: 4.0,
      reviews: '(5k+)',
      estTime: '40 mins',
      address1: '234 Grill Road',
      address2: 'Steak Square',
      estDist: '7.1 km',
    },
  ];
  const showItem = ({item, index}) => {
    return <Item ele={item} key={index} />;
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: DIMEN.marginMedium,
        backgroundColor: FDColor.gray7,
      }}>
      <FlashList renderItem={showItem} estimatedItemSize={90} data={resList} />
    </View>
  );
};

export default RestaurentActivity;
