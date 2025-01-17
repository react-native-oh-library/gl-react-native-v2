import { RNComponentContext, RNViewBase } from '@rnoh/react-native-openharmony';
import { RNC } from "./generated/ts"

@Component
export struct RNCGLCanvas {
  public static readonly NAME = RNC.RNCGLCanvas.NAME
  public ctx!: RNComponentContext
  public tag: number = 0
  // 组件的状态包装器
  @State private descriptorWrapper: RNC.RNCGLCanvas.DescriptorWrapper =
    {} as RNC.RNCGLCanvas.DescriptorWrapper
  private eventEmitter: RNC.RNCGLCanvas.EventEmitter | undefined = undefined
  // 存储需要在组件卸载时清理的回调函数
  private cleanUpCallbacks: (() => void)[] = []

  aboutToAppear() {
    // 创建EventEmitter实例，用于处理事件的订阅和触发
    this.eventEmitter = new RNC.RNCGLCanvas.EventEmitter(this.ctx.rnInstance, this.tag)
    this.onDescriptorWrapperChange(this.ctx.descriptorRegistry.findDescriptorWrapperByTag<RNC.RNCGLCanvas.DescriptorWrapper>(this.tag)!)
    // 订阅组件状态的变化，然后放入cleanUpCallbacks等待清理
    this.cleanUpCallbacks.push(this.ctx.descriptorRegistry.subscribeToDescriptorChanges(this.tag,
      (_descriptor, newDescriptorWrapper) => {
        // 更新组件状态
        this.onDescriptorWrapperChange(newDescriptorWrapper! as RNC.RNCGLCanvas.DescriptorWrapper)
      }
    ))
  }

  // 更新组件状态
  private onDescriptorWrapperChange(descriptorWrapper: RNC.RNCGLCanvas.DescriptorWrapper) {
    this.descriptorWrapper = descriptorWrapper
  }

  aboutToDisappear() {
    // 执行所有清理回调
    this.cleanUpCallbacks.forEach(cb => cb())
  }

  build() {
    RNViewBase({ ctx: this.ctx, tag: this.tag }) {
      Column() {
        Text('RNCGLCanvas').fontSize(20)
      }.margin({ top: 30, left: 0 }).width('100%').alignItems(HorizontalAlign.Start)
    }
  }
}
