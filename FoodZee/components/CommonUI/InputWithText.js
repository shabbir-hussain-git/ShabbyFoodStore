import {View, TextInput, Text, StyleSheet, Pressable} from 'react-native';
import {useState} from 'react';
import FDColor from '../../Colors/FDColor';
import DIMEN from '../../dimen/dimen';
import Eye from '../../Images/eye.svg';
import EyeOpen from '../../Images/eyeopen.svg';

const InputWithText = props => {
  const keyboardType = props.keyboardType ? props.keyboardType : 'default';
  const secureTextEntry = props.secureTextEntry ? true : false;

  const [showPass, showPassHandler] = useState(false);

  const passwordDisplayToggle = () => {
    showPassHandler(prev => !prev);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{props.label}</Text>
        </View>
        <View style={styles.inputBorder}>
          <TextInput
            onChangeText={props.onChangeText}
            value={props.text}
            placeholder={props.placeholder}
            placeholderTextColor={FDColor.textHintColor}
            style={styles.textInputStyle}
            secureTextEntry={!secureTextEntry ? false : !showPass}
            keyboardType={keyboardType}></TextInput>
          {secureTextEntry && (
            <Pressable onPress={passwordDisplayToggle}>
              <View style={styles.eyeStyle}>
                {!showPass && <Eye width={20} height={20}></Eye>}
                {showPass && <EyeOpen width={20} height={20}></EyeOpen>}
              </View>
            </Pressable>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  eyeStyle: {
    paddingEnd: 10,
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: FDColor.gray1,
    borderRadius: DIMEN.radiusSmall,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 5,
  },
  textStyle: {
    color: FDColor.white,
    fontSize: DIMEN.size18,
  },
  textInputStyle: {
    color: FDColor.white,
    fontSize: DIMEN.size16,
    paddingHorizontal: DIMEN.marginMedium,
    height: 48,
    flex: 1,
  },
});

export default InputWithText;
