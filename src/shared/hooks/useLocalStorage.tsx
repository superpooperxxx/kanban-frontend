import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getValue = <T,>(key: string): T | undefined => {
  const storage = localStorage.getItem(key);

  if (storage) {
    return JSON.parse(storage);
  }

  return;
};

export const useLocalStorage = <T,>(
  initialValue: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(getValue<T>(key) || initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
