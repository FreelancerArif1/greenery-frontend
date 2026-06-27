import { useState, useEffect } from 'react';

/**
 * useFetch
 *
 * A custom React hook for fetching data from an API. It handles loading, error, and success states.
 *
 * @param {string} url - The API endpoint URL to fetch data from.
 * @param {object} options - Optional fetch options (e.g., method, headers, body).
 *
 * @returns {object} - Returns an object containing `data`, `loading`, and `error` states:
 *                     - `data`: The fetched data (or null if loading or error).
 *                     - `loading`: A boolean indicating if the request is still in progress.
 *                     - `error`: Any error that occurred during the fetch.
 *
 * @example
 * const { data, loading, error } = useFetch('/api/posts');
 */
export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
}
