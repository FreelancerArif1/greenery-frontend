"use client";
import styled from "styled-components";
import * as url from "url";

export const VideoBanner = ({
                                src,
                                position,
                                objectFit,
                                height,
                                width,
                                banner,
                                alt,
                                left,
                                margin,
                                right,
                                top,
                                bottom,
                                parallax,
                                className,
                            }) => {
    return (
        <StyledImg className={`global-image global-video-parallax${parallax ? 'parallax-bg' : ''}`} objectFit={objectFit} margin={margin}
                   position={position} left={left}
                   right={right} top={top}
                   bottom={bottom} height={height} width={width}
                   style={parallax && {
                       backgroundImage: `url(${src})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                   }}>
            {/*{!parallax &&*/}
            {/*    <video data-speed={0.2} className={className ? className : ''} src={src ? src : '/public/images/dynamic/home/banner.mp4'} alt={alt || ''} autoPlay muted loop playsInline />*/}
            {/*}*/}
            <img  className={className ? className : ''} src={src ? src : '/public/images/dynamic/home/banner.mp4'} alt={alt || ''} autoPlay muted loop playsInline />

        </StyledImg>

    );
};

const StyledImg = styled.div`
  position: ${props => props.position || 'absolute'};
  height: ${props => props.height || '100%'};
  width: ${props => props.width || '100%'};
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  bottom: ${props => props.bottom || 0};
  right: ${props => props.right || 0};
  margin: ${props => props.margin || 0};
  overflow: hidden;
  background-repeat: repeat !important;

  img{
    width: 100%;
    height: 100%;
    object-fit: ${props => props.objectFit || 'cover'};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //transform-origin: top;
  }
`;


export default VideoBanner;