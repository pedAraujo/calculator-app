import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default props => {
  const buttonStyles = [styles.button];
  if (props.operation) buttonStyles.push(styles.operationButton);
  if (props.double) buttonStyles.push(styles.buttonDouble);
  if (props.triple) buttonStyles.push(styles.buttonTriple);

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={buttonStyles}>{props.label}</Text>
    </TouchableHighlight>
  );
};
