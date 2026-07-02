'use client'
import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import Title from "@/components/common/Title/Title";

const MyComponent = ({data }) => {

    return (
        <StyledMyComponent className={'logos'}>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="verticalcenter">
                            <Title
                                text={data?.section_data?.subtitle}
                                margin={'0 0 20px 0'}
                            />
                            <p className={'fade-up'}>{data?.section_data?.short_desc}</p>
                        </div>
                    </Col>
                    <Col lg={{offset:1, span:6}} className={'logos__bottom'}>
                        <LogoContainer>
                            {
                                data?.images?.list && data?.images?.list?.length > 0 && (
                                    <>
                                        {/* First item goes in TopLogo */}
                                        {data.images.list[0] && (
                                            <TopLogo>
                                                <LogoContent>
                                                    <img src={data.images.list?.[0]?.full_path} alt="Partner Logo" />
                                                </LogoContent>
                                            </TopLogo>
                                        )}

                                        <h6>Authorized Country Partner of:</h6>

                                        {/* Rest of items go in BottomLogos (limit to next 2 items) */}
                                        {data.images.list.length > 1 && (
                                            <BottomLogos>
                                                {data.images.list.slice(1, 3).map((item, index) => (
                                                    <BottomLogo
                                                        key={index}
                                                    >
                                                        <LogoContent>
                                                            <img src={item?.full_path} alt={`Partner Logo ${index + 2}`} />
                                                        </LogoContent>
                                                    </BottomLogo>
                                                ))}
                                            </BottomLogos>
                                        )}
                                    </>
                                )
                            }

                        </LogoContainer>
                    </Col>
                </Row>
            </Container>
        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`
    padding: 80px 0px 0px 0px;
    h6{
        font-size: 24px;
        opacity: 0.8;
    }
    @media(max-width: 767px){
        .logos__bottom{
            margin-top: 60px;
        }
    }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const TopLogo = styled.div`
    width: 250px;
    height: 250px;
    border: 2px solid #629D59;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    box-shadow: 0 0 20px rgba(98, 157, 89, 0.3);
    opacity: 1;
    animation: glowPulse 3s ease-in-out infinite, fadeInUp 0.6s ease-out;
    margin-bottom: 20px;
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes glowPulse {
        0%, 100% {
            box-shadow: 0 0 20px rgba(98, 157, 89, 0.3);
        }
        50% {
            box-shadow: 0 0 40px rgba(98, 157, 89, 0.6);
        }
    }

    span {
        font-size: 24px;
        font-weight: 700;
        color: #dc0032;
        letter-spacing: 2px;
    }

    &:hover {
        border-radius: 60px;
        transform: scale(1.08) translateY(-5px);
        box-shadow: 0 10px 40px rgba(98, 157, 89, 0.5);
        border-color: #4a7d43;
    }

    @media(max-width: 767px){
        width: 160px;
        height: 160px;
        &:hover {
            border-radius: 60px;
            transform: scale(1.05);
        }
    }
`;

const BottomLogos = styled.div`
  display: flex;
  gap: 20px;
`;

const BottomLogo = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #629D59;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  //box-shadow: 0 0 20px rgba(98, 157, 89, 0.3);
  opacity: 1;
  //animation: glowPulse 3s ease-in-out infinite, fadeInUp 0.6s ease-out;
  animation-delay: 0s, 0.2s;

  @keyframes fadeInUp {
      0% {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
      }
      100% {
          opacity: 1;
          transform: translateY(0) scale(1);
      }
  }

  @keyframes glowPulse {
      0%, 100% {
          box-shadow: 0 0 20px rgba(98, 157, 89, 0.3);
      }
      50% {
          box-shadow: 0 0 40px rgba(98, 157, 89, 0.6);
      }
  }

  &:nth-child(2) {
      animation-delay: 0.5s, 0.35s;
  }

  &:hover {
    border-radius: 60px;
    transform: scale(1.08) translateY(-5px);
    box-shadow: 0 10px 40px rgba(98, 157, 89, 0.5);
    border-color: #4a7d43;
  }
  
  @media(max-width: 767px){
      width: 160px;
      height: 160px;
      &:hover {
          border-radius: 60px;
          transform: scale(1.05);
      }
  }
`;

const LogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    max-width: 60%;
    max-height: 80%;
    object-fit: contain;
  }
`;

export default MyComponent;