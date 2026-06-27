'use client'
import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";
import {Img} from "@/components/common/Image/Img";

const MyComponent = ({data }) => {

    return (
        <StyledMyComponent className={'about-banner'}>
            <Container>
                <Row>
                    <Col lg={{span:8,offset:2}} className={'text-center fade-in'}>
                        <h1>{data?.section_data?.subtitle}</h1>
                        <p>{reactHtmlParser(data?.section_data?.short_desc)}</p>
                    </Col>
                    <Col md={12} className={'fade-up'}>
                        <div className={'about-banner__img'}>
                            <Img noParallax src={data?.images?.list?.[0]?.full_path}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`

    background: #EFF1ED;
    padding-top: 180px;

    @keyframes scaleUpFade {
        from {
            opacity: 0;
            transform: scale(0.85);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .about-banner{
        &__img{
            position: relative;
            padding-top: calc(256/1370 *100%);
            animation: scaleUpFade 0.8s ease-out forwards;
            .global-image{
                border-radius: 20px !important;
            }
        }
    }

    .fade-in {
        animation: scaleUpFade 0.8s ease-out forwards;
    }

    h1{
        color: #000;
        text-align: center;
        font-family: "Banana Grotesk";
        font-size: 64px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 83.2px */
        margin-bottom: 20px;

        @media(max-width: 767px){
            font-size: 36px;
        }
    }
    p{
        margin-bottom: 30px;
    }

    @media(max-width: 767px){
        padding-top: 150px;
        .about-banner{
            &__img{
                padding-top: calc(309/335 *100%);
            }
        }
    }


`;


export default MyComponent;