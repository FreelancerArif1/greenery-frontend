'use client';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import reactHtmlParser from 'react-html-parser';
import { Img } from '@/components/common/Image/Img';
import Title from '@/components/common/Title/Title';
import { secondaryFont } from '@/styles/globalStyleVars';

export default function KeyFeatures({ data, productData }){


  return(
    <StyledComponent>
      <Container>
        <Row>
          <Col>
            <Title text={data?.data?.subtitle} marginSm={'0 0 40px 0'}/>
          </Col>
        </Row>
        <Row className={'mb-reverse'}>
          <Col lg={4}>
            <div className="key-features__image">
              <Img src={data?.images?.[0]?.full_path ? data?.images?.[0]?.full_path : '/images/static/product.webp'} noParallax/>
            </div>
          </Col>
          <Col lg={{span: 7, offset:1}}>
              <div className="key-features__content">
                {reactHtmlParser(data?.data?.description)}
              </div>
          </Col>
        </Row>
      </Container>
    </StyledComponent>
  )
}

const StyledComponent = styled.section`
  padding: 80px 0;
  background: #fff;
    .key-features__image{
        position: relative;
        padding-top: calc(556 / 391 * 100%);
        border-radius: 10px;
        img{
            border-radius: 10px;
        }
    }
    
    .key-features__content{
        ul{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 25px 70px;
            li{
                font-size: 24px;
                line-height: 140%;
                font-weight: 500;
                font-family: ${secondaryFont};
                position: relative;
                border-bottom: 1px solid rgba(0,0,0,0.1);
                padding-bottom: 15px;
                margin-bottom: 15px;
                &:before{
                    //content: '';
                    position: absolute;
                    top: 17px;
                    left: -30px;
                    transform: translateY(-50%);
                    width: 12px;
                    height: 12px;
                    background: #285E2F;
                    border-radius: 50%;
                }
            }
            
            @media(max-width: 767px){
                grid-template-columns: repeat(1, minmax(0, 1fr));
                margin-bottom: 40px;
                gap: 0;
                li{
                    font-size: 18px;
                }
            }
        }
    }
  
`;

