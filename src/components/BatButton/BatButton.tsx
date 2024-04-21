import React from 'react';
import { Button, View } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
    return (
    <View style={styles.container}>
        <Button
        onPress={()=>{console.log("olá")}}
        title="CLICK AQUI"
        accessibilityLabel='click em mim'
        color="#831584"
        />

    </View>
    );
}