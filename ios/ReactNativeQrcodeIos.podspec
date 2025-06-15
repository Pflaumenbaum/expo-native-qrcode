Pod::Spec.new do |s|
  s.name           = 'ReactNativeQrcodeIos'
  s.version        = '1.0.0'
  s.summary        = 'QRCODE generation using the CIFIlter API'
  s.description    = 'An Expo module that enables the creation of QRCODES using the native CIFilter API from iOS'
  s.author         = ''
  s.homepage       = 'https://github.com/Pflaumenbaum/expo-native-qrcode'
  s.platforms      = { :ios => '13.4', :tvos => '13.4' }
  s.source         = { git: '' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'SWIFT_COMPILATION_MODE' => 'wholemodule'
  }

  s.source_files = "**/*.{h,m,mm,swift,hpp,cpp}"
end
