'use client'
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '@/components/common/Title/Title';
import reactHtmlParser from 'react-html-parser';
import MainButton from '@/components/common/Buttons/MainButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductGallery({data,productData, files}){
  const imageList = data?.images || [];

  return(
    <StyledComponent>
      <Container >
        <Row className={'gal-container'}>
          <Col lg={5}>
            <div className="product-gallery">
              {/* Main Image Slider */}
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                className="main-swiper"
              >
                {imageList?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="image-wrapper">
                      <img src={image?.full_path} alt={image?.img_alt || `Product image ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
          <Col lg={{span:6, offset:1}}>
              <Title text={productData?.subtitle || 'No information available'} margin={'0 0 20px 0'}/>
              <p>{reactHtmlParser(data?.data?.subtitle) || 'No information available'}</p>
            {
              reactHtmlParser(data?.data?.description) || <p>No information available</p>
            }
            {
              files?.list?.[0]?.full_path &&
              <MainButton text={'Download Datasheet'} src={files?.list?.[0]?.full_path}/>
            }
          </Col>
        </Row>
      </Container>

    </StyledComponent>
  )
}

const StyledComponent = styled.section`
  
    .gal-container{
        padding-bottom: 80px;
        border-bottom: 1px solid rgba(0,0,0,0.25);
    }
  
  .product-gallery {
    position: relative;
    
    .main-swiper {
      margin-bottom: 15px;
      border-radius: 12px;
      overflow: hidden;
      
      .image-wrapper {
        width: 100%;
        padding-top: 100%;
        position: relative;
        background: #f5f5f5;
        
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        }
      }
      
      .swiper-button-prev,
      .swiper-button-next {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        
        &::after {
          font-size: 16px;
          color: #285E2F;
          font-weight: bold;
        }
      }
      
      .swiper-pagination {
        bottom: 10px;
        
        .swiper-pagination-bullet {
          background: #285E2F;
          opacity: 0.5;
          
          &-active {
            opacity: 1;
          }
        }
      }
    }
      @media(max-width: 767px){
          margin-bottom: 40px;
      }
  }
    
  ul{
     margin-top: 20px;
      margin-bottom: 30px;
      li{
          display: flex;
          flex-direction: column;
          
          p{
              color: #000;
              font-family: "Banana Grotesk";
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
              margin-bottom: 5px;
          }
          
          h6{
              color: #000;
              font-family: "Banana Grotesk";
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
          }
          &:not(:last-child){
              margin-bottom: 20px;
          }
      }
  }
  
`;
