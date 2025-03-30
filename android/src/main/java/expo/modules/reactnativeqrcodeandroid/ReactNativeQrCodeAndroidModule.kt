package expo.modules.reactnativeqrcodeandroid
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import generateQRCode


class ReactNativeQrCodeAndroidModule : Module() {

  override fun definition() = ModuleDefinition {
    Name("ReactNativeQrCodeAndroid")
    AsyncFunction("generateQrCode") { data: String, size: Int ->
      return@AsyncFunction generateQRCode(data, size )
    }
    }
  }
