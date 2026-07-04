import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ReactHtmlParser from "react-html-parser";
import {usePathname} from "next/navigation";
import { Black, DarkBlue, hover, White } from '@/styles/globalStyleVars';

const MyComponent = ({
                         borderColor,
                         nameofClass,
                         svg,
                         height,width,
                         background,hoverBackground
                     }) => {
    const [isProjectPage, setIsProjectPage] = useState(false);
    const [isLandowner, setIsLandowner] = useState(false);

    const location=usePathname();

    useEffect(() => {

        if(location?.pathname==='/projects') {
            setIsProjectPage(true)
        }
        else setIsProjectPage(false)
        const currentPath = window.location.pathname;
        if (currentPath.includes("/media-center/")) {
            setIsLandowner(true)
        }
        else  setIsLandowner(false)

    }, [location?.pathname]);

    return (
        <StyledComponent
            borderColor={borderColor}
            height={height}
            width={width}
            background={background }
            hoverBackground={hoverBackground}
            isProjectPage={isProjectPage} isLandowner={isLandowner}
        >
             <span className={'circle '+nameofClass}>
                 {ReactHtmlParser(svg)}
             </span>
        </StyledComponent>
    );
};

const StyledComponent = styled.div`

  cursor: pointer;
   

  .circle {
      background: ${p => p.background || hover};
    height: ${p => p.height || 50}px;
    width: ${p => p.width || 50}px;
    border-radius: 50%;
    // border: 1px solid ${p => p.isProjectPage || p.isLandowner ? `${text}` : (p.borderColor || `${Black}`)};

    // border: 1px solid ${p => p.borderColor || `${Black}`};
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1.01);
      transition: all 0.4s;
    &:hover{
        transform: translateY(-3px) scale(1.1);
      svg{
        path{
          // stroke: ${p => p.isProjectPage || p.isLandowner ? `${White}`: ''};
          // fill: ${hover};
        }
          z-index: 9999;

      }
    }
  }
  .hover {
    position: relative;
    overflow: hidden;

    .path {
      transition: fill 0.5s ease, stroke 0.5s ease;
    }
      &:after {
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
          right: 0;
          top: 100%;
          margin: 0;          
          background-color: ${p => p.hoverBackground || White};
          transition: all .5s ease;
          border-radius: 50%;
      }

      &:hover {
          &:after {
              top: 0;
          }
      }

    &.disabled {
      background-color: transparent !important;
      border: 1px solid #222222 !important;
      cursor: default;
      opacity: 0.9;
      &:after {
        display: none;
      }
      svg {
        path {
          fill: #222222;
        }
      }
    }
  }

  .logofacebook, .logofacebook:hover{
    background:#1877F2;
  }
  .logoinstagram, .logoinstagram:hover{
    background: linear-gradient(
  45deg,
  #F58529,
  #FEDA77,
  #DD2A7B,
  #8134AF,
  #515BD4
);
  }
  .logolinkedin, .logolinkedin:hover{
    background:#0A66C2;
  }
  .logoyoutube, .logoyoutube:hover{
    background:#FF0000;
  }
  
`;
// Pass a svg with a classname in the path named class="path";

export default MyComponent;
