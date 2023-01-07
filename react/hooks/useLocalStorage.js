import { useCallback, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value =
        localStorage.getItem(key) ?? JSON.stringify(defaultValue);

      return JSON.parse(value);
    } catch (e) {
      return defaultValue;
    }
  });

  // set value in the localstorage
  const setValue = useCallback(
    (value) => {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    },
    [key]
  );

  // remove value from storage
  const removeValue = useCallback(() => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  }, [key]);

  return { storedValue, setValue, removeValue };
};

export default useLocalStorage;
