'use client'
import StyledComponentsRegistry from "@/lib/registry";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "@/styles/globalStyle";
import './global.css';
import './custom.css';
import './embla.css';
import HasprCursor from 'haspr-cursor' // Import Wrapper
import 'haspr-cursor/dist/cursor.css'
import StickyIcon from '@/components/common/StickyIcon';
import { GlobalProvider } from '@/context/GlobalContext';
import { Parallax } from '@/components/animation/parallax';
import { useEffect, useRef } from 'react';
import FontPreloader from '@/components/common/FontPreloader';
import {gsap} from "gsap";
import {ScrollSmoother} from "gsap/dist/ScrollSmoother";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
import {SplitText} from "gsap/dist/SplitText";
import { usePathname } from 'next/navigation';
import Menu from "@/components/common/Menu";
import { useGSAP } from '@gsap/react';
import PageWrapper from '@/components/global/PageWrapper';
import Preloader from '@/components/global/Preloader';
import FooterNew from '@/components/common/FooterNew';
import { TextAnimationNew } from '@/components/animation/TextAnimation';
import { FadeUp } from '@/components/animation/FadeUp';


export default function RootLayout({children}) {


  const pathName = usePathname()
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

  const el = useRef();
  let smoother;
  useGSAP(() => {
      if (typeof window !== 'undefined' && window.innerWidth > 767) {
        smoother = ScrollSmoother.create({
          smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
          effects: true, // looks for data-speed and data-lag attributes on elements
          // speed: 3,
          smoothTouch: 0.1,
        });
      }

      ScrollTrigger.refresh();
      return () => {
        smoother?.kill();
      };

    },
    {
      scope: el,
      dependencies: [pathName],
    });


  useEffect(() => {
    window.scroll(0, 1);
    if (window.location.hash) {
      gsap.to(window, { duration: 1, scrollTo: window.location.hash });
    }
  },[pathName]);

    Parallax();

    const location = usePathname();
    useEffect(() => {
        const mainWrapper = document.getElementById('main-wrapper');
        if (mainWrapper) {
            gsap.to(mainWrapper, {opacity: 1, delay: 0.5});
        }
    }, [location]);

  const canonicalUrl = `https://greeneryes.com${location}`;



  return (
        <html lang="en">
        <head>
            <link rel="icon" type="image/svg" href="/images/static/fav.svg" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/images/static/fav.svg"
                  sizes="32x32" />
            <link rel="icon" href="/images/static/fav.svg"
                  sizes="192x192" />
            <link rel="apple-touch-icon"
                  href="/images/static/fav.svg" />
            <meta name="google-site-verification" content="Y3qQYkt0ECJJMT1V6WqwZA33MdMAsR-CKvItBMb-oH4" />
          <link rel="canonical" href={canonicalUrl}/>
          <meta name="msapplication-TileImage"
                  content="/images/static/fav.svg" />
            <meta name="theme-color" content="#6FAD60" />
            <FontPreloader/>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-KRSFFHZBF1"></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-KRSFFHZBF1');
              `
            }} />
        </head>
        <body>
        <StyledComponentsRegistry>
            <div id="main-wrapper">
                {/*{location === '/' && <PageTransition/>}*/}
              {
                location === '/' && <Preloader/>
              }
                <Menu/>
                <StickyIcon />
                <ToastContainer />
                <HasprCursor>
                    <GlobalProvider>
                      <GlobalStyle />
                      <TextAnimationNew />
                      <FadeUp />
                        {/*<SmoothScroll>*/}
                        {/*    <GlobalStyle />*/}
                        {/*    {children}*/}
                        {/*    <Footer />*/}
                        {/*</SmoothScroll>*/}
                      <div ref={el} id="smooth-wrapper">
                        <div id="smooth-content">
                          <PageWrapper key={location}>
                          {children}
                          <FooterNew />
                          </PageWrapper>
                        </div>
                      </div>
                    </GlobalProvider>
                </HasprCursor>
            </div>
        </StyledComponentsRegistry>
        </body>
        </html>
    );
}
