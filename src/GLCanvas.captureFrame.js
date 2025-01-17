import invariant from "invariant";
import GLCanvasManager from './spec/turbomodule/NativeGLCanvasModule'

invariant(GLCanvasManager,
`gl-react-native: the native module is not available.
Make sure you have properly configured it.
See README install instructions.

GLCanvasManager is %s`, GLCanvasManager);

module.exports = (handle, config) => GLCanvasManager.capture(handle, config);
