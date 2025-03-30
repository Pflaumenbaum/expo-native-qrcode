# expo-native-qrcode

Expo native module for creating and displaying QR codes using the iOS [`CIFilter`](https://developer.apple.com/documentation/coreimage/cifilter) API and the Android [`ZXing`](https://github.com/zxing/zxing) library.

## Installation

```
npm install expo-native-qrcode
```

After installation, you need to run `npx expo prebuild` or `pod install` because this package uses native code.

> This package does not work in Expo Go. You need to create a Dev-Client using **expo eas** or **prebuild**. [Instructions Dev-Client](https://docs.expo.dev/develop/development-builds/create-a-build/)

## Usage

### _Example:_ `QrCode Component`

```js
import React from 'react';
import { View, Text } from 'react-native';

import QrCode from 'expo-native-qrcode';

export function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 40 }}>expo-native-qrcode component example</Text>
      <QrCode data="https://example.org/" size={400} />
    </View>
  );
}
```

### _Example:_ `JS Api`

```js

import {generateQrCode} from 'expo-native-qrcode'

[...]

const result = await generateQrCode("Hello World", 5);
```

## `generateQrCode()`

#### Parameters:

| Parameter | Type     | Note                                       |
| --------- | -------- | ------------------------------------------ |
| `data`    | `string` | The string to encode into a QRCODE.        |
| `size`    | `string` | The resolution of the created QRCODE Image |

## `<QrCode />`

#### QrCode Props

| Prop           | Type                                                         | Note                                                                       |
| -------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| `data`         | `string`                                                     | The string to encode into a QRCODE.                                        |
| `size`         | `number`                                                     | The size (width/height) of the QRCODE                                      |
| `style?`       | [`ViewStyle`](https://reactnative.dev/docs/view-style-props) | Custom Style options for the QRCODE component using React Native ViewStyle |
| `quality?`     | `number`                                                     | The resolution of the created QRCODE Image - Default is 5                  |
| `renderAbove?` | [`React.ReactNode`](https://reactnative.dev/docs/react-node) | A custom component to overlay above the QRCODE                             |

## License

[MIT](https://github.com/Pflaumenbaum/expo-native-qrcode/blob/main/LICENSE)

