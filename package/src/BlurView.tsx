import { getHostComponent } from 'react-native-nitro-modules'
import BlurViewConfig from '../nitrogen/generated/shared/json/BlurViewConfig.json'
import type { BlurViewMethods, BlurViewProps } from './specs/BlurView.nitro'

export const BlurView = getHostComponent<BlurViewProps, BlurViewMethods>(
  'BlurView',
  () => BlurViewConfig
)