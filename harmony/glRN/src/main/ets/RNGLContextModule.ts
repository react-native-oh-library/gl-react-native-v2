import { TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from "./generated/ts"

export class RNGLContextModule extends TurboModule implements TM.RNGLContext.Spec {
  private logger = this.ctx.logger.clone("GLCanvasManagerModule")

  addShader(id: number): void {
    this.logger.info('addShader is been invoked')
  }

  removeShader(id: number): void {
    this.logger.info('removeShader is been invoked')
  }
  capture(): void {
    this.logger.info('drawLine is been invoked')
  }
}