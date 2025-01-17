import { RNPackage, TurboModulesFactory } from '@rnoh/react-native-openharmony/ts';
import type {
  TurboModule,
  TurboModuleContext,
  DescriptorWrapperFactoryByDescriptorTypeCtx,
  DescriptorWrapperFactoryByDescriptorType
} from '@rnoh/react-native-openharmony/ts';
import { GLCanvasManagerModule } from './GLCanvasManagerModule';
import { RNGLContextModule } from './RNGLContextModule';
import { TM, RNC } from "./generated/ts"

class GLRNTurboModuleFactory extends TurboModulesFactory {
  createTurboModule(name: string): TurboModule | null {
    if (name === TM.GLCanvasManager.NAME) {
      globalThis.uiAbilityContext = this.ctx.uiAbilityContext;
      return new GLCanvasManagerModule(this.ctx);
    }
    if (name === TM.RNGLContext.NAME) {
      globalThis.uiAbilityContext = this.ctx.uiAbilityContext;
      return new RNGLContextModule(this.ctx);
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    return name === TM.GLCanvasManager.NAME || name === TM.RNGLContext.NAME;
  }
}

export class GLRNPackage extends RNPackage {
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new GLRNTurboModuleFactory(ctx);
  }

  createDescriptorWrapperFactoryByDescriptorType(
    ctx: DescriptorWrapperFactoryByDescriptorTypeCtx
  ): DescriptorWrapperFactoryByDescriptorType {

    return {
      [RNC.RNCGLCanvas.NAME]: (ctx) =>
      new RNC.RNCGLCanvas.DescriptorWrapper(ctx.descriptor),
    };
  }
}