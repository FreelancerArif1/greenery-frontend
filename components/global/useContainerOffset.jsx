import { useState, useEffect } from 'react';

// Custom hook to get the offsetLeft of a container element and update on a window resize
const useContainerOffset = (selector) => {
    const [offset, setOffset] = useState(113);

    useEffect(() => {
        const updateOffset = () => {
            const element = document.querySelector(selector);
            if (element) {
                setOffset(element.offsetLeft);
            }
        };

        // Initial update
        updateOffset();

        // Update offset on window resize
        window.addEventListener('resize', updateOffset);

        // Cleanup event listener on components unmount
        return () => {
            window.removeEventListener('resize', updateOffset);
        };
    }, [selector]);

    return offset;
};

export default useContainerOffset;
