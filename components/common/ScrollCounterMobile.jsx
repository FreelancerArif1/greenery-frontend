'use client'
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";


const MyComponent = ({data}) => {


    return (
        <StyledComponent className={'post-wrap'}>
            <Row>
                <Col>
                    {
                        data?.posts?.list?.map((item,index) => {
                            return (
                                <div className="mobile-counter__single" key={index}>
                                    <h2>{item?.data?.short_desc}</h2>
                                    <p>{item?.data?.subtitle}</p>
                                </div>
                            )
                        })
                    }

                </Col>
            </Row>
        </StyledComponent>
    );
};

export default MyComponent;

const StyledComponent = styled.section`
    
    .mobile-counter__single{ 
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
        padding-bottom: 20px;
        h2{
            font-size: 48px;
            font-style: normal;
            font-weight: 600;
            line-height: 48px;
            color: #285E2F;
            margin-bottom: 10px;
        }
        p{
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            color: rgba(0,0,0,0.7);
        }
    }
`;
