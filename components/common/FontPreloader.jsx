import React from 'react';

const FontPreloader = () => (
    <>
        <React.Fragment>
            <link rel="preload" href="/fonts/BananaGrotesk-Regular.woff" as="font" type="font/woff"
                  crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/BananaGrotesk-Regular.woff2" as="font" type="font/woff2"
                  crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/BananaGrotesk-Medium.woff" as="font" type="font/woff"
                  crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/BananaGrotesk-Extralight.woff2" as="font" type="font/woff2"
                  crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/Inter-Regular.woff" as="font" type="font/woff"
                  crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2"
                  crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/Inter-Medium.woff" as="font" type="font/woff"
                  crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/Inter-Medium.woff2" as="font" type="font/woff2"
                  crossOrigin="anonymous"/>
        </React.Fragment>
    </>
);

export default React.memo(FontPreloader);
