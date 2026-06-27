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


const MyComponent = ({ data }) => {
  const [offset, setOffset] = useState(90)

  useEffect(() => {
    setOffset(document.querySelector('.product-sliders .container').offsetLeft + 15)
  }, [])

  return (
    <StyledComponent offset={offset} className={`product-sliders`}>
      {data?.categories?.sort((a, b) => (a?.category_data?.sort_order || 0) - (b?.category_data?.sort_order || 0))?.map((cat, idx) => (
        <section key={cat?.category_data?.id || idx} className={`products product-sliders-${idx} pt-120 pb-120 no-line`}>
          <Container>
            <Row className="product-sliders__top">
              <Col md={10}>
                <Title text={cat?.category_data?.title} margin={'0 0 20px 0'}/>
                <p>{reactHtmlParser(cat?.category_data?.description)}</p>
              </Col>
              <Col md={2}>
                <div className="nav-buttons">
                  <NavigationButton />
                </div>

              </Col>

            </Row>
          </Container>

          <Container>
            <Row>
              <Col md={{span: 10, offset: 1}}>
                {cat?.products?.length > 0 && (
                  <Swiper
                    loop={false}
                    spaceBetween={30}
                    slidesPerView={1}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    speed={900}
                    navigation={{
                      prevEl: `.product-sliders-${idx} #service-prev`,
                      nextEl: `.product-sliders-${idx} #service-next`,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                      500: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                    }}

                  >
                    {cat.products.sort((a, b) => (a?.product_data?.sort_order || 0) - (b?.product_data?.sort_order || 0)).map((p, i) => (
                      <SwiperSlide key={(p?.product_data?.id ?? i)}>
                        <div className="product-sliders__slider">
                          <div className="product-sliders__slider__img">
                            <img src={p?.images?.list?.[0]?.full_path} alt={p?.product_data?.subtitle} />
                          </div>
                          <div className="product-sliders__slider__content">
                            <h5 className="product-title">{reactHtmlParser(p?.product_data?.subtitle)}</h5>
                            <p>{reactHtmlParser(p?.product_data?.short_desc)}</p>
                          </div>

                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </Col>
            </Row>
          </Container>
        </section>
      ))}
    </StyledComponent>
  );
};
const StyledComponent = styled.section`
  background-color: #ffffff; /* make page background white to match design */

  .product-sliders__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
      
      .nav-buttons{
          width: 100%;
          display: flex;
          justify-content: flex-end;
          @media(max-width: 767px){
              justify-content: flex-start;
              margin-top: 20px;
              .navigation_button{
                  padding-left: 0;
              }
          }
      }
  }

  .product-sliders__slider {
    width: 100%;
    cursor: pointer;
      border: 0.5px solid rgba(40, 94, 47, 0.10);
      border-radius: 10px;
      transition: 0.5s ease-in-out; 
      padding: 20px;
      &__img{
          
          position: relative;
          padding-top: calc(360 / 430 * 100%);
          img{
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              border-radius: 10px;
              object-fit: cover;
          }
      }
      
      &__content{
          margin-top: 40px;
          .product-title{
              margin-bottom: 15px;
              font-size: 20px;
              line-height: 140%;
              font-weight: 500;
              color: #000;
          }
          p{
              color: rgba(0, 0, 0, 0.72);
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 140%;
          }
      }
      
     &:hover{
         box-shadow: 0 4px 10px 0 rgba(169, 178, 148, 0.26);
         border: 1px solid #3F7156;
     } 
  }

  .swiper {
    
  }
    

  @media (max-width: 990px) {
    .product-sliders__top {
      flex-wrap: wrap;

      ul {
        width: 100%;
      }
    }
  }

  @media (max-width: 767px) {
      .product-sliders__top{
          margin-bottom: 20px;
      }
  }
`;
export default MyComponent;
