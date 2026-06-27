'use client'
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Bg, Black, hover, White } from '@/styles/globalStyleVars';
import Link from 'next/link';
import {gsap} from "gsap";
import Select, {components}  from 'react-select';
import {Img} from "@/components/common/Image/Img";
import moment from "moment/moment";
import NewsSingle from "@/components/media/NewsSingle";



const MyComponent = ({data}) => {

  const [filter, setFilter] = useState("All");
  const mediaRef = useRef(null);

  const filteredData = filter === "All"
      ? data
      : data?.filter((e) => e?.data?.category_title === filter);

  const galleryCat = data?.map((i) => i?.data?.category_title) || [];

  const uniqueCat = [...new Set(galleryCat)];

  // Fix: Ensure "All" has consistent key/value structure
  const filterOptions = [
    { label: "All", value: "All" },
    ...uniqueCat
        .filter(item => item !== undefined && item !== null && item !== "")
        .map(item => ({
          label: item,
          value: item
        }))
  ];



  const handleFilterChange = (newFilter) => {
    if (newFilter !== filter) {
      const items = mediaRef.current?.querySelectorAll('.media-item');

      // Animate out
      gsap.to(items, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        duration: 0.5,
        stagger: {
          each: 0.03,
          from: "start"
        },
        ease: "power3.inOut",
        onComplete: () => {
          setFilter(newFilter);
        }
      });
    }
  };

  // Animate in when filter changes
  useEffect(() => {
    const items = mediaRef.current?.querySelectorAll('.media-item');

    if (items && items.length > 0) {
      gsap.fromTo(items,
          {
            opacity: 0,
            y: 60,
            scale: 0.8,
            rotateX: -15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: {
              each: 0.06,
              from: "start",
              ease: "power2.out"
            },
            ease: "power4.out",
            clearProps: "all"
          }
      );
    }
  }, [filter]);

  //

  const [selected, setSelected] = useState('')

  const handleStatus = (value) => {
    setSelected(value);
  }
  const customStyles = {
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen && "rotate(180deg)"
    }),
    option: (provided, state) => ({
      ...provided,
      borderRadius: 0,
      color: state.isSelected ? `#363229` : '#221F1F',
      backgroundColor: state.isSelected ? `rgba(232, 231, 231, 0.6)` : '#FFF',
      margin: 0,
      fontSize: 14,
      cursor: 'pointer',
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: state.isSelected ? 600 : 400,
      "&:hover": {
        backgroundColor: `rgba(232, 231, 231, 0.8)`,
        color: '#FFF',
        cursor: 'pointer'
      },

    }),
    menu: (provided, state) => ({
      ...provided,
      color: '#FFF',
      backgroundColor: state.isSelected ? `${hover}` : 'rgba(255,255,255,0)',
      margin: 0,
      borderRadius: 20,
      fontSize: 14,
      zIndex: 10
      // width: 200,
    }),
    menuList: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? `${hover}` : '#FFF',
      borderRadius: 0,
      fontWeight: '400',
      color: '#FFF',
      // fontSize: 14,
    }),

  };
  const CaretDownIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="13.414" height="7.414" viewBox="0 0 13.414 7.414">
      <g id="Group_15659" data-name="Group 15659" transform="translate(1479.207 -192.793) rotate(90)">
        <line id="Line_3883" data-name="Line 3883" x2="6" y2="6" transform="translate(193.5 1466.5)" fill="none"
              stroke="#fff" stroke-linecap="round" stroke-width="1"/>
        <line id="Line_3884" data-name="Line 3884" y1="6" x2="6" transform="translate(193.5 1472.5)" fill="none"
              stroke="#fff" stroke-linecap="round" stroke-width="1"/>
      </g>
    </svg>
        ;
  };

  const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
          <CaretDownIcon/>
        </components.DropdownIndicator>
    );
  };

  return (
      <StyledMyComponent className={'pt-120 pb-120'}>
        <Container>
          <Row>
            <Col md={12} className="filter">
              <div className="filter-buttons">
                {filterOptions.map((option) => (
                    <button
                        key={option.value}
                        className={`filter-btn ${filter === option.value ? "active" : ""}`}
                        onClick={() => handleFilterChange(option.value)}
                    >
                      {option.label}
                    </button>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="drop">
                <Select
                    classNamePrefix="mobile-filter"
                    onChange={(option) => handleFilterChange(option?.value)}
                    isSearchable={false}
                    styles={customStyles}
                    components={{ DropdownIndicator }}
                    options={filterOptions}
                    placeholder={'All'}
                    defaultValue={filterOptions?.[0]?.value}
                />
              </div>
            </Col>
          </Row>

          <Row ref={mediaRef}>
            {
                filteredData && filteredData?.length > 0 &&
                filteredData?.map((item, index) => {
                  const inner_banner = item?.sections?.find((element) => element?.section_data?.template == 'banner');
                  return (
                      <Col lg={4} md={6} key={index} className="media-item">
                        {inner_banner?.images?.list?.[0]?.full_path ? (
                            <Link href={'/media/' + item?.page_data?.slug}>
                              <div className="media-single">
                                <div className="media-single__img">
                                  <Img noParallax src={item?.images?.list?.[0]?.full_path} />
                                </div>
                                <div className="media-single__cat">
                                  <span />
                                  <p>{item?.page_data?.media_category}</p>
                                </div>
                                <h6>{item?.page_data?.subtitle ? item?.page_data?.subtitle : item?.page_data?.title}</h6>
                              </div>
                            </Link>
                        ) : (
                            <div>
                              <NewsSingle
                                  type={item?.data?.category_title}
                                  slug={item?.data?.slug} img={item?.images?.list?.[0]?.full_path}
                                  title={item?.data?.subtitle}
                                  day={moment(item?.data?.date).format('DD')}
                                  month={moment(item?.data?.date).format('MMMM')}
                                  year={moment(item?.data?.date).format('YYYY')}
                                  shortDesc={item?.data?.subtitle}/>
                            </div>

                        )}
                      </Col>
                  )
                })
            }

          </Row>
        </Container>


      </StyledMyComponent>
  )
};

const StyledMyComponent = styled.section`
  background: #F9F9F9;
    position: relative;
    overflow: hidden;
    
    

    .col-md-3{
        margin-bottom: 100px;
    }
    .filter {
        margin-bottom: 60px;
      
        .filter-buttons {
            display: flex;
            border-bottom: 1px solid rgba(17, 25, 17, 0.27);
          padding-bottom: 60px;
          
        }
        .filter-btn {

            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 19.2px */
            background: none;
            padding: 12px 25px;
            cursor: pointer;
            color: ${hover};
            border: 1px solid ${hover};
            transition: background 0.3s, color 0.3s;
            text-transform: capitalize;
            margin-right: 30px;
          border-radius: 20px;
          
            &.active {
                background: ${hover};
                color: ${White};
            }
        }
        
        @media(max-width: 767px){
            display: none;
        }
    }
    
    .drop{
        display: none;
    }

    .media-single {
        &__img {
            position: relative;
            padding-top: calc(320 / 270 * 100%);
            .global-image {
                overflow: hidden;

                img {
                    transform: scale(1.01);
                    transition: 1.3s ease;
                }
            }
        }

        &__cat {
            display: flex;
            align-items: center;
            margin-bottom: 22px;
            margin-top: 20px;

            span {
                width: 10px;
                height: 1px;
                background: #162213;
                margin-right: 15px;
            }

            p {
                color: #162213;
                opacity: 0.5;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 130%; /* 20.8px */
                letter-spacing: -0.32px;
                text-transform: capitalize;

            }
        }

        h6{
            color: #162213;
            font-family: "Gilroy";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 21.6px */
            letter-spacing: -0.36px;
            text-transform: capitalize;
        }

        &:hover{
            .global-image img {
                transform: scale(1.06) !important;
            }
        }

    }


    /* Target odd columns (1st, 3rd) */

    .row > div:nth-child(odd) .media-single__img {
        padding-top: calc(320 / 270 * 100%);
    }

    /* Target even columns (2nd, 4th) */

    .row > div:nth-child(even) .media-single__img {
        padding-top: calc(420 / 270 * 100%);
    }
    
    @media (max-width: 767px) {
        .drop{
            display: block;
        }
        .right-img{
            display: none;
        }
    }



    .mobile-filter {
        background: ${hover};

        &__placeholder {
            color: white !important;
            font-size: 16px;
            //font-weight: 500;
            margin-left: 19px;
        }

        &__control {
            //padding-left: 0;
            //padding-right: 0;
            border-radius: 20px;


            &--is-focused {
                background-color: ${hover};
                border: none;
                //border-bottom: 1px solid #FFF;
            }
        }


        &__indicator {
            margin-right: 12px;
        }

        &__value-container {
            //padding-left: 0;
            //padding-right: 0;
            //cursor: pointer !important;
        }
    }

    .css-13cymwt-control{
        background: ${hover};
        height: 50px;
    }
    .css-1dimb5e-singleValue{
        color: ${White};
        padding: 0 10px;
        text-transform: capitalize;
    }
    .mobile-filter__control{
        border-radius: 0;
    }
    .css-1u9des2-indicatorSeparator{
        display: none;
    }
    
    .css-wvevs6-option{
        text-transform: capitalize;
    }

  .col-md-6{
    margin-bottom: 40px;
  }
    
    @media (max-width: 767px) {
        padding-top: 40px;
        .drop{
            margin-bottom: 40px;
        }     
    }


`;


export default MyComponent;

