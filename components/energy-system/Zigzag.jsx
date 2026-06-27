'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { Img } from '@/components/common/Image/Img';
import Title from '@/components/common/Title/Title';
import reactHtmlParser from 'react-html-parser';

export default function Zigzag({section}) {

  const [offset, setOffset] = useState(90)


  useEffect(() => {
    const updateOffset = () => setOffset(document.querySelector('.zigzag .container')?.offsetLeft);

    typeof window !== 'undefined' && window.addEventListener('load', updateOffset);
    typeof window !== 'undefined' && window.addEventListener('resize', updateOffset);

    updateOffset(); // Initial calculation

    return () => {
      typeof window !== 'undefined' && window.removeEventListener('load', updateOffset);
      typeof window !== 'undefined' && window.removeEventListener('resize', updateOffset);
    }
  }, []);

  return(
    <StyledComponent className={'zigzag pt-120 pb-120'} offset={offset}>
      <Container className={'zigzag_top'} >
        <Row>
          <Col lg={5} className={'zigzag_top__left'}>
            <div className="zigzag_top__left__wrapper">
              <Img src={section?.posts?.list?.[0]?.images?.[0]?.full_path} />
            </div>
          </Col>
          <Col lg={{span:6, offset:1}} className="zigzag_top__right">
            <div className="zigzag_top__right__wrapper">
              <Title text={section?.posts?.list?.[0]?.data?.subtitle} marginSm={'0 0 20px 0'}/>
              <p>{reactHtmlParser(section?.posts?.list?.[0]?.data?.description)}</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={'zigzag_bottom'}>
        <Row>
          <Col lg={5} className={'zigzag_bottom__left'}>
            <div className="zigzag_bottom__left__wrapper">
              <Title text={section?.posts?.list?.[1]?.data?.subtitle} marginSm={'0 0 20px 0'} />
              <p>{reactHtmlParser(section?.posts?.list?.[1]?.data?.description)}</p>
            </div>
          </Col>
          <Col lg={{span:6, offset:1}} className="zigzag_bottom__right">
            <div className="zigzag_bottom__right__wrapper">
              <Img src={section?.posts?.list?.[1]?.images?.[0]?.full_path} />
            </div>
          </Col>
        </Row>
      </Container>
    </StyledComponent>
  )
}

const StyledComponent = styled.section`
    background-color: #EFF1ED;
  .zigzag_top {
      margin-bottom: 120px;
      &__left{
          &__wrapper{
              position: relative;
              padding-top: calc(541 / 490 * 100%);
              border-radius: 20px ;
              
              .global-image{
                  border-radius: 20px ;
                  img{
                      border-radius: 20px ;
                  }
              }
          }
      }
      
      &__right{
          
      }
      @media(max-width: 991px){
          margin-bottom: 60px;
          
          .row{
              display: flex;
              flex-direction: column !important; 
          }
          &__left{
              margin-bottom: 40px;
          }
      }
  }
    
  .zigzag_bottom {
      &__left{
          &__wrapper{
              
          }
      }
      &__right{
          &__wrapper{
              position: relative;
              padding-top: calc(560 / 741 * 100%);
              border-radius: 10px 0 0 10px;
              
              .global-image{
                  border-radius: 20px;
                  img{
                      border-radius: 20px;
                  }
              }
      }
          
      }
      @media(max-width: 991px){
          .row{
              display: flex;
              flex-direction: column-reverse !important;
          }
          &__left{
              margin-top: 40px;
              
          }
          &__right{
          }
              &__wrapper{
                  border-radius: 20px ;
                  .global-image{
                      border-radius: 20px ;
                      img{
                          border-radius: 20px ;
                      }
              }
          }
      }
  }

    .zigzag_bottom__right{
        @media(max-width: 991px){   
            //padding-right: 15px !important;
            &__wrapper{
                border-radius: 20px ;
                .global-image{
                    border-radius: 20px ;
                    img{
                        border-radius: 20px ;
                    }
                }
            }
        }
    }
    
`;