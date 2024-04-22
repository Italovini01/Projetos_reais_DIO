import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputprops{
    pass:string
}

export function BatTextInput(props: BatTextInputprops) {
    return (
    
        <TextInput
            style={styles.inputer}
        placeholder='pass'
        value={props.pass}
        />
    
    );
    
}