"use client"
import React from 'react';
import styled from 'styled-components';
import Link from "next/link";
import { Green, hover, Red, White } from '@/styles/globalStyleVars';


const ButtonRound = ({
                       onSubmit,
                       text,
                       src,
                       img,
                       hoverImg,
                       fontSize,
                       fontWeight,
                       color,
                       letterSpacing,
                       lineHeight,
                       margin,
                       background,
                       borderRadius,
                       border,
                       width,
                       height,
                       hoverBackground,
                       target,
                       borderColor,
                       hoverColor
                     }) => {


  return (
    <StyledBtn className={`dc-btn fade-up`}
               fontSize={fontSize}
               fontWeight={fontWeight}
               color={color}
               background={background}
               lineHeight={lineHeight}
               letterSpacing={letterSpacing}
               margin={margin}
               border={border}
               img={img}
               borderRadius={borderRadius}
               width={width}
               hoverImg={hoverImg}
               hoverBackground={hoverBackground}
               height={height}
               borderColor={borderColor}
               target={target}
               hoverColor={hoverColor}
               onSubmit={onSubmit}
    >
      {src ? (
        <Link href={src || '/'}>
          <span> {text}  </span>
        </Link>
      ) : (
        <Link href={'javascript:void(0)'}>
          <span> {text}  </span>
        </Link>
      )}
    </StyledBtn>
  )
};

const StyledBtn = styled.div`
    &.dc-btn {
        margin: ${props => props.margin || '0'};
        width: ${props => props.width || '150'}px;
        height: ${props => props.height || '150'}px;
        cursor: pointer;

        a {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            font-size: ${props => props.fontSize || '16'}px;
            font-weight: ${props => props.fontWeight || 600};
            margin: 0;
            line-height: ${props => props.lineHeight || '19.2'}px;
            position: relative;
            border: 2px solid ${props => props.borderColor || White };
            border-radius: ${props => props.borderRadius || '50%'};
            overflow: hidden;
            z-index: 0;
            transition: border .3s ease;
            box-sizing: border-box;
            letter-spacing: -0.32px;


            span {
                transition: color .3s ease;
                color: ${props => props.color || `${hover}`};
                position: relative;
                z-index: 10;
            }
            svg{
                z-index: 10;
            }
            img{
                margin-left: 5px;
            }


            &:before {
                bottom: 0;
                content: "";
                display: block;
                position: absolute;
                right: 0;
                top: 0;
                left: 0;
                background-color: ${props => props.background || `transparent`};
                height: 100%;
                width: 100%;
                margin: auto;
                transition: all 0.6s cubic-bezier(0.42, 0, 0.35, 1.09);
                border-radius: 50%;
                opacity: 1;
                z-index: 5;
            }
            &:after {
                bottom: 0;
                content: "";
                display: block;
                position: absolute;
                right: 0;
                top: 0;
                left: 0;
                height: 0%;
                width: 0%;
                margin: auto;
                transition: all 1s cubic-bezier(0.42, 0, 0.35, 1.09);
                border-radius: 50%;
                opacity: 1;
                background-color: ${props => props.hoverBackground || Green};
            }

            &:hover {
                span {
                    color: ${props => props.hoverColor || `${White}`};
                }

                svg {
                    line {
                        stroke: ${props => props.hoverColor || '#FFF'};
                    }
                }

                &:before {
                    height: 0%;
                    width: 0%;
                }
                &:after{
                    height: 100%;
                    width: 100%;
                }
            }

            &:focus {
                color: #222222;
            }
        }
    }

    @media(max-width: 767px){
        &.dc-btn{
            width: ${props => props.width || '125'}px;
            height: ${props => props.height || '125'}px;
            a{
                font-size: ${props => props.fontSize || '16'}px;
                padding: 16px 14px;

            }
        }
    }

`;


export default ButtonRound;