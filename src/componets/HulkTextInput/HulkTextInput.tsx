import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './HulkTextInputStyle';

interface HulkTextInputProps {
  pass:string
}

export function HulkTextInput(props : HulkTextInputProps) { 
  return (
    <TextInput 
      style={styles.inputer}
      placeholder='pass'
      value={props.pass}
    />
  );
}