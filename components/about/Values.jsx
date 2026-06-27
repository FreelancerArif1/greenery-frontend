"use client";
import React, {useEffect} from 'react';
import styled from "styled-components";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";
import {BsChevronDown} from "react-icons/bs";
import {Img} from "../common/Image/Img";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";
import Title from '@/components/common/Title/Title';
import { Bg, Black, Green } from '@/styles/globalStyleVars';
gsap.registerPlugin(ScrollTrigger);

const MyComponent = ({reverse, background, title, image, item, id,data}) => {

  useEffect(() => {
    let getAllBtn = document.querySelectorAll('.business-domain-page .accordion-header');
    getAllBtn.forEach(e => {
      e.addEventListener('click', function (i) {
        ScrollTrigger.refresh()

      });

    })

  }, [title, item])


  const centerImage=data?.images?.list?.find((e)=>e?.thumb=="on");
  const left_image=data?.images?.list?.find((e)=>e?.left_image=="on");
  const right_image=data?.images?.list?.find((e)=>e?.right_image=="on");


  return (
    <StyledComponent className={`pt-160 pb-160 divider`} background={background} id={`${id ? id : 'Strength'}`}>
      <img className={'about-right'} src={'/images/static/about-right.png'}/>
      <Container>
        <Row>
          <Col md={12}>
            <Title
              text={data?.section_data?.subtitle}
              margin={'0 0 60px 0'}
            />
          </Col>
        </Row>
        <Row className={`address__row ${reverse ? 'flex-row-reverse' : ''}`}>
          <Col md={reverse ? { span: 5, offset: 1 } : { span: 5 }} className={'address__image'}>
            <div className="address__img">
              <Img src={left_image?.full_path} />
            </div>
            <img data-speed={0.85} className={'right-img'} src={right_image?.full_path} />
            <img data-speed={0.9} className={'center-img'} src={centerImage?.full_path} />
            <img data-speed={0.9} className={'stone'} src={'/images/static/stone.png'} />

          </Col>
          <Col className={` fade-up address__accordion`}
               md={reverse ? { span: 6} : {span: 6, offset: 1}}>
            <Accordion defaultActiveKey="0">
              {
                data?.posts?.list && data?.posts?.list?.length > 0
                && data?.posts?.list.map((element, index) => {
                  return (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>
                        {reactHtmlParser(element?.data?.subtitle)}
                        <span><BsChevronDown/></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>{reactHtmlParser(element?.data?.short_desc)}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })
              }


            </Accordion>
          </Col>
        </Row>
      </Container>

    </StyledComponent>
  );
};
const StyledComponent = styled.section`
  background: ${Bg};
    position: relative;
    overflow: hidden;
    
    .about-right{
        position: absolute;
        top: 0;
        right: 0;
    }

  .accordion-item {

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
    
    .address__image{
        position: relative;
        
        .right-img{
            position: absolute;
            bottom: -80px;
            right: -5%;
           
        }
        .center-img{
            position: absolute;
            bottom: -50px;
            right: 25%;
            z-index: 1;
        }
        
        .stone{
            position: absolute;
            bottom: -40px;
            right: 45%;
            z-index: 2;
        }
    }

  .accordion-header {
    position: relative;
    margin: 0;

      color: #1C220D;

      /* Sub header */
      font-family: "Roboto Slab";
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.48px;

    button {
      border: none;
      background-color: transparent;
      padding-left: 0;
      color: ${Black};
      padding-top: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid rgba(193, 193, 193, 0.5);
      width: 100%;
      text-align: left;
      transition: all .4s ease;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.48px;

      span {
        color: white !important;
        background-color: ${Green};
      }

      &.collapsed {
        color: ${Black};
        border-color: rgba(193, 193, 193, 0.5);
        background: transparent;
          color: #1C220D;

          /* Sub header */
          font-family: "Roboto Slab";
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.48px;
        
        span {
          background-color: transparent;
          color: ${Green} !important;


          svg {
            transform: rotate(0deg);
          }

          &:after {
            background-color: transparent;
          }
        }
      }
    }

    span {
      position: absolute;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      border: 1px solid ${Green};
      color: black;
      background-color: transparent;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 30px;

      &:after {
        height: 0;
        width: 0;
        background-color: ${Green};
        border-radius: 50%;
        opacity: 0;
        transition: all .4s ease;
        content: '';
        position: absolute;

        svg {
          color: white !important;

        }
      }

      svg {
        font-size: 13px;
        z-index: 2;
        transform: rotate(180deg);

      }

    }

    &:hover {
      span {
        &:after {
          height: 100%;
          width: 100%;
          opacity: 1;
        }
      }

      button {
        color: ${Black};
        border-color: rgba(193, 193, 193, 0.5);
      }
    }
  }

  .accordion-body {
    padding-top: 20px;
    padding-bottom: 40px;

    p {
        color: #4E5833;

        /* Body */
        font-family: "Roboto Slab";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 21.6px */
        letter-spacing: -0.36px;
      width: 100%;
    }

    .custom-list {
      padding: 0;

      li {

        position: relative;
        padding-left: 20px;
        //padding-top: 20px;
        &:not(:last-child) {
          padding-bottom: 0px;
        }

        &:before {
          content: '';
          position: absolute;
          top: 12px;
          left: 0;
          margin-top: -5px;
          width: 6px;
          height: 6px;
          box-sizing: content-box;
          background-color: #061524;
        }
      }

    }

    h4 {
      font-size: 16px;
      line-height: 22px;
      color: rgba(34, 31, 31, 0.2);
      margin: 0 0 10px 0;
    }

    p, a {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    }

    .contact-numbers {
      margin-top: 45px;

      ul {
        li {
          a {
            margin-bottom: 13px;
            display: flex;

            span {
              font-size: 26px;
              font-weight: bold;
              line-height: 32px;
              transition: .3s ease;
            }

            &:hover span {
              color: ${Black};
            }
          }

          &:nth-last-of-type(1) {
            margin-bottom: 0;
          }
        }
      }
    }

    .map {
      margin-top: 45px;

      iframe {
        width: 100%;
        height: 350px;
      }
    }
  }


  .address__img {
    position: relative;
    padding-top: calc(530 / 530 * 100%);
  }


  @media (max-width: 768px) {
    .address__accordion {
      min-width: 100%;
    }
      
      .address__image{
          display: none;
      }

    .address__form {
      min-width: 100%;
      margin-top: 60px;
    }
  }

  @media (max-width: 767px) {
      .address__image,.about-right{
          display: none;
      }
    //
    //.address__row {
    //  flex-direction: column-reverse;
    //}
    .address__accordion {
      margin-top:0px;
    }

    .address__form {
      margin-top: 0;
      margin-bottom: 60px;
    }

    .contact-numbers {
      flex-wrap: wrap;

      .col-sm-4 {
        min-width: 50%;

        &:nth-last-child(1) {
          margin-top: 30px;
          padding-left: 0;
        }
      }
    }
  }
`
export default MyComponent;