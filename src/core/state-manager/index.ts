import { useCallback, useEffect, useState } from "react";
import Watcher from '../../util/watcher';

const $SET = {} as any;
const $WatcherManager = {} as Record<string, Watcher>;

const getLocalStorageKey = (name: string) => `useStore:${name}`;

export const useStore = <T>(name: string, initVal: T, persistent?: boolean): [T, (newVal: T) => void] => {
  if (persistent) {
    const saveVal = localStorage.getItem(getLocalStorageKey(name));
    if (saveVal != null) {
      initVal = JSON.parse(saveVal);
    }
  }
  if (!(name in $SET)) {
    $SET[name] = initVal;
    $WatcherManager[name] = new Watcher();
  }
  const [val, setVal] = useState($SET[name]);
  const [fuVal, _forceUpdate] = useState(0);
  const forceUpdate = useCallback(() => {
    _forceUpdate(x => x + 1);
  }, [_forceUpdate]);

  const updateVal = (newVal: T) => {
    if ($SET[name] !== newVal) {
      $SET[name] = newVal;
      if (persistent) {
        localStorage.setItem(getLocalStorageKey(name), JSON.stringify(newVal));
      }
      $WatcherManager[name].notify();
    }
  };

  useEffect(() => {
    setVal($SET[name]);
  }, [fuVal, name]);

  useEffect(() => {
    $WatcherManager[name].register(forceUpdate);
    return () => {
      $WatcherManager[name].unregister(forceUpdate);
    }
  }, [name, forceUpdate]);

  return [val, updateVal];
};
