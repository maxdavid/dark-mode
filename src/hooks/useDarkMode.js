import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  return useLocalStorage('darkMode', false);
};
