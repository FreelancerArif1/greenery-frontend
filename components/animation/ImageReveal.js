import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {CSSPlugin, gsap} from "gsap";
import {useEffect} from "react";
import {usePathname} from "next/navigation";


export const RevealWithParallax = () => {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);
    const pathname=usePathname();

    useEffect(() => {
        let reveal = gsap.utils.toArray(".image-reveal");
        reveal.forEach((cont) => {
            let img = cont.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cont,
                    toggleActions: "play none none none",
                    once: true,
                    start: "top 80%",
                },
            });

            // parallax effect
            gsap.to(img, {
                yPercent: 5,
                ease: "none",
                scrollTrigger: {
                    trigger: cont,
                    scrub: true
                }
            });

            // image reveal - container slides in from left
            tl.from(
                cont,
                {
                    xPercent: -80,
                    duration: 1.5,
                    ease: "Expo.easeInOut",
                }
            );

            // image slides in from right at the same time
            tl.from(
                img,
                {
                    xPercent: 80,
                    scale: 1.1,
                    duration: 1.5,
                    ease: "Expo.easeInOut",
                },
                "<" // Start at the same time as previous animation
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if(trigger.vars && trigger.vars.trigger && trigger.vars.trigger.classList?.contains('image-reveal')) {
                    trigger.kill();
                }
            });
        };
    }, [pathname])

}

/*
how to use:
- add 'split-up' class on the tag like(h1,h2,h3,p ... etc)
*/