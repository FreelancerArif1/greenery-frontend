"use client"
import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import { Img } from '@/components/common/Image/Img';
import reactHtmlParser from "react-html-parser";
import { Bg, DarkBlue, White } from '@/styles/globalStyleVars';

const MyComponent = ({data, missionVision}) => {

  return (
    <StyledComponent className={'mission-vision '}>
      <div className={'bg'}>
        <div className={'mission-vision__img'}>
          <Img noParallax src={data?.images?.list?.[0]?.full_path} />
        </div>
      </div>
      <Container>
        <Row className={'mission-vision__text'}>
          <Col lg={{ offset: 2, span: 8 }} md={12} className={'text-center'}>
            <h2>{reactHtmlParser(data?.section_data?.subtitle)}</h2>
            <p className={'fade-up'}>{reactHtmlParser(data?.section_data?.short_desc)}</p>
          </Col>
        </Row>
      </Container>

      <div className="mission-vision__box">
        <Container>
          <Row>
            <Col lg={{span:10,offset:1}} md={12}>
              <div className="mission-vision__box__inner d-flex flex-wrap">
                <img data-speed={0.85} className={'ring'} src={'/images/static/gegrws-1.png'} />
                {
                  data?.posts?.list && data?.posts?.list?.length > 0 &&
                  data?.posts?.list.map((item, index) => {
                    return (
                      <Col key={index} className={'fade-up'}>
                        <h2 className={'split-up'}>{item?.data?.subtitle}</h2>
                        <p>{item?.data?.short_desc}</p>
                      </Col>
                    );
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </StyledComponent>
  );
};

const StyledComponent = styled.section`
    position: relative;
    overflow: hidden;
    padding-top: 140px;
    background-color: ${Bg};
    will-change: transform;
    

    /* Tint only on the ImageParallax area */
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;        
        height: calc(100% ); /* Stops before mission-vision box */
        //background-color: rgba(0, 0, 0, 0.4); /* Dark tint - adjust color and opacity as needed */
        background: linear-gradient(182deg, #0F1217 19.96%, rgba(24, 29, 36, 0.72) 98.44%), lightgray 50% / cover no-repeat;
        mix-blend-mode: darken;
        z-index: 1;
        pointer-events: none;
    }

    .container {
        position: relative;
        z-index: 2;
    }

    .bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        img{
            width: 100%;
        }
        .mission-vision__img {
            position: relative;
            padding-top: calc(817/1366*100%);
        }
    }


    .mission-vision__text {
        margin-bottom: 96px;
        
        h2{
            color: #EDEAE1;
            text-align: center;

            /* H3 */
            font-family: "Roboto Slab";
            font-size: 72px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 86.4px */
            letter-spacing: -1.44px;
            margin-bottom: 50px;
        }

        p {
            //width: 70%;
            margin: auto;
            color: #EDEAE1;
        }
    }

    .mission-vision__box {
        position: relative;
        z-index: 2;
        
       
        &:after {
            content: '';
            position: absolute;
            height: 55%;
            background-color: ${Bg};
            left: 0;
            bottom: -10%;
            width: 100%;
        }

        &__inner {
            background-color: ${DarkBlue};
            padding: 76px 73px;
            position: relative;
            z-index: 2;

            .ring{
                position: absolute;
                top: -10px;
                right: -30px;
            }


            h2 {

                color: #EDEAE1;

                font-size: 32px;
                font-style: normal;
                font-weight: 500;
                line-height: 28px; /* 87.5% */
                margin-bottom: 20px;
            }

            p {
                color: #EDEAE1;                
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%; /* 21.6px */
                max-width: 90%;
            }
        }
    }
    
    @media (min-width: 1550px) {
        .mission-vision__box {
            &:after{
                height: 100%;
                bottom: -70%;
            }
        }
        
    }

    @media (max-width: 991px) {
        .mission-vision__text {
            margin-bottom: 100px;

            p {
                width: 100%;
            }
        }

        .mission-vision__box__inner {
            padding: 50px;
        }
    }

    @media (max-width: 769px) {
        .mission-vision__box__inner {
            padding: 40px 10px;

            p {
                width: 100%;
                max-width: unset;
                font-size: 18px;
            }

        }
        
        h2{
            font-size: 44px !important;
        }
    }

    @media (max-width: 650px) {
        .title {
            margin-bottom: 30px;
        }

        .text-center {
            text-align: left !important;
        }

        .mission-vision__box__inner {
            .col {
                min-width: 100%;
                margin-bottom: 40px;

                &:nth-last-of-type(1) {
                    margin-bottom: 0;
                }
            }

            h2 {
                font-size: 24px;
                line-height: 50px;
                margin-bottom: 10px;
            }

        }

        .mission-vision__text {
            margin-bottom: 80px;
        }
    }

`;

export default MyComponent;
