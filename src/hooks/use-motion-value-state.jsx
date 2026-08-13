import * as React from 'react';

function useMotionValueState(motionValue) {
  return React.useSyncExternalStore((callback) => {
    const unsub = motionValue.on('change', callback);
    return unsub;
  }, () => motionValue.get(), () => motionValue.get());
}

export { useMotionValueState };
