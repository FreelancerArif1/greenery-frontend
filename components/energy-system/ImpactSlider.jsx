'use client';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '@/components/common/Title/Title';
import reactHtmlParser from 'react-html-parser';
import NavigationButton from '@/components/common/Buttons/NavigationButton';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Img } from '@/components/common/Image/Img';
import { secondaryFont } from '@/styles/globalStyleVars';

export default function ImpactSlider({data}) {
    return (
        <StyledComponent className={'impact-slider pt-120 pb-120'}>
            <Container>
              <Row>
                <Col lg={10}>
                  <Title text={data?.section_data?.subtitle} margin={'0 0 40px 0'}/>
                </Col>
                <Col lg={2}>
                  <div className="nav-buttons">
                    <NavigationButton />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Swiper
                    // onSwiper={setSwiperInstance}
                    slidesPerView={2}
                    spaceBetween={30}
                    // autoplay={{
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // }}
                    autoplay={false}
                    speed='500'
                    navigation={{
                      prevEl: `.impact-slider #service-prev`,
                      nextEl: `.impact-slider #service-next`,
                    }}
                    initialSlide={0}
                    loop={false}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 30,

                      },
                      766: {
                        slidesPerView: 1,
                        spaceBetween: 30,

                      },
                      1024: {
                        slidesPerView: 1,
                        spaceBetween: 30,

                      },
                      1025: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1701: {
                        slidesPerView: 2,
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
                              <div className="impact-slider__single">
                                  <div className="impact-slider__single__img">
                                      <img src={element?.images?.[0]?.full_path} alt={element?.data?.subtitle}/>
                                  </div>
                                  <div className="impact-slider__single__content">
                                    <p>{reactHtmlParser(element?.data?.short_desc)}</p>
                                    <h5>{reactHtmlParser(element?.data?.subtitle)}</h5>
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
}

const StyledComponent = styled.section`
    background-color: #EFF1ED;
    .impact-slider__single{
        display: flex;
        border-radius: 10px;
        background: #FFF;
        gap: 25px;
        &__img{
            border-radius: 10px 0 0 10px;
            flex: 0 0 40%;
            img{
                width: 100%;
                height: 278px;
                object-fit: cover;
                border-radius: 10px 0 0 10px;
            }
            
        }
        &__content{
            display: flex;
            justify-content: center;
            flex-direction: column;
            
            h6{
                color: #000;
                font-family: ${secondaryFont};
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: 125%;
            }
            
            h5{
                color: #000;
                font-family: ${secondaryFont};
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: 125%;
                margin-top: 12px;
            }
            
        }
    }
    
    .nav-buttons{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: unset;
        @media(max-width: 991px){
            justify-content: flex-start;
            margin-bottom: 30px;
            .navigation_button{
                padding-left: 0;
            }
        }
    }
`;