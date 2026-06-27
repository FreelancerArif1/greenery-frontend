"use client"
import React, {memo} from 'react';
import styled from "styled-components";
import reactHtmlParser from "react-html-parser";
import Link from "next/link";
import {Img} from "@/components/common/Image/Img";
import {hover} from "@/styles/globalStyleVars";


const MyComponent = ({title, shortDesc, img, slug, day, month, year,type}) => {
    return (
        <StyledComponent>
            <div className="blog-single">
                <div className="blog-single__inner">
                    <Link href={`/media/${slug}`}></Link>
                    <Img
                        noParallax
                        src={img}
                        objectFit={'cover'}
                        layout={'fill'}/>
                    <div className="blog-single__inner__content">
                        <div className="blog-single__inner__content__top">
                            <p>{reactHtmlParser(shortDesc)}</p>
                            <h2>{reactHtmlParser(shortDesc)}</h2>
                        </div>
                        <div className="blog-single__inner__content__bottom">
                            <div>
                                <h4>{day}</h4>
                                <p>{`${month} ${year}`}</p>
                            </div>
                            <h5>{type}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    border-radius: 20px;
    border: 1px solid #285E2F;

    .blog-single {      
    .blog-single__inner {
      padding-top: calc(460 / 370 * 100%);
      position: relative;

      a {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 3;
      }

      &__content {
        &:after {
          content: '';
          height: 100%;
          width: 100%;
          // background-color: #FFF;
            border-radius: 20px;
          top: 0;
          left: 0;
          right: 0;
          position: absolute;
          transition: height .4s ease;
          @media (max-width: 600px) {
            background-color: rgba(0, 0, 0, 0.5);
          }
        }

        &__top {
          p {
              font-size: 24px;
              line-height: 32px;
              margin: 0;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 5;
              -webkit-box-orient: vertical;
            color: #ffffff;
            position: absolute;
            left: 40px;
            top: 40px;
            z-index: 2;
            right: 40px;
            transform: translateY(-30px);
            opacity: 0;
            transition: all .6s ease;
         
          }

          h2 {
            position: absolute;
            top: 40px;
            left: 40px;
            right: 40px;
            z-index: 2;
            font-size: 24px;
            line-height: 32px;
            margin: 0;
            transition: all .3s ease;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            @media (max-width: 600px) {
              color: #ffffff;
            }
          }
        }

        &__bottom {
          position: absolute;
          margin: 0;
          left: 40px;
          right: 40px;
          bottom: 24px;
          display: flex;
          justify-content: space-between;
          //border-top: 1px solid #1D3130;
          padding-top: 20px;
          z-index: 2;
          @media (max-width: 600px) {
            border-color: #ffffff;
          }

          h4 {
            color: #629D59;
            transition: color .3s ease;
              font-family: "Inter";
              font-size: 48px;
              font-style: normal;
              font-weight: 700;
              line-height: 125%; /* 60px */
            @media (max-width: 600px) {
              color: #ffffff;
            }
          }

          p {
            font-size: 14px;
            color: ${hover};
            text-align: right;
            line-height: 20px;
            transition: color .3s ease;
            @media (max-width: 600px) {
              color: #ffffff;
            }

            span {
              display: block;
              color: ${hover};
              @media (max-width: 600px) {
                color: #ffffff;
              }
            }
          }
        }
      }

      &:hover {
          
          img{
              filter: brightness(0.5);
          }
        .blog-single__inner__content__top {
          h2 {
            opacity: 0;
            transform: translateY(-20px);
          }

          p {
            transform: none;
            opacity: 1;
          }
        }

        .blog-single__inner__content__bottom {
          border-color: #FFF;

          h4,h5 {
            color: #ffffff;
          }

          p {
            color: #ffffff;

            span {
              color: #ffffff;
            }
          }
        }
      }
    }

    &:hover {
      .blog-single__inner__content:after {
        height: 0;
      }
    }
      
    .global-image{
        border-radius: 20px !important;
    }

      .blog-single__inner__content__bottom{
          h5{
              color: #000;
              font-family: "Inter";
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%; /* 24px */
                display: flex;
              align-items: end;
          }
      }

    @media (max-width: 767px) {
      .blog-single__inner__content__top {
        p, h2 {
          left: 30px;
          right: 30px;
          top: 30px;
        }
      }

      .blog-single__inner__content__bottom h4, .blog-single__inner__content__bottom p {
        left: 30px;
        right: 30px;
        top: 30px;
      }

    }
  }
`;

export default memo(MyComponent);
