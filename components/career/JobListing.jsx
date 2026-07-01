"use client";

import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Title from '@/components/common/Title/Title';
import MainButton from '@/components/common/Buttons/MainButton';
import reactHtmlParser from 'react-html-parser';
import { demoJobs } from './demoJobs';


const MyComponent = ({ jobs }) => {
  // fallback to demo dataset when jobs prop is missing/empty
  const jobData = (jobs && jobs.posts && Array.isArray(jobs.posts.list) && jobs.posts.list.length > 0) && jobs;

  return (
    <StyledComponent>

      <Container>
        <Row>
          <Col md={8}>
              <Title classname={'title'} text={'Job Circular'}/>
            </Col>
          <Col md={2}> </Col>
        </Row>
      </Container>
      
      {/* <Container className={"jobs"}>
        <Row>
          <Col md={12}>
            <Title
              text={'Available Jobs'}
              margin={"0 0 60px 0"}
              marginSm={"0 0 40px 0"}
            />
          </Col>
          <Col md={{ span: 9 }}>
            {jobData?.posts?.list?.map((i, index) => (
              <div className={"text-wrapper"} key={index}>
                <h5>{reactHtmlParser(i?.data?.subtitle)}</h5>
                <p>{reactHtmlParser(i?.data?.description)}</p>
                <MainButton
                  externalSrc={i?.data?.btn_link}
                  text={"Apply Now"}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container> */}







      <Container className={"jobs"}>
        {jobData?.posts?.list?.map((i, index) => (
        <Row className="singleJob" key={index}>
          <Col md={1}>
            <div className="jobnumber">{index+1}</div>
          </Col>
          <Col md={6}>
            <div className="jobdescribtion">
              <b>{reactHtmlParser(i?.data?.subtitle)}</b> <br />
              <p>{reactHtmlParser(i?.data?.description)}</p>
            </div>
          </Col>
          <Col md={3}>
            <b>Deadline</b> <br />
            <p> 30 May 26</p>
          </Col>
          <Col md={2}>
          <MainButton
                  externalSrc={i?.data?.btn_link}
                  text={"Apply Now"}
                /></Col>
        </Row>
        ))}


      </Container>




    </StyledComponent>
  );
};

const StyledComponent = styled.section`
.jobnumber{

    padding: 10px 30px;
    height: 44px;
    display: block;
    width: fit-content;
    background-color: #285E2F;
    color: #ffffff;
    border-radius: 10px;
    font-weight: 400;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px !important;
    font-weight: 400 !important;
    font-family: "Inter" !important;
    line-height: 24px !important;
    position: relative;
    transition: background-color 0.5s ease;
    border: none;
}
.singleJob{
    border: 1px solid #285e2f21;
    border-radius: 5px;
    padding: 10px 0px;
    margin-bottom:15px;
}
  .singleJob p{
    font-size:16px;
  }

  padding-bottom: 120px;
  position: relative;
    padding-top: 100px;
  background-color : #FFF;
  .section-bg {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .bottom-stone {
    img {
      position: absolute;
      bottom: 0;
      right: -50px;
    }
  }

  .overview {
    padding-top: 120px;

    .text-wrapper {
      padding-bottom: 80px;
      display: flex;
      gap: 40px;

      p {
        span {
          font-weight: 600;
        }
      }
    }

    .image-wrapper {
      &__left {
        position: relative;
        padding-top: calc(405 / 370 * 100%);

        .global-image {
          z-index: 2;
        }

        .stone {
          position: absolute;
          bottom: -50px;
          left: -50px;
          z-index: 3;
        }

        .stone-bg {
          position: absolute;
          bottom: -102px;
          left: -90px;
          z-index: 1;
        }
      }

      &__right {
        position: relative;
        padding-top: calc(400 / 770 * 100%);
      }
    }

    .right-wrapper {
      p {
        padding-top: 60px;
      }
    }
  }

  .jobs {
    position: relative;

    .text-wrapper {
      padding-bottom: 40px;
      margin-bottom: 40px;
      border-bottom: 1px solid #464645;

      h5 {
        color: #000;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        margin-bottom: 25px;
      }

      p {
        margin-bottom: 30px;
      }
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 60px;
      padding-top: 60px;
    .bottom-stone {
      img {
        width: 150px;
        height: 150px;
      }
    }

    .jobs {
      margin-top: 60px;
    }

    .overview {
      padding-top: 60px;

      .text-wrapper {
        padding-top: 40px;
        flex-direction: column;
        gap: 15px;
        padding-bottom: 60px;
      }

      .right-wrapper {
        p {
          padding-top: 30px;
        }
      }
    }

    .jobs {
      .text-wrapper {
        h5 {
          font-size: 32px;
          margin-bottom: 20px;
        }

        p {
          margin-bottom: 20px;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .bottom-stone {
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
`;

export default MyComponent;
