import ExpoNativeQrcodeModule from "./ExpoNativeQrCodeModule";

/**
 * Generates a QRCODE using CIFilter IOS and returns it as an Base64 data url.
 *
 * @param {string} data - The input string to encode into a QRCODE
 * @param {number} size - The resolution of the QRCODE as number
 * @returns {Promise<string>} Promise that resolves to a Base64 encoded data url (png) of the generated QRCODE image.
 */
export async function generateQrCode(data: string, size: number): Promise<string> {
    return await ExpoNativeQrcodeModule.generateQrCode(data, size);
  }