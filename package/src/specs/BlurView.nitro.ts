// import type { ColorValue } from "react-native";
import type { HybridView, HybridViewMethods, HybridViewProps } from "react-native-nitro-modules";

export interface BlurViewProps extends HybridViewProps {
    blurRadius?: number;
    cornerRadius?: number;
    blurRounds?: number;
    // overlayColor?: ColorValue;
    overlayColor?: string;
}

export interface BlurViewMethods extends HybridViewMethods {}

export type BlurView = HybridView<BlurViewProps, BlurViewMethods>;