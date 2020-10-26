import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { Container } from 'native-base';

type ScanningPageNavigationProps = StackNavigationProp<AuthStackParamList,AppScreens.ScanningPage>
interface ScanningPageProps {
    navigation: ScanningPageNavigationProps
}

const ScanningPage: React.FunctionComponent<ScanningPageProps> = (props) => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      const handleBarCodeScanned = (properties: any) => {
        setScanned(true);
        alert(`Bar code with type ${properties.type} and data ${properties.data} has been scanned!`);
      };
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    return (
       <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={ScanProperties => scanned ? undefined : handleBarCodeScanned(ScanProperties)}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
    );
}

export default ScanningPage;