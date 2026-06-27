'use client';

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
export const CustomLink = ({ children, href, ...props }) => {
    const router = useRouter();
    const pathname = usePathname(); // Get current route

    const handleTransition = (e) => {
        e.preventDefault();

        // Prevent fade-out animation if the route is the same
        if (pathname === href) return;

        const mainRoot = document.querySelector("#main-wrapper");
        const tl = gsap.timeline();

        // Step 1: Fade out
        tl.to(mainRoot, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
        });

        // Step 2: Navigate after fade-out
        tl.add(() => {
            router.push(href);
        });

        // Step 3: Instantly reset opacity to 1 after navigation
        tl.add(() => {
            gsap.set(mainRoot, { opacity: 1 });
        }, "+=0.8");
    };

    return (
        <Link prefetch={true} {...props} href={href} onClick={handleTransition}>
            {children}
        </Link>
    );
};
