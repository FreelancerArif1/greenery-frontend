"use client"
import React, {useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {Black, White,Bg} from "@/styles/globalStyleVars";
import axios from "axios";
import useIsMobile from "@/hooks/useIsMobile";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reactHtmlParser from "react-html-parser";
import MainButton from "@/components/common/Buttons/MainButton";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const MyComponent = ({data}) => {

    const leftImg=data?.images?.list?.find((e)=>e?.left_image==="on")?.full_path;
    const rightImg=data?.images?.list?.find((e)=>e?.right_image==="on")?.full_path;

    const isMobile = useIsMobile();
    const bigImgRef = useRef(null);
    const [isLargeDevice, setIsLargeDevice] = useState(false);

    const {register, control, handleSubmit, formState: {errors, isSubmitSuccessful}, reset, watch} = useForm({
        mode: "all",
    })

    // Check if device is larger than 991px
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeDevice(window.innerWidth > 991);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Parallax effect using GSAP
    useEffect(() => {
        if (!isLargeDevice) return;

        // Create parallax animation for big image only
        if (bigImgRef.current) {
            gsap.fromTo(bigImgRef.current,
                {
                    yPercent: -20
                },
                {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: bigImgRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                        refreshPriority: -1
                    }
                }
            );
        }

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isLargeDevice]);

    //--- form submit
    const success = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const error = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const onSubmit = async (e) => {
        try {
            const formData = new FormData();
            formData.append('name', e?.name);
            formData.append('business_name', e?.business_name);
            formData.append('email', e?.email);
            formData.append('phone', e?.phone);
            formData.append('message', e?.message);
            formData.append('form_id', 'contact-form');

            const response = await axios.post('https://bestinbd.com/2510GES/api/post-req-data/form-submit', formData);
            if (response.status === 200) {
                success(response?.data?.message);
                reset(); // Reset form fields
            } else {
                error('Failed to submit form. Please try again later.');
            }
        } catch (err) {
            error('Failed to submit form. Please try again later.');
        }
    };
    const onError = (errors) => {
        // setToastShown(false); // Reset toast shown state on new submission attempt
        const firstError = Object.values(errors)[0];
        error(firstError.message);
    };

    return (
        <StyledComponent className={'contact-form pb-120 pt-160'}>
            <Container>
                <Form className={'form'} >
                    <Row className={'rows'}>
                        <Col lg={{span:5}} className='contact-left'>
                            <h3>{data?.section_data?.subtitle}</h3>
                            <p>{data?.section_data?.short_desc}</p>
                            <div className={'contact-left__bottom'}>
                                <Row>
                                    <Col md={6}>
                                        <div className={'contact-left__email'}>
                                            <div className={'contact-info'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <a href={'mailto:info@greeneryes.com'}>info@greeneryes.com</a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'contact-left__email'}>
                                            <div className={'contact-info'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M2.15271 2H6.64271L8.08972 5.618L5.76471 7.168C5.6278 7.25935 5.51555 7.38308 5.43792 7.52822C5.36029 7.67335 5.31969 7.83541 5.31971 8C5.32271 8.094 5.31971 8.001 5.31971 8.001V8.022C5.32022 8.06672 5.32222 8.11141 5.32571 8.156C5.33105 8.23867 5.34271 8.34867 5.36071 8.486C5.39971 8.756 5.47471 9.128 5.62071 9.566C5.91471 10.446 6.49071 11.585 7.61271 12.707C8.73471 13.829 9.87371 14.405 10.7527 14.699C11.1917 14.845 11.5627 14.919 11.8347 14.959C11.9881 14.9813 12.1427 14.9947 12.2977 14.999L12.3107 15H12.3187C12.3187 15 12.4307 14.994 12.3197 15C12.5054 14.9999 12.6873 14.9481 12.8452 14.8504C13.0031 14.7528 13.1307 14.6131 13.2137 14.447L13.8837 13.107L18.3197 13.847V18.167C16.2087 18.472 10.5067 18.773 6.02671 14.293C1.54671 9.813 1.84671 4.11 2.15271 2ZM7.39271 8.486L9.19971 7.282C9.58146 7.02737 9.86403 6.64922 10 6.21096C10.1361 5.77271 10.1172 5.30102 9.94671 4.875L8.49971 1.257C8.35123 0.885905 8.09495 0.567815 7.76395 0.343762C7.43295 0.119709 7.04241 -2.67934e-05 6.64271 4.49722e-09H2.10071C1.19171 4.49722e-09 0.336714 0.631 0.187714 1.617C-0.152286 3.859 -0.613286 10.481 4.61271 15.707C9.83871 20.933 16.4607 20.471 18.7027 20.132C19.6887 19.982 20.3197 19.128 20.3197 18.219V13.847C20.3198 13.3736 20.1519 12.9155 19.8459 12.5542C19.5399 12.1929 19.1157 11.9519 18.6487 11.874L14.2127 11.135C13.7908 11.0646 13.3574 11.1313 12.9762 11.3253C12.595 11.5193 12.2861 11.8304 12.0947 12.213L11.7487 12.906C11.6264 12.8756 11.5053 12.8406 11.3857 12.801C10.7657 12.595 9.90471 12.171 9.02671 11.293C8.14871 10.415 7.72471 9.554 7.51871 8.933C7.47015 8.78601 7.42844 8.63686 7.39371 8.486H7.39271Z" fill="#232B24"/>
                                                </svg>
                                                <div className="wrapper">
                                                    <a href={'tel:++8809639272106'}>++8809639272106</a><br/>
                                                    <a href={'tel:+8801521 747410'}>+8801521 747410</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={{span:5,offset:2}}>
                            <div className="contact-right">
                                {
                                    data?.posts?.list?.length > 0 &&
                                    data?.posts?.list?.map((post, index) => (
                                      <div className={'contact-info'}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.247 20.969C13.3971 19.9254 14.4615 18.7911 15.43 17.577C17.47 15.014 18.711 12.487 18.795 10.24C18.8282 9.32679 18.6771 8.41626 18.3505 7.56278C18.024 6.7093 17.5288 5.9304 16.8945 5.27259C16.2602 4.61478 15.4998 4.09157 14.6588 3.7342C13.8177 3.37684 12.9133 3.19265 11.9995 3.19265C11.0857 3.19265 10.1813 3.37684 9.34022 3.7342C8.49918 4.09157 7.73881 4.61478 7.10451 5.27259C6.4702 5.9304 5.975 6.7093 5.64846 7.56278C5.32192 8.41626 5.17076 9.32679 5.204 10.24C5.289 12.487 6.531 15.014 8.57 17.577C9.53846 18.7911 10.6029 19.9254 11.753 20.969C11.8637 21.069 11.946 21.1417 12 21.187L12.247 20.969ZM11.262 22.134C11.262 22.134 4 16.018 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 16.018 12.738 22.134 12.738 22.134C12.334 22.506 11.669 22.502 11.262 22.134ZM12 12.8C12.7426 12.8 13.4548 12.505 13.9799 11.9799C14.505 11.4548 14.8 10.7426 14.8 10C14.8 9.25739 14.505 8.5452 13.9799 8.0201C13.4548 7.495 12.7426 7.2 12 7.2C11.2574 7.2 10.5452 7.495 10.0201 8.0201C9.495 8.5452 9.2 9.25739 9.2 10C9.2 10.7426 9.495 11.4548 10.0201 11.9799C10.5452 12.505 11.2574 12.8 12 12.8ZM12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10C8 8.93913 8.42143 7.92172 9.17157 7.17157C9.92172 6.42143 10.9391 6 12 6C13.0609 6 14.0783 6.42143 14.8284 7.17157C15.5786 7.92172 16 8.93913 16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14Z" fill="black"/>
                                          </svg>
                                          <div className="wrapper">
                                              <h6>{reactHtmlParser(post?.data?.subtitle)}</h6>
                                              <a href={post?.data?.btn_link} target={'_blank'}>{reactHtmlParser(post?.data?.description)}</a><br/>
                                          </div>
                                      </div>
                                    ))
                                }
                            </div>

                        </Col>
                        {/*<Col lg={{span: 6, offset: 1}} className='modal-data__content mobile-version'>*/}
                        {/*    <div className={'d-flex justify-content-between form__phoneEmail'}>*/}
                        {/*        <Form.Group className="from-group">*/}
                        {/*            <Form.Control*/}
                        {/*                className={errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}*/}
                        {/*                {...register("name", {*/}
                        {/*                    required: {*/}
                        {/*                        value: true,*/}
                        {/*                        message: 'Enter your name'*/}
                        {/*                    },*/}
                        {/*                    pattern: {*/}
                        {/*                        value: /^[A-Za-z ]+$/,*/}
                        {/*                        message: 'Name must contain only letters',*/}
                        {/*                    },*/}
                        {/*                })}*/}
                        {/*                type="text" placeholder="Full Name*"/>*/}
                        {/*            {errors.name && <span className="error-message">{errors.name.message}</span>}*/}
                        {/*        </Form.Group>*/}
                        {/*        <Form.Group className="from-group">*/}
                        {/*            <Form.Control*/}
                        {/*                className={errors?.business_name?.message ? 'has-error form-control-lg' : 'form-control-lg'}*/}
                        {/*                {...register("business_name", {*/}

                        {/*                })}*/}
                        {/*                type="text" placeholder="Business Name*"/>*/}
                        {/*            {errors.business_name && <span className="error-message">{errors.business_name.message}</span>}*/}
                        {/*        </Form.Group>*/}
                        {/*    </div>*/}
                        {/*    <div className={'d-flex justify-content-between form__phoneEmail'}>*/}
                        {/*        <Form.Group className="from-group">*/}
                        {/*            <Form.Control*/}
                        {/*                className={errors?.email?.message ? 'has-error form-control-lg' : 'form-control-lg'}*/}
                        {/*                {...register("email", {*/}
                        {/*                    required: {*/}
                        {/*                        value: true,*/}
                        {/*                        message: 'Enter your email'*/}
                        {/*                    },*/}
                        {/*                    pattern: {*/}
                        {/*                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,*/}
                        {/*                        message: 'Enter a valid email address'*/}
                        {/*                    }*/}
                        {/*                })}*/}
                        {/*                type="email" placeholder="Email Address*"/>*/}
                        {/*            {errors.email && <span className="error-message">{errors.email.message}</span>}*/}
                        {/*        </Form.Group>*/}

                        {/*        <Form.Group className="from-group">*/}
                        {/*            <Form.Control*/}
                        {/*                className={errors?.phone?.message ? 'has-error form-control-lg' : 'form-control-lg'}*/}
                        {/*                {...register("phone", {*/}
                        {/*                    required: {*/}
                        {/*                        value: true,*/}
                        {/*                        message: 'Enter your phone number'*/}
                        {/*                    },*/}
                        {/*                    pattern: {*/}
                        {/*                        value: /^[0-9]*$/,*/}
                        {/*                        message: 'Enter a valid phone number',*/}
                        {/*                    }*/}
                        {/*                })}*/}
                        {/*                type="number" placeholder="Phone Number*"/>*/}
                        {/*            {errors.phone && <span className="error-message">{errors.phone.message}</span>}*/}
                        {/*        </Form.Group>*/}

                        {/*    </div>*/}
                        {/*    <Form.Group className={'form-group'}>*/}
                        {/*        <textarea  {...register('message', {*/}
                        {/*            required: {*/}
                        {/*                value: false,*/}
                        {/*                message: "Please enter a valid message"*/}
                        {/*            },*/}
                        {/*        })} type="text" placeholder="Message"/>*/}
                        {/*    </Form.Group>*/}
                        {/*    <Row>*/}
                        {/*        <Col md={12}>*/}
                        {/*            <div className="button-group" onClick={handleSubmit(onSubmit, onError)}>*/}
                        {/*                <MainButton*/}
                        {/*                    text={'Submit Message'}*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </Col>*/}
                        {/*    </Row>*/}
                        {/*</Col>*/}
                    </Row>
                </Form>

            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    background-color: ${White};
    margin-top: -5px;
    position: relative;
    overflow: hidden;
    
    
    .contact-right{

        a{
            color: #000;
            /* Medium/label */
            font-family: "Inter";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 16.8px */
        }
        
        h6{
            color: rgba(0,0,0,0.50);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%;
        }
        
        .contact-info{
            padding: 30px 0;
            border-bottom: 1px solid rgba(0,0,0,0.20);
            display: flex;
            gap: 20px;
            
            svg{
                flex: 0 0 5%;
            }
        }
    }
    
    
    .contact-left{
        
        .contact-info{
            display: flex;
            gap: 11px;
            align-items: center;
            
            svg{
                @media(max-width: 768px){
                    width: 18px;
                }
            }
            @media(max-width: 768px){
                padding-bottom: 20px;
                border-bottom: 1px solid rgba(0,0,0,0.20);
            }           
        }
        
        
        
       
        h3{
            margin-bottom: 20px;
            color: #000;
            font-size: 56px;
            font-style: normal;
            font-weight: 500;
            line-height: 135%; /* 75.6px */
        }
        p{
            padding-bottom: 24px;
            margin-bottom: 24px;
            border-bottom: 1px solid ${Black};
            color: #000;

            /* Medium/bodyM */
            font-family: "Inter";
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 27px */
        }
        
        h6,a{
            color: #000;

            /* Medium/label */
            font-family: "Inter";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 16.8px */
        }
       
    }

    .title {
        margin-bottom: 50px;
        @media (max-width: 767px) {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }
    }

    p {
        color: #162213;

        /* Body */
        font-family: "Roboto Slab";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 21.6px */
        letter-spacing: -0.36px;
        margin-bottom: 45px;
    }

    @media (max-width: 767px) {
        background: ${White};
    }

    .from-group {
        margin-bottom: 24px;
    }

    .form-control {
        background-color: #EFF1ED;
        border: 1px solid rgba(46, 96, 49, 0.25) !important;
        border-radius: 15px;
        margin-bottom: 0px;
        color: ${Black} !important;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 18px !important;;
        font-style: normal;
        font-weight: 500 !important;;
        line-height: 120% !important;; /* 21.6px */
        height: 48px;

        &:focus {
            border: 1px solid rgba(46, 96, 49, 0.25) !important;

        }

        &::placeholder {
            color: #000 !important;
            font-family: "Banana Grotesk";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 19.6px */
        }

        @media (max-width: 767px) {
            margin-bottom: 25px;
            padding-bottom: 0px;
            &::placeholder {
                color: #475263 !important;

                /* Body */
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%; /* 21.6px */
            }
        }
    }

    .form__phoneEmail {
        display: flex;
        gap: 20px;
        @media (max-width: 767px) {
            flex-direction: column;
            input {
                width: 100% !important;
            }
        }

        input {
            width: 49%;
        }
    }

    input[type="textarea"] {
        padding-bottom: 80px;

        &::placeholder {
            color: rgba(71, 82, 99, 0.5) !important;
        }
    }

    textarea {
        &::placeholder {
            color: rgba(71, 82, 99, 0.5) !important;
        }
    }

    .button-group {
        width: fit-content;
        padding-top: 20px;
    }

    @media (max-width: 767px) {
        .button-group {
            display: flex;
            justify-content: center;
        }
    }

    .error-message {
        color: red;
        font-size: 14px;
    }

    .css-t3ipsp-control {
        box-shadow: 0px 0px transparent;
        border-color: transparent;
        border-bottom: 1px solid #FFFFFF !important;
        border-radius: 0 !important;

        &:hover {
            border: transparent;
        }
    }

    .css-1u9des2-indicatorSeparator {
        background-color: transparent !important;
    }

    .form .filter__control {
        margin-top: 50px !important;
    }

    .css-13cymwt-control {
        border-color: #FFFFFF !important;
        border-radius: 0px !important;
    }

    .form {
        .rows {
            @media (max-width: 767px) {
                //flex-direction: column-reverse;
            }
        }

        .form-group {
            background: transparent;
        }

        .modal-data__content {
            position: relative;


            .form__phoneEmail {
                display: flex;
                justify-content: space-between;

                .from-group {
                    width: 48% !important;
                }

                input {
                    width: 100% !important;
                }

                @media (max-width: 767px) {
                    display: block;
                    .form-group {
                        width: 100% !important;

                    }
                }
            }

            .row {
                .right {
                    position: absolute;
                    //bottom: -120px;
                    //right: 0;

                    bottom: -230px;
                    right: -54px;
                    @media (max-width: 767px) {
                        bottom: -80px;
                        right: 0;
                    }
                }

                @media (max-width: 767px) {
                    flex-direction: column-reverse;
                }
            }

            &__right-img {
                position: relative;
                padding-top: calc(386 / 400 * 100%);
                @media (max-width: 767px) {
                    padding-top: calc(172 / 273 * 100%);
                }
            }

            &__img {
                position: relative;
                padding-top: calc(319 / 400 * 100%);
                overflow: hidden; /* Add overflow hidden for parallax effect */

                @media (max-width: 767px) {
                    padding-top: calc(306 / 341 * 100%);
                }
            }

            h2 {
                color: ${Black};
                font-size: 34px;
                font-weight: 500;
                line-height: 109%; /* 37.06px */
                letter-spacing: -1.02px;
                margin-bottom: 40px;


            }

            @media (max-width: 767px) {
                h2 {
                    margin-bottom: 24px;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 109%; /* 21.8px */
                    letter-spacing: -0.6px;
                }

                &.mobile-version {
                    //margin-top: 60px;
                    margin-bottom: 40px;
                }
            }

        }
    }

    input:-webkit-autofill {
        -webkit-text-fill-color: ${Black};

        &:focus {
            border: 1px solid rgba(46, 96, 49, 0.25) !important;

        }

        &:hover {
            border: 1px solid rgba(46, 96, 49, 0.25) !important;

        }
    }

    textarea {

        background: #fff !important;
        border: 1px solid rgba(46, 96, 49, 0.25) !important;
        border-radius: 15px;  
        padding-bottom: 10px;
        width: 100%;
        color: ${Black};
        padding-left: 15px;
        padding-top: 15px;

        &::placeholder {
            color: #000 !important;
            font-family: "Banana Grotesk";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 19.6px */
        }
        &:focus-visible {
            color: rgba(39, 26, 0, 0.5);
            border-bottom: 1px solid #271A00;
        }
    }


    .css-mnviuz-indicatorContainer {
        padding: 0px !important;
    }

    @media (max-width: 767px) {
        .contact-left {
            h3{
                font-size: 32px !important;
            }          

            .contact-info{
                margin-bottom: 15px;
            }
        }
        
        .contact-right .contact-info{
            padding: 15px 0;
        }

        .form .modal-data__content .form__phoneEmail .from-group {
            width: 98% !important;
        }

        .form__phoneEmail {
            .from-group {
                margin-bottom: 0;
            }
        }

        textarea {
            background: transparent;
        }

    }


    @media (min-width: 768px) and (max-width: 991px) {
        .col-lg-6 {
            margin-top: 80px;
        }
       

    }
`;

export default React.memo(MyComponent);