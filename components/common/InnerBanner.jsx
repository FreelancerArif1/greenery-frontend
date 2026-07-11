'use client'
import React from 'react';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";
import {Img} from "@/components/common/Image/Img";
import { title } from '@/styles/globalStyleVars';

const InnerBanner = ({img, text, title,data}) => {
    // console.log(data);
    return (
        <StyledInnerBanner className='InnerBanner'>
            <Img banner={true} src={img}/>
            <Container>
                <div className="content">
                  <h1 className={`anim-active fade-up`}>{reactHtmlParser(title)}</h1>
                  <p>{reactHtmlParser(text)}</p>
                </div>
            </Container>
        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
    padding-top: calc(489 / 1440 * 100%);
    position: relative;
    background-color: #DDD;

    &:after {
        content: '';
        position: absolute;
        background-color: rgba(0, 0, 0, 0.3);
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
    }

    .container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .content{
            width: 70%; 
        }
    }

    h1 {
        color: #ffffff;
        // font-size: 64px;
        // font-weight: 500;
        // line-height: 84px;


        font-size: 40px;
        font-weight: 600;
        line-height: 60px;
        text-transform: uppercase;

        font-family: ${title};
        //text-transform: capitalize;
        z-index: 2;
        text-align: center;
        margin-bottom: 20px;
        span {
            font-weight: 600;
            color: #ffffff;
        }
    }
    p{
        text-align: center;
        color: #ffffff;
    }

    @media (max-width: 991px){
        padding-top: calc(400 / 375 * 100%);
    }

    @media (max-width: 767px) {
        //padding-top: 0;
        padding-top: calc(606 / 375 * 100%);
        
        .title {
            margin-bottom: 40px !important;
        }
        .content{
            width: 100% !important;
            
            h1{
                font-size: 36px;
                line-height: 130%;
            }
        }
    }

    
`;

export default InnerBanner;
