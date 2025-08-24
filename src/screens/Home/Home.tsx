import react from "react";
import {Text, View} from "react-native";
import styles from "./Styles"
import React from "react";
import { HulkLogo } from "../../componets/HulkLogo/HulkLogo";
import { HulkTextInput } from "../../componets/HulkTextInput/HulkTextInput";
import { StatusBar } from "expo-status-bar";
import { HulkButton } from "../../componets/HulkButton/HulkButton";

export default function Home () {
  return(
    <View style={styles.appcontainer}>
      <View style={styles.logoContainer}>
        <HulkLogo/>
      </View>

      <View style={styles.inputContainer}>
        <HulkButton />
      </View>

      <StatusBar style="light" />
    </View>
  )
}

