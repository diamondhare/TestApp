import { StyleSheet, useWindowDimensions, View } from 'react-native';
import ArrowComponent from "../icons/arrowIcon"
import SettingsIcon from '../icons/settingsIcon'
import React from 'react';


    
export default function Header() {
    const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
    <ArrowComponent width={width*0.1} height={height*0.1} />
    <SettingsIcon width={width*0.1} height={height*0.1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
