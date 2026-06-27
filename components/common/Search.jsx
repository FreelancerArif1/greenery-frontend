'use client'
import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {Col, Container, Form, Row} from "react-bootstrap";
import Title from "@/components/common/Title/Title";
import {Black, White,hover} from "@/styles/globalStyleVars";
import Link from "next/link";

const MyComponent = ({filterProduct }) => {


    // search handle
    const [searchInput, setSearchInput] = useState('');
    const [state, setState] = useState();

    const handleInput = (e) => {
        if(e.target.value === ' '){

        }else{
            setSearchInput(e.target.value)
        }
    }
    const searchSubmit = async (e) => {
        e.preventDefault();
        if (!searchInput.trim()) return; // Prevent empty search

        try {
            const response = await fetch(`https://project.bestinbd.com/2412RPL/api/get-req-data/search?keyword=${encodeURIComponent(searchInput)}`);
            const data = await response.json();
            setState(data); // Store the response data in state
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };


    const filterProducts=state?.data;

    return (
        <StyledMyComponent className={''}>
            {/*{getSearchData?.loading && <Loading/>}*/}
            <div className="search-desktop">
                <Container className='search-desktop__top'>
                    <Form onSubmit={searchSubmit}>
                        <Form.Group className="search-input">
                            <Form.Control type="text" value={searchInput} onChange={e => handleInput(e)}
                                          placeholder={'Search'}/>
                            <button type='submit'>Search</button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>

            <div className="search-result pt-100 pb-200">
                <Container>
                    <Row>
                        <Col>
                            {
                                filterProducts?.length > 0 ?
                                    <Title margin={'0 0 60px 0'}
                                           color={Black}
                                           text={`${searchInput && searchInput !== '' ? searchInput + `(${filterProducts?.length})` : 'Search Result(0)'}`}/> : ''
                            }
                        </Col>
                        <Col md={12}>
                            <div className="search-result-wrap">
                               {filterProducts?.length > 0 ?
                                    filterProducts?.map(item => (
                                        <div className={` fade-up search-result__single d-flex`} >
                                            <Link href={`${item?.type === 'page' && ''  ||
                                            item?.slug === 'home' && '/'  ||
                                            item?.slug === 'about' && '/about'  ||
                                            item?.slug === 'media' && '/media' ||
                                            item?.type === 'product' && 'project/' + item?.slug ||
                                            item?.slug === 'project' && '/project/' + item?.slug ||
                                            item?.slug === 'contact' && '/contact/' + item?.slug ||
                                            item?.slug === 'career' && '/career' + item?.slug
                                            }`}></Link>
                                            <Col sm={8} className="search-result__single__content ">
                                                <p>{item?.title}</p>
                                            </Col>
                                        </div>

                                    )) : <p>It seems we can’t find what you’re looking for. Perhaps searching can help.</p>
                               }

                            </div>

                        </Col>


                    </Row>
                </Container>
            </div>


        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`
  background: ${Black};

  .search-desktop {

    padding: 200px 0 60px 0;
    background-color: ${White};
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    //position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 100px;
    //height: 0;
    //display: none;
    //opacity: 0;
    //overflow: hidden;
    z-index: 9;

    .container {
      position: relative;
      //opacity: 0;
    }

    svg {
      position: absolute;
      top: -25px;
      right: -14px;
      font-size: 22px;
      cursor: pointer;

      &:hover {
        color: ${hover};
      }
    }

    form {
      min-width: 100%;

      .search-input {
        position: relative;
          border-bottom: 1px solid ${Black} ;

        button, p {
          box-shadow: none;
          border: none;
          background-color: transparent;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          height: fit-content;
          font-size: 20px;
          line-height: 18px;
            font-weight: 500;
          color: ${Black};
          transition: color .3s ease;
          cursor: pointer;

          &:hover {
            color: ${hover};
          }
        }

        img {
          position: absolute !important;
          bottom: 19px;
          margin: auto;
        }

        .form-control {
          border: none;
          border-radius: 0;
          border-bottom: 1px solid ${Black};
          padding-left: 0px;
          padding-bottom: 9px;
          padding-top: 0;
          height: 50px;
          font-size: 32px;
          line-height: 36px;
          font-weight: 600;
          color: rgba(24, 29, 36, 0.7);
          background-color: transparent;

          ::placeholder {
            font-size: 32px;
            line-height: 36px;
            font-weight: 600;
            color: rgba(24, 29, 36, 0.3);
          }
        }

      }
    }

    .search-desktop__menu {
      margin-top: 23px;
      min-width: 100%;

      p {
        font-size: 12px;
        color: ${hover};
        font-weight: 600;
        line-height: 18px;
        margin-bottom: 13px;

      }

      ul {
        display: inline-flex;

        li {
          a {
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
            color: #221f1f;
            display: flex;
            margin-right: 30px;
          }

          &:nth-last-child(1) {
            a {
              margin-right: 0;
            }
          }
        }
      }

    }

    @media (max-width: 992px) {
      padding: 120px 0 60px 0 !important;
    }
  }

  .search-result-wrap {
    p {
      color: ${Black};
    }

    width: 100%;
  }

  .search-result {
      margin-top: -20px;
      background: ${White};
    &__single {
      position: relative;
      margin-bottom: 40px;
      padding-bottom: 40px;
      border-bottom: 1px solid rgba(34, 31, 31, 0.30);

      &:nth-last-of-type(1) {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: 0;
      }

      a {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
      }

      &__content {
        h2 {
          font-size: 26px;
          font-weight: bold;
          line-height: 32px;
          margin: 0 0 26px 0;
          transition: color .4s ease;
          color: ${Black};
        }

        p {
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: normal;
          color: ${Black};
        }
      }


      &__img {
        height: 160px;

        div {
          width: 100%;
          height: 100%;
        }

        img {
          position: static;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      }

      &:hover {
        h2 {
          color: ${hover};
        }
      }
    }
  }

  @media (max-width: 550px) {
    .search-desktop form .search-input .form-control {
      padding-left: 15px;
      padding-bottom: 10px !important;
      font-size: 20px;
      line-height: 25;
      padding-right: 50px;

      &::placeholder {
        font-size: 20px;
        line-height: 25;
      }
    }

    .search-result__single {
      flex-wrap: wrap;
      flex-direction: column-reverse;

      &__content {
        min-width: 100%;
      }

      &__img {
        min-width: 100%;
        margin: 0 0 20px 0;

        span {
          max-width: 200px !important;
          min-width: 200px !important;

          img {
            max-width: fit-content !important;
            min-width: fit-content !important;
            margin: 0 !important;
            left: 15px !important;
          }
        }
      }
    }

  }
`;


export default MyComponent;














