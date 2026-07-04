"use client"
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {memo, useEffect, useRef, useState} from "react";
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
import NavigationButton from "@/components/common/Buttons/NavigationButton";

const BlogSliderV1 = ({data}) => {


    console.log(data);
    let containerRef = useRef();
    let sliderRef = useRef();
    let [offset, setOffset] = useState(90)

    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth > 767) {
                const container = document.querySelector('.container');
                if (container) {
                    setOffset(container.offsetLeft + 15);
                }
            }
        };

        updateOffset();
    }, []);

    return (
        <StyledBlog offset={offset} className='blog-slider pt-120 pb-120'>
            <Container ref={containerRef}>
                <Row>
                    <Col sm={12}>
                        <div className="blog-title d-flex flex-wrap align-items-center justify-content-between">
                            <Title marginSm={'0'} margin={'0 0 0px 0'} text={'News & Events'}/>
                            <div className="button-desktop" style={{paddingLeft: offset + 15 + 'px'}}>
                                <MainButton
                                    color={hover}
                                    border={`1px solid ${hover}`}
                                    background={'transparent'}
                                    margin={'0px 0 0 0'}
                                    src={'/media'}
                                    text={'View All'}
                                    fontWeight={500}
                                />
                            </div>
                        </div>
                        <div className={'mobile-buttons'}>
                            <NavigationButton
                                prev_id={'go-left'}
                                next_id={'go-right'}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>


            <div className={` fade-up blog-slider__slider-wrap`}>
                <div className="blog-slider__slider-wrap__inner">
                    {data?.data?.news?.length > 0 &&
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            // allowSlideNext={true}
                            // allowSlidePrev={true}
                            allowTouchMove={false}
                            speed={900}
                            // pagination={{
                            //     type: "fraction",
                            // }}
                            navigation={{
                                prevEl: '.blog-slider #go-left',
                                nextEl: '.blog-slider #go-right',
                            }}
                            modules={[Autoplay, Pagination, Navigation]}

                            autoplay={{
                                delay: 8000,
                                disableOnInteraction: false,
                            }}
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

                            ref={sliderRef}>
                            {
                                data?.data?.news?.slice(0, 4)?.map((item, index) => {
                                    // const thumb = item?.images?.list.find((f) => f?.thumb === "on")
                                    return (
                                        <SwiperSlide key={index}>
                                            <NewsSingle
                                                type={item?.data?.category_title}
                                                slug={item?.data?.slug} img={item?.images?.list?.[0]?.full_path}
                                                        title={item?.data?.subtitle}
                                                        day={moment(item?.data?.date).format('DD')}
                                                        month={moment(item?.data?.date).format('MMMM')}
                                                        year={moment(item?.data?.date).format('YYYY')}
                                                        shortDesc={item?.data?.subtitle}/>
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                    }

                </div>

                {/*<div className="slider-nav-mobile slider-nav">*/}
                {/*    <div className="blog-button">*/}
                
                {/*        <div className="slider-nav">*/}
                {/*            <ul>*/}
                {/*                <li className="hover go-left">*/}
                {/*                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"*/}
                {/*                         viewBox="0 0 16 16" height="1em" width="1em"*/}
                {/*                         xmlns="http://www.w3.org/2000/svg">*/}
                {/*                        <path fill-rule="evenodd"*/}
                {/*                              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>*/}
                {/*                    </svg>*/}
                {/*                </li>*/}
                {/*                <li className="hover go-right">*/}
                {/*                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"*/}
                {/*                         viewBox="0 0 16 16" height="1em" width="1em"*/}
                {/*                         xmlns="http://www.w3.org/2000/svg">*/}
                {/*                        <path fill-rule="evenodd"*/}
                {/*                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>*/}
                {/*                    </svg>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <ul>*/}
                {/*        <li className="hover slider_prev go-left">*/}
                {/*            <svg stroke="currentColor" fill="currentColor" stroke-width="0"*/}
                {/*                 viewBox="0 0 16 16" height="1em" width="1em"*/}
                {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <path fill-rule="evenodd"*/}
                {/*                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>*/}
                {/*            </svg>*/}
                {/*        </li>*/}
                {/*        <li className="hover slider_next go-right">*/}
                {/*            <svg stroke="currentColor" fill="currentColor" stroke-width="0"*/}
                {/*                 viewBox="0 0 16 16" height="1em" width="1em"*/}
                {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <path fill-rule="evenodd"*/}
                {/*                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>*/}
                {/*            </svg>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>

        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    background: #f0f4f0;
    
    .mobile-buttons{
        display: none;
        margin-bottom: 40px;
        @media(max-width: 767px){
            display: block;
        }
    }

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

  .swiper-initialized {
    //padding-right: 300px;
    //padding-left: 300px;
      // margin-right: ${props => props.offset + 15}px;
    margin-left: ${props => props.offset }px;
    padding-right: ${props => props.offset - 0}px;

    @media (max-width: 767px) {
      padding: 0 !important;
      margin: 0 !important;
    }
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
        margin-left: 15px;
        margin-right: 15px;

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
    
    @media(max-width: 767px){
        .blog-button{
            display: none;
        }
    }

`;
export default memo(BlogSliderV1);
