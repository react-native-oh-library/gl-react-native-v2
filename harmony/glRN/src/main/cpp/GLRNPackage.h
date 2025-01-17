#pragma once

#include "RNOH/generated/BaseGlReactNativePackage.h"

namespace rnoh {

class GLRNPackage : public BaseGlReactNativePackage {
    using Super = BaseGlReactNativePackage;

public:
    GLRNPackage(Package::Context ctx) : Super(ctx) {}
};
} // namespace rnoh