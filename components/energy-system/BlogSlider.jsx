"use client"
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import React, {memo, useEffect, useRef, useState} from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {hover, text, title} from '../../styles/globalStyleVars'
import moment from "moment";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Title from "@/components/common/Title/Title";
import NewsSingle from "@/components/media/NewsSingle";
import MainButton from "@/components/common/Buttons/MainButton";
import NavigationButton from '@/components/common/Buttons/NavigationButton';

const BlogSlider = ({data,blogList}) => {


  console.log(blogList)


  return (
    <StyledBlog className='blog-slider pt-120 pb-120'>
      <Container >
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
      </Container>

      <Container>
        <Row>
          <Col>
            <div className={` fade-up blog-slider__slider-wrap`}>
              <div className="blog-slider__slider-wrap__inner">
                {blogList?.length > 0 &&
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    allowTouchMove={false}
                    speed={900}
                    // pagination={{
                    //     type: "fraction",
                    // }}
                    navigation={{
                      prevEl: `.blog-slider #service-prev`,
                      nextEl: `.blog-slider #service-next`,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}

                    breakpoints={{
                      600: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      }
                    }}
                    // navigation={true} modules={[Navigation]}
                    // onSwiper={(swiper) => console.log(swiper)}
                  >
                    {
                      blogList?.map((item, index) => {
                        const thumb = item?.images?.list.find((f) => f?.thumb === "on")
                        return (
                          <SwiperSlide key={index}>
                            <NewsSingle
                              slug={item?.slug}
                              img={thumb?.full_path ? thumb?.full_path : item?.images?.list?.[0]?.full_path}
                              title={item?.subtitle}
                              day={moment(item?.date).format('DD')}
                              month={moment(item?.date).format('MMMM')}
                              year={moment(item?.date).format('YYYY')}
                              shortDesc={item?.subtitle}/>
                          </SwiperSlide>
                        )
                      })
                    }

                  </Swiper>
                }

              </div>

            </div>
          </Col>
        </Row>
      </Container>

    </StyledBlog>
  );
};

const StyledBlog = styled.section`
    background: #EFF1ED;

    .blog-title {
        position: relative;
        margin-bottom: 30px;
        

        p {
            position: absolute;
            top: 0;
            right: 0;

        }

    }


    .blog-button {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .slider-nav {
            ul {
                display: flex;
            }

            li {
                height: 40px;
                width: 40px;
                background-color: #221F1F;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
                border-radius: 50%;
                cursor: pointer;

                &:after {
                    background-color: ${hover};
                }

                &:nth-of-type(1) {
                    margin-right: 20px;
                }

                svg {
                    color: #FFF;
                    z-index: 2;
                }

                &:hover {
                    svg {
                        color: #FFFFFF;
                    }
                }

            }
        }
    }

    .slider-nav {
        ul {
            display: flex;
        }

        li {
            height: 50px;
            width: 50px;
            background-color: #221F1F;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;

            &:after {
                background-color: ${hover};
            }

            &:nth-of-type(1) {
                margin-right: 20px;
            }

            svg {
                color: #FFF;
                z-index: 2;
            }

            &:hover {
                svg {
                    color: #FFF;
                }
            }

        }
    }

    .swiper-button-next, .swiper-button-prev {
        position: absolute;
    height: 40px;
    width: 40px;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 99;
    background-color: red;
  }

  .swiper-button-next, .swiper-button-prev, .swiper-pagination {
    opacity: 0;
    visibility: hidden;
  }
    

  .slider-nav-mobile {
    display: none;
  }

  .blog-slider {
    &__slider-wrap {
      &__inner {
        .blog-single {
          &__inner {
            padding-top: 115%;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .button-desktop {
      display: none;
    }

    .swiper-container {
      margin-left: 0;
      padding-right: 0;
    }

    .blog-slider {
      &__slider-wrap {
        

        .slider-nav-mobile {
          margin-top: 40px;

          ul {
            display: flex;
          }

          li {
            height: 50px;
            width: 50px;

            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;

            &:nth-of-type(1) {
              margin-right: 20px;
            }

            svg {
              color: #FFF;
              z-index: 2;
            }

            &:hover {
              svg {
                color: #FFF;
              }
            }
          }
        }
      }
    }

    .blog-button {
      //margin-bottom: 40px;

      .slider-nav {
        display: none;
      }
    }

    .slider-nav-mobile {
      display: flex;
      justify-content: space-between;
    }

  }
    
    @media(max-width: 991px){
        .nav-buttons{
            margin-bottom: 40px;
            .navigation_button{
                padding: 0;
            }
        }
    }

`;
export default memo(BlogSlider);
