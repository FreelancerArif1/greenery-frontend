"use client"
import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton, InstapaperIcon
} from "react-share";
import { Bg, Black, DarkBlue, hover, GlobalFont, White } from '../../styles/globalStyleVars';
import {Img} from "../common/Image/Img";
import {gsap} from "gsap";
import reactHtmlParser from "react-html-parser";
import {useGSAP} from "@gsap/react";
import {usePathname} from "next/navigation";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MyComponent = ({data,title,page,banner}) => {
  console.log(data);

  //Refactor Data

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const descRef = useRef(null);

  // const router = useRouter();

  const [shareUrl, setShareUrl] = useState('')
  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])


  const location = usePathname();
  const pinDetails = useRef(null);

  useGSAP(() => {
    // Only activate on larger screens
    if (window.innerWidth > 991 && pinDetails.current && descRef.current) {
      const endValue =
        descRef.current.offsetHeight + pinDetails.current.offsetTop;

      ScrollTrigger.create({
        trigger: pinDetails.current,
        start: "top +150",
        end: endValue, // pin until right column ends
        pin: pinDetails.current,
        pinSpacing: true,
        scrub: true,
        markers: false, // change to true for debugging
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [location]);
  const handleBack = () => {
    window.history.back();
  };

  const date=data?.data?.data?.date;

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
  const [month, day, year] = date?.split("/") || [];

  // Convert month number to month name
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[parseInt(month, 10) - 1] || "";

  return (
    <StyledComponent className={'detail-page divider'}>
      <Container className={'detail-page__text-content'}>
        <Row>
          <Col lg={3} md={12} className={'detail-page__text-content__share'}>
            <div className={'share-area'} ref={pinDetails}>
              <div className={'back-btn'} onClick={handleBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10"
                     fill="none">
                  <path d="M5 1L1 5L5 9" stroke={Black} stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
                <p>Back</p>
              </div>
              <div className={'left-side'}>
                <h1>{reactHtmlParser(title)}</h1>
                <p>{formatDate(date)}</p>
              </div>
              <p>Share:</p>
              <ul>
                <li className={'hover'}>
                  <FacebookShareButton url={shareUrl}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.25" x="0.5" y="0.5" width="39" height="39" rx="19.5"
                            stroke="#546216"/>
                      <g clip-path="url(#clip0_499_93938)">
                        <path
                          d="M24.0049 21L24.4491 18.1044H21.6727V16.2255C21.6537 16.0094 21.6835 15.7917 21.7599 15.5886C21.8362 15.3855 21.9572 15.2021 22.1138 15.0519C22.2705 14.9018 22.4589 14.7887 22.665 14.7211C22.8712 14.6534 23.0899 14.6329 23.3051 14.6611H24.5684V12.1977C23.8273 12.0773 23.0785 12.0112 22.3278 12C20.0391 12 18.5438 13.3839 18.5438 15.8974V18.1044H16V21H18.5438V28H21.674V21H24.0049Z"
                          fill={Black}/>
                      </g>
                      <defs>
                        <clipPath id="clip0_499_93938">
                          <rect width="16" height="16" fill="white"
                                transform="translate(12 12)"/>
                        </clipPath>
                      </defs>
                    </svg>

                  </FacebookShareButton>
                </li>
                <li className={'hover'}>
                  <TwitterShareButton url={shareUrl}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.3906 14.25L9.39234 6.96477L9.40088 6.97159L13.9076 1.75H12.4015L8.73028 6L5.81484 1.75H1.86511L6.53148 8.55172L6.53092 8.55114L1.60938 14.25H3.11539L7.19698 9.52159L10.4409 14.25H14.3906ZM5.21812 2.88636L12.231 13.1136H11.0376L4.01902 2.88636H5.21812Z"
                            fill="#394854"/>
                    </svg>
                  </TwitterShareButton>

                </li>

              </ul>
            </div>
            <div className={'mobile'}>
              <div className={'back-btn'} onClick={handleBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10"
                     fill="none">
                  <path d="M5 1L1 5L5 9" stroke={Black} stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
                <p>Back</p>
              </div>
              <div className={'left-side'}>
                <h1>{'Upcoming Property Showcase: Discover Your Dream Home'}</h1>
                <p>{`Blogs | 17 march, 2025`}</p>
              </div>
              <div className={'mobile-share'}>
                <p>Share:</p>
                <ul>
                  <li className={'hover'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         viewBox="0 0 16 16"
                         fill="none">
                      <g clip-path="url(#clip0_1_633)">
                        <path
                          d="M12.0049 9.00021L12.4491 6.10454H9.67274V4.22571C9.65375 4.00955 9.68353 3.79188 9.75986 3.58876C9.8362 3.38563 9.95716 3.20223 10.1138 3.05209C10.2705 2.90194 10.4589 2.78887 10.665 2.72123C10.8712 2.65358 11.0899 2.63308 11.3051 2.66123H12.5684V0.197872C11.8273 0.0774548 11.0785 0.0113761 10.3278 0.000167847C8.03908 0.000167847 6.54375 1.38408 6.54375 3.89753V6.10454H4V9.00021H6.54375V16.0002H9.67403V9.00021H12.0049Z"
                          fill="#191D1C"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_633">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <FacebookShareButton url={shareUrl}/>
                  </li>
                  <li className={'hover'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         viewBox="0 0 10.314 10.313">
                      <g id="Group_25333" data-name="Group 25333"
                         transform="translate(1613.5 -6226.5)">
                        <path id="Path_2123" data-name="Path 2123"
                              d="M44.965,42.352V38.575c0-1.856-.4-3.275-2.565-3.275a2.239,2.239,0,0,0-2.024,1.109H40.35v-.941H38.3v6.884h2.14V38.936c0-.9.168-1.766,1.276-1.766s1.109,1.018,1.109,1.818v3.352h2.14Z"
                              transform="translate(-1648.151 6194.461)" fill="black"></path>
                        <path id="Path_2124" data-name="Path 2124"
                              d="M11.3,36.6h2.14v6.884H11.3Z"
                              transform="translate(-1624.633 6193.329)" fill="black"></path>
                        <path id="Path_2125" data-name="Path 2125"
                              d="M11.238,10a1.244,1.244,0,1,0,1.238,1.238A1.238,1.238,0,0,0,11.238,10Z"
                              transform="translate(-1623.5 6216.5)" fill="black"></path>
                      </g>
                    </svg>

                    <LinkedinShareButton url={shareUrl}/>
                  </li>

                </ul>
              </div>
            </div>

          </Col>

          <Col lg={{span: 8, offset: 1}} md={12} className={'detail-page__text-content__detail'} ref={descRef}>

            {data?.data?.posts?.list?.length > 0 ? (
                data.data?.posts.list.map((post, index) => {
                  // if (!post?.data?.template) return null;
                  return (
                      <div className="full-detail">
                        {post?.data?.subtitle && <h3>{reactHtmlParser(post?.data?.subtitle)}</h3>}
                        {
                          post?.images?.[0]?.full_path &&
                            <div className="detail-page__img">
                              <Img src={post?.images?.[0]?.full_path}/>
                            </div>
                        }
                        {reactHtmlParser(post?.data?.description)}
                      </div>
                  )

                })
            ) : (
                <p>No posts available.</p>
            )}
          </Col>
        </Row>
      </Container>
    </StyledComponent>
  );
};

const StyledComponent = styled.section`
  padding-top: 120px;
  padding-bottom: 100px;
  background: #F9F9F9;

  .media-left{
        margin-left: -60%;
    }
    .back-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        cursor: pointer;

        p {
            color: ${Black} !important;

            /* Button */
            font-family:  ${GlobalFont};
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 19.2px */
            letter-spacing: -0.32px;
            margin-bottom: 0 !important;
           
        }
    }

    h1 {
        font-style: normal;
        color: #0D1A2D;
        /* Sub titles */
        font-family: ${GlobalFont};
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 32px */
        letter-spacing: -1.6px;
        margin-bottom: 20px;
  }

  .left-side {
      h1{
        color: #2B3944;

        /* Medium/h5 */
        font-family: "Banana Grotesk";
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 135%; /* 54px */
        @media(max-width: 767px){
          font-size: 28px !important;
        }
      }
    //margin-top: 60px;
    p {
      text-transform: capitalize;
      color: #394854;

      /* Medium/bodyS */
      font-family: "Inter";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      margin-bottom: 30px !important;
    }
  }

  .full-detail {
    //border-bottom: 1px solid #BCBCBC;
    padding-bottom: 30px;
    //margin-top: 30px;

    p {
      color: #0E0E0E;

      /* Medium/bodyM */
      font-family:'Inter';
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 27px */
      margin-bottom: 20px;

    }
    
    h3{
      color: #0E0E0E;

      /* Medium/bodyXL */
      font-family: "Inter";
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 33.6px */
      margin-bottom: 20px;
    }
    
    ul{
      li{
        color: #0E0E0E;
        position: relative;

        /* Medium/bodyM */
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 27px */
        padding-left: 20px;

        &:before {
          content: "";
          position: absolute;
          top: 10px;
          left: 0px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2E6031;
        }
        &:not(:last-child){
          margin-bottom: 15px;
        }
      }
    }
    
    


  }

  .sources {
    margin-top: 35px;
    padding-bottom: 100px;

    h3 {
      color: #394149;
      font-size: 26px;
      font-style: normal;
      font-weight: 600;
      line-height: 153%; /* 39.78px */
      letter-spacing: -0.598px;
      margin-bottom: 15px !important;
    }

    .links {
      display: flex;

      p {
        color: #394149;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 182%; /* 36.4px */
        letter-spacing: -0.46px;
      }

      a {
        color: #27598B !important;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 182%;
        letter-spacing: -0.46px;
        text-decoration-line: underline !important;
      }
    }
  }

  .detail-page__img {
    position: relative;
    padding-top: calc(379 / 750 * 100%);
      margin-bottom: 40px !important; ;
    @media (max-width: 767px) {
      padding-top: calc(560 / 375 * 100%);
    }
  }

  .detail-page__heading {
    h1 {
      font-size: 32px;
      line-height: 36px;
      color: #ED5333;
      font-weight: 600;
    }

    &__tags {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      p {
        color: ${hover};
        font-size: 16px;
        line-height: 24px;
      }

      ul {
        display: flex;

        li {

          font-size: 16px;
          line-height: 24px;
          color: ${hover};


          &:not(:nth-last-child(1)) {
            padding-right: 20px;
            margin-right: 20px;
            border-right: 0;
            border-right: 1px solid #CED7ED;
          }
        }
      }
    }

  }

  .detail-page__banner {
    width: 100%;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .hover:after {
    border-radius: 50%;
  }

  .detail-page__text-content {
    padding-top: 40px;

    &__share {
      .mobile-share {
        display: none;
      }


      @media (max-width: 767px) {
          .media-left{
              display: none;
          }
        //border-bottom: 1px solid rgba(217, 217, 217, 0.5) !important;
        .mobile-share {
          display: flex;
          justify-content: space-between;
          width: 100%;
          border-bottom: 1px solid rgba(217, 217, 217, 0.5) !important;
        }


      }
      @media (max-width: 767px) {
        //border-bottom: 1px solid rgba(217, 217, 217, 0.5) !important;
        .mobile-share {
          display: flex;
          justify-content: space-between;
          width: 100%;
          border-bottom: 1px solid rgba(217, 217, 217, 0.5) !important;

        }

        .share-area {
          display: none;
        }

        .sticky-outer-wrapper {
          display: none;
        }
      }


      p {
        color: #6B724B;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        margin-bottom: 15px;
      }

      ul {
        display: flex;

        li {
          margin-right: 15px;
          min-height: 40px;
          height: 40px;
          width: 40px;
          min-width: 30px;
          border-radius: 50%;
          border: 1px solid rgba(25, 29, 28, 0.25);
            // background-color: ${hover};
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-bottom: 20px;
          position: relative;

          button {
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: 2;
          }

          svg {
            position: relative;
            z-index: 2;
          }
        }
      }

      @media (max-width: 767px) {
        display: flex;
        justify-content: space-between !important;
      }
    }

    &__detail {


      .custom-list {
        padding: 0;

        li {

          position: relative;
          padding-left: 20px;
          //padding-top: 20px;

          &:not(:last-child) {
            padding-bottom: 0px;
          }

          &:before {
            content: '';
            position: absolute;
            top: 15px;
            left: 0;
            margin-top: -5px;
            width: 6px;
            height: 6px;
            box-sizing: content-box;
            background-color: transparent;
          }
        }

      }

      img {
        width: 100%;
      }

      span {
        p {
          color: ${hover};
          font-weight: 500;
          margin-top: 20px;
        }
      }

      &__date {
        display: flex;
        justify-content: space-between;


        p {
          font-weight: 500 !important;
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 20px !important;
        }

        @media (max-width: 767px) {
          display: block;
          p {
            &:not(last-child) {
              margin-bottom: 10px !important;
            }
          }
        }
      }

      h1 {
        font-size: 40px;
        line-height: 48px;
        font-weight: 500;
        padding-bottom: 60px;
        border-bottom: 1px solid rgba(217, 217, 217, 0.5);
        margin-bottom: 60px;

        @media (max-width: 767px) {
          font-size: 32px;
          line-height: 40px;
          margin-top: 40px;
        }
      }

      h3 {
        color: #394149;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 153%; /* 36.72px */
        letter-spacing: -0.552px;
        margin-bottom: 30px;
      }

      .notes {
          opacity: 0.92;
          background: ${DarkBlue};
        padding: 18px 30px;

        h2 {
       
            color: ${White};

            /* Body */
            font-family:  ${GlobalFont};
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 21.6px */
            letter-spacing: -0.36px;
        }
      }

      p {
        font-weight: 400;
      }

      .quotes {
        padding-left: 40px;
        position: relative;
        margin-bottom: 40px;

        &:after {
          content: '';
          position: absolute;
          width: 10px;
          height: 100%;
          left: 0;
          top: 0;
          background-color: ${hover};
          border-radius: 5px;
        }

        h6 {
          margin-top: 30px;
          font-weight: 500;
          color: ${Black};
        }
      }

      table {
        min-width: 100%;
        margin-bottom: 30px;


        th {
          color: ${hover};
          border-bottom: 1px solid ${Black};
          padding: 20px 0;
          font-weight: 500 !important;
        }

        td {
          padding: 20px 0;
          border-bottom: 1px solid rgba(217, 217, 217, 0.5);

          &:nth-of-type(1) {
            padding-right: 30px;
          }
        }
      }

      .custom-list {
        padding: 0;

        li {

          position: relative;
          padding-left: 20px;
          padding-top: 20px;

          &:not(:last-child) {
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(217, 217, 217, 0.5);
          }

          &:before {
            content: '';
            position: absolute;
            top: 15px;
            left: 0;
            margin-top: 13px;
            width: 6px;
            height: 6px;
            box-sizing: content-box;
            background-color: #061524;
          }
        }

      }

      .video-box {
        position: relative;
        cursor: pointer;
        margin-top: 30px;
        width: 100%;
        margin-bottom: 60px;

        img {
          width: 100%;
        }

        .hover-btn {
          height: 80px;
          width: 80px;
          background-color: ${hover};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          z-index: 2;
          top: 0;
          bottom: 0;
          margin: auto;
          left: 0;
          right: 0;

          &.hover:after {
            border-radius: 50%;
          }

          svg {
            position: relative;
            z-index: 2;
          }

          path {
            transition: all .3s ease;
          }

        }

        &:hover {

          .hover-btn {
            &:after {
              height: 100%;
              width: 100%;
            }

            path {
              fill: #FFF;
            }
          }
        }
      }


    }

  }


  @media (max-width: 767px) {

    .left-side {
      margin-top: 0px;
    }

    padding-top: 80px;

    //margin-bottom: 80px;
    .detail-page__heading__tags {
      flex-wrap: wrap;

      ul {
        min-width: 100%;
        margin-bottom: 20px;
      }

      p {
        min-width: 100%;
      }
    }

    .detail-page__text-content__share {
      margin-bottom: 60px;
      min-width: 100%;
      //margin-top: 100px;

      ul {
        display: flex;

        li {
          margin-right: 10px;
        }
      }
    }

    .detail-page__text-content__detail {
      min-width: 100%;
    }
  }
  //.sticky-inner-wrapper{
  //  top:120px !important;
  //}
  .mobile {
    display: none;
  }

  @media (max-width: 767px) {
    .detail-page__text-content {
      padding-top: 0 !important;
    }

    h1 {
      font-size: 50px !important;
    }

    .title h2 {
      text-align: start !important;
    }

    .mobile {
      display: block;
      width: 100%;
    }

    .left-side, .mobile-share {
      p {
        font-size: 20px !important;
      }
    }
    
    

  }
  .detail-page__text-content__share ul li{
    &:hover{
      svg{
        path{
          fill: ${White};
        }
      }
    }
  }
`;

export default MyComponent;
