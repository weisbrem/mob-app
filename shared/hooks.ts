import { useState, useEffect } from 'react';
import {
  Orientation,
  getOrientationAsync,
  addOrientationChangeListener,
  removeOrientationChangeListeners,
} from 'expo-screen-orientation';

export function useScreenOrientation() {
  const [orientation, setOrientation] = useState<Orientation>();

  useEffect(() => {
    getOrientationAsync().then(setOrientation);

    addOrientationChangeListener((evt) => {
      setOrientation(evt.orientationInfo.orientation);
    });

    return () => {
      removeOrientationChangeListeners();
    };
  }, []);

  return orientation;
}
