import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useEffect} from "react";
import {usePathname} from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export const FadeUp = () => {
  const location = usePathname();

  useEffect(() => {
    if(typeof window === 'undefined') return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if(window.innerWidth > 768) {
        let allAnim = document.querySelectorAll('.fade-up');

        allAnim.forEach((el) => {
          // Set initial hidden state immediately
          gsap.set(el, {
            opacity: 0,
            y: 60
          });

          // Animate to visible state when scrolled into view
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            }
          });
        });

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
      } else {
        // On mobile, ensure all elements are visible
        let allAnim = document.querySelectorAll('.fade-up');
        allAnim.forEach((el) => {
          gsap.set(el, { opacity: 1, y: 0 });
        });
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };

  }, [location]);
}

