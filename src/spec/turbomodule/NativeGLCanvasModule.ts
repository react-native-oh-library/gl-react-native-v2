import { TurboModuleRegistry, RootTag } from 'react-native';
import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';

export interface Spec extends TurboModule {
  capture(): void;
}

export default TurboModuleRegistry.get<Spec>('GLCanvasManager')!;
