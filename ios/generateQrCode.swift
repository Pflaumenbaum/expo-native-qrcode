//
//  generateQrCode.swift
//  ReactNativeQrcodeIos
//
//  Created by Pflaumenbum on 17.06.24.
//
import UIKit
import CoreImage

public func generateQRCode(data string: String,  size: CGFloat) -> String? {
  let data = string.data(using: String.Encoding.ascii)
    if let filter = CIFilter(name: "CIQRCodeGenerator") {
        filter.setValue(data, forKey: "inputMessage")
        let transform = CGAffineTransform(scaleX: size, y: size)
        if let output = filter.outputImage?.transformed(by: transform) {
            let uiImage = UIImage(ciImage: output)
            if let pngData = uiImage.pngData() {
              let base64String = pngData.base64EncodedString(options: .lineLength64Characters)
                return "data:image/png;base64," + base64String
            }
        }
    }
    return nil
}
