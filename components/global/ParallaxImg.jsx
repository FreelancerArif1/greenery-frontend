import React, { useEffect, useRef } from 'react';
import styled from "styled-components";

export const ImageParallax = React.memo(({ src, objectFit, height, width, alt, parallax }) => {
    const imgRef = useRef(null);

    useEffect(() => {
        if (!parallax) return;

        const handleScroll = () => {
            if (!imgRef.current) return;
            const speed = imgRef.current.getAttribute("data-speed") || 0.3; // Adjust speed
            const yOffset = window.scrollY * speed;
            imgRef.current.style.transform = `translateY(${yOffset}px)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [parallax]);

    return (
        <StyledImg height={height} width={width}>
            <img
                ref={imgRef}
                data-speed="0.3"
                src={src || 'images/static/blur.jpg'}
                alt={alt || ''}
            />
        </StyledImg>
    );
});

const StyledImg = styled.div`
    position: relative;
    height: ${props => props.height || '100%'};
    width: ${props => props.width || '100%'};
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: ${props => props.objectFit || 'cover'};
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.1s linear; /* Smooth parallax effect */
    }
`;
