import {View, ScrollView} from 'react-native';
import HeavyMenuComp from './HeavyMenuComp';

const SuperHeavyMenu = () => {
  let no = 1000;
  let arr = [];
  for (let index = 0; index < no; index++) {
    arr.push(<HeavyMenuComp key={index} />);
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'blue'}}>{arr}</ScrollView>
  );
};

export default SuperHeavyMenu;
