package com.margelo.nitro.qmblurview

import com.facebook.react.uimanager.ThemedReactContext
import com.qmdeve.blurview.widget.BlurViewGroup

class HybridBlurViewGroup(context: ThemedReactContext) : HybridBlurViewGroupSpec() {
    override val view = BlurViewGroup(context, null)

    override var blurRadius: Double?
        get() = null
        set(value) {
            val floatValue = value?.toFloat() ?: 10f
            view.setBlurRadius(floatValue)
        }

    override var cornerRadius: Double?
        get() = null
        set(value) {
            val floatValue = value?.toFloat() ?: 0f
            view.setCornerRadius(floatValue)
        }

    override var blurRounds: Double?
        get() = view.blurRounds.toDouble()
        set(value) {
            val intValue = value?.toInt() ?: 1
            view.blurRounds = intValue
        }

    override var overlayColor: String?
        get() = TODO("No yet implemented")
        set(value) {
            // TODO: i think here we have to use the color processor for ColorValue
            TODO("Not yet implemented")
        }
    override var downsampleFactor: Double?
        get() = null
        set(value) {
            val floatValue = value?.toFloat() ?: 0f
            view.setDownsampleFactor(floatValue)
        }


}