'use client'
import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";
import {White} from "@/styles/globalStyleVars";

const MyComponent = ({data }) => {

    return (
        <StyledMyComponent className={'pt-120 pb-120'}>
            <Container>
                <Row>
                    {
                        data?.posts?.list && data?.posts?.list?.length>0 &&
                        data?.posts?.list?.map((element)=>{
                            return(
                                <Col lg={4} md={12}>
                                    <div className="single-item">
                                        <div className="wrapper">
                                            <div className="content-wrapper">
                                                <div className="single-item-img">
                                                    <img src={element?.images?.[0]?.full_path} alt=""/>
                                                </div>
                                                <div>
                                                    <h4>{reactHtmlParser(element?.data?.subtitle)}</h4>
                                                    <p>{reactHtmlParser(element?.data?.description ? element?.data?.description : element?.data?.short_desc)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`

    position: relative;
    overflow: hidden;


    &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 50%;
        bottom: 0;
        background-color: #EFF1ED;
        z-index: -1;
    }

    


    .single-item {
        transition: transform 0.3s ease;
        background: #629D59 !important;
        height: 100%;
        border-radius: 20px;
        .wrapper {
            padding: 24px;
            height: 90%;
            .content-wrapper {
                height: 100%;
                width: 100%;

            }
        }

        .single-item-img {
            height: 56px;
            width: 56px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
            background: ${White};
        }

        h4 {
            color: ${White};
            font-family: "Inter";
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 33.6px */
            margin-bottom: 15px;
        }
        p{
            color: ${White};
            margin-bottom: 0px;
            text-align: start;
            font-size: 18px;
        }
    }
    .col-lg-4{
        //height: 100%;

        .single-item{
            height: 100%;
            border-radius: 20px;
        }
    }

    @media(max-width: 767px){
        .col-lg-4{
            margin-bottom: 20px;
        }
    }
    
    @media(min-width: 768px) and (max-width: 991px){
        .col-md-12{
            margin-bottom: 20px;
        }
    }

`;

export default MyComponent;














