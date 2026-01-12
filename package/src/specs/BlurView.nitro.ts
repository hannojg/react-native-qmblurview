// import type { ColorValue } from "react-native";
import type { HybridView, HybridViewMethods, HybridViewProps } from "react-native-nitro-modules";

export interface BlurViewProps extends HybridViewProps {
    /**
     * @default 10
     */
    blurRadius?: number;

    /**
     * Border radius
     * @default 0
     */
    cornerRadius?: number;
    /**
     * Control blur intensity (number of blur iterations)
     * 1-15 iterations, higher = stronger blur
     */
    blurRounds?: number;

    // TODO: overlayColor?: ColorValue;
    /**
     * @default #AAFFFFFF
     */
    overlayColor?: string;

    /**
     * Downsample factor, higher value means better performance but worse blur effect
     * @default 0
     */
    downsampleFactor?: number;
}

export interface BlurViewMethods extends HybridViewMethods {}

export type BlurView = HybridView<BlurViewProps, BlurViewMethods>;