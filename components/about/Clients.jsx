"use client";
import React, {useEffect} from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import {hover} from "@/styles/globalStyleVars";

import reactHtmlParser from "react-html-parser";
export default function Partners({data}) {

    const emblaOptions = { loop: true }
    const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [
        AutoScroll({ playOnInit: true }) // Auto-scroll starts automatically
    ])

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        emblaApi.on('reInit', () => {
            autoScroll.play() // Ensure autoplay resumes after reinitialization
        })
    }, [emblaApi])

    return (
        <StyledComponent className="partners">
            <Container fluid className={'slider'}>
                <Row>
                    <Col lg={4} className={'partners-top'}>
                        <h3>{reactHtmlParser(data?.section_data?.subtitle)}</h3>
                    </Col>
                    <Col lg={8}>
                        <div className="embla">
                            <div className="embla__viewport" ref={emblaRef}>
                                <div className="embla__container">
                                    {
                                        data?.images?.list?.map((item, index) => {
                                            return (
                                                <div className="embla__slide" key={index}>
                                                    <div className="embla__slide__image">
                                                        <img src={item?.full_path} alt={`partner${index + 1}`}/>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </StyledComponent>
    );
}
const StyledComponent = styled.section`
    
    will-change: transform;
    padding-top: 3px;
    margin-top: -3px;
    overflow:hidden;
    
    @media(max-width: 767px){
        overflow: hidden;
    }

    .partners-top {
        background: ${hover};
        display: flex;
        justify-content: center;
        align-items: center;
        h3{
            color: #FFF;
            font-family: "Inter";
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 33.6px */
        }

        @media(max-width: 767px){
            justify-content: start;
            padding: 40px;
        }
    }
    
    .col-lg-8{
        background: #EFF1ED;
        padding-left: 0;
    }

    .embla, .embla__viewport, .embla__container, .embla__slide {
        will-change: transform;
        background: #FFF;
    }

    .container-fluid {
        padding: 0;
    }

    .embla__slide {
        height: 240px;
        width: 240px;
        //border-left: 0.5px solid #AEB8C0;
        padding-left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #EFF1ED;

        .embla__slide__image {
            display: flex;
            width: 90%;
            //height: 60px;
            padding: 21px 11px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;

            img {
                height: 100%;
        //object-fit: cover;
      }
    }
    @media(max-width: 767px){
      height: 187px !important;
    }
  }
  .slider {
    position: relative;
  }

  .firstslider {
    padding-bottom: 30px;
  }
`;
