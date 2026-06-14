import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function LogOutButton () {
  return (
    <TouchableOpacity style={styles.LogOutContainer}>
      <Text style={styles.LogOutText}>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    LogOutContainer: {
        marginTop: 24,
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 12,
        paddingVertical: 20,
        alignItems: 'center',
    },
    LogOutText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
    }
})