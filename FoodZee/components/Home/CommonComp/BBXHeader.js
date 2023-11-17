import {
  StyleSheet,
  View,
  Pressable,
  BackHandler,
  Alert,
  Text,
} from 'react-native';
import NavigateBack from './NavigateBack';
import {useEffect} from 'react';
import FDColor from '../../../Colors/FDColor';
import DIMEN from '../../../dimen/dimen';
import Util from '../../Util/Util';

const BBXHeader = ({
  navigation,
  title,
  btnRight,
  btnRightAction,
  titleStyle = {},
  children,
}) => {
  let bannerStyle = [styles.button, styles.buttonOpen];
  if (Util.isIOS()) {
    bannerStyle.push(styles.buttonIOS);
  }
  useEffect(() => {
    const backAction = () => {
      // navigation.goBack();
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  let size = {fontSize: DIMEN.size20};
  if (title.length > 32) {
    size = {fontSize: DIMEN.size18};
  }
  return (
    <View style={[bannerStyle]}>
      <View style={styles.btnLeft}>
        {navigation && <NavigateBack navigation={navigation}></NavigateBack>}
      </View>
      <View style={styles.title}>
        <Text style={[styles.titleStyle, size, titleStyle]}>{title}</Text>
        {children}
      </View>
      <View style={styles.btnRight}>{btnRight}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnLeft: {
    flex: 1.2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingStart: 2,
    // backgroundColor: 'green',
  },
  titleStyle: {
    color: FDColor.white,
    lineHeight: 30,
    fontWeight: 'bold',
  },
  btnRight: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'row',
    gap: DIMEN.marginMedium,
  },
  button: {
    elevation: 2,
    height: DIMEN.headerHeight,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  buttonOpen: {
    backgroundColor: FDColor.blackPrimary,
    paddingStart: 5,
    alignItems: 'center',
  },
  buttonIOS: {
    height: DIMEN.headerHeightIOS,
  },
  menuView: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BBXHeader;
