import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { getData, storeData } from '../Database';
import * as Haptics from 'expo-haptics';

type ScanningPageNavigationProps = StackNavigationProp<AuthStackParamList,AppScreens.ScanningPage>
export type ScanningPageParams = {
  navigation: ScanningPageNavigationProps
}
interface ScanningPageProps {
    route: {params: ScanningPageParams}
    navigation: ScanningPageNavigationProps
}

const ScanningPage: React.FunctionComponent<ScanningPageProps> = (props) => {
    const {navigation, route} = props;
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
        let data: { type: string; id: number; };
        try {
          data = JSON.parse(properties.data);
        } catch (e) {
          alert("QR code is not compatible!");
          return;
        }

        if(data.type === "friend")
        {
          getData("current").then(response_current => {
            if(response_current === "")
            {
              navigation.navigate("Login");
              return;
            }
            getData("users").then(response_users => {
              let currentUser = JSON.parse(response_current);
              let allUsers = JSON.parse(response_users);
              let targetUser = allUsers.find((temp: any) => temp.id === data.id);
              console.log(targetUser.id);

              if(currentUser.Friends.includes(targetUser.id) || targetUser.Friends.includes(currentUser.id))
              {
                alert("Users are already friends!");
                Haptics.impactAsync();
                return;
              }
              allUsers.forEach((user: any) => {
                if(user.id === currentUser.id)
                {
                  user.Friends.push(targetUser.id);
                  currentUser.Friends.push(targetUser.id);
                }
                else if(user.id === targetUser.id)
                {
                  user.Friends.push(currentUser.id);
                }
              });
              storeData("users",JSON.stringify(allUsers)).then(() => {
                storeData("current",JSON.stringify(currentUser)).then(() => {
                  alert("You have made a new friend!\n" +
                  "Hope you meet " + targetUser.Firstname + " soon!");
                  Haptics.selectionAsync();
                });
              });
            });
          });
        }
        else if(data.type === "bar")
        {
          getData("current").then(response_current => {
            getData("barList").then(response_barList => {
              getData("users").then(response_users => {
                let currentUser = JSON.parse(response_current);
                let barList = JSON.parse(response_barList);
                let allUsers = JSON.parse(response_users);

                console.log(currentUser);
                if(currentUser.Visiting === data.id)
                {
                  alert("You have already signed in into this bar!");
                  Haptics.impactAsync();
                  return;
                }

                currentUser.Visiting = data.id;
                let barName = barList.find((temp: any) => temp.id === data.id).Name;
                if(currentUser.Bars.find((temp: any) => temp.id === data.id) === undefined)
                {
                  currentUser.Bars.push({
                    id: data.id,
                    Rank: 1
                  });
                }
                else
                {
                  currentUser.Bars.find((temp: any) => temp.id === data.id).Rank++;
                }

                allUsers.find((temp: any) => temp.id === currentUser.id).Visiting = data.id;
                allUsers.find((temp: any) => temp.id === currentUser.id).Bars = currentUser.Bars;

                storeData("users",JSON.stringify(allUsers));
                storeData("current",JSON.stringify(currentUser));
                alert("Welcome! Nice to see you at " + barName + "!");
                Haptics.selectionAsync();
              });
            });
          });
        }

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
        style={StyleSheet.absoluteFillObject}>
                  <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
          </BarCodeScanner>

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
    );
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
});

export default ScanningPage;