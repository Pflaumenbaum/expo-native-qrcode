import { ViewStyle } from 'react-native';

export interface QrCodeProps {
  data: string;
  size: number;
  quality?: number;
  style?: ViewStyle;
  renderAbove?: React.ReactNode;
}
