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

const MyComponent = ({data}) => {
  return (
    <StyledComponent className="ourpartner pt-120">
        <Container>
            <Row className="parnter">
            <Col md={8}>
                <Title classname={'title'} text={'Concerns of Livenza Group'}/>
             </Col>
            <Col md={2}> </Col>

            </Row>

            <Row>
                <Swiper
                modules={[Autoplay]}
                slidesPerView={3}
                spaceBetween={15}
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


                 {data?.posts?.list?.map((concern) => (
                    <SwiperSlide key={concern?.data?.id}>
                        <div className="slide2">
                            <ConcernCard>
                                <div className={'card-header'}>
                                    <div className={'icon-box'}>
                                    <img src={concern?.images?.[0]?.full_path} alt={concern?.data?.title} className={'icon'}/>
                                    </div>
                                </div>
                                <div className={'card-content'}>
                                    <h3 className={'concern-name'}>{reactHtmlParser(concern.data?.subtitle)}</h3>
                                </div>
                            </ConcernCard>
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

const ConcernCard = styled.div`
  position: relative;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
  background: #FAFAFA;
  border: 1px solid #E8E8E8;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    border-color: ${props => props.color};

    .card-header {
      .icon-box {
      }
    }

    .concern-name {
      color: ${props => props.color};
    }
  }

  .card-header {
    height: 180px;
    background: linear-gradient(135deg, ${props => props.color}dd 0%, ${props => props.color} 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    position: relative;
    overflow: hidden;
      

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  }

  .icon-box {
    width: 200px;
    height: 150px;
    //background: rgba(255, 255, 255, 0.25);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    z-index: 2;

    .icon {
      font-size: 48px;
      display: block;
    }
  }

  .card-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align:center;
  }

  .concern-name {
    font-family: "Banana Grotesk", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    margin: 0 0 12px 0;
    transition: color 0.4s cubic-bezier(0.4, 0, 0, 1);
    line-height: 1.4;
  }

  .concern-category {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: ${props => props.color};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 16px 0;
  }

  .concern-description {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    color: #666;
    line-height: 1.6;
    margin: 0;
    flex: 1;
  }

  @media (max-width: 991px) {
    .card-header {
      height: 150px;
    }

    .icon-box {
      

      .icon {
        font-size: 40px;
      }
    }

    .card-content {
      padding: 30px 20px;
    }

    .concern-name {
      font-size: 20px;
    }
  }

  @media (max-width: 767px) {
    .card-header {
      height: 130px;
    }

    .icon-box {
      

      .icon {
        font-size: 35px;
      }
    }

    .card-content {
      padding: 25px 20px;
    }

    .concern-name {
      font-size: 18px;
      margin-bottom: 8px;
    }

    .concern-description {
      font-size: 14px;
    }
  }
`;

export default MyComponent;