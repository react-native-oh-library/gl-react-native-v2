import { TurboModuleRegistry, RootTag } from 'react-native';
import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';

export interface Spec extends TurboModule {
  addShader (id: number): void;
  removeShader (id: number): void;
}

export default TurboModuleRegistry.get<Spec>('RNGLContext')!;
