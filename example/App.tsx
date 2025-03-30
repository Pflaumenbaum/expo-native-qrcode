import React from 'react';
import { View, Text, Button } from 'react-native';

import QrCode, {generateQrCode} from 'react-native-qrcode-ios';

export default function App() {
  const generate = async () => {
    const result = await generateQrCode("Hello World", 5);
    await console.log(result)
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 40 }}>Expo-Native-QrCode example</Text>
      <Button onPress={generate} title='Generate using JS API'/>
      <QrCode quality={400} data="https://example.org/" size={200}  />
    </View>
  );
}

