import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from 'react';
import PenComponent from "../icons/penIcon";

export default function ProfilePic() {
  return (
    <View style={styles.profilePicContainer}>
      <View style={styles.profilePic}>
        <TouchableOpacity style={styles.editIconContainer}>
            <View style={styles.penIcon}>
            <PenComponent width={32} height={32} />
            </View>
        </TouchableOpacity>
      </View>


      <Text style={styles.nameText}>GFXAgency</Text>
      <Text style={styles.subtitleText}>Designer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    profilePicContainer: {
        alignItems: 'center',
        marginVertical: "10%",
    },
    profilePic: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'gray',
  },
    editIconContainer: {
        position: 'absolute',
        bottom: 4,
        right: 0,
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    penIcon: {
        left: 6,
        top: 6,
    },
    nameText: {
        marginTop: 24,
        fontSize: 36,
        fontWeight: '700',
    },
    subtitleText: {
        fontSize: 16,
        color: 'gray',
    }
})
