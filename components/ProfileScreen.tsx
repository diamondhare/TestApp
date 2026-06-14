import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import ProfilePic from './ProfilePic';
import InputForms from './Input';
import LogOutButton from './LogOutButton';

export default function ProfileScreen () {
  return (
    <View style={styles.profileContainer}>
      <Header />
      <ProfilePic />
      <InputForms />
      <LogOutButton />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    width: '100%',
  }
});
