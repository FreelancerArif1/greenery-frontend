"use client";

import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import {gsap} from "gsap";
import {Container, Col, Row} from "react-bootstrap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import reactHtmlParser from 'react-html-parser';
import CustomEase from "gsap/CustomEase";
import VideoBanner from "@/components/common/Video";
import MainButton from "@/components/common/Buttons/MainButton";
import {White} from "@/styles/globalStyleVars";
gsap.registerPlugin(ScrollTrigger);

export default function HomeSlider({data,metadata}) {

    const [offset, setOffset] = useState(130);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef([]);
    const numberRefs = useRef([]);
    const subtitleRefs = useRef([]);
    const titleRefs = useRef([]);
    const isTweening = useRef(false);
    const isDesktop = typeof window !== "undefined" ? window.innerWidth > 991 : false;
    const sectionRef = useRef(null);
    const sliderImagesRef = useRef(null);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    // Animation for titles only
    const animateTitles = (direction, currentIndex, nextIndex) => {
        const xMove = direction === "next" ? -100 : 200;
        const currentTitle = titleRefs.current[currentIndex];
        const nextTitle = titleRefs.current[nextIndex];

        if (!currentTitle || !nextTitle) {
            console.warn("Title elements are undefined during animation");
            return;
        }

        const tl = gsap.timeline();

        gsap.set(nextTitle, {
            x: -xMove,
            opacity: 0,
        });

        tl.to(currentTitle, {
            duration: 1,
            x: xMove,
            opacity: 0,
            ease: "power2.in",
        })
            .to(nextTitle, {
                duration: 1,
                x: 0,
                opacity: 1,
                ease: "power2.out",
            }, "-=0.5");
    };

// Animation for nav elements only
    const animateNavElements = (direction, currentIndex, nextIndex) => {
        const xMove = direction === "next" ? -100 : 200;
        const currentNumber = numberRefs.current[currentIndex];
        const currentSubtitle = subtitleRefs.current[currentIndex];
        const nextNumber = numberRefs.current[nextIndex];
        const nextSubtitle = subtitleRefs.current[nextIndex];

        if (!currentNumber || !currentSubtitle || !nextNumber || !nextSubtitle) {
            return; // Silently skip if nav elements don't exist
        }

        const tl = gsap.timeline();

        gsap.set([nextNumber, nextSubtitle], {
            x: -xMove,
            opacity: 0,
        });

        gsap.set(nextNumber.parentElement?.parentElement, {
            visibility: "visible",
            opacity: 1,
        });

        tl.to([currentNumber, currentSubtitle], {
            duration: 1,
            x: xMove,
            opacity: 0,
            ease: "power2.in",
        })
            .to([nextNumber, nextSubtitle], {
                duration: 1,
                x: 0,
                opacity: 1,
                ease: "power2.out",
            }, "-=0.2")
            .add(() => {
                gsap.set(currentNumber.parentElement?.parentElement, {
                    visibility: "hidden",
                    opacity: 0,
                });
            });
    };

// Combined animation function
    const animateContent = (direction, currentIndex, nextIndex) => {
        animateTitles(direction, currentIndex, nextIndex);
        animateNavElements(direction, currentIndex, nextIndex);
    };


    const progressBarRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [totalSlides, setTotalSlides] = useState(data?.posts?.list?.length); // Added this line

// Calculate the dynamic progress width based on progress bar width and slides count
    const updateProgress = () => {
        if (!progressBarRef.current) return;

        const progressBarWidth = progressBarRef.current.offsetWidth;
        const slides = data?.posts?.list?.length;
        setTotalSlides(slides);

        // Calculate the dynamic slide width
        const dynamicSlideWidth = progressBarWidth / slides;
        setSlideWidth(dynamicSlideWidth);

        const newProgress = currentIndex * dynamicSlideWidth;
        setProgress(newProgress);
    };

    useEffect(() => {
        const handleResize = () => {
            setOffset(document.querySelector('.container')?.offsetLeft || 130);
            // Recalculate progress width on resize
            updateProgress();
        };

        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, [data?.posts?.list, currentIndex]); // Added currentIndex to dependency array


    const gotoSlide = (direction) => {
        if (isTweening.current) return;
        isTweening.current = true;

        const slidesList = slidesRef.current;
        const currentSlide = slidesList[currentIndex];
        let nextIndex =
            direction === "next"
                ? currentIndex + 1
                : currentIndex - 1;

// Prevent out-of-bounds navigation
        if (nextIndex < 0 || nextIndex >= data?.posts?.list?.length) {
            isTweening.current = false;
            return;
        }

        const nextSlide = slidesList[nextIndex];

        gsap.set(nextSlide, {
            zIndex: 2,
            clipPath:
                direction === "next"
                    ? "polygon(100% 0, 100% 0%, 98% 100%, 100% 100%)"
                    : "polygon(0% 0, 0% 0%, 2% 100%, 0% 100%)",
            x: direction === "next" ? 100 : -100,
        });

        gsap.set(currentSlide, {
            zIndex: 1,
            x: 0,
        });

        const tl = gsap.timeline({
            onComplete: () => {
                isTweening.current = false;
                gsap.set(currentSlide, { clearProps: "all" });
                setCurrentIndex(nextIndex);
                setIsPrevDisabled(nextIndex === 0);
                setIsNextDisabled(nextIndex === data?.posts?.list?.length - 1);
            },
        });

        tl.to(nextSlide, {
            duration: 1.2,
            ease: CustomEase.create(
                "custom",
                "M0,0 C0.173,0 0.446,0.114 0.526,0.208 0.605,0.301 0.642,0.527 0.695,0.666 0.739,0.782 0.79,0.911 0.916,0.967 1.047,1.025 1.01,0.987 1,1 "
            ),
            clipPath:
                direction === "next"
                    ? "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)"
                    : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            x: 0,
        }).to(
            currentSlide,
            {
                delay: isDesktop ? 0.3 : 0.5,
                duration: 1,
                ease: "power2.in",
                x: direction === "next" ? -200 : 200,
            },
            0
        );

        animateContent(direction, currentIndex, nextIndex);
    };


    useEffect(() => {
        const updateOffset = () => setOffset(document.querySelector('.container')?.offsetLeft + 15);

        window.addEventListener('load', updateOffset);
        window.addEventListener('resize', updateOffset);

        updateOffset(); // Initial calculation

        return () => {
            window.removeEventListener('load', updateOffset);
            window.removeEventListener('resize', updateOffset);
        }
    }, []);

    // Update progress when currentIndex changes
    useEffect(() => {
        updateProgress();
    }, [currentIndex]);


    return (
        <StyledComponent ref={sectionRef} offset={offset} totalSlides={totalSlides}>

            <Container fluid>
                <Row className={"h-100 scroll-section"}>
                    <Col>

                        <div className={"slider-images"} ref={sliderImagesRef}>
                            <div className={'slider-wrapper'}>
                                {data?.posts?.list?.map((slide, i) => (
                                    <ImageWrapper key={i}
                                                  ref={(el) => (slidesRef.current[i] = el)}>
                                        {
                                            <VideoBanner src={slide.images?.[0]?.full_path}/>
                                        }
                                        {/*<img src={slide.images?.[0]?.full_path}/>*/}

                                    </ImageWrapper>
                                ))}
                            </div>
                        </div>

                        <Row>
                            <Col lg={9}>
                                {data?.posts?.list?.map((slide, i) => (
                                    <div
                                        className={`wrapper ${i === currentIndex ? 'active' : ''}`}
                                        key={i}
                                    >
                                        <div className={"title-wrapper"}>
                                            <div className={"title reveal-down-text"} ref={(el) => (titleRefs.current[i] = el)}>
                                                <h1>{reactHtmlParser(slide.data?.subtitle)}</h1>
                                                <p className="description-mobile-hide">{reactHtmlParser(slide.data?.description)}</p>
                                            </div>
                                            <div className={'bottom-buttons'} >
                                                <MainButton src={'/contact'} text={'Contact Us'} margin={'0 20px 0 0'}/>
                                                <MainButton
                                                    src={'/partnership'}
                                                    border={"1px solid white"}
                                                    background={'transparent'}
                                                    text={'Join Us'}/>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </Col>
                        </Row>
                        <Row className={'h-100'}>
                            <Col lg={12} md={12}>
                                <div className={"nav-wrapper"}>
                                    {/* <>
                                        <div className="progress-bar-container" ref={progressBarRef}>
                                            {/* <div className="progress-bar" style={{
                                                width: `${slideWidth}px`,
                                                transform: `translateX(${progress}px)`,
                                            }}></div> 
                                        </div>
                                    </> */}


                                    <div className={'buttons-wrapper'}>
                                        <div
                                            className={`nav-button left-btn hover ${isPrevDisabled ? 'disabled-btn' : ''}`}
                                            onClick={() => !isPrevDisabled && gotoSlide('prev')}
                                        >

                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15"
                                                 viewBox="0 0 9 15" fill="none">
                                                <path d="M7.46386 13.9277L0.999999 7.46388L7.46386 1.00002"
                                                      stroke="#FFF" stroke-width="2" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                            </svg>

                                        </div>
                                        {/*<Divider style={{color: slides[currentIndex].color}}>/</Divider>*/}
                                        <div
                                            className={`nav-button right-btn hover ${isNextDisabled ? 'disabled-btn' : ''}`}
                                            onClick={() => !isNextDisabled && gotoSlide("next")}
                                        >

                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15"
                                                 viewBox="0 0 9 15" fill="none">
                                                <path d="M1.00001 13.9277L7.46387 7.46388L1.00001 1.00002"
                                                      stroke="#FFF" stroke-width="2" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                            </svg>

                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
}

const StyledComponent = styled.section`
    //width: 102%;
    //height: 105svh;
    position: relative;
    transition: color 0.5s ease-in-out;
    background: #051936;
    overflow: hidden;

    .container-fluid {
        height: 100svh;
        //padding: 0 0 0 145px;
    }


    .text-area {
        z-index: 2;
        margin-left: ${props => props.offset ? props.offset : '90'}px;

        p, h1 {
            color: #F8F0E8;
        }

        h1 {
            color: #F8F0E8;
            font-size: 13.177vw;
            font-style: normal;
            font-weight: 300;
            line-height: 100%;

            span {
                display: inline-block;
                text-indent: 7vw;
            }
        }

        p {
            margin: 14vw 0 80px 0;
            width: 200%;
        }

        h2 {
            display: inline-block;
            position: absolute;
            bottom: 9.663vw;
            color: #F8F0E8;
            font-size: 5.857vw;
            font-style: normal;
            font-weight: 300;
            line-height: 105%;
        }
    }


    .cta-box-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 8vw;

        svg {
            transform: rotate(90deg);
        }
    }

    .slider-images {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: center center;
        will-change: transform;

        .slider-wrapper {
            width: 100%;
            height: 100%;
            overflow: hidden;


        }

    }

    .wrapper {
        position: absolute;
        //top: 40%;
        z-index: 10;
        //left: 0;
        //top: 0;
        //transform: translate(-50%,-50%);
        //margin-left: 90px;
        margin-top: 15%;
        margin-left: ${prop=>prop?.offset-15}px;
        margin-right: ${prop=>prop?.offset-15}px;


        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.5s ease;

        &.active {
            opacity: 1;
            visibility: visible;
        }


        &__top {
            display: flex;
            align-items: center;
            gap: 5vw;
            overflow: hidden;
            justify-content: space-between;

            .row {
                align-items: center;
            }

            &__number {
                font-size: 1.2vw;
                font-weight: 400;
            }

            &__subtitle {
                font-size: 1.2vw;
                font-weight: 400;
                letter-spacing: 1px;
            }
        }

        //@media (min-width: 392px) and (max-width: 410px) {
        //    margin-top: 15%;
        //}

    

        @media (min-width: 360px) and (max-width: 389px) {
            margin-top: 40%;
        }
        @media (min-width: 390px) and (max-width: 391px) {
            margin-top: 40%;
        }
        @media (min-width: 392px) and (max-width: 395px){
            margin-top: 30% !important;
        }
        @media (min-width: 396px) and (max-width: 767px){
            margin-top: 60% !important;
        }
        @media (min-width: 768px) and (max-width: 990px){
            margin-top: 40% !important;
        }
        @media (min-width: 1921px) {
            margin-top: 25%;
        }
    }

    .title-wrapper {
        .bottom-buttons{
            display: flex;
            margin-bottom: 60px;           
        }
        .title {
            h1 {
                //font-size: 5.857vw;
                //color: #F8F0E8;
                //font-family: Axiforma;
                //font-style: normal;
                //font-weight: 300;
                //line-height: 105%;



                /* H1 */
                color: #FFF;
                font-family: "Banana Grotesk";
                font-size: 45px;
                font-weight: 700;
                font-style: normal;
                /* font-weight: 500; */
                line-height: 130%;
                margin-bottom: 40px;
            }
            p{
                color: #FFF;

                /* Medium/bodyM */
                font-family: "Inter";
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%; /* 27px */
                margin-bottom: 40px;

            }
        }
    }

    .nav-wrapper {
        position: absolute;
        opacity: 1 !important;
        visibility: visible !important;
        bottom: 0;
        left: ${prop=>prop?.offset}px;
        display: flex;
        gap: 4rem;
        z-index: 10;
        //flex-direction: column;
        //height: 100%;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 80px;

        .buttons-wrapper {
            display: flex;
            justify-content: flex-end;
            gap: 20px;
            //padding-left: 90px;
            //padding-bottom: 60px;
            padding-left: ${prop=>prop?.offset}px;
            padding-right: ${prop=>prop?.offset + 130}px;
        }

        .wrapper__top {
            background: #E8B49E;
            padding: 60px 0 0 60px;
            padding-right: ${props => props.offset ? props.offset + 15 : '90'}px;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            min-height: 26vw;
            max-width: 30vw;
            min-width: 30vw;


            &__number {
                margin-left: auto;
                padding-bottom: 75px;
            }

            p, span {
                color: #051936;
                display: -webkit-box;
                -webkit-line-clamp: 6;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;

            }
        }

        .nav-button {
            background: transparent;
            border-right: 50px;
            border-radius: 100%;
            border: 1px solid ${White};
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            //border: none;
            cursor: pointer;
            position: relative;
            transition: opacity 0.3s ease, color 0.5s ease-in-out;
            &.disabled-btn{
                opacity: 0.5;
                cursor: unset;
            }

            svg {
                position: relative;
                z-index: 10;
            }
        }

        .progress-bar-container {
            display:none;
            position: relative;
            //margin-bottom: 60px;
            padding-left: 15px;
            padding-right: 15px;
            width: 100%; // Changed this line
            height: 3px; // Height of the progress bar
            // background-color: rgba(255, 255, 255, 0.2); // Track color

            @media(max-width: 767px){
                margin: 35px 0;
                width: 85%;
            }
        }

        .progress-bar {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background-color: #ffffff;
            transition: transform 0.3s ease-in-out;
            filter: drop-shadow(0px 0px 5px #fff);
        }

        @media (max-width: 767px) {
            .progress-bar-container {
                .progress-bar {
                    width: 50px;
                }
            }
        }

    }

    @media (max-width: 992px) {
        .progress-bar-container{
            display: none;
        }
        .slider-images {
            transform-origin: bottom;
            padding-right: 15px;
        }
        
        .bottom-buttons{
            display: block !important;
            .dc-btn{
                &:first-child{
                    margin-bottom: 20px;
                   
                }
                &:last-child{
                    width: 56%;
                    a{
                        width: 100%;
                    }
                }                
                
            }
            //margin-bottom: 60px;
        }
        .text-area {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;

            p {
                font-size: 16px;
                margin: 42vw 0 80px 0;
                width: 100%;
                padding-right: 15px;
                
            }

            h1 {
                color: #F8F0E8;
                font-size: 80px;
                font-style: normal;
                font-weight: 300;
                line-height: 84px;
                padding-bottom: 20vh;
                padding-left: 20px;
            }
        }


        .wrapper {
            //top: unset;
            padding-left: 0px;
            //margin-top: 32%;
            //bottom: 320px;
            bottom: unset;
            margin-left: 0px;
            margin-right: 15px !important;
            
            .title{
                p{
                    width: 96%;
                }
            }

            .title-wrapper {
                padding-left: 15px;

                .title {
                    h1 {
                        font-size: 48px;
                    }
                }
            }
        }

        .nav-wrapper {
            left: 15px;
            bottom: 0;
            width: unset!important;
            .wrapper {

                &__top {
                    margin-bottom: 0;
                    padding: 30px 30px 30px 30px;
                    gap: 55px;
                    min-height: 66.5vw;
                    padding-bottom: 30px;
                    &__subtitle {
                        p {
                            font-size: 16px;
                        }
                    }

                    &__number {
                        padding-right: 0;
                        padding-bottom: 70px;
                        margin-top: 0;
                        font-size: 16px;

                        span {
                            font-size: 16px;
                        }
                    }
                }
            }

            .buttons-wrapper {
                padding-bottom: 80px;
                padding-left: 30px;
            }

            .nav-button {
                height: 48px;
                width: 48px;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {

        .progress-bar-container{
            display: none;
        }
        .buttons-wrapper{
            padding-right:13vw!important;
        }
        .wrapper {
            //margin-left: 7vw;

            &__top {
                padding-right: 30px!important;
                min-height: 35vw!important;
                &__number {
                    font-size: 16px;
                }

                &__subtitle {
                    font-size: 16px;
                }
            }
        }

    }

    @media(max-width: 767px){
        .nav-wrapper{
            width: 100% !important;
            padding-bottom: 0 !important;
            margin-bottom: 30px !important;
            display: block !important;
            margin-left: 15px;

        }
        .buttons-wrapper{
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
            padding-right: 70px !important;
            justify-content: start !important;
            padding-left: 0px !important;
        }

        .title-wrapper{
            padding-left:0px !important;
            .title{
                h1{
                    color: #FFF;
                    font-family: Mosvita;
                    font-size: 36px !important;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 120%; /* 60px */
                    letter-spacing: -1px;
                }
                p.description-mobile-hide {
                    display: none;
                }
            }
        }
    }
    
    @media(min-width: 768px) and (max-width: 990px){
        .bottom-buttons{
            display: block !important;
            .dc-btn{
                &:first-child{
                    margin-bottom: 20px;
                }
                &:last-child{
                    width: fit-content;
                    a{
                        width: 100%;
                    }
                }

            }
            //margin-bottom: 60px;
        }
    }
`;

const ImageWrapper = styled.div`
    //position: relative;
    //padding-top: calc(768/1366 *100%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
    background-size: cover;
    background-position: center;
    background-image: ${({bg}) => `url(${bg})`};


    &:first-child {
        clip-path: polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%);
    }

    // Add tint overlay
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(233deg, rgba(0, 0, 0, 0.00) 40.33%, rgba(0, 0, 0, 0.70) 76.85%) no-repeat;
        pointer-events: none;
        z-index: 1;
    }
    
    
`;


const Divider = styled.span`
    transition: color 0.5s ease-in-out;
`;