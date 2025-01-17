import type { HostComponent, ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import { DirectEventHandler, Double, Int32, WithDefault } from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

export interface NativeProps extends ViewProps {
  pixelRatio?: Int32;
  backgroundColor?: Int32;
  autoRedraw?: boolean;
  overlay?: boolean;
  setZOrderOnTop?: boolean;
  nbContentTextures?: string;
  renderId?: string;
  data?: string;
  imagesToPreload?: string;
}

export default codegenNativeComponent<NativeProps>('RNCGLCanvas') as HostComponent<NativeProps>;
