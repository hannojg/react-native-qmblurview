// import type { ColorValue } from "react-native";
import type { HybridView, HybridViewMethods, HybridViewProps } from "react-native-nitro-modules";

export interface BlurViewProps extends HybridViewProps {
    blurRadius?: number;
    /**
     * Border radius
     */
    cornerRadius?: number;
    /**
     * Control blur intensity (number of blur iterations)
     * 1-15 iterations, higher = stronger blur
     */
    blurRounds?: number;
    // overlayColor?: ColorValue;
    overlayColor?: string;
}

export interface BlurViewMethods extends HybridViewMethods {}

export type BlurView = HybridView<BlurViewProps, BlurViewMethods>;