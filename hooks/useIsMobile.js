import { useState, useEffect } from 'react';

/**
 * useIsMobile
 *
 * A custom React hook that detects if the screen width is below a specified mobile breakpoint.
 * It updates the value when the window is resized.
 *
 * @param {number} breakpoint - The maximum screen width (default is 768px) to be considered as "mobile".
 *
 * @returns {boolean} - Returns `true` if the screen width is less than the breakpoint (mobile view), otherwise `false`.
 *
 * @example
 * const isMobile = useIsMobile();
 *
 * if (isMobile) {
 *   // Do something specific for mobile
 * }
 */
export default function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        checkIsMobile(); // Check on initial render
        window.addEventListener('resize', checkIsMobile); // Recheck on resize

        return () => {
            window.removeEventListener('resize', checkIsMobile); // Clean up event listener
        };
    }, [breakpoint]);

    return isMobile;
}
