'use client';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '@/components/common/Title/Title';
import { Green, White } from '@/styles/globalStyleVars';
import reactHtmlParser from 'react-html-parser';

export default function Livenza({data}) {
  // Livenza Group Concerns Data

  return(
    <StyledComponent className={'pt-120 pb-120'}>
      <Container>
        <Row className={'mb-80'}>
          <Col lg={{ span: 8 }}>
            <Title text={'The Livenza Ecosystem'} color={'#000'}/>
            <p className={'ecosystem-desc'}>As a concern of Livenza Group, GreeneryES benefits from a multi-sector backbone spanning clean energy, manufacturing, logistics, automotive, and global sourcing. This ecosystem ensures speed, scalability, and supply-chain reliability across every project.</p>
          </Col>
        </Row>

        <Row className={'mb-60'}>
          <Col md={12}>
            <h2 className={'section-heading'}>Concerns of Livenza Group</h2>
          </Col>
        </Row>

        <Row className={'concerns-grid'}>
          {data?.posts?.list?.map((concern) => (
            <Col lg={4} md={6} sm={12} key={concern?.data?.id} className={'mb-40'}>
              <ConcernCard>
                <div className={'card-header'}>
                  <div className={'icon-box'}>
                    <img src={concern?.images?.[0]?.full_path} alt={concern?.data?.title} className={'icon'}/>
                  </div>
                </div>
                <div className={'card-content'}>
                  <h3 className={'concern-name'}>{reactHtmlParser(concern.data?.subtitle)}</h3>
                </div>
              </ConcernCard>
            </Col>
          ))}
        </Row>
      </Container>
    </StyledComponent>
  )
}

const StyledComponent = styled.section`
    position: relative;
    background: #FFF;
    padding-top: 120px;
    padding-bottom: 120px;

    .ecosystem-desc {
      font-size: 18px;
      line-height: 1.8;
      color: #555;
      margin-top: 40px;
      font-family: "Inter", sans-serif;
    }

    .section-heading {
      font-family: "Banana Grotesk", sans-serif;
      font-size: 32px;
      font-weight: 600;
      color: #000;
      position: relative;
      padding-bottom: 20px;
        margin-top: 40px;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80px;
        height: 4px;
        background: ${Green};
        border-radius: 2px;
      }
    }

    .concerns-grid {
      margin-top: 60px;
    }
    
    .col-lg-4{
        margin-bottom: 30px;
    }

    @media (max-width: 767px) {
      padding-top: 80px;
      padding-bottom: 80px;

      .section-heading {
        font-size: 32px;
        margin-bottom: 40px;
      }

      .ecosystem-desc {
        font-size: 16px;
      }
    }
`;

const ConcernCard = styled.div`
  position: relative;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
  background: #FAFAFA;
  border: 1px solid #E8E8E8;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    border-color: ${props => props.color};

    .card-header {
      .icon-box {
      }
    }

    .concern-name {
      color: ${props => props.color};
    }
  }

  .card-header {
    height: 180px;
    background: linear-gradient(135deg, ${props => props.color}dd 0%, ${props => props.color} 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    position: relative;
    overflow: hidden;
      

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  }

  .icon-box {
    width: 200px;
    height: 150px;
    //background: rgba(255, 255, 255, 0.25);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    z-index: 2;

    .icon {
      font-size: 48px;
      display: block;
    }
  }

  .card-content {
    padding: 40px 30px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .concern-name {
    font-family: "Banana Grotesk", sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #000;
    margin: 0 0 12px 0;
    transition: color 0.4s cubic-bezier(0.4, 0, 0, 1);
    line-height: 1.4;
  }

  .concern-category {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: ${props => props.color};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 16px 0;
  }

  .concern-description {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    color: #666;
    line-height: 1.6;
    margin: 0;
    flex: 1;
  }

  @media (max-width: 991px) {
    .card-header {
      height: 150px;
    }

    .icon-box {
      

      .icon {
        font-size: 40px;
      }
    }

    .card-content {
      padding: 30px 20px;
    }

    .concern-name {
      font-size: 20px;
    }
  }

  @media (max-width: 767px) {
    .card-header {
      height: 130px;
    }

    .icon-box {
      

      .icon {
        font-size: 35px;
      }
    }

    .card-content {
      padding: 25px 20px;
    }

    .concern-name {
      font-size: 18px;
      margin-bottom: 8px;
    }

    .concern-description {
      font-size: 14px;
    }
  }
`;