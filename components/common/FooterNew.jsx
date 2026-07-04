'use client'
import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import SvgButton from '@/components/common/Buttons/SvgButton';
import {Black, Green, White, logofacebook} from '@/styles/globalStyleVars';
import { useGlobalData } from '@/context/GlobalContext';
import MainButton from "@/components/common/Buttons/MainButton";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';






const MyComponent = ({ }) => {

  const { globalData } = useGlobalData();


  const d = new Date();

  const demo=`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.11812 12C6.07838 12 6.03865 12 5.99864 11.9998C5.05803 12.0021 4.18891 11.9782 3.3437 11.9268C2.56879 11.8796 1.86146 11.6118 1.29804 11.1524C0.754396 10.7091 0.383149 10.1097 0.194642 9.37106C0.0305787 8.72799 0.0218812 8.09673 0.0135498 7.48616C0.00750733 7.04808 0.00128174 6.52898 0 6.00108C0.00128174 5.47099 0.00750733 4.95188 0.0135498 4.5138C0.0218812 3.90333 0.0305787 3.27207 0.194642 2.62891C0.383149 1.89026 0.754396 1.29086 1.29804 0.847564C1.86146 0.388151 2.56879 0.120359 3.34379 0.0732087C4.18901 0.0218475 5.0583 -0.00213939 6.00093 0.000149441C6.94182 -0.00186473 7.81066 0.0218475 8.65588 0.0732087C9.43078 0.120359 10.1381 0.388151 10.7015 0.847564C11.2453 1.29086 11.6164 1.89026 11.8049 
2.62891C11.969 3.27198 11.9777 3.90333 11.986 4.5138C11.9921 4.95188 11.9984 5.47099 11.9996 
5.99888V6.00108C11.9984 6.52898 11.9921 7.04808 11.986 7.48616C11.9777 8.09664 11.9691 8.7279 
11.8049 9.37106C11.6164 10.1097 11.2453 10.7091 10.7015 11.1524C10.1381 11.6118 9.43078 11.8796 
8.65588 11.9268C7.84646 11.976 7.01497 12 6.11812 12ZM5.99864 11.0623C6.92397 11.0645 7.77358 11.0412 
8.59893 10.991C9.18487 10.9554 9.6929 10.7652 10.1091 10.4258C10.4938 10.1121 10.7588 9.67922 10.8965 
9.13924C11.0331 8.60393 11.041 8.02916 11.0486 7.47335C11.0546 7.03819 11.0608 6.52275 11.0621 5.99998C11.0608 
5.47712 11.0546 4.96177 11.0486 4.52662C11.041 3.9708 11.0331 3.39603 10.8965 2.86063C10.7588 2.32065 10.4938 
1.88779 10.1091 1.57404C9.6929 1.23474 9.18487 1.04459 8.59893 1.00897C7.77358 0.958709 6.92397 0.935546 6.00084 
0.93756C5.0757 0.935363 4.22599 0.958709 3.40064 1.00897C2.8147 1.04459 2.30668 1.23474 1.89048 1.57404C1.50577 
1.88779 1.24082 2.32065 1.10303 2.86063C0.966433 3.39603 0.95856 3.97071 0.950961 4.52662C0.94501 4.96214 0.938784 
5.47786 0.937502 6.00108C0.938784 6.52202 0.94501 7.03783 0.950961 7.47335C0.95856 8.02916 0.966433 8.60393 1.10303 
9.13924C1.24082 9.67922 1.50577 10.1121 1.89048 10.4258C2.30668 10.7651 2.8147 10.9553 3.40064 10.9909C4.22599 11.0412 
5.07588 11.0646 5.99864 11.0623ZM5.9763 8.92968C4.36094 8.92968 3.04661 7.61544 3.04661 5.99998C3.04661 4.38453 4.36094 3.07029 5.9763 3.07029C7.59176 3.07029 8.906 4.38453 8.906 5.99998C8.906 7.61544 7.59176 8.92968 5.9763 8.92968ZM5.9763 4.00779C4.87785 4.00779 3.98411 4.90153 3.98411 5.99998C3.98411 7.09844 4.87785 7.99218 5.9763 7.99218C7.07485 7.99218 7.9685 7.09844 7.9685 5.99998C7.9685 4.90153 7.07485 4.00779 5.9763 4.00779ZM9.23412 2.13278C8.84585 2.13278 8.531 2.44754 8.531 2.83591C8.531 3.22428 8.84585 3.53904 9.23412 3.53904C9.62249 3.53904 9.93725 3.22428 9.93725 2.83591C9.93725 2.44754 9.62249 2.13278 9.23412 2.13278Z" fill="white"/>
</svg>
`
  let year = d.getFullYear();
  const fb=`<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.04494 12V6.52664H5.88138L6.1569 4.39294H4.04494V3.03088C4.04494 2.41332 4.21573 1.99246 5.10231 1.99246L6.23124 1.99199V0.083538C6.03601 0.0581672 5.36585 0 4.58585 0C2.95709 0 1.84201 0.994179 1.84201 2.81956V4.39294H0V6.52664H1.84201V12H4.04494Z" fill="white"/>
</svg>
`
  const ln=`
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.45525 0C0.575317 0 0 0.577807 0 1.33725C0 2.07993 0.558178 2.67421 1.42148 2.67421H1.43818C2.33532 2.67421 2.89365 2.07993 2.89365 1.33725C2.87688 0.577807 2.33532 0 1.45525 0ZM0.151944 3.73056H2.72435V11.4698H0.151944V3.73056ZM6.72032 4.85332C6.72032 4.85332 7.65086 3.54932 9.03858 3.54932C10.7309 3.54932 12 4.65549 12 7.03264V11.4702H9.42786V7.32993C9.42786 6.28952 9.05557 5.57981 8.12474 5.57981C7.41407 5.57981 6.99088 6.05844 6.80491 6.52045C6.73695 6.68591 6.72017 6.91691 6.72017 7.14828V11.4702H4.14784V3.73096H6.72032V4.85332Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.45525 0C0.575317 0 0 0.577807 0 1.33725C0 2.07993 0.558178 2.67421 1.42148 2.67421H1.43818C2.33532 2.67421 2.89365 2.07993 2.89365 1.33725C2.87688 0.577807 2.33532 0 1.45525 0ZM0.151944 3.73056H2.72435V11.4698H0.151944V3.73056ZM6.72032 4.85332C6.72032 4.85332 7.65086 3.54932 9.03858 3.54932C10.7309 3.54932 12 4.65549 12 7.03264V11.4702H9.42786V7.32993C9.42786 6.28952 9.05557 5.57981 8.12474 5.57981C7.41407 5.57981 6.99088 6.05844 6.80491 6.52045C6.73695 6.68591 6.72017 6.91691 6.72017 7.14828V11.4702H4.14784V3.73096H6.72032V4.85332Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.45525 0C0.575317 0 0 0.577807 0 1.33725C0 2.07993 0.558178 2.67421 1.42148 2.67421H1.43818C2.33532 2.67421 2.89365 2.07993 2.89365 1.33725C2.87688 0.577807 2.33532 0 1.45525 0ZM0.151944 3.73056H2.72435V11.4698H0.151944V3.73056ZM6.72032 4.85332C6.72032 4.85332 7.65086 3.54932 9.03858 3.54932C10.7309 3.54932 12 4.65549 12 7.03264V11.4702H9.42786V7.32993C9.42786 6.28952 9.05557 5.57981 8.12474 5.57981C7.41407 5.57981 6.99088 6.05844 6.80491 6.52045C6.73695 6.68591 6.72017 6.91691 6.72017 7.14828V11.4702H4.14784V3.73096H6.72032V4.85332Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.45525 0C0.575317 0 0 0.577807 0 1.33725C0 2.07993 0.558178 2.67421 1.42148 2.67421H1.43818C2.33532 2.67421 2.89365 2.07993 2.89365 1.33725C2.87688 0.577807 2.33532 0 1.45525 0ZM0.151944 3.73056H2.72435V11.4698H0.151944V3.73056ZM6.72032 4.85332C6.72032 4.85332 7.65086 3.54932 9.03858 3.54932C10.7309 3.54932 12 4.65549 12 7.03264V11.4702H9.42786V7.32993C9.42786 6.28952 9.05557 5.57981 8.12474 5.57981C7.41407 5.57981 6.99088 6.05844 6.80491 6.52045C6.73695 6.68591 6.72017 6.91691 6.72017 7.14828V11.4702H4.14784V3.73096H6.72032V4.85332Z" fill="white"/>
</svg>
    `
  const youtube=`<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7528 1.3147C11.6145 0.800612 11.2092 0.395362 10.6951 0.256934C9.7561 0 5.99987 0 5.99987 0C5.99987 0 2.24378 0 1.30474 0.247193C0.800612 0.385474 0.385401 0.800685 0.24712 1.3147C0 2.25367 0 4.20096 0 4.20096C0 4.20096 0 6.15807 0.24712 7.08722C0.385548 7.60124 0.790724 8.00649 1.30481 8.14491C2.25367 8.40192 6.00001 8.40192 6.00001 8.40192C6.00001 8.40192 9.7561 8.40192 10.6951 8.15473C11.2092 8.01637 11.6145 7.61112 11.7529 7.09711C11.9999 6.15807 11.9999 4.21085 11.9999 4.21085C11.9999 4.21085 12.0098 2.25367 11.7528 1.3147ZM4.80396 5.99994V2.40198L7.92746 4.20096L4.80396 5.99994Z" fill="white"/>
</svg>
`
  const twitter=`
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.98807 5.08118L11.3593 0H10.3234L6.52792 4.41192L3.49645 0H0L4.58418 6.6716L0 12H1.0359L5.04407 7.34086L8.24552 12H11.742L6.98781 5.08118H6.98807ZM5.56927 6.73038L5.10479 6.06604L1.40914 0.779804H3.00022L5.98265 5.04596L6.44712 5.71031L10.3239 11.2557H8.73286L5.56927 6.73063V6.73038Z" fill="white"/>
</svg>
    `
    return (
        <StyledMyComponent className={'footer'}>
            <img className={'footer-bg'} src={'/images/static/footer.png'} alt={'footer-background-image'}/>
            <Container>
                <Row className={'footer-top'}>
                    <Col lg={3} md={12}>
                      <div className={'footer__logo'}>
                        <Link href="/">
                          <img src="/images/static/greenery-logo.png" alt="greenery-logo" />
                        </Link>
                      </div>
                      <p className='abouttext'>Greenery Energy Solution Ltd. is a clean-technology Importer and Distributor operating in Bangladesh. </p>
                                                  <div className="footer-social">
                                {/* <h5>Follow Us</h5> */}
                                <ul>
                                  <li>
                                    <a href={'https://www.facebook.com/GreeneryES'} target="_blank">
                                      <SvgButton svg={fb}
                                                //  borderColor={`${Black}`}
                                                 borderColor={``}
                                                 width={25}
                                                  height={25}
                                                 nameofClass={'logofacebook'}
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href={'https://www.instagram.com/greenery_es_ltd?igsh=MXQ5ejU4c3h3d3Z1Yw=='} target="_blank">
                                      <SvgButton svg={demo}
                                                 borderColor={`${Black}`}
                                                 width={25}
                                                  height={25}
                                                 nameofClass={'logoinstagram'}
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href={'https://www.linkedin.com/company/111514964/admin/dashboard/ '} target="_blank">
                                      <SvgButton svg={ln}
                                                 borderColor={`${Black}`}
                                                 width={25}
                                                  height={25}
                                                nameofClass={'logolinkedin'}
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href={'https://youtube.com/@greeneryenergysolutionltd?si=vhJ8duWmZ6rhzUmt '} target="_blank">
                                      <SvgButton svg={youtube}
                                                 borderColor={`${Black}`}
                                                 width={25}
                                                  height={25}
                                                 nameofClass={'logoyoutube'}
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                    </Col>

                  <Col lg={{span: 9}} md={12}>
                    <div className="footer-grid-reset">
                      <Row>
                        <Col md={12} className={'footer__right'}>
                          <Row >
                            <Col md={3} xs={6}>
                              <h4>Quick Links</h4>
                              <li><Link href={'/about-us'}>About Us</Link></li>
                              <li><Link href={'/media'}>News & Events</Link></li>
                              <li><Link href={'/career'}>Career</Link></li>
                              <li><Link href={'/contact'}>Contact</Link></li>
                              <li><Link href={'/our-supply-chain'}>Global Supply Chain</Link></li>
                            </Col>
                            <Col md={3} xs={6}>
                              <h4>Product & Service</h4>
                              <li><Link href={'/renewable-energy/solar-solutions'}>Solar Solutions</Link></li>
                              <li><Link href={'/renewable-energy/ev-chargers'}>EV Charger</Link></li>
                              <li><Link href={'/renewable-energy/hvac-solution'}>HVAC Solution</Link></li>
                              <li><Link href={'/renewable-energy/batter-storage-system'}>Battery Storage System</Link></li>
                            </Col>
                            <Col md={6} xs={12}>
                              <div className="address">
                                <div>
                                  <h5>Contact</h5>
                                  <a href={'#'} target={'_blank'}>
                                    Corporate Headquarter Plot 24 and 26, Canyon Tower, Sonargaon Janapath, Sector 12,
                                    Uttara, Dhaka 1230, Bangladesh
                                  </a>
                                </div>
                                <div className={'contacts'}>
                                  <div>
                                    {/* <h5>Email</h5> */}

                                     
                                    <li className='contactIconsli'><a href={'tel:09639272106'}><FontAwesomeIcon icon={faPhone} size="sm" /> 09639272106</a></li>
                                    {/* <li className='contactIconsli'><a href={'tel:+8801521747410'}><FontAwesomeIcon icon={faPhone} size="sm" /> +8801521 747410</a></li> */}
                                    <li  className='contactIconsli'><a href={'mailto:info@greeneryes.com'}><FontAwesomeIcon icon={faEnvelope} size="sm" /> info@greeneryes.com</a></li>
                                  
                                  </div>
                                </div>
                              </div>







                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>

                  </Col>
                </Row>
              <Row>
                <Col md={12}>
                  <div className={'footer-bottom'}>
                    <p>© 2026 GreeneryES. All rights reserved.</p>
                    <p>Developed by <a href={'https://expotechltd.com.expoaccessories.com'} target={'_blank'}> Expo Technology</a></p>
                  </div>
                </Col>
              </Row>
            </Container>
        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`
  background: ${White};
  position: relative;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 60px;

  .footer-grid-reset{
    .row {
      margin-left: 0;
      margin-right: 0;
    }

    .row > * {
      padding-left: 0;
      padding-right: 0;
    }
  }
  
  .row{
    //width: 100%;
  }
  
  .address{
      
      .contacts{
          display: flex;
            justify-content: space-between;
          margin-top: 10px;
      }
   a{
      
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
    }
      h5{
          color: #000;
        font-size: 16px;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
    
  }

  .footer-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .footer {
    &-top{
      padding-bottom: 20px;
    }
    &__logo {
      margin-bottom: 10px;
    }

    &__para {
      margin-top: 40px;
      padding-top: 40px;
      padding-bottom: 48px;
      border-top: 1px solid rgba(22, 34, 19, 0.17);

      p {
        color: #162213;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.54px;
      }
    }

    &__info {
       h2{
         color: #285E2F;
         font-size: 96px;
         font-style: normal;
         font-weight: 600;
         line-height: 120%; /* 115.2px */
         margin-bottom: 30px;
         @media(min-width: 1201px) and (max-width: 1600px){
           font-size: 80px;
         }
       }
    }

    &__right {
      width: 100%;

      &-first {
        display: flex;
        justify-content: space-between;

        @media (max-width: 767px) {
          div {
            &:last-child {
              margin-left: 25px;
            }
          }
        }
      }

      h4 {
        color: #000;
        font-family: "Inter";
        text-transform: uppercase;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
        margin-bottom: 10px;
      }
      

      li {

        a {
          color: #000;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 27px */
        }

        margin-bottom: 10px;
      }
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    border-top: 1px solid rgba(22, 34, 19, 0.50);

    p, a {
      color: rgba(22, 34, 19, 0.5);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */

    }
  }

  .footer-social {
      h5{
          color: rgba(0,0,0,0.20);
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 24px */
          margin-bottom: 10px;
      }
    ul{
      display: flex;
        gap: 10px;
        
    }
    
  }
  @media (min-width: 768px) {
    .footer__logo {
      margin-bottom: 25px;
    }
}

  @media (max-width: 767px) {
    padding-top: 80px;
    .footer__logo {
      margin-bottom: 25px;
    }

    .footer-social {
      justify-content: start;

      ul {
        display: flex;
          
      }
    }

    .footer__right-first {
      margin-bottom: 20px;
      justify-content: unset;

      div {
        &:first-child {
          margin-right: 60px;
        }
      }

    }

    .footer__para {
      padding-top: 0;
    }
  }

  @media(max-width: 767px){
    .row{
      width: 100%;
    }
    .col-md-4{
      width: 100%;
    }
    .col-md-12{
      width: 100%;
      padding-right: 0px;
    }
    .footer-top{
        padding-bottom: 20px;
    }
    
    .address{
      a{
        font-size: 14px;
      }
      .col-md-4{
        margin-bottom: 30px;
      }
    }
   

    /* Instead, ensure col-6 works properly */
    .col-6 {
      width: 50%;
      float: left;
    }
    
    .footer__right li a{
      font-size: 14px;
    }

    .footer__info{
      margin-bottom: 80px;
      h2{
        font-size: 48px;
        line-height: 120%;
      }
    }
  }

`;


export default MyComponent;














