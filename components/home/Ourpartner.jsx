'use client'
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from 'react-bootstrap';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import reactHtmlParser from "react-html-parser";
import Title from '@/components/common/Title/Title';
import NavigationButton from '@/components/common/Buttons/NavigationButton';
import { Img } from '@/components/common/Image/Img';
import Link from 'next/link';

import 'swiper/css';

const MyComponent = () => {
  return (
    <StyledComponent className="ourpartner pt-120">
        <Container>
            <Row className="parnter">
            <Col md={8}>
                <Title classname={'title'} text={'Our Partners'}/>
             </Col>
            <Col md={2}> </Col>

            </Row>

            <Row>
                <Swiper
                modules={[Autoplay]}
                slidesPerView={5}
                spaceBetween={0}
                loop={true}
                speed={1500}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                pagination={{
                clickable: true,
                }}
                allowTouchMove={true}
                >



                <SwiperSlide>
                <div className="slide">Slide 1</div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide">Slide 2</div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide">Slide 3</div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide">Slide 4</div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide">Slide 5</div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide">Slide 6</div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide">Slide 7</div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide">Slide 8</div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide">Slide 9</div>
                </SwiperSlide>
            </Swiper>
            </Row>
        </Container>




    </StyledComponent>
  );
};

const StyledComponent = styled.section`
.ourpartner{
    padding-top: 120px !important;
}



.swiper {
    width: 100%;
}

.slide {
    height: 120px;
    border-radius: 10px;
    background: #f5f5f5;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
}
`;

export default MyComponent;