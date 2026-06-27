"use client"
import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "../common/Image/Img";
import reactHtmlParser from "react-html-parser";
import {White} from "@/styles/globalStyleVars";
import Title from '@/components/common/Title/Title';


const MyComponent = ({datas}) => {

  return (
    <StyledComponent className={'directors pt-160 pb-160'}>
      <img
        data-speed={0.8}
        className={'floating-right'}
        src={'/images/static/career-right.png'}
      />
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <Title text={datas?.section_data?.subtitle}
                   color={White}
                   margin={"0 0 93px 0"}
                   marginSm={'0 0 20px 0'}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        {datas?.posts?.list && datas?.posts?.list?.length>0 &&
          datas?.posts?.list?.map((item,index) => (
            <div key={index} className="directors__single">
              <Row>
                {index % 2 === 0 ? (
                  <>
                    <Col data-lag={0.1} lg={1} className={'directors__single__title '}>
                      <p>{reactHtmlParser(item?.data?.short_desc)}</p>
                    </Col>
                    <Col lg={4} md={12}>
                    <div>
                        <div className={'directors__single__img '}>
                          <Img director src={item?.images?.[0]?.full_path}/>
                        </div>
                      </div>
                    </Col>
                    <Col lg={{span:7}} md={12} className={'directors__single__content'}>
                      <div className={'fade-up'}>
                        {reactHtmlParser(item?.data?.description)}
                      </div>
                      <div className="directors__single__name fade-up" >
                        <p>{item?.data?.subtitle}</p>
                      </div>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col lg={7} md={12} className={'directors__single__content'}>
                      <div className={'fade-up'}>
                        {reactHtmlParser(item?.data?.description)}
                      </div>
                      <div className="directors__single__name fade-up">
                        <p>{item?.data?.subtitle}</p>
                      </div>
                    </Col>
                    <Col lg={{span:4}}  md={12}>
                      <div>
                        <div className={'directors__single__img '}>
                          <Img  src={item?.images?.[0]?.full_path}/>
                        </div>
                      </div>
                    </Col>
                    <Col data-lag={0.1} lg={1} className={'directors__single__title '}>
                      <p>{reactHtmlParser(item?.data?.short_desc)}</p>
                    </Col>
                  </>
                )}
              </Row>
            </div>
          ))}
      </Container>
    </StyledComponent>
  );
};

const StyledComponent = styled.section`
    background: #2E3E28;

    position: relative;
    overflow: hidden;
    
    .floating-right{
        position: absolute;
        right: -2px;
        top: 0px;

        idth: 460.097px;
        height: 354.793px;
    }


    p {
        color: #ffffff;
    }

    .directors__single__content {
        padding-right: 50px;
        //padding-top: 30px;
        img{
            margin-bottom: 30px;
        }

        h4 {
            color: #ffffff;
            font-size: 30px;
            margin-bottom: 20px;
            text-transform: uppercase;

        }
        p{
            color: ${White};

            /* Body */
            font-family: "Roboto Slab";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 21.6px */
            letter-spacing: -0.36px;
            &:not(:last-child){
                margin-bottom: 20px;
            }

        }
    }

    .directors__single {
        &__title{
            writing-mode: vertical-rl;
            color: #EED3B1;
            font-family: "Roboto Slab";
            font-size: 56px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%;
            letter-spacing: -1.0px;
            text-orientation: mixed;
            opacity: 0.12;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                margin: 0;
                white-space: nowrap;
            }

            span {
                color: #EED3B1;
                font-family: "Roboto Slab";
                font-size: 64px;
                font-style: normal;
                font-weight: 400;
                line-height: 120%;
                letter-spacing: -1.0px;
            }
        }

        /* Even index items (0, 2, 4...) - rotate 180deg */
        &:nth-child(odd) {
            .directors__single__title {
                transform: rotate(180deg);
            }
        }

        /* Odd index items (1, 3, 5...) - rotate 60deg */
        &:nth-child(even) {
            .directors__single__title {
                transform: rotate(360deg);
            }
        }

        &__name {
            margin-top: 30px;
            padding-top: 30px;
            // border-top: 1px solid ${White};

            p{
                &:first-child{
                    color: #EED3B1;

                    /* Body */
                    font-family: "Roboto Slab";
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 120%; /* 21.6px */
                    letter-spacing: -0.36px;
                }
                &:last-child{
                    color: #D9D9D9;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 120%; /* 24px */
                }

            }
            p:nth-last-of-type(1) {
                color: #EED3B1;

                /* Body */
                font-family: "Roboto Slab";
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 120%; /* 21.6px */
                letter-spacing: -0.36px;
            }
        }

        &__img {
            padding-top: calc(514/358*100%);
            position: relative;

        }

        &:not(:last-child) {
            margin-bottom: 120px;
        }
    }

    /* Mobile styles - image first, then content */
    @media (max-width: 767px) {
        .col-lg-6 {
            min-width: 100%;
        }

        .row {
            flex-direction: column-reverse !important;
        }

        .directors__single__content {
            padding: 0 15px !important;
            margin-top: 30px;
        }

        .directors__single {
            margin-bottom: 60px !important;
        }
        .directors__single__name {
            margin-bottom: 40px !important;
        }

        .directors__single__title {
            display: none; /* Hide vertical title on mobile if needed */
        }

        .floating-right{
            display: none;
        }
    }

    /* Tablet styles - image first, then content (normal order) */
    @media (min-width: 768px) and (max-width: 991px) {
        .col-lg-6 {
            min-width: 100%;
        }
        
        .directors__single__title{
            display: none;
        }

        /* Even indexed items - normal flex direction (image already comes first in HTML) */
        .directors__single:nth-child(odd) .row {
            flex-direction: column !important;
        }

        /* Odd indexed items - reverse flex direction (image comes second in HTML, so reverse to show first) */
        .directors__single:nth-child(even) .row {
            flex-direction: column-reverse !important;
        }

        .directors__single__content {
            padding: 0 15px !important;
            margin-top: 30px;
        }

        .directors__single__name {
            margin-bottom: 40px !important;
        }
        .title{
            margin-bottom: 30px !important;
        }

        .directors__single__title {
            display: none; /* Hide vertical title on tablet if needed */
        }
    }

    @media (max-width: 767px) {
        .col-lg-6 {
            min-width: 100%;
        }

        .row {
            display: flex;
            flex-direction: column !important;
        }

        /* Set order for all columns to ensure image comes first */
        .directors__single .row > div {
            order: 2; /* Default order for content */
        }

        /* Image column should come first */
        .directors__single .row > div:has(.directors__single__img) {
            order: 1;
        }

        /* Title column should be hidden */
        .directors__single__title {
            display: none !important;
        }

        .directors__single__content {
            padding: 0 15px !important;
            margin-top: 30px;
            order: 2;
        }

        .directors__single {
            margin-bottom: 60px !important;
        }
        .directors__single__name {
            margin-bottom: 40px !important;
        }

        .floating-right{
            display: none;
        }
    }
`;
export default MyComponent;