import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import EmailComponent from "../icons/emailIcon";
import PhoneComponent from "../icons/phoneIcon";
import LockComponent from "../icons/lockIcon";
import EyeComponent from "../icons/eyeIcon";
export default function InputForms() {
    return (
        <View>
            <Text style={styles.textLabel}>Your Email</Text>
            <View style={styles.InputContainer}>
            <EmailComponent width={24} height={24} />
            <TextInput style={styles.input} placeholder="xxx@gmail.com"/>
            </View>
            <Text style={styles.textLabel}>Phone number</Text>
            <View style={styles.InputContainer}>
            <PhoneComponent width={24} height={24} />
            <TextInput style={styles.input} placeholder="+88003553535"/>
            </View>
            <Text style={styles.textLabel}>Website</Text>
            <View style={styles.InputContainer}>
            <TextInput style={styles.input} placeholder="www.github.com"/>
            </View>
            <Text style={styles.textLabel}>Password</Text>
            <View style={styles.InputContainer}>
            <LockComponent width={24} height={24} />
            <TextInput style={styles.input} placeholder="xxx@gmail.com" secureTextEntry/>
            <EyeComponent width={24} height={24} />
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    input: {flex: 1, paddingVertical: 0,},
    InputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 16,
        paddingHorizontal: 16,
        height: 56,
    },
    textLabel: {
        paddingVertical: 12,
         fontSize: 16,
         fontWeight: '800',
    },
});