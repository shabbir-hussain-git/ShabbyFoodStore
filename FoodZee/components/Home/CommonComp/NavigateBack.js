import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FDColor from '../../../Colors/FDColor';
import DIMEN from '../../../dimen/dimen';

const NavigateBack = props => {
  const goBack = () => {
    if (props.navigation) {
      props.navigation.goBack();
    }
  };
  return (
    <Pressable onPress={goBack}>
      <View style={styles.container}>
        <View>
          <Icon name="left" size={25} color="#fff" />
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: DIMEN.size16,
    gap: DIMEN.marginSmall,
    height: '100%',
  },
  text: {
    color: FDColor.white,
    fontSize: DIMEN.size16,
  },
});
export default NavigateBack;
