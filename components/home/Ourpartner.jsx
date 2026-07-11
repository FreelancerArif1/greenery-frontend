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
import Image from "next/image";

import 'swiper/css';

const MyComponent = () => {
    const partners = [
    "/images/partners/BD-Shop-01.png",
    "/images/partners/Compliance-BD-ltd.-01.png",
    "/images/partners/Famous-Energy-01.png",
    "/images/partners/KR-Tech-01.png",
    "/images/partners/MA'S-Engineering-01.png",
    "/images/partners/MicroTech-01.png",
    "/images/partners/Mim-Electronics-01.png",
    "/images/partners/Pickaboo-01.png",
    "/images/partners/Rupa-Electric-01.png",
    ];
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
                spaceBetween={20}
                loop
                speed={1500}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                >
                {partners.map((image, index) => (
                    <SwiperSlide key={index}>
                    <div className="slide">
                        <Image
                        src={image}
                        alt={`Partner ${index + 1}`}
                        width={180}
                        height={100}
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                        }}
                        />
                    </div>
                    </SwiperSlide>
                ))}
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
    height: 140px;
    border-radius: 10px;
    background: #f5f5f59a;
    border: 1px solid #f5f5f5e1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
}
`;

export default MyComponent;