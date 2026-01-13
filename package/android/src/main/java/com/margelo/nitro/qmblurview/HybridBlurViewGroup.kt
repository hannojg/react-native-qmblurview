package com.margelo.nitro.qmblurview

import android.app.Activity
import android.content.Context
import android.content.ContextWrapper
import android.util.AttributeSet
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.view.ViewTreeObserver.OnPreDrawListener
import com.facebook.react.uimanager.ThemedReactContext
import com.qmdeve.blurview.widget.BlurViewGroup as QmBlurViewGroup

class Test(context: Context?, attrs: AttributeSet?) : QmBlurViewGroup(context, attrs) {
    companion object {
        private const val TAG = "BlurViewDebug"
        private const val INIT_DELAY_MS = 200L
    }

    private var actualBlurRadius = 0f
    private var blurInitialized = false

    private val onPreDrawListener = OnPreDrawListener {
        Log.d(TAG, "onPreDraw called, childCount=$childCount")
        true
    }

    override fun setBlurRadius(radius: Float) {
        actualBlurRadius = radius
        if (blurInitialized) {
            Log.d(TAG, "setBlurRadius: Setting actual radius $radius")
            super.setBlurRadius(radius)
        } else {
            Log.d(TAG, "setBlurRadius: Deferring radius $radius until initialized")
            // Don't set it yet - keep blur disabled until hierarchy is stable
            super.setBlurRadius(0f)
        }
    }



//    init {
//        super.onAttachedToWindow()
//        val decorView = getActivityDecorView()
//        // I don't think its necessary to apply this on that root here
//        decorView?.viewTreeObserver?.addOnPreDrawListener(onPreDrawListener)
//    }

    // TODO: there are much better RN apis for this
    private fun getActivityDecorView(): View? {
        var ctx = this.context
        repeat(4) {
            if (ctx is Activity) {
                return (ctx as Activity).window.decorView
            }
            if (ctx is ContextWrapper) {
                ctx = (ctx as ContextWrapper).baseContext
            } else {
                return null
            }
        }
        return (ctx as? Activity)?.window?.decorView
    }

    override fun onAttachedToWindow() {
        Log.d(TAG, "onAttachedToWindow: Calling super with blur disabled")
        // Blur is disabled (radius=0) via setBlurRadius override, so this won't crash
        super.onAttachedToWindow()

        val decorView = getActivityDecorView()
        decorView?.viewTreeObserver?.addOnPreDrawListener(onPreDrawListener)

        // After a delay, enable blur when hierarchy is stable
        postDelayed({
            Log.d(TAG, "Enabling blur after delay. actualBlurRadius=$actualBlurRadius")
            blurInitialized = true
            // Now set the actual blur radius which will trigger a blur update
            super.setBlurRadius(actualBlurRadius)
            // Force a redraw to apply the blur
            invalidate()
        }, INIT_DELAY_MS)
    }

    override fun onDetachedFromWindow() {
        super.onDetachedFromWindow()
        val decorView = getActivityDecorView()
        decorView?.viewTreeObserver?.removeOnPreDrawListener(onPreDrawListener)
    }

    override fun onLayout(changed: Boolean, l: Int, t: Int, r: Int, b: Int) {
        super.onLayout(changed, l, t, r, b)
    }

}

class HybridBlurViewGroup(context: ThemedReactContext) : HybridBlurViewGroupSpec() {
    override val view = Test(context, null)

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