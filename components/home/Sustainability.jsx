'use client'
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import Title from "@/components/common/Title/Title";
import {Img} from "@/components/common/Image/Img";
import reactHtmlParser from 'react-html-parser';

const MyComponent = ({data}) => {

    let [offset, setOffset] = useState(90)

    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth > 767) {
                const container = document.querySelector('.container');
                if (container) {
                    setOffset(container.offsetLeft + 15);
                }
            }
        };

        updateOffset();
    }, []);

    return (
        <StyledMyComponent className={'sustainability pt-120'} offset={offset}>
            <Container className={'pb-80'}>
                <Row>
                    <Col lg={5}>
                        <Title
                            margin={'0 0 0 0'}
                            marginSm={'0 0 20px 0'}
                            text={data?.section_data?.subtitle}/>
                    </Col>
                    <Col lg={{span:6,offset:1}}>
                        <p className={'fade-up'}>{data?.section_data?.short_desc}</p>
                        {/*<MainButton*/}
                        {/*    text={"Learn More"}*/}
                        {/*    src={'/about'}*/}
                        {/*    background={'transparent'}*/}
                        {/*    border={`1px solid ${hover}`}*/}
                        {/*    color={hover}*/}
                        {/*    margin={'40px 0 0 0'}*/}
                        {/*/>*/}
                    </Col>
                </Row>
            </Container>
            <Container >
                <Row className={'sustainability__left'} >
                    <Col lg={{span:6}}>
                        <div className={'sustainability__stats'}>
                            {
                                data?.posts?.list?.length > 0 &&
                                data?.posts?.list?.map((item, index) => {
                                    return(
                                      <div className={'single'}>
                                          <h3 className={'split-up'}>{reactHtmlParser(item?.data?.short_desc)}</h3>
                                          <p className={'fade-up'}>{reactHtmlParser(item?.data?.subtitle)}</p>
                                      </div>
                                    )
                                })
                            }

                        </div>

                    </Col>
                    <Col lg={6}>
                        <div className={'sustainability__img'}>
                            <Img src={data?.images?.list?.[0]?.full_path}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`
    position: relative;
    overflow: hidden;
    
    padding-bottom: 80px;
    .sustainability__stats{
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 50px 0;
        // padding-left: ${props=>props.offset}px;
        .single{
            padding: 20px 0;
        }
    }
    .sustainability__img{
        position: relative;
        padding-top: calc(550/719 *100%);
        border-radius: 20px;
        .global-image{
            border-radius: 20px;
            img{
                border-radius: 20px;

            }
        }
    }
    
    .col-lg-6{
        padding-right: 0px;
    }
    
    .sustainability__left{
        .col-lg-5{
            padding-left: 0px;
        }
    }
    
    
    
    @media(max-width: 991px){
        .sustainability__left{
            flex-direction: column-reverse;
        }
        .sustainability__stats{
            padding-top: 0;
            padding-bottom: 80px;
            padding-left: 15px;
            div{
                &:not(:last-child){
                    margin-bottom: 30px;
                }
            }
        }
        .sustainability__img{
            padding-top: calc(280/335 *100%);
            margin-bottom: 60px;
        }
        .global-image{
            border-radius: 20px;
        }
        .col-lg-6{
            padding-left: 15px;
            padding-right: 15px;
        }
    }
    
    @media(max-width: 767px){
        padding-bottom: 0;
    }
  
`;


export default MyComponent;














