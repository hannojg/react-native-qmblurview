#include <jni.h>
#include "NitroQmblurviewOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::qmblurview::initialize(vm);
}
