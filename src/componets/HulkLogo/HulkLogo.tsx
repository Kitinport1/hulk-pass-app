import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './HulkLogoStyles';
import  hulkLogo from '../../../assets/hulk-logo.png'

export function HulkLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HULK PASS GERENRATION</Text>
      <Image 
        source={hulkLogo} 
        style={styles.logo}
        accessibilityLabel="Logo do Hulk"
      />
    </View>
  );
}