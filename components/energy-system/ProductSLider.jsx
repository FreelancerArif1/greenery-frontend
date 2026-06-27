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


const MyComponent = ({ data,slug }) => {
  const [offset, setOffset] = useState(90)


  useEffect(() => {
    const updateOffset = () => setOffset(document.querySelector('.product-sliders .container')?.offsetLeft);

    typeof window !== 'undefined' && window.addEventListener('load', updateOffset);
    typeof window !== 'undefined' && window.addEventListener('resize', updateOffset);

    updateOffset(); // Initial calculation

    return () => {
      typeof window !== 'undefined' && window.removeEventListener('load', updateOffset);
      typeof window !== 'undefined' && window.removeEventListener('resize', updateOffset);
    }
  }, []);

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

          <Container fluid className={"p-0"}>
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
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}

              >
                {cat.products.sort((a, b) => (a?.product_data?.sort_order || 0) - (b?.product_data?.sort_order || 0)).map((p, i) => (
                  <SwiperSlide key={(p?.product_data?.id ?? i)}>
                    <Link href={`/products/${p?.product_data?.slug}`} className="product-sliders__slider__link">
                      <div className="product-sliders__slider">
                        <div className="product-sliders__slider__img">
                          <img src={p?.images?.list?.[0]?.full_path ? p?.images?.list?.[0]?.full_path : '/images/static/product.webp'} alt={p?.product_data?.subtitle} />
                        </div>
                        <div className="product-sliders__slider__content">
                          <div className="product-badge">
                            <span>{p?.product_data?.product_label}</span>
                          </div>
                          <h5 className="product-title">{reactHtmlParser(p?.product_data?.subtitle)}</h5>
                        </div>

                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
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
          @media (max-width: 767px){
              justify-content: flex-start;
          }
      }
  }

  .product-sliders__slider {
    width: 100%;
    cursor: pointer;
      
      
      &__img{
          border: 0.5px solid rgba(40, 94, 47, 0.10);
          border-radius: 10px;
          transition: 0.5s ease-in-out;
          position: relative;
          padding-top: calc(270 / 270 * 100%);
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
          margin-top: 15px;
          .product-badge{
              display: flex;
              padding: 5px 10px;
              justify-content: center;
              align-items: center;
              gap: 10px;
              border-radius: 10px;
              background-color: #629D59;
              width: fit-content;
              span{
                  text-align: center;
                  font-size: 12px;
                  line-height: 120%;
                  font-weight: 500;
                  color: #FFF;
              }
          }
          .product-title{
              margin-top: 15px;
              font-size: 18px;
              line-height: 150%;
              font-weight: 500;
              color: #000;
          }
      }
      
     &:hover{
         .product-sliders__slider__img{
             box-shadow: 0 4px 10px 0 rgba(169, 178, 148, 0.26); 
             border: 1px solid #3F7156;
         }
     } 
  }

  .swiper {
    padding-left: ${(p) => p.offset +15}px;
    padding-right: ${(p) => p.offset +15}px;
  }

  .slider_controls {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .slider_prev,
  .slider_next {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background: #fff;
    border: 1px solid rgba(0,0,0,0.08);
    cursor: pointer;
  }

  .slider_prev::before { content: '<'; display:block; text-align:center; line-height:36px; }
  .slider_next::before { content: '>'; display:block; text-align:center; line-height:36px; }

  .container-fluid {
    position: relative;
  }

  @media (max-width: 990px) {
    .product-sliders__top {
      flex-wrap: wrap;

      ul {
        width: 100%;
      }
    }
  }

  @media (max-width: 500px) {
    .swiper {
      padding-right: 80px;
        padding-left: 15px !important;
    }
  }
`;
export default MyComponent;
