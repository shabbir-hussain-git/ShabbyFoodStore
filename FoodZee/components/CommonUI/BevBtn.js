import {View, Text, StyleSheet, Pressable} from 'react-native';
import FDColor from '../../Colors/FDColor';
import DIMEN from '../../dimen/dimen';

const BevBtn = props => {
  return (
    <>
      <Pressable style={[styles.container]} onPress={props.onBtnPress}>
        <View style={styles.btnStyle}>
          <Text style={styles.textStyle}>{props.buttonName}</Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  btnStyle: {
    backgroundColor: FDColor.blue200,
    borderColor: FDColor.btnRadiusColor,
    borderWidth: 1,
    borderRadius: DIMEN.radiusSmall,
    height: DIMEN.btnHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: DIMEN.size18,
    color: FDColor.white,
    fontWeight: 'bold',
  },
});

export default BevBtn;
