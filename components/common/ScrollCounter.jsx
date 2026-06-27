'use client'
import React, { useRef, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import {Black} from "@/styles/globalStyleVars";
gsap.registerPlugin(ScrollTrigger);

const MyComponent = ({ data }) => {
  const counterRef = useRef(null);
  const scrollTriggers = useRef([]);
  const pathname = usePathname();

  useEffect(() => {
    // Clear any previous animations/triggers
    cleanupAnimations();

    if (counterRef.current && window.innerWidth > 991) {
      const images = gsap.utils.toArray(".overview__counter__img img");
      const numbers = gsap.utils.toArray(".overview__counter__wrap__number h2");
      const titles = gsap.utils.toArray(".overview__counter__wrap__title p");

      // Create the main scroll trigger for pinning
      const mainScrollTrigger = ScrollTrigger.create({
        trigger: counterRef.current,
        start: "top +=150",
        end: "+=300%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalSections = images.length;
          const sectionLength = 1 / (totalSections - 1);

          // Calculate which section we're in (0-based index)
          const currentSectionIndex = Math.min(
            Math.floor(progress / sectionLength),
            totalSections - 2
          );

          // Calculate progress within the current section
          const sectionProgress = (progress - (currentSectionIndex * sectionLength)) / sectionLength;

          // Update images with clip path
          images.forEach((img, idx) => {
            if (idx === 0) {
              // First image is always visible at the start
              gsap.set(img, { clipPath: "inset(0% 0 0 0)" });
            } else if (idx === currentSectionIndex + 1) {
              // Next image is revealed based on section progress
              gsap.set(img, { clipPath: `inset(${Math.max(0, 100 - sectionProgress * 100)}% 0 0 0)` });
            } else if (idx <= currentSectionIndex) {
              // Previous images are fully visible
              gsap.set(img, { clipPath: "inset(0% 0 0 0)" });
            } else {
              // Future images are hidden
              gsap.set(img, { clipPath: "inset(100% 0 0 0)" });
            }
          });

          // Update the position of ALL numbers based on the current progress
          numbers.forEach((num, idx) => {
            // Calculate each number's position relative to current section
            let position = (idx - currentSectionIndex) * 100 - sectionProgress * 100;
            let opacity = 0.3;

            // Currently active number
            if (idx === currentSectionIndex) {
              opacity = 1 - sectionProgress * 0.7;
            }
            // Next number coming in
            else if (idx === currentSectionIndex + 1) {
              opacity = 0.3 + sectionProgress * 0.7;
            }

            gsap.set(num, {
              y: `${position}%`,
              opacity: opacity
            });
          });

          // Update titles
          titles.forEach((title, idx) => {
            if (idx === currentSectionIndex) {
              // Current title fades out
              gsap.set(title, {
                y: -50 * sectionProgress,
                opacity: Math.max(0, 1 - sectionProgress)
              });
            } else if (idx === currentSectionIndex + 1) {
              // Next title fades in
              gsap.set(title, {
                y: Math.max(0, 50 - 50 * sectionProgress),
                opacity: Math.min(1, sectionProgress)
              });
            } else if (idx < currentSectionIndex) {
              // Previous titles are hidden
              gsap.set(title, { y: -50, opacity: 0 });
            } else {
              // Future titles are hidden
              gsap.set(title, { y: 50, opacity: 0 });
            }
          });
        }
      });

      scrollTriggers.current.push(mainScrollTrigger);

      // Set initial states
      gsap.set(images[0], { clipPath: "inset(0% 0 0 0)" });
      gsap.set(images.slice(1), { clipPath: "inset(100% 0 0 0)" });

      // Set up the numbers
      numbers.forEach((num, i) => {
        gsap.set(num, {
          y: `${i * 100}%`,
          opacity: i === 0 ? 1 : 0.3,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        });
      });

      // Set up titles
      gsap.set(titles[0], { opacity: 1, y: 0 });
      gsap.set(titles.slice(1), { opacity: 0, y: 50 });

      // Set up containers for proper positioning
      gsap.set(".overview__counter__wrap__number", {
        position: "relative",
        height: numbers[0].offsetHeight,
        // overflow: "hidden"
      });

      gsap.set(".overview__counter__wrap__title", {
        position: "absolute",
        top: 40,
        right: 0,
        textAlign: "right",
        height: titles[0].offsetHeight,
        width: "250px",
      });

      gsap.set(titles, {
        position: "absolute",
        right: 0,
        top: 0,
      });
    }

    // Cleanup function
    return cleanupAnimations;
  }, [pathname, data]);

  // Robust cleanup function
  const cleanupAnimations = () => {
    // Kill all stored scroll triggers
    scrollTriggers.current.forEach(trigger => {
      if (trigger && trigger.kill) {
        trigger.kill();
      }
    });

    // Clear the arrays
    scrollTriggers.current = [];

    // Reset any transformed elements
    if (counterRef.current) {
      const elements = counterRef.current.querySelectorAll('.overview__counter__img img, .overview__counter__wrap__number h2, .overview__counter__wrap__title p');
      elements?.forEach(el => {
        gsap.set(el, { clearProps: "all" });
      });

      const containers = counterRef.current.querySelectorAll('.overview__counter__wrap__number, .overview__counter__wrap__title');
      containers?.forEach(container => {
        gsap.set(container, { clearProps: "all" });
      });
    }

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  };
    return (
        <StyledComponent className={'post-wrap'} ref={counterRef}>
            <Row className="overview__counter">
                <Col lg={4}>
                    <div className="overview__counter__img">
                        {
                            data?.posts?.list?.map((item, index) => {
                                return (
                                    <img key={index} src={item?.images?.[0]?.full_path} alt={`counter${index + 1}`} />
                                )
                            })
                        }
                    </div>
                </Col>
                <Col lg={{ span: 7, offset: 1 }} className="overview__counter__wrap">
                    <div className="overview__counter__content">
                        <div className="overview__counter__wrap__number">
                            {
                                data?.posts?.list?.map((item, index) => {
                                    return (
                                        <h2 key={index}>{item?.data?.short_desc}</h2>
                                    )
                                })
                            }
                        </div>
                        <div className="overview__counter__wrap__title">
                            {
                                data?.posts?.list?.map((item, index) => {
                                    return (
                                        <p key={index}>{item?.data?.subtitle}</p>
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
            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                clip-path: inset(100% 0 0 0);
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
            padding-top: 40px;
            overflow: hidden;

            &:after{
                content: '';
                position: absolute;
                width: 100%;
                height: 40px;
                background-color: #FFF;
                top: 0;
                left: 0;
                z-index: 9999;
                will-change: transform;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
            }
            &:before{
                content: '';
                position: absolute;
                width: 100%;
                height: 30vh;
                background-color: #394854;
                top: -30vh;
                left: 0;
                z-index: 99999;
                display: none;
                will-change: transform;
                @media(max-width: 991px){
                    display: block;
                }
            }

            &__number {
                position: relative;
                min-height: 100px;
                h2 {
                    color: #285E2F;
                    font-size: 80px;
                    font-weight: 600;
                    line-height: 80px;
                    margin: 0;
                    padding: 0;
                    will-change: transform, opacity;
                }
            }

            &__title {
                position: absolute;
                right: 0;
                top: 40px;
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
        }
    }
`;