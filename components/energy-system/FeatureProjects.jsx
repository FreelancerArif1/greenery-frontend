'use client';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import reactHtmlParser from 'react-html-parser';
import Title from '@/components/common/Title/Title';
import { secondaryFont } from '@/styles/globalStyleVars';
import NavigationButton from '@/components/common/Buttons/NavigationButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import React from 'react';

export default function FeatureProjects({ data }) {
  return (
    <StyledComponent className={'feature-projects pt-120 pb-120'}>
      <Container>
        <Row>
          <Col lg={10}>
            <Title text={data?.section_data?.subtitle}/>
          </Col>
          <Col lg={2}>
            <div className="nav-buttons">
              <NavigationButton />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            {data?.posts?.list?.length > 0 && (
              <Swiper
                loop={false}
                spaceBetween={30}
                slidesPerView={1}
                speed={900}
                navigation={{
                  prevEl: `.feature-projects #service-prev`,
                  nextEl: `.feature-projects #service-next`,
                }}
                modules={[Navigation]}
                breakpoints={{
                  576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {data?.posts?.list.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="feature-projects__item">
                      <Image fill src={item?.images?.[0]?.full_path} alt={item?.data?.subtitle}/>
                      <div className="content">
                        <span>{reactHtmlParser(item?.data?.short_desc)}</span>
                        <h6>{reactHtmlParser(item?.data?.subtitle)}</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Col>
        </Row>
      </Container>
    </StyledComponent>
  );
}

const StyledComponent = styled.section`
    .nav-buttons{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        @media(max-width: 991px){
            justify-content: flex-start;
            margin-bottom: 30px;
            .navigation_button{
                padding-left: 0;
            }
        }
    }
  .feature-projects__item{
      border-radius: 20px;
      box-shadow: 0 4px 10px 0 rgba(140, 140, 140, 0.26);
      border: 1px solid #285E2F;
      position: relative;
      padding-top: calc(420 / 368 * 100%);
      overflow: hidden;
      img{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          transform: scale(1.01);
          transition: all 0.5s ease-in-out;
      }
      
      &:after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(8, 8, 8, 0.00) 39.89%, rgba(0, 0, 0, 0.80) 87%);
          z-index: 2;

      }
      
      .content{
          position: absolute;
          bottom: 25px;
          left: 25px;
          right: 25px;
          z-index: 3;
          span{
              font-size: 14px;
              line-height: 120%;
              font-weight: 300;
              color: #FFF;
              font-family: ${secondaryFont};
          }
          h6{
              font-size: 20px;
              line-height: 28px;
              font-weight: 600;
              color: #FFF;
              margin-top: 12px;
              font-family: ${secondaryFont};
          }
      }
      &:hover{
          img{
              transform: scale(1.1);
          }
      }
  }
    
    @media(max-width: 767px){
        .col-lg-4{
            margin-bottom: 30px;
        }
    }

`;

