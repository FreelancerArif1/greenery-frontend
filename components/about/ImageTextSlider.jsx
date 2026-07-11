'use client';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import reactHtmlParser from 'react-html-parser';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function ImageTextSlider({ data }) {
  const sliderData = data?.posts?.list || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    // Animate text on slide change
    const timeline = gsap.timeline();

    if (titleRef.current) {
      timeline.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }

    if (descRef.current) {
      timeline.fromTo(descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
    }

    if (counterRef.current) {
      timeline.fromTo(counterRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.7'
      );
    }
  }, [activeIndex]);

  const handleSlideChange = (swiper) => {
    // Use realIndex for loop mode to get correct pagination
    setActiveIndex(swiper.realIndex);
  };

  if (!sliderData || sliderData.length === 0) return null;

  // Calculate progress based on current slide
  const progress = ((activeIndex + 1) / sliderData.length) * 100;

  return (
    <StyledComponent className={'pb-120'}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, EffectFade,Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop={sliderData.length > 1}
        loopedSlides={sliderData.length}
        watchSlidesProgress={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.slider-prev',
          nextEl: '.slider-next',
        }}
        onSlideChange={handleSlideChange}
        onInit={(swiper) => {
          // Ensure proper initialization
          setActiveIndex(swiper.realIndex);
        }}
        className="image-text-slider"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-background">
              <img
                src={slide?.images?.[0]?.full_path}
                alt={slide?.data?.title || `Slide ${index + 1}`}
              />
              <div className="bg-overlay"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-content">
        <div className="progress-bar-wrapper">
          <Container>
            <div className="section-title">
              <h3>{reactHtmlParser(data?.section_data?.subtitle)}</h3>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </Container>
        </div>

        <Container>
          <Row>
            <Col lg={3}>
              <div className="slider-controls">
                <div className="slide-counter" ref={counterRef}>
                  {String(activeIndex + 1).padStart(2, '0')}/{String(sliderData.length).padStart(2, '0')}
                </div>

                <div className="nav-buttons mb-d-none">
                  <button className="slider-prev" aria-label="Previous slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <button className="slider-next" aria-label="Next slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </Col>

            <Col lg={8} className="offset-lg-1">
              <div className="content-wrapper">
                <h2 ref={titleRef}>
                  {reactHtmlParser(sliderData[activeIndex]?.data?.subtitle || '')}
                </h2>
                <p ref={descRef}>
                  {reactHtmlParser(sliderData[activeIndex]?.data?.description || '')}
                </p>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
      <div className={'mobile-only'}>
        <div className="slider-controls">

          <div className="nav-buttons">
            <button className="slider-prev" aria-label="Previous slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="slider-next" aria-label="Next slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </StyledComponent>
  );
}

const StyledComponent = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
    padding-top: 30px;
    min-height: 85vh;
  .image-text-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
    
    .section-title{
        margin-bottom: 30px;
        h3{
            font-size: 24px;
            line-height: 130%;
            font-weight: 400;
            color: #FFF;
        }
    }

  .slide-background {
    position: relative;
    width: 100%;
    height: 100%;
      padding-top: calc(817 / 1440 * 100%);

    img {
        position: absolute;
        top: 0;
        left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        rgba(0, 0, 0, 0.2) 100%
      );
    }
  }

  .slider-content {
    position: relative;
    z-index: 2;
    height: 100%;
    color: #fff;
  }

  .progress-bar-wrapper {
    padding-bottom: 120px;

    @media (max-width: 767px) {
      padding-top: 0;
        padding-bottom: 0;
    }
  }

  .progress-bar {
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    overflow: hidden;
    position: relative;

    .progress-fill {
      height: 100%;
      background: #fff;
      border-radius: 2px;
      transition: width 0.3s ease-in-out;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
  }

  .container {
    &:last-child {
        padding-bottom: 0;
      @media (max-width: 767px) {
        padding-bottom: 60px;
      }
    }
  }

  .slider-controls {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 991px) {
      flex-direction: row;
      align-items: center;
      gap: 30px;
      margin-bottom: 40px;
    }

    @media (max-width: 767px) {
      gap: 20px;
      margin-bottom: 30px;
    }
  }

  .slide-counter {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    opacity: 0.8;
    letter-spacing: 2px;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  .nav-buttons {
    display: flex;
    gap: 20px;
    align-items: center;

    @media (max-width: 767px) {
      &.mb-d-none{
          display: none;
      }
    }
  }

  .slider-prev,
  .slider-next {
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    background: transparent;
    //backdrop-filter: blur(10px);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.8);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }

    &.swiper-button-disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    @media (max-width: 767px) {
      width: 40px;
      height: 40px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .content-wrapper {
    max-width: 100%;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  h2 {
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    line-height: 1.1;
    margin-bottom: 30px;
    font-family: "Banana Grotesk", sans-serif;
      @media (max-width: 767px) {
          font-size: 32px;
      } 
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 0;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  .swiper-slide {
    opacity: 0 !important;
    
    &.swiper-slide-active {
      opacity: 1 !important;
    }
  }

  @media (max-width: 767px) {
      padding-top: 80px;
      height: 80vh;
  }
    
    .mobile-only{
        position: absolute;
        bottom: 60px;
        left: 15px;
        z-index: 9999;
        @media(min-width: 768px){
            display: none;
        }
    }
`;
