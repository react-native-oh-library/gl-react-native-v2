import { TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from "./generated/ts"

export class GLCanvasManagerModule extends TurboModule implements TM.GLCanvasManager.Spec {
  private logger = this.ctx.logger.clone("GLCanvasManagerModule")
  capture(): void {
    this.logger.info('drawLine is been invoked')
  }
}