import ExpoModulesCore

public class ReactNativeQrcodeIosModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ReactNativeQrcodeIos")
      AsyncFunction("generateQrCode") { (data: String, size: CGFloat) in
        return generateQRCode(data: data, size: size)
      }.runOnQueue(.main)
  }
}
