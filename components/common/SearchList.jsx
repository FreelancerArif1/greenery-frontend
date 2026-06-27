"use client";
import {useEffect, useState} from "react";
import styled from "styled-components";
import { Container, Row, Col, Form } from "react-bootstrap";
import Link from "next/link";
import {Black, hover} from "@/styles/globalStyleVars";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import ReactHtmlParser from "react-html-parser";


export default function SearchList() {
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const param = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?keyword=${searchInput}`, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    if (param.get("keyword")) {
      setSearchInput(param.get("keyword"));
      fetch(
        `https://bestinbd.com/2510GES/api/get-req-data/search?keyword=${param.get(
          "keyword"
        )}`
      )
        .then((response) => {
          return response.json(); // assuming the response is JSON
        })
        .then((data) => {
          setSearchData(data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }, [param]);



  const productData = searchData?.data?.filter((i=>i?.type === 'product'));
  console.log('search_data',productData)
  return (
    <StyledComponent className="search-list">
      <Container>
        <Row>
          <Col md={10}>
            <Form onSubmit={(e) => handleSearch(e)}>
              <Form.Group className="form-group">
                <Form.Control
                  type="text"
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder={"Type here"}
                  value={searchInput}
                />
                <p onClick={(e) => handleSearch(e)}>Search</p>
              </Form.Group>
            </Form>
          </Col>

          <Col md={10}>
            {productData?.length > 1 && (
                <h3> {productData?.length + " Products Found"}</h3>
            )}
            {productData?.length === 1 && (
                <h3> {productData?.length + " Products Found"}</h3>
            )}
            {productData?.status === 404 || productData?.length === 0 && (
                <h3> {"0 Products Found. Try searching for something"}</h3>
            )}

            {productData?.length > 0 &&
              productData?.map((i) => {
                  let linkPath = "";

                  if (i?.type === "product") {
                    linkPath = `/products/${i?.slug}`;
                  }


                  return (
                      <div key={i?.id} className="departments__desc__single">
                        <Link prefetch={true} href={linkPath} />
                        <h4>
                          {ReactHtmlParser(i?.title)}
                          <span>
                            <img
                                src="/icons/caret-right.svg"
                                alt=""
                            />
                          </span>
                        </h4>
                        {/*<p>{ReactHtmlParser(i?.short_desc)}</p>*/}
                      </div>
                  );
                })}

          </Col>
        </Row>
      </Container>
    </StyledComponent>
  );
}
const StyledComponent = styled.section`
  padding-top: 200px;
  padding-bottom: 120px;
  min-height: 80vh;
    background-color: #EFF1ED;
    h3 {
        font-size: 32px;
        line-height: 36px;
        font-weight: 600;
        margin-bottom: 20px;
        color: ${hover};
    }
  .form-group {
    margin-bottom: 35px;
    position: relative;
    p {
      position: absolute;
      bottom: 8px;
      right: 0;
      cursor: pointer;
      color: #00000078;
      &:hover {
        color: ${hover};
      }
    }
  }
    
    .form-group{
        background-color: #EFF1ED !important;
    }
  .form-control {
    border: none;
    border-bottom: 1px solid #285E2F !important;
    padding-left: 0;
    font-weight: 300;
    padding-right: 100px;
    background-color: #EFF1ED !important;
    color: ${Black} !important;
    &::placeholder {
      color: ${Black}
      font-weight: 500;
    }
    &:focus {
      border-color: ${hover};
    }
  }

  .department__items {
    h3 {
      font-size: 32px;
      line-height: 36px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    margin-bottom: 60px;
  }
  .departments__desc {
    margin-top: 60px;
    position: relative;
    z-index: 2;
    &__single {
      padding: 20px 15px 20px 15px;
      border: 1px solid rgba(4, 29, 44, 0.2);
      position: relative;
      background-color: transparent;
      transition: background-color 0.3s ease;
        border-radius: 10px;
        margin-bottom: 10px;
        
      a {
        position: absolute;
        height: 100%;
        width: 100%;
        inset: 0;
        z-index: 2;
          background-color: transparent;
      }
      h4 {
        font-size: 24px;
        line-height: 28px;
        font-weight: 500;
        position: relative;
        padding-right: 100px;
        transition: color 0.3s ease;
        p {
          transition: color 0.3s ease;
        }
        span {
          margin-left: 10px;
          height: 24px;
          width: 25px;
          border-radius: 50%;
          background-color: ${hover};
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 0;
          top: 2px;
          transition: all 0.5s ease;
          img {
            transition: all 0.2s ease;
              filter: invert(1);
          }
        }
      }
      p {
        padding-right: 100px;
      }
      &:hover {
        @media (min-width: 992px) {
          background-color: ${hover};
          border-radius: 10px;
          h4,
          p {
            color: #fff;
          }
          h4 span {
            background-color: #fff;
            img {
              filter: invert(49%) sepia(82%) saturate(4909%) hue-rotate(172deg)
                brightness(95%) contrast(103%);
            }
          }
        }
      }
      &:nth-last-child(1) {
        //border-bottom: none;
      }
    }
    &__imgs {
      position: relative;
      min-height: 100%;
      min-width: 100%;
      ul {
        li {
          position: absolute;
          &:nth-last-of-type(1) {
            top: 0;
            left: 0;
          }
          &:nth-last-of-type(2) {
            right: 0;
            top: 50px;
          }
          &:nth-last-of-type(3) {
            inset: 0;
            margin: auto;
            width: fit-content;
            height: fit-content;
          }
          &:nth-last-of-type(4) {
            left: 0;
            bottom: 80px;
          }
          &:nth-last-of-type(5) {
            right: 0;
            bottom: 150px;
            z-index: 2;
          }
        }
      }
    }
  }
`;
