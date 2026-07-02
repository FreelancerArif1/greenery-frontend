'use client'
import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";
import {White,hover} from "@/styles/globalStyleVars";
import Link from 'next/link';

const MyComponent = ({data }) => {

    return (
        <StyledMyComponent className={'pt-100 pb-50'}>
            <Container>
                <Row  className={'pb-80'}>
                    <Col md={{span:8,offset:2}}>
                        <h2 className={'split-up'}>{data?.section_data?.subtitle}</h2>
                        <p className={'fade-up'}>{data?.section_data?.short_desc}</p>
                        <div className={'d-flex align-items-center justify-content-center'}>
                            <img src={data?.images?.list?.[0]?.full_path}/>
                        </div>
                    </Col>
                </Row>
                {/* <Row>
                    {
                        data?.posts?.list && data?.posts?.list?.length>0 &&
                        data?.posts?.list?.map((element)=>{
                            return(
                                <Col lg={6} md={6}>
                                    <Link href={`/renewable-energy/${element?.data?.btn_link ? element?.data?.btn_link : '#'}`} className="single-item">
                                        <div className="wrapper">
                                            <div className="content-wrapper">
                                                <div className="single-item-img">
                                                    <img src={element?.images?.[0]?.full_path} alt=""/>
                                                </div>
                                                <div>
                                                    <h4 className={'split-up'}>{reactHtmlParser(element?.data?.subtitle)}</h4>
                                                    <p className={'fade-up'}>{reactHtmlParser(element?.data?.description ? element?.data?.description : element?.data?.short_desc)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            )
                        })
                    }

                </Row> */}
            </Container>


        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`
    h2,p{
        text-align: center;
    }

    h2{
         margin-bottom: 15px;
        font-weight: 600;
        font-size: 35px;
    }
    p{
        margin-bottom: 74px;
    }

    .single-item {
        transition: transform 0.3s ease;
        color: #000000 !important;
        .wrapper {
            padding: 32px 24px;
            height: 100%;
            border-radius: 20px;
            border: 1.25px solid #629D59;
            transition: 0.5s ease-in-out;
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
            margin-bottom: 90px;

        }

        h4 {
            color: #000;
            transition: 0.5s ease-in-out;
            /* Medium/bodyXL */
            font-family: "Inter";
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 33.6px */
            margin-bottom: 15px;
        }
        background: ${White};
        p{
            margin-bottom: 0px;
            text-align: start;
        }
        &:hover{
            color: #FFF !important;
            .wrapper{
                background-color: ${hover} !important;
                h4{
                    color: #FFF !important;
                }
            }
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
        .col-md-6{
            margin-bottom: 30px;
        }
    }
  
`;


export default MyComponent;














