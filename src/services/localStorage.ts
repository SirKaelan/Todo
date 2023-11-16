export const isLocalStorageEnabled = () => {
  const key = "test-key";
  try {
    window.localStorage.setItem(key, "test");
    window.localStorage.removeItem(key);
  } catch (e) {
    return false;
  }
};

type ShouldHaveId = {
  id: string;
};

export const useLocalStorage = () => {
  const { localStorage: ls } = window;
  const queryErrorMessage = (key: string): string =>
    `A field with key "${key}" doesn't exist in Local Storage.`;

  return {
    pushItem: <T>(key: string, payload: T): void => {
      const dataString = ls.getItem(key);
      if (!dataString) {
        console.error(queryErrorMessage(key));
        return;
      }
      const data: T[] = JSON.parse(dataString) as T[];
      ls.setItem(key, JSON.stringify([...data, payload]));
    },

    addItems: <T>(key: string, payload: T): void =>
      ls.setItem(key, JSON.stringify(payload)),

    getItems: <T>(key: string): T | null => {
      const dataString = ls.getItem(key);
      if (!dataString) {
        console.error(queryErrorMessage(key));
        return null;
      }
      return JSON.parse(dataString) as T;
    },

    editItem: <T extends ShouldHaveId>(key: string, payload: T): void => {
      const dataString = ls.getItem(key);
      if (!dataString) {
        console.error(queryErrorMessage(key));
        return;
      }
      const data: T[] = JSON.parse(dataString) as T[];
      const editedData = data.map((item) =>
        item.id === payload.id ? payload : item
      );
      ls.setItem(key, JSON.stringify(editedData));
    },

    removeItem: <T extends ShouldHaveId>(key: string, payload: T): void => {
      const dataString = ls.getItem(key);
      if (!dataString) {
        console.error(queryErrorMessage(key));
        return;
      }
      const data: T[] = JSON.parse(dataString) as T[];
      const editedData = data.filter((item) => item.id !== payload.id);
      ls.setItem(key, JSON.stringify(editedData));
    },
  };
};
