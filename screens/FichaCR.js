import * as React from 'react';
import { Button, View } from 'react-native';
import styles from './styles';

export default function FichaCR({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
  }