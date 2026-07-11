'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '@/components/common/Title/Title';
import NavigationButton from '@/components/common/Buttons/NavigationButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import reactHtmlParser from 'react-html-parser';
import { secondaryFont } from '@/styles/globalStyleVars';

export default function CertificatesSlider({ data }) {
  const [offset, setOffset] = useState(90)


  useEffect(() => {
    const updateOffset = () => setOffset(document.querySelector('.compliance-slider .container')?.offsetLeft);

    typeof window !== 'undefined' && window.addEventListener('load', updateOffset);
    typeof window !== 'undefined' && window.addEventListener('resize', updateOffset);

    updateOffset(); // Initial calculation

    return () => {
      typeof window !== 'undefined' && window.removeEventListener('load', updateOffset);
      typeof window !== 'undefined' && window.removeEventListener('resize', updateOffset);
    }
  }, []);

  return (
    <StyledComponent className={'compliance-slider pt-120 pb-120'} offset={offset}>
      <Container className={""}>
        <Row>
          <Col lg={4} className={'compliance-slider__title-wrapper'}>
            <Title text={data?.section_data?.subtitle}/>
            <NavigationButton/>
          </Col>
          <Col lg={{span: 7, offset: 1}} className={'compliance-slider-wrapper'}>
            {data?.posts?.list?.length > 0 && (
              <Swiper
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                allowSlideNext={true}
                allowSlidePrev={true}
                speed={900}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: `.compliance-slider #service-prev`,
                  nextEl: `.compliance-slider #service-next`,
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
                {data?.posts?.list?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="compliance-slider-wrapper__item">
                      {/*<span>{reactHtmlParser(item?.data?.short_desc)}</span>*/}
                      <h6>{reactHtmlParser(item?.data?.subtitle)}</h6>
                      <div className="compliance-slider-wrapper__item__img">
                        <img src={item?.images?.[0]?.full_path} alt={item?.data?.subtitle} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Col>
        </Row>
      </Container>
      <Container>

      </Container>
    </StyledComponent>
  );
}

const StyledComponent = styled.section`
  background-color: #fff;
  
    .compliance-slider__title-wrapper{
    }
    
  .compliance-slider-wrapper{
      .swiper{
      }
      &__item{
          border-radius: 20px;
          // box-shadow: 0 4px 10px 0 rgba(140, 140, 140, 0.26);
          border: 1px solid #9191916e;
          padding: 32px 24px;
          span{
              font-size: 14px;
              line-height: 16px;
              font-weight: 300;
              color: #000;
          }
          
          h6{
              font-size: 15px;
              line-height: 28px;
              font-weight: 500;
              color: #000;
              font-family: ${secondaryFont};
              margin-top: 10px;
          }
          &__img{
              border-radius: 20px;
              position: relative;
              padding-top: calc(273 / 312 * 100%);
              margin-top: 15px;
              border: 1px solid #9393936e;
              img{
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 20px;
              }
          }
          
          p{
              font-size: 18px;
              line-height: 28px;
              font-weight: 500;
          }
      }
  }
    @media(max-width: 991px){
        .compliance-slider-wrapper{
            // padding-left: ${props => props.offset+30}px;
            margin-top: 40px;
        }
    }
    
    @media(max-width: 767px){
        .p-0{
            padding-left: 15px !important;
            padding-right: 15px !important;
        }

        .navigation_button{
            padding-left: 0;
        }
        .compliance-slider-wrapper{
            padding-left: 15px;
        }
        
        .swiper{
            margin-right: 0 !important;
            margin-top: 30px;
        }
        .compliance-slider__title-wrapper{
            padding-left: 15px !important;
        }
    }
`;