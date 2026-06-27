import { useEffect, useRef,useCallback } from 'react';
import {gsap} from "gsap";
import {usePathname} from "next/navigation";

export const ParallaxImg = () => {
    const location = usePathname();


    useEffect(() => {
        gsap.utils.toArray(".parallax-img").forEach((item, i) => {

            let getImg = item.querySelector('.global-image img')
            let parallaxSpeed = item.getAttribute('data-parallax');

            gsap.to(getImg, {
                yPercent: parallaxSpeed ? parallaxSpeed : 15,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    // markers: true,
                    scrub: true
                }
            });
        });
    }, [location])

}

export const Parallax = () => {
    const location = usePathname();
    const animationsRef = useRef([]);
    const isDesktop = typeof window !== 'undefined' ? window.innerWidth > 991 : false;



    const initParallax = useCallback(() => {
        // Clear previous animations
        animationsRef.current.forEach(anim => {
            if (anim.scrollTrigger) {
                anim.scrollTrigger.kill();
            }
            anim.kill();
        });
        animationsRef.current = [];

        // Handle Image Parallax
        gsap.utils.toArray('.global-image-parallax').forEach(container => {
            const img = container.querySelector('img');
            if (img) {
                const isDirector = container.parentElement?.classList.contains('directors__single__img');
                const speed = container.getAttribute('data-speed');
                const parallaxSpeed = isDirector ? 6 : (speed ? parseFloat(speed) : 30);

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        scrub: 1,
                        pin: false,
                        start: "top bottom",
                        end: "bottom top",
                        invalidateOnRefresh: true,
                        fastScrollEnd: true,
                        anticipatePin: 1,
                    }
                });

                tl.fromTo(img, {
                    yPercent: -parallaxSpeed,
                    scale: 1.2,
                    ease: 'none'
                }, {
                    yPercent: parallaxSpeed,
                    scale: 1,
                    ease: 'none'
                });

                animationsRef.current.push(tl);
            }
        });

        // Handle Video Parallax
        gsap.utils.toArray('.global-video-parallax').forEach(container => {
            const video = container.querySelector('video');
            if (video) {
                const speed = container.getAttribute('data-speed');
                const parallaxSpeed = speed ? parseFloat(speed) : 40;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        scrub: 1,
                        pin: false,
                        start: "top bottom",
                        end: "bottom top",
                        invalidateOnRefresh: true,
                        fastScrollEnd: true,
                        anticipatePin: 1,
                    }
                });

                tl.fromTo(video, {
                    yPercent: -parallaxSpeed,
                    scale: 1.2,
                    ease: 'none'
                }, {
                    yPercent: parallaxSpeed,
                    scale: 1,
                    ease: 'none'
                });

                animationsRef.current.push(tl);
            }
        });
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        // Use requestAnimationFrame for smoother initialization
        const rafId = requestAnimationFrame(initParallax);

        return () => {
            cancelAnimationFrame(rafId);
            animationsRef.current.forEach(anim => {
                if (anim.scrollTrigger) {
                    anim.scrollTrigger.kill();
                }
                anim.kill();
            });
            animationsRef.current = [];
        };
    }, [location, isDesktop, initParallax]);
};/* How to use:
 - Add 'parallax' class to the parent section. Add 'data-speed={speed string/number}' for parallax speed (if needed).
 - Add 'global-image-parallax' class for images and 'global-video-parallax' class for videos.
 - This code will handle both images and videos with the same parallax effect.
*/
