'use client'
import React, { useRef, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const MyComponent = ({ data }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const counters = counterRef.current?.querySelectorAll('.counter-number');

      counters?.forEach((counter) => {
        const target = counter.getAttribute('data-target');
        const hasPlus = target?.includes('+');
        const hasPercent = target?.includes('%');
        const numericValue = parseFloat(target?.replace(/[^0-9.]/g, '')) || 0;

        // Set initial value to 0
        counter.textContent = '0';

        ScrollTrigger.create({
          trigger: counter,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              textContent: numericValue,
              duration: 2,
              ease: 'power2.out',
              snap: { textContent: numericValue % 1 === 0 ? 1 : 0.1 },
              onUpdate: function() {
                const value = Math.ceil(this.targets()[0].textContent);
                let displayValue = value.toString();

                if (hasPlus) {
                  displayValue += '+';
                }
                if (hasPercent) {
                  displayValue += '%';
                }

                counter.textContent = displayValue;
              }
            });
          }
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [data]);

    return (
        <StyledComponent className={'post-wrap'} ref={counterRef}>
            <Row className="overview__counter">
                <Col lg={4}>
                    <div className="overview__counter__img">
                      <img src={data?.images?.list?.[0]?.full_path} alt={`counter-image`} />
                    </div>
                </Col>
                <Col lg={{ span: 7, offset: 1 }} className="overview__counter__wrap">
                    <div className="overview__counter__content">
                        <div className="overview__counter__wrap__number">
                            {
                                data?.posts?.list?.map((item, index) => {
                                    return (
                                      <Row className="overview__counter__wrap__number__row" key={index}>
                                           <Col lg={8}>
                                          <p className={'fade-up'} key={index}>{item?.data?.subtitle}</p>
                                        </Col>
                                        <Col lg={4}>
                                          <h2
                                            className="counter-number"
                                            data-target={item?.data?.short_desc}
                                          >
                                            0
                                          </h2>
                                        </Col>
                                     
                                      </Row>
                                )
                                })
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </StyledComponent>
    );
};

export default MyComponent;

const StyledComponent = styled.section`

    .overview__counter {
        position: relative;
        z-index: 2;
      
      &.row{
        //margin-left: 0;
        margin-right: 0;
      }

        &__img {
            position: relative;
            padding-top: calc(675 / 555 * 100%);
            border-radius: 20px;
            height: 100%;
            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                clip-path: inset(0% 0 0 0);
                border-radius: 20px;
                &:first-child {
                    clip-path: inset(0% 0 0 0);
                }
            }
            @media (max-width: 991px) {
                display: none;
            }
        }

        &__wrap {
            position: relative;
            display: flex;
            flex-direction: column;
            overflow: visible;
            

            &__number {
                /* show numbers as a vertical column */
                display: flex;
                flex-direction: column;
                justify-content: center;
                .overview__counter__wrap__number__row{
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    padding: 20px 0;
                    &:first-child{
                        padding-top: 0;
                    }
                    &:last-child{
                        border-bottom: none;
                    }
                    .col-lg-6{
                        padding: 0;
                        display: flex;
                        align-items: center;
                        &:last-child{
                            justify-content: flex-end;
                        }
                    }
                }
                h2 {
                    color: #285E2F;
                    font-size: 80px;
                    font-weight: 600;
                    line-height: 80px;
                    margin: 0;
                    padding: 0;
                    will-change: transform, opacity;
                    @media (max-width: 1400px) {
                        // font-size: 60px;
                        // line-height: 64px;

                         font-size: 25px;
                        line-height: 25px;
                        
                    }
                    @media (max-width: 1200px) {
                        font-size: 42px;
                        line-height: 48px;
                    }
                }
                p{
                    // text-align: right;
                }
            }

            &__title {
                /* show titles as a vertical column aligned with numbers */
                display: flex;
                flex-direction: column;
                gap: 28px;
                p {
                    color: #171717;
                    font-size: 18px;
                    font-weight: 500;
                    margin: 0;
                    padding: 0;
                    text-align: right;
                    will-change: transform, opacity;
                }
            }

            .overview__counter__content {
                
                width: 100%;
            }

            @media (max-width: 991px) {
                .overview__counter__content {
                    flex-direction: column;
                    gap: 16px;
                }
                &__number h2 {
                    font-size: 40px;
                    line-height: 46px;
                }
                &__title p {
                    text-align: left;
                }
            }
        }
    }
`;