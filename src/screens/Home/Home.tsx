import { StatusBar } from 'expo-status-bar';
import React from "react";
import {Text, View} from "react-native";
import styles from './Style';

export default function Home() {
    return(
        <View style={styles.container}>
        <Text>Welcome</Text>
        <StatusBar style="auto" />
        </View>
    )
}
