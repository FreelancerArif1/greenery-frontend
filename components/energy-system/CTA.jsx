'use client';
import styled from 'styled-components';
import { Img } from '@/components/common/Image/Img';
import Title from '@/components/common/Title/Title';
import reactHtmlParser from 'react-html-parser';
import MainButton from '@/components/common/Buttons/MainButton';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';



export default function CTA({data, noFirstButton,noSecondButton}) {
  const leftTopVectorRef = useRef(null);
  const rightTopVectorRef = useRef(null);
  const rightBottomVectorRef = useRef(null);
  const componentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Top vectors: move from top to bottom (parallax down)
      if (leftTopVectorRef.current) {
        gsap.fromTo(leftTopVectorRef.current,
          { y: -100 },
          {
            y: 100,
            ease: 'none',
            scrollTrigger: {
              trigger: componentRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          }
        );
      }

      if (rightTopVectorRef.current) {
        gsap.fromTo(rightTopVectorRef.current,
          { y: -100 },
          {
            y: 100,
            ease: 'none',
            scrollTrigger: {
              trigger: componentRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          }
        );
      }

      // Bottom vector: move from bottom to top (parallax up)
      if (rightBottomVectorRef.current) {
        gsap.fromTo(rightBottomVectorRef.current,
          { y: 100 },
          {
            y: -100,
            ease: 'none',
            scrollTrigger: {
              trigger: componentRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          }
        );
      }
    }, componentRef);

    return () => ctx.revert();
  }, []);
  return (
    <StyledComponent ref={componentRef}>
      <Img src={data?.images?.list?.[0]?.full_path}/>
      <div className={'left-top-vector'} ref={leftTopVectorRef}>
        <img src={'/images/static/01.png'} alt="Decorative vector"/>
      </div>
      <div className={'right-top-vector'} ref={rightTopVectorRef}>
        <img src={'/images/static/02.png'} alt="Decorative vector"/>
      </div>
      <div className={'right-bottom-vector'} ref={rightBottomVectorRef}>
        <img src={'/images/static/03.png'} alt="Decorative vector"/>
      </div>
      <div className={'content'}>
        <Title text={data?.section_data?.subtitle}/>
        <p className={'fade-up'}>{reactHtmlParser(data?.section_data?.description)}</p>
        <div className="cta-btn">
          {
            !noFirstButton &&
            <MainButton text={data?.section_data?.btn_one_text ? data?.section_data?.btn_one_text :'Get Solar'} src={data?.section_data?.btn_one_link ? data?.section_data?.btn_one_link :'/'} background={'white'} color={'#285E2F'} width={'233px'} />

          }
          {
            !noSecondButton &&
            <MainButton text={data?.section_data?.btn_two_text ? data?.section_data?.btn_two_text :'Become a Dealer'} src={data?.section_data?.btn_two_link ? data?.section_data?.btn_two_link :'/'} width={'233px'}/>

          }
        </div>
      </div>
    </StyledComponent>
  )
}

const StyledComponent = styled.section`
  position: relative;
    padding-top: calc(700 / 1440 * 100%);
    overflow: hidden;
    min-height: 100vh;
    .left-top-vector{
        position: absolute;
        top: 0;
        left: 0;
        will-change: transform;
    }
    
    .right-top-vector{
        position: absolute;
        top: 0;
        right: 0;
        will-change: transform;
    }
    
    .right-bottom-vector{
        position: absolute;
        bottom:-15%;
        right: 0;
        will-change: transform;
        @media(min-width: 1600px){
            bottom: -10%;
        }
    }
    
    .content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #000;
        
        .cta-btn{
            display: flex;
            gap: 40px;
            justify-content: center;
            margin-top: 40px;
            
            a{
                width: 100% !important;
            }
        }
    }
    
    @media(max-width: 767px){
        padding-top: calc(700 / 375 * 100%);
        
        .content{
            width: 90%;
            
            .cta-btn{
                flex-direction: column;
                align-items: center;
            }
        }
    }
  
`;

