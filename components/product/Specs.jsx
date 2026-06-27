'use client';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import reactHtmlParser from 'react-html-parser';
import Title from '@/components/common/Title/Title';

export default function Specs({data}){
  return(
    <StyledComponent>
      <Container>
        <Row>
          <Col>
            <Title text={data?.data?.subtitle} margin={'0 0 80px 0'} marginSm={'0 0 40px 0'}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={'spec-table'}>
              {reactHtmlParser(data?.data?.description)}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledComponent>
  )
}

const StyledComponent = styled.section`
  background-color: #EFF1ED;
    padding-top: 100px;
    padding-bottom: 100px;
  .spec-table{
      
      h5{
          font-size: 24px;
          line-height: 34px;
          font-weight: 500;
          color: #000;
          margin-bottom: 40px;
          @media(max-width: 767px){
              margin-bottom: 20px;
              font-size: 18px;
              line-height: 27px;
          }
      }
      div{
          &:not(:last-child){
              margin-bottom: 40px;
          }
          ul{
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              padding-bottom: 40px;
              border-bottom: 1px solid #D3D3D3;
              
              li{
                  margin-bottom: 20px;
                  p{
                      margin-bottom: 10px !important;
                  }
              }
              @media(max-width: 767px){
                  grid-template-columns: repeat(1, minmax(0, 1fr));
                  gap: 20px;
                  p{
                      margin-bottom: 5px;
                  }
                  h6{
                      font-size: 16px;
                  }
              }
          }
          
          p{
              color: rgba(117, 117, 117, 0.68);
              font-weight: 500;
              line-height: 120%;
              font-size: 14px;
              margin-bottom: 20px;
          }
          h6{
              color: #000;
              font-size: 18px;
              line-height: 27px;
              font-weight: 500;
          }
      }
  }
    
    @media(max-width: 767px){
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;