'use client'
import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import Title from "@/components/common/Title/Title";
import MainButton from "@/components/common/Buttons/MainButton";
import reactHtmlParser from "react-html-parser";

const MyComponent = ({data, noButton}) => {

    console.log(data);
    return (
        <StyledMyComponent className={'pt-80 pb-100'}>
            <Container>
                <Row>
                    <Col lg={2} md={12}></Col>
                    <Col lg={8} md={12} className='middlexsection'>
                        <Title text={data?.section_data?.subtitle}/>
                        <p className={'fade-up'}>{reactHtmlParser(data?.section_data?.description)}</p>
                        {
                          !noButton &&
                        //   <MainButton
                        //     text={data?.section_data?.short_desc ? data?.section_data?.short_desc : 'Learn More About Us'}
                        //     src={'/about-us'}
                        //   />

                         <MainButton
                            className={'learnmorebutton'}
                            text={'Learn More'}
                            src={'/about-us'}
                            
                          />
                        }
                    </Col>
                    <Col lg={2} md={12}></Col>
                </Row>
            </Container>
        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`
    
    p{
        margin-bottom: 40px;
    }
    h2{
        font-weight: 600;
        font-size: 35px;
    }
    .cibffa{
        margin:0 auto;
    }
    .title {
        margin: 0 0 15px 0;
    }
    .learnmorebutton{
        margin:0 auto;

    }
      .learnmorebutton a{
        margin:0 auto;
        
    }
`;


export default MyComponent;














