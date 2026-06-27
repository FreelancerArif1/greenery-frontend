'use client'

import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { Col, Row } from 'react-bootstrap';
import { Bg } from '@/styles/globalStyleVars';
import Link from 'next/link';
import GoogleMap from './Map';


const MyComponent = ({data}) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 767);
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledComponent className={'contact-map'}>
      <Row>
        <Col md={{ span: 12}}>
          {/* <Link href={data?.section_data?.subtitle} target={'_blank'}>
            <div className={'image-wrapper'}>
              {isDesktop ?
                <img src={data?.images?.list?.[0]?.full_path} alt={'background'} />
                :
                <img src={data?.images?.list?.[0]?.full_path} alt={'background'} />
              }
            </div>
          </Link> */}

          <div className='htmlmap'>
            <GoogleMap />
          </div>
        </Col>
      </Row>
    </StyledComponent>
  );
};

const StyledComponent = styled.section`
    position: relative;
    overflow: hidden;
    background: ${Bg};
    height: 90vh;
  margin-top: 120px;
    .image-wrapper {
        img {
            height: 90vh;
            width: 100%;
            object-fit: cover;
        }
    }

    .icon {
        cursor: pointer;
        position: absolute;
        top: 20vw;
        right: 38vw;
        @keyframes blink {
            0% {
                r: 40.5;
                opacity: 1;
            }
            50% {
                opacity: 1;
            }
            100% {
                r: 52.5;
                opacity: 0;
            }
        }

        #border-contact {
            opacity: 1;
            animation: blink 2s infinite;
        }
    }

    @media (max-width: 767px) {
        .icon {
            position: absolute;
            top: 75vw;
            right: 18vw;

            svg {
                height: 100px;
                width: 100px;
            }
        }
    }
`;

export default MyComponent;
