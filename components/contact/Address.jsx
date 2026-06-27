'use client'
import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({data }) => {

    console.log(data);
    return (
        <StyledMyComponent className={'contact-address'}>
            <Container>
                <Row className={'align-items-center'}>
                    <Col lg={3} md={12}>
                        <h2 className={'split-up'}>{"Let's Talk"}</h2>
                    </Col>
                    <Col lg={9} md={12}>
                        <div className={'contact-address__right'}>
                            <ul >
                                {
                                  data?.section_data?.subtitle &&
                                  <li className={'split-up'}>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14"
                                           fill="none">
                                          <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M6 0C9.31165 0 12 2.53903 12 5.66673C12 7.29542 11.1395 8.97177 10.0592 10.3795C8.55071 12.3455 6.66423 13.7788 6.66423 13.7788C6.27635 14.0735 5.72365 14.0738 5.33577 13.7792C5.33577 13.7792 3.44929 12.3455 1.94082 10.3795C0.860468 8.97177 0 7.29542 0 5.66673C0 2.53903 2.68835 0 6 0ZM6 3.33337C7.36341 3.33337 8.47059 4.37905 8.47059 5.66673C8.47059 6.95441 7.36341 8.00009 6 8.00009C4.63659 8.00009 3.52941 6.95441 3.52941 5.66673C3.52941 4.37905 4.63659 3.33337 6 3.33337Z"
                                                fill="white" />
                                      </svg>
                                      <a href={data?.section_data?.map} target={'_blank'}>
                                          {ReactHtmlParser(data?.section_data?.subtitle)}
                                          
                                      </a>
                                  </li>
                                }

                                {
                                  data?.section_data?.short_desc &&
                                  <li className={' phone'}>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                           fill="none">
                                          <path
                                            d="M13.6329 10.2746L11.675 8.32084C10.9758 7.62307 9.7871 7.90221 9.50741 8.80927C9.29764 9.43729 8.5984 9.78617 7.96909 9.64659C6.57063 9.29771 4.6827 7.48352 4.33308 6.01822C4.12331 5.3902 4.54285 4.69244 5.17216 4.48313C6.08116 4.20403 6.36086 3.01783 5.66162 2.32007L3.70377 0.366326C3.14439 -0.122109 2.30531 -0.122109 1.81584 0.366326L0.4873 1.69208C-0.841242 3.08761 0.627147 6.78576 3.91354 10.0652C7.19994 13.3447 10.9059 14.8798 12.3043 13.4843L13.6329 12.1585C14.1224 11.6003 14.1224 10.763 13.6329 10.2746Z"
                                            fill="white" />
                                      </svg>
                                      <a href={`tel:${data?.section_data?.short_desc}`}>{data?.section_data?.short_desc}</a>
                                  </li>
                                }

                                {
                                  data?.section_data?.description &&
                                  <li className={''}>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11"
                                           fill="none">
                                          <path
                                            d="M8.57096 7.15495C8.20556 7.39855 7.78113 7.52732 7.34353 7.52732C6.90596 7.52732 6.48152 7.39855 6.11613 7.15495L0.0977894 3.1426C0.0643993 3.12034 0.0318698 3.09714 0 3.07327V9.64794C0 10.4017 0.611722 11 1.35204 11H13.335C14.0888 11 14.687 10.3883 14.687 9.64794V3.07324C14.6551 3.09717 14.6225 3.12043 14.589 3.14272L8.57096 7.15495Z"
                                            fill="white" />
                                          <path
                                            d="M0.575147 2.42658L6.59348 6.43895C6.82131 6.59085 7.0824 6.66678 7.3435 6.66678C7.60462 6.66678 7.86575 6.59082 8.09357 6.43895L14.1119 2.42658C14.4721 2.18662 14.6871 1.78502 14.6871 1.35158C14.6871 0.6063 14.0807 0 13.3355 0H1.35158C0.606329 2.86857e-05 0 0.606329 0 1.3523C0 1.78502 0.215028 2.18662 0.575147 2.42658Z"
                                            fill="white" />
                                      </svg>
                                      <a href={`mailto:${data?.section_data?.description}`}>{data?.section_data?.description}</a>
                                  </li>
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>


        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`
    background: #47663B;
    padding: 45px 0;

    h2 {


        color: #FFF;

        /* Sub Headers */
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 32px */
        letter-spacing: -1.6px;
    }

    .contact-address {


        &__right {
            ul {
                display: flex;
                justify-content: space-between;
                align-items: center;

                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &.phone {

                        span {
                            color: white;
                            margin-right: 5px;
                            margin-left: 5px;
                        }
                    }

                    svg {
                        margin-right: 10px;
                    }

                    a {
                        color: #FFF;

                        /* Button */
                        font-family: "Roboto Slab";
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 120%; /* 19.2px */
                        letter-spacing: -0.32px;
                    }
                }
            }
        }
    }
    
    @media(max-width: 767px){
        
        h2{
            margin-bottom: 30px;
        }
        .contact-address{
            padding-right: 20px;
        }
        .contact-address__right{
            ul{
                display: block;
                li{
                    padding-right: 20px;
                    margin-bottom: 20px;
                    justify-content: left;
                }
            }
        }
        
    }

    @media (min-width: 768px) and (max-width: 991px){
        .contact-address__right{
            ul{
                display: block;
                li{
                    justify-content: start;
                    margin-bottom: 20px;
                }
            }
        }
    }

`;


export default MyComponent;














