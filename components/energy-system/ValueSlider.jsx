'use client'
import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react"
import Title from '@/components/common/Title/Title';
import { Img } from '@/components/common/Image/Img';
import NavigationButton from '@/components/common/Buttons/NavigationButton';

const MyComponent = ({title,data, secondaryBG}) => {
    const containerRef = useRef(null);
    const [offset, setOffset] = useState()

    useEffect(() => {



        window.addEventListener('load', function () {
            setOffset(document.querySelector('.watch-section .container')?.offsetLeft)

        })
        window.addEventListener('resize', function () {
            setOffset(document.querySelector('.watch-section .container')?.offsetLeft)

        })
        setOffset(document.querySelector('.watch-section .container')?.offsetLeft)
    }, [])


    return (
        <StyledComponent offset={offset} secondaryBG={secondaryBG} className={'watch-section pt-120 pb-120'} ref={containerRef} id={'value'}>
          <Container>
            <Row>
              <Col>
                <Title classname={'mb-only'} text={data?.section_data?.subtitle} margin={'80px 0 30px 0'} />
              </Col>
            </Row>
          </Container>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="value-left-img">
                            <Img src={data?.images?.list?.[0]?.full_path} alt={'home-cta'}/>
                        </div>
                    </Col>
                    <Col md={{span:8}}>
                        <div className="value-slider-top">
                            <Title text={data?.section_data?.subtitle} margin={'40px 0 40px 70px'} />
                        </div>
                            <Swiper
                                // onSwiper={setSwiperInstance}
                                slidesPerView={3}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                speed='500'
                                navigation={{
                                  prevEl: `.watch-section #service-prev`,
                                  nextEl: `.watch-section #service-next`,
                                }}
                                initialSlide={0}
                                loop={true}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,

                                    },
                                    766: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,

                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,

                                    },
                                    1025: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1701: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[Autoplay, Pagination, Navigation]}

                                className="mySwiper"
                            >
                                {
                                    data?.posts?.list.map((element,index) => {
                                        return(
                                            <SwiperSlide key={index} >
                                                <div className="testimonial-wrapper">
                                                    <div className="testimonial__single">
                                                        <img src={element?.images?.[0]?.full_path} alt=""/>
                                                        <h5>{element?.data?.title}</h5>
                                                        <h6>{element?.data?.short_desc}</h6>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }

                            </Swiper>
                        <div className="value-slider-bottom">
                            {
                                data?.posts?.list.length > 4 &&
                              <NavigationButton/>

                            }
                        </div>
                    </Col>
                </Row>
            </Container>


        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    background-color: ${props => props.secondaryBG === true ? '#F9F9F9' : props.secondaryBG === false ? '#EFF1ED' : 'transparent'};
    //margin-top: -400px;
    position: relative;
    will-change: transform;
    .management-team{
        margin-bottom: 30px;
    }
    
    .mb-only{
        display: none;
        @media(max-width: 767px){
            display: block;
        }
    }
    .value-left-img{
        position: relative;
        padding-top: calc(600 / 535 * 100%);
        height: 100%;
        overflow: hidden;
        border-radius: 20px;
        @media(min-width: 1500px){
            padding-top: calc(550 / 500 * 100%);
        }
    }
    .testimonial-wrapper{
      position: relative;
        height: 100%;
        box-shadow: 0 4px 24px 0 rgba(152, 152, 152, 0.17);
        border: 1px solid #cdcdcd93;
        border-radius: 20px;
        background-color: #FFF;
      &:hover{
          &:before{
              width: 100%;
          }
          &:after{
              height: 100%;
          }
      }
  }
  .testimonial__single{
    padding: 15px;
    border-radius: 20px;
    min-height: 100%;
    text-align: center;


      img{
          width: 66px;
          height: 60px;
          margin: 10px auto;
      }
      h5{
          font-size: 24px;
          line-height: 32px;
          text-align:center;
          font-weight: 500;
          margin-bottom: 20px;
          @media(min-width: 1920px){
              font-size: 28px;
              line-height: 32px;
          }
          @media(max-width: 768px){
              font-size: 20px;
              line-height: 28px;
          }
      }
      
      h6{
          margin-bottom: 0px;
        text-align: start;
        font-size: 16px;
        text-align: justify;

          @media(min-width: 1920px){
              font-size: 18px;
              line-height: 27px;
          }
      }
    }

  .value-slider-bottom{
    display: flex;
      justify-content: flex-start;
      margin-top: 40px;
      margin-left: 70px;
      @media(max-width: 767px){
          justify-content: flex-start;
          margin-top: 30px;
          .navigation_button{
              padding-left: 0;
          }
      }
  }
  .container-fluid{
      .col-md-4, .col-md-8{
          padding: 0;
      }
      @media (max-width: 767px) {
          padding-left: 15px !important;
      }
      .col{
          padding-right: 0;
      }
  }
    .swiper-initialized {

        margin-left: -250px;
        
        .swiper-slide{
            height: auto;
        }
        @media (min-width: 1500px) {

        }
        @media (max-width: 991px) {
            margin-left: -175px;
        }
    }
    
    
    @media(max-width: 767px){
        .value-slider-top{
            display: none;
        }
        .container{
            display: block;
        }
        .value-left-img{
            width: 50%;
        }
        .swiper-initialized{
            margin-top: -380px;
            margin-left: 15px;
        }
        .testimonial__single{
            //width: 270px;
            //height: 350px;
            text-align:center;
        }
        .value-slider-bottom{
            margin-left: 15px;
            margin-bottom: 0;
            margin-top: 70px;
        }
        .value-left-img{
            img{
                height: 62svh !important;
            }
        }
        
    }
`;

export default MyComponent;
