'use client'
import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";

const MyComponent = ({data}) => {

    return (
        <StyledMyComponent className={''}>
            <Container>
                <Row>
                    <Col lg={{span:6,offset:3}} md={12} className={'text-center'}>
                        <h1>{reactHtmlParser(data?.section_data?.subtitle)}</h1>
                        <p>{reactHtmlParser(data?.section_data?.short_desc)}</p>
                    </Col>
                </Row>
            </Container>
        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`
    padding-bottom: 60px;
    padding-top: 160px;
    h1{
        color: #000;
        text-align: center;
        margin-bottom: 20px;
        font-family: "Banana Grotesk";
        font-size: 64px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 83.2px */        
    }
    @media (max-width: 767px) {
        padding-top: 120px;
        h1{
            font-size: 48px;
        }
    }
  
`;


export default MyComponent;














