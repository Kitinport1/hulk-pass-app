import React, { useState } from 'react';
import { Button, View, Text, Pressable} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './HulkButtonStyle';
import { HulkTextInput } from '../HulkTextInput/HulkTextInput';
import generatePass from '../../services/passwordServices';

export function HulkButton() {
  const [pass, setPass] = useState('')

  function handleGenerateButton() {
    let generateToken  = generatePass()
    setPass(generateToken)
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  return (
      <>
      <HulkTextInput pass={pass}/>
      
      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>👊 COPY</Text>
      </Pressable>

    </>
  );
}