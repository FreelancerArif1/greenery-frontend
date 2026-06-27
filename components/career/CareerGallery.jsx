'use client'
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {text, whites} from "@/styles/globalStyleVars";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Title from '@/components/common/Title/Title';
import NavigationButton from '@/components/common/Buttons/NavigationButton';
import { Img } from '@/components/common/Image/Img';



const MyComponent = ({data}) => {

  const [offset, setOffset] = useState(0)
  const [itemHeight, setItemHeight] = useState(0)
  useEffect(() => {
    // offset
    setOffset(document.querySelector('.container')?.offsetLeft + 15)
    window.addEventListener('resize', () => {
      setOffset(document.querySelector('.container')?.offsetLeft + 15)
    })

    // set section height
    if (window.innerWidth > 991) {
      setTimeout(() => {

        const getHeight = document.querySelector('.career-gallery')?.clientHeight;
        document.querySelector('.career-gallery').style.height = getHeight + 'px'
        window.addEventListener('resize', () => {
          const getHeight = document.querySelector('.career-gallery').clientHeight;
          document.querySelector('.career-gallery').style.height = getHeight + 'px';
        })

        // document.querySelector('.feature-project__left').style.height = document.querySelector('.feature-project__right .swiper-slide-active')?.clientHeight + 'px'

      }, 1000)
    }


  }, [])



  return (
    <StyledComponent offset={offset} className={'career-gallery pt-100 pb-100'} id={'culture'}>
      <Container>
        <Row>
          <Col sm={12} className={'d-flex slider-nav justify-content-between flex-wrap'}>
            <Title color={'#000'} text={data?.section_data?.subtitle}/>
            <NavigationButton/>
          </Col>
        </Row>

      </Container>
      <Container className={'p-0'} fluid>
        <Row>

          <Col sm={12} className={'feature-project__right'}>
            <Swiper loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    allowTouchMove={false}
                    speed={900}
              // pagination={{
              //     type: "fraction",
              // }}
                    navigation={{
                      prevEl: '.career-gallery #service-prev',
                      nextEl: '.career-gallery #service-next',
                    }}
                    modules={[Autoplay, Pagination, Navigation]}

              // autoplay={false}

                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{

                      768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      550: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },

                    }}>
              {
                data?.images?.list && data?.images?.list?.length > 0 &&
                data?.images?.list?.map((element, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="feature-project__slider">
                        {/*<Link to={'#'}/>*/}
                        <div className="feature-project__slider__img">
                          <Img src={element?.full_path}/>
                        </div>

                      </div>
                    </SwiperSlide>

                  )
                })
              }

            </Swiper>
          </Col>
        </Row>
      </Container>
    </StyledComponent>
  );
};

const StyledComponent = styled.section`
    position: relative;
    overflow: hidden;
    background: #f1f2f3;
    

    .slider-nav {
        margin-bottom: 50px;
    }

    .feature-project__right {
        .feature-project__slider {
            position: relative;

            a {
                position: absolute;
                height: 100%;
                width: 100%;
                z-index: 1;
            }

            .add-to-fav {
                position: absolute;
                top: 20px;
                right: 20px;
                cursor: pointer;
                z-index: 2;

                svg {
                    circle, path {
                        transition: .6s ease;
                    }
                }

                &:hover {
                    svg {
                        #Hover {
                            cy: -13px;
                        }

                        #Path_1920 {
                            stroke: ${text};
                        }
                    }
                }
            }

            &__img {
                padding-top: calc(312 / 370 * 100%);
                position: relative;
                overflow: hidden;
                border-radius: 12px;
                img{
                    border-radius: 12px;
                }
                //img {
                //    transform: scale(1.01);
                //    transition: 0.3s ease;
                //}
            }

            &:hover {
                .feature-project__slider__img {
                   

                }
            }
        }

        .swiper-slide {
            transition: all .6s ease;
        }

        @media (min-width: 991px) {
            .swiper-slide-active {
                width: 40% !important;
            }
        }
    }


    .swiper {
        padding-left: ${p => p.offset}px;
    }

    @media (max-width: 991px) {
        &:after {
            height: 40%;
        }
        .title{
            margin-bottom: 40px;
        }
    }

    @media (max-width: 767px) {
        padding-top: 0;
        //padding-bottom: 100px;
        .container-fluid {
            //padding-left: 15px !important;
            padding-right: 15px !important;
        }

        .title {
            width: 100%;
            margin-bottom: 40px;
        }
    }


`;

export default MyComponent;
