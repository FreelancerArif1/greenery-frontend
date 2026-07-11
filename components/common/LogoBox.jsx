'use client'
import React, {useEffect, useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reactHtmlParser from "react-html-parser";
import {White} from "@/styles/globalStyleVars";
import Title from "@/components/common/Title/Title";
import MainButton from "@/components/common/Buttons/MainButton";

gsap.registerPlugin(ScrollTrigger);
const MyComponent = ({data, classes}) => {

    return (
        <StyledComponent className={`home-studio ${classes}`} id={'about'}>
            <Container>
                {
                    data?.section_data?.subtitle &&
                    <Row>
                        <Col lg={2}></Col>
                        <Col className='text-center' lg={8}>
                            <Title
                              margin={'0 0 30px 0'}
                                text={data?.section_data?.subtitle}/>
                            <p className='justifyClass'>GreeneryES empowers partners with globally certified clean-energy technologies and the operational backbone of the Livenza Group. Whether you focus on solar, storage, HVAC, or EV charging, our ecosystem helps you scale your business with confidence.</p>
                            <div className="beapartner">
                                <MainButton
                                margin={'40px 0 0 0'}
                                src={'/partnership'}
                                text={'Be a partner'}/>
                            </div>
                            
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                }

                <Row className="card-row g-4">
                    {
                        data?.posts?.list?.map((element, index) => {
                            return (
                                <Col lg={3} md={6} key={index}>
                                    <div className="single-item">
                                        <div className="wrapper">
                                            <div className="content-wrapper">
                                                <div className="single-item-img">
                                                    <img src={element?.images?.[0]?.full_path} alt=""/>
                                                </div>
                                                <h3>{reactHtmlParser(element?.data?.subtitle)}</h3>
                                                <p>{reactHtmlParser(element?.data?.description ? element?.data?.description : element?.data?.short_desc)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>

        </StyledComponent>
    );
};

export default MyComponent;

const StyledComponent = styled.section`
    .beapartner, .beapartner .dc-btn{
        margin:0 auto !important;
        padding-top: 20px;
            height: 70px;
    }

    position: relative;
    overflow: hidden;
    //background-color: #FBFBFB;

    .container {
        position: relative;
        z-index: 11;
    }
    
    h4 {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: -0.38px;
        color: #1E1E1E;
        margin-bottom: 27px;
        @media (max-width: 767px) {
            font-size: 18px;
            line-height: 27px;
        }
    }

    p {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: -0.342px;
        color: #1E1E1E;
    }

    .card-row {
        margin-top: 40px;
        min-height: 400px;
        
        .single-item {
            transition: transform 0.3s ease;
            .wrapper {
                padding: 15px;
                // height: 100%;
                border-radius: 12px;
                border: 1.25px solid #629D59;

                //transition: all .5s;
                //clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                .content-wrapper {
                    height: 100%;
                    width: 100%;
                    text-align: justify;
                    //transform-origin: center;
                }
                //&:hover{
                //    transform: translate3d(0vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                //    transform-style: preserve-3d;
                //    clip-path: polygon(5% 5%, 95% 2%, 95% 95%, 5% 98%);
                //    background-color: rgb(0,0,0) !important;
                //    color: white !important;
                //    h3,p{
                //        color: white !important; 
                //    }
                //}
            }

            .single-item-img {
                height: 56px;
                width: 56px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;   
                margin: 20px auto;            
                
            }

            h3 {
                color: #000;

                /* Medium/bodyXL */
                font-family: "Inter";
                font-size: 17px;
                font-style: normal;
                font-weight: 600;
                line-height: 140%; /* 33.6px */
                margin-bottom: 15px;
            }          
            background: ${White};
        }
    }
    .col-md-6{
        //height: 100%;
        margin-bottom: 30px;
        .single-item{
            height: 100%;
        }
    }
    @media(max-width: 991px){
        .single-item{
            margin-bottom: 20px;
        }
        h2{
            font-weight: 500;
        }
    }
    
    @media(max-width: 767px){
        padding-top: 75px;
        padding-bottom: 80px;
        .col-md-3{
            margin-bottom: 30px;
        }
        .single-item{
            margin-bottom: 20px;
        }
        .left{
            margin-top: 27px;
        }
    }

    h2{
        font-size: 25px;
        font-weight: 600;
        text-transform:uppercase;
    }
    
    
`;
