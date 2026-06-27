'use client'
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

export default function SmoothScroll({ children }) {
    const wrapper = useRef(null);
    const content = useRef(null);
    const location = usePathname();
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother,ScrollToPlugin);

    useEffect(() => {
        let smoother;

        if (window.innerWidth >= 769) {
            smoother = ScrollSmoother.create({
                wrapper: wrapper.current,
                content: content.current,
                smooth: 1.8,
                speed: 1.2,
                effects: true,
                smoothTouch: 0.1,
                ignoreMobileResize: true,
            });

            ScrollTrigger.refresh();

            if (window.location.hash) {
                gsap.to(window, {
                    delay: 1,
                    duration: 0.7,
                    scrollTo: window.location.hash,
                });
            }
        }

        return () => {
            if (smoother) {
                smoother.kill();
            }
        };
    }, [location]);

    useEffect(() => {
        gsap.to(window, { duration: 0, scrollTo: 0 });

        ScrollTrigger.config({
            limitCallbacks: true,
            ignoreMobileResize: true,
        });
    }, []);

    return (
      <div id="smooth-wrapper" ref={wrapper}>
          <div id="smooth-content" ref={content}>
              {children}
          </div>
      </div>
    );
}