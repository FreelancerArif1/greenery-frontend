import {gsap} from "gsap";
import {SplitText} from "gsap/dist/SplitText";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from 'react';
import {usePathname} from "next/navigation";


export const TextAnimationNew = () => {
    const location = usePathname();
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted && typeof window !== 'undefined' && window.innerWidth >= 768) {
            // Longer delay to ensure DOM and ScrollSmoother are ready
            const timer = setTimeout(() => {
                gsap.utils.toArray(".split-up").forEach((item) => {
                    // Clear any existing splits
                    if (item.splitText) {
                        item.splitText.parent?.revert();
                        item.splitText.child?.revert();
                    }

                    const parentSplit = new SplitText(item, {
                        type: "lines",
                        linesClass: "split-parent",
                    });

                    const childSplit = new SplitText(item, {
                        type: "lines",
                        linesClass: "split-child",
                    });

                    gsap.from(childSplit.lines, {
                        duration: 1.2,
                        yPercent: 200,
                        opacity: 0,
                        rotationX: -25,
                        scale: 0.8,
                        filter: "blur(8px)",
                        ease: "power4.out",
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            toggleActions: "play none none none",
                            once: true,
                        },
                    });

                    // Store for cleanup
                    item.splitText = { parent: parentSplit, child: childSplit };
                });

                // Refresh ScrollTrigger after animations are set up
                ScrollTrigger.refresh();
            }, 500);

            return () => {
                clearTimeout(timer);
                // Clean up on unmount
                gsap.utils.toArray(".split-up").forEach((item) => {
                    if (item.splitText) {
                        item.splitText.parent?.revert();
                        item.splitText.child?.revert();
                    }
                });
            };
        }
    }, [isMounted, location]);

    return null;
}


/*---how to use

- add 'split-up' class on the tag like(h1,h2,h3,p ... etc)

*/
