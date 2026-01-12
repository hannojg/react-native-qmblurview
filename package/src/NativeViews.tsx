import { getHostComponent } from 'react-native-nitro-modules'
import BlurViewConfig from '../nitrogen/generated/shared/json/BlurViewConfig.json'
import BlurViewGroupConfig from '../nitrogen/generated/shared/json/BlurViewGroupConfig.json'
import type { BlurViewMethods, BlurViewProps } from './specs/BlurView.nitro'

// TODO: explcitily disable children!
export const BlurView = getHostComponent<BlurViewProps, BlurViewMethods>(
  'BlurView',
  () => BlurViewConfig
)

export const BlurViewGroup = getHostComponent<BlurViewProps, BlurViewMethods>(
  'BlurViewGroup',
  () => BlurViewGroupConfig
)