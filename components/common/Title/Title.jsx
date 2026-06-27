'use client'
import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from "react-html-parser";
import {GlobalFont} from "@/styles/globalStyleVars";

const Title = ({
                   text,
                   fontSize,
                   fontWeight,
                   color,
                   letterSpacing,
                   lineHeight,
                   textTransform,
                   margin,
                   padding,
                   borderColor,
                   varient,
                   center,
                   classname,
                   marginSm,
                   width,paddingBottom
               }) => {


    return (

        <StyledTitle className={`title ${classname}`}
                     fontSize={fontSize}
                     fontWeight={fontWeight}
                     color={color}
                     lineHeight={lineHeight}
                     LetterSpacing={letterSpacing}
                     textTransform={textTransform}
                     margin={margin}
                     padding={padding}
                     varient={varient}
                     center={center}
                     marginSm={marginSm}
                     width={width}
                     paddingBottom={paddingBottom}
                     borderColor={borderColor}>
            <h2 className={'split-up'}>{ReactHtmlParser(text)} </h2>
        </StyledTitle>

    )
};


const StyledTitle = styled.div`
    margin: ${props => props.margin || '0 0 40px 0'};
    position: relative;
    font-family: ${GlobalFont};
    text-align: ${props => props?.center ? 'center' : ''};
    padding: ${p => p.padding};
    overflow:hidden;
    h2 {
        font-size: ${props => props.fontSize || 56}px;
        line-height: ${props => props.lineHeight || 75.6}px;
        font-weight: ${props => props.fontWeight || '500'};
        color: ${props => props.color || "#000"};
        line-height: 135%; /* 75.6px */
        overflow:hidden;
        span {
            font-weight: 700;
        }
    }


    @media (max-width: 767px) {
        margin: ${props => props.marginSm || '0 0 20px 0'};
        h2 {
            // font-size: ${props => props.fontSize || 40}px ;
            // line-height: ${props => props.lineHeight || 60}px;
            font-size: 38px !important;
            font-weight: 400;
            line-height: 120%; /* 45.6px */
            letter-spacing: -0.76px;    
            
            br{
                display: none;
            }
        }
    }
`;


export default Title;














