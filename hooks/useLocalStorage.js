import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.warn(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}


/**
 * useLocalStorage
 *
 * A custom React hook that syncs a state value with `localStorage`.
 * It provides a persistent value that survives page reloads.
 *
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {*} initialValue - The initial value to use if no value is found in localStorage.
 *
 * @returns {[any, Function]} - Returns a stateful value and a function to update it,
 *                              similar to useState.
 *
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 *
 * @example
 * const [token, setToken] = useLocalStorage('authToken', '');
 *
 * Features:
 * - Automatically reads from and writes to localStorage
 * - Gracefully handles JSON parsing and stringification
 * - Fallbacks to initialValue if localStorage is empty or unavailable
 */
