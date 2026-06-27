import { motion } from 'framer-motion';
import { StrictMode } from 'react';

const PageWrapper = ({ children }) => {
    const pageVariants = {
        initial: { opacity: 0, filter: 'blur(20px)' }, // Slightly scale down
        animate: { opacity: 1, filter: 'blur(0px)' }, // Smooth scale-in effect
        exit: { opacity: 0, filter: 'blur(20px)' }, // Subtle scale-up on exit
    };

    const overlayVariants = {
        initial: { opacity: 1 },
        animate: { opacity: 0 },
        exit: { opacity: 1 },
    };

    const transition = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }; // Custom bezier easing for smooth transition

    return (
        <>
            {/* Overlay for transition effect */}
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={overlayVariants}
                transition={transition}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#000',
                    zIndex: 9999,
                    pointerEvents: 'none',
                }}
            />

            {/* Page content with opacity, blur, and scale transition */}
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={transition}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    minHeight: '100vh',
                    willChange: 'opacity, filter, transform',
                }}>
                <StrictMode>{children}</StrictMode>
            </motion.div>
        </>
    );
};

export default PageWrapper;
