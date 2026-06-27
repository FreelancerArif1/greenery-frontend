import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { fetchGlobalData } from '@/api/index';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [globalData, setGlobalData] = useState(null);

    // Use refs to track whether an API call was already made
    const hasFetchedGlobalData = useRef(false);

    // Optimized data fetching function that ensures API is only called once
    const fetchDataOnce = useCallback(async (fetchFunction, setState, currentState, flagRef) => {
        if (!currentState && !flagRef.current) {
            flagRef.current = true;  // Prevent duplicate calls
            try {
                const response = await fetchFunction(); // Attempt to fetch the data
                setState(response); // If successful, update the state
            } catch (error) {
                console.error('Error fetching global data:', error);
                // Reset flag on error so it can be retried
                flagRef.current = false;
            }
        }
    }, []);

    useEffect(() => {
        // Fetch global data only once when components mounts
        fetchDataOnce(fetchGlobalData, setGlobalData, globalData, hasFetchedGlobalData);
    }, []); // Empty dependency array to run only once

    return (
        <GlobalContext.Provider value={{
            globalData,
            setGlobalData,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalData() {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalData must be used within a GlobalProvider');
    }
    return context;
}