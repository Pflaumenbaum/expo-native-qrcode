import { StyleSheet, Text, View, ViewStyle, Image, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { generateQrCode } from './generateQrCode';
import { QrCodeProps } from './ExpoNativeQrCode';

/**
 * Displays a QRCODE generated by CIFilter IOS on IOS and on Android using the Google Zxing Library.
 *
 * @param {string} data - The input string to encode into a QRCODE
 * @param {number} size - The size (width/height) of the QRCODE as number
 * @param {number} quality - The resolution of the created QRCODE Image - Default is 5
 * @param {ViewStyle} style - Custom Style options for the QRCODE component using React Native ViewStyle or undefined
 * @param {React.ReactNode} renderAbove - A custom component to overlay avove the QRCODE or undefined
 */

const QrCode = ({ data, size, quality, style, renderAbove }: QrCodeProps) => {
  const [base64, setBase64] = useState('');
  const generateQr = async () => {
    const result = await generateQrCode(data, quality || 5);
    await setBase64(result);
  };
  useEffect(() => {
    generateQr();
  }, [data, quality]);
  return (
    <>
      {base64 && (
        <ImageBackground
          style={{
            ...style,
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={{ uri: base64 }}>
          {renderAbove && <View style={{ alignItems: 'center', padding: 15 }}>{renderAbove}</View>}
        </ImageBackground>
      )}
    </>
  );
};

export default QrCode;

 
