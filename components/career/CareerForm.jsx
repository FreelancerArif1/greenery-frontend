"use client"
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Form, Row} from "react-bootstrap";
import {Black, hover, White} from "../../styles/globalStyleVars";
import {toast} from "react-toastify";
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import {components} from "react-select";
import Title from "@/components/common/Title/Title";
import {Img} from "@/components/common/Image/Img";
import MainButton from "@/components/common/Buttons/MainButton";


const GetInTouch = ({title,img,url,bg,servicePage,data,id}) => {

    const [offset, setOffset] = useState(98)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        handleResize(); // Call initially to set the state based on the current window size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        window.addEventListener('load', function () {
            setOffset(document.querySelector(' .container').offsetLeft)

        })
        window.addEventListener('resize', function () {
            setOffset(document.querySelector(' .container').offsetLeft)

        })
        setOffset(document.querySelector(' .container').offsetLeft)
    }, [])

    // disable scroll on input
    useEffect(() => {
        var inputTypeNumbers = document.querySelectorAll("input[type=number]");
        for (var a = 0; a < inputTypeNumbers.length; a++) {
            inputTypeNumbers[a].onwheel = function (event) {
                event.target.blur();
            };
        }
    }, [])

    const { register, handleSubmit,  control,formState, reset } = useForm({ mode: 'all' });
    const { errors ,isSubmitSuccessful} = formState;

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

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('name', data?.name);
            formData.append('company_name', data?.company_name);
            formData.append('email', data?.email);
            formData.append('phone', data?.phone);
            formData.append('message', data?.message);
            formData.append('file', cv);
            formData.append('form_id', 'career-form');

            const response = await axios.post('https://bestinbd.com/2510GES/api/post-req-data/form-submit', formData);
            if (response.status === 200) {
                success('Form submitted successfully')
                reset(); // Reset form fields
                setTopic('')
            } else {
                error('Failed to submit form. Please try again later.');
            }
        } catch (err) {
            // error('Failed to submit form. Please try again later.');
        }
    };

    const onError = (errors) => {
        // setToastShown(false); // Reset toast shown state on new submission attempt
        const firstError = Object.values(errors)[0];
        error(firstError.message);
    };


    const [cv, setCv] = useState(null)
    const [selectedFileName, setSelectedFileName] = useState('');

    const handleFileChange = (event) => {
        setCv(event.target.files[0])
        setSelectedFileName(event.target.files?.[0]?.name);

    };

    return (
        <StyledGetInTouch className="enquiry pt-120 pb-120  " bg={bg} id={id}>
            <Container fluid={true} className={'full-form'} style={{marginLeft:offset}}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={{span:6}} className='order-2 order-md-1 contact-from-left' style={{paddingRight:'4%',paddingLeft:"4%"}}>
                        <div className='contact-from-left__inner'>
                            <div>
                                <Title
                                    margin={'95px 0 40px 0'}
                                    color={White}
                                    animClass={'fade-up'}
                                    text={data?.section_data?.subtitle} />
                                <Form className={'form'}>
                                    <div className={'double-input d-flex justify-content-between'}>
                                        <Form.Group className='form-group'>
                                            <Form.Control
                                                className={formState?.errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                type="text"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: "Enter your name"
                                                    },
                                                })}
                                                placeholder="Full Name"/>
                                        </Form.Group>

                                        <Form.Group className='form-group'>
                                            <Form.Control
                                                className={formState?.errors?.company_name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                type="text"
                                                {...register("company_name", {})}
                                                placeholder="Business Name"/>
                                        </Form.Group>
                                    </div>

                                    <div className={'double-input d-flex justify-content-between'}>
                                        <Form.Group className='form-group'>
                                            <Form.Control
                                                className={formState?.errors?.email?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: 'Enter your email'
                                                    },
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: 'Enter a valid email address'
                                                    }
                                                })}
                                                type="email" placeholder="Email Address*"
                                            />
                                        </Form.Group>

                                        <Form.Group className='form-group'>
                                            <Form.Control
                                                className={formState?.errors?.phone?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: 'Enter your phone number'
                                                    },
                                                    pattern: {
                                                        value: /^01[0-9]{9}$/,
                                                        message: 'Enter a valid 11 digit phone number'
                                                    }
                                                })}
                                                type="number" placeholder="Phone Number*"/>
                                        </Form.Group>
                                    </div>
                                    <Form.Group className='form-group'>
                                        <Form.Control
                                            className={formState?.errors?.message?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                            {...register("message", {
                                                required: {
                                                    message: 'Enter your message',
                                                },

                                            })}
                                            type="text" placeholder="Message"/>
                                    </Form.Group>

                                    <div className="attachCvName">
                                        <div className="attach-cv">
                                            <Form.Control
                                                type="file"
                                                accept=".pdf"
                                                id="resume-upload"
                                                style={{display: "none"}}
                                                onChange={handleFileChange}
                                            />
                                            <Form.Label htmlFor="resume-upload" className="resume-upload-label"
                                                        style={{display: selectedFileName ? "none" : "block"}}>
                                                Attache Resume
                                            </Form.Label>
                                            {
                                                selectedFileName ? "" :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M11.5 15.577V6.927L9.17 9.257L8.462 8.539L12 5L15.539 8.539L14.831 9.258L12.5 6.927V15.577H11.5ZM6.616 19C6.15533 19 5.771 18.846 5.463 18.538C5.155 18.23 5.00067 17.8453 5 17.384V14.961H6V17.384C6 17.538 6.064 17.6793 6.192 17.808C6.32 17.9367 6.461 18.0007 6.615 18H17.385C17.5383 18 17.6793 17.936 17.808 17.808C17.9367 17.68 18.0007 17.5387 18 17.384V14.961H19V17.384C19 17.8447 18.846 18.229 18.538 18.537C18.23 18.845 17.8453 18.9993 17.384 19H6.616Z"
                                                            fill="black"/>
                                                    </svg>
                                            }

                                            {selectedFileName && (
                                                <div className="file-name">
                                                    {selectedFileName}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div onClick={handleSubmit(onSubmit, onError)}>
                                        <MainButton
                                            background={White}
                                            color={hover}
                                            text={'Submit Request'}
                                            border={'1px solid white'}
                                            src={'#'}
                                        />

                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} lg={6} md={12} className='order-1 order-md-2 contact-from-right'>
                        <div className="contact-from-right__image">
                            <Img
                                src={data?.images?.list?.[0]?.full_path ? data?.images?.list?.[0]?.full_path : '/images/dynamic/home/contact.jpg'}/>

                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledGetInTouch>
    );
};


const StyledGetInTouch = styled.section`

        // background: ${props => props?.bg || "#F8F8F9"};
    overflow: hidden;
    position: relative;
    will-change: transform;
    margin-bottom: -5px;
    z-index: 111;
    .container-fluid {
        z-index: 2;
    }
    .full-form {
        background: ${hover} !important;    
    }

    .col-md-7 {
        padding-right: 0px;
    }

    .col-lg-5 {
        padding-left: 0px;
    }

    .attach-cv {
        background: #EFF1ED;
        border-radius: 15px;
        width: 100%;
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255, 0.75);
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        color: ${White};
        margin-bottom: 24px;
        padding: 0 15px;

        label {
            margin-bottom: 0;
            cursor: pointer;
            color: #000;
            font-family: "Banana Grotesk";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 19.6px */
        }

        .file-name {
            color: #000;
            font-family: "Banana Grotesk";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 19.6px */
        }

        @media (max-width: 767px) {
            width: 100%;
        }
    }


    .contact-from-right {
        padding-left: 0;
        //border-bottom-left-radius: 10px;

        &__image {
            padding-top: calc(500 / 500 * 100%);
            position: relative;
            height: 100%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;

            .global-image {
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
            }

            //img {
            //    border-top-left-radius: 10px;
            //    border-bottom-left-radius: 10px;
            //}

            .content {
                position: absolute;
                top: 60px;
                left: 40px;
                right: 40px;

                h3 {
                    color: ${White};
                    font-size: 48px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 100%; /* 48px */
                    z-index: 999;
                    width: 85%;
                }
            }
        }
    }

    .contact-from-left {
        padding-right: 0;
        height: 100%;
        background: ${hover};

        &__inner {
            background: ${hover};
            height: 100%;
            display: flow;
            justify-content: center;
            align-items: center;

            h3 {
                font-size: 40px;
                font-weight: 700;
                line-height: 46px;
                color: ${Black};
                margin-bottom: 0;
            }

            .form-group {
                margin-bottom: 0px !important;
                background: ${hover} !important;
            }

            .form-control {
                margin-bottom: 24px !important;
                height: 50px;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
                border-bottom: 1px solid #D1D1D1;                
                background: #EFF1ED !important;
                padding: 0;
                border: 1px solid ${hover};
                border-radius: 15px;
                padding-left: 15px;
             

                &:focus{
                    border-bottom: 1px solid ${hover} !important;
                    border-left: 1px solid ${hover} !important;
                    border-right: 1px solid ${hover} !important;
                    border-top: 1px solid ${hover} !important;
                }

                &::placeholder {

                    margin-bottom: 15px;
                    color: #000;
                    font-family: "Banana Grotesk";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 140%; /* 19.6px */
                }
            }
        }
    }

    @media (min-width: 1550px) {
        .contact-from-right {
            &__image {
                padding-top: calc(800 / 822 * 100%);
            }
        }

        .contact-from-left {
            &__inner {

                h3 {
                    font-size: 48px;
                    line-height: 56px;
                }

                .form-control {
                    font-size: 16px !important;
                    color: ${Black} !important;
                }
            }
        }
    }

    @media (max-width: 1091px) {
        .contact-from-left {
            &__inner {
                padding: 40px 30px 65px 30px;
            }
        }
    }

    @media (max-width: 767px) {
        .full-form{
            padding-top: 0px;
        }

        padding-top: 0px!important;

        .contact-from-left__inner{
            padding-bottom: 80px !important;
        }

        textarea{
            margin-bottom: 0px !important;
        }

        .double-input{
            display: block !important;
        }
        .row {
            flex-direction: row-reverse;
        }

        .col-md-7 {
            padding-right: 15px;
        }

        .col-lg-5 {
            padding-left: 0px !important;
            padding-right: 0px;
        }
        .contact-from-right__image img {
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
        }

        .contact-from-right__image .content{
            top:40px;
            left: 15px;
            h3{
                font-size: 32px;
                font-style: normal;
                font-weight: 500;
                line-height: 100%; /* 32px */
            }
        }

        .contact-from-right {
            padding-left: 0px;
            padding-right: 0px;
            margin-bottom: 60px;

            &__image {
                padding-top: calc(250 / 375 * 100%);
            }
        }

        .contact-from-left {
            padding-right: 15px !important;

            &__inner {
                padding: 0;

                h3 {
                    font-size: 32px !important;
                    line-height: 36px;
                    margin-bottom: 40px;
                }

                .form-group {
                    margin-bottom: 30px !important;
                }

                .form-top {
                    font-size: 16px !important;
                }

                form {
                    margin-top: 40px;
                    padding-right: 0;
                }

                .dc-btn {
                    width: 100%;
                }
            }
        }
    }

    textarea {
        border: unset;
        border-bottom: 1px solid #D1D1D1;
        padding-bottom: 10px;
        width: 100%;
        margin-bottom: 40px;

        &::placeholder {
            color: #999999;
            font-size: 14px;
            // color: ${white};
            opacity: .6;
            line-height: 20px;
            font-weight: 500;
            margin-bottom: 15px;
            font-family: "Banana Grotesk" !important;
        }


        &:focus-visible {
            outline: none;
        }
    }

    .double-input {
        .form-group {
            width: 48%;
        }
    }

    .custom__menu {
        z-index: 9;
    }

    //caret

    .css-qbdosj-Input {
        margin: unset;
    }

    .form-group {
        margin-bottom: 30px;
    }

    .custom__control {
        background: ${hover};
        border-top: 1px solid transparent !important;
        border-left: 1px solid transparent !important;
        border-right: 1px solid transparent !important;
        border-bottom: 1px solid #D1D1D1 !important;
        box-shadow: none;
        outline: none !important;
        cursor: pointer;
        height: 60px;
        margin-bottom: 30px;

        svg line {
            stroke: #fff;
        }

        .custom__single-value {
            color: ${Black};
            font-size: 16px;
            line-height: 24px;
        }

        .custom__placeholder {
            color: #999999 !important;
            font-size: 14px;
            // color: ${white};
            opacity: .6;
            line-height: 20px;
            font-weight: 500;
            margin-bottom: 15px;
            font-family: "Banana Grotesk" !important;
        }

        .custom__value-container {
            padding-left: 0;
        }
    }

    .css-t3ipsp-control:hover {
        border-bottom: 1px solid #D1D1D1;
    }

    .css-qbdosj-Input {
        height: 60px !important;
        padding: unset;
    }

    .custom__control .custom__value-container {
        height: 60px;
    }

    .custom__indicator-separator {
        display: none;
    }

    .custom__indicator {
        padding-right: 0;
    }

    .css-1fdsijx-ValueContainer {
        padding-top: 0 !important;
    }

    .customers-info {
        @media (max-width: 767px) {
        }
    }

    @media (max-width: 767px) {
        .double-input {
            .form-group {
                width: 100%;
            }
        }
        textarea.form-control {
            height: 150px;
        }
    }

    .custom__control .custom__placeholder {
        color: rgba(61, 61, 61, 0.5);
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 100%; /* 14px */
        margin-left: 0px;
        margin-right: 0px;
    }

    .css-1hwfws3 {
        padding: 0px !important;
    }

    .custom__value-container {
        margin-right: 0px;
    }

    .css-yk16xz-control, .css-1pahdxg-control {
        padding-left: 0px !important;
    }

    .css-yk16xz-control .css-tlfecz-indicatorContainer {
        margin-right: 0px !important;
    }

    .css-1pahdxg-control .css-1gtu0rj-indicatorContainer {
        margin-right: 0px !important;
    }

    .custom__dropdown-indicator {
        img {
            transition: transform 0.3s ease-in-out;
        }
    }

    .custom__control--menu-is-open {
        .custom__dropdown-indicator {
            img {
                transform: rotate(180deg) !important;
            }
        }
    }
    .form-control{
        color: ${Black};
    }

    input:-webkit-autofill {
        -webkit-text-fill-color: ${Black};
        &:focus{
            border-bottom: 1px solid ${Black} !important;
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            border-top: 1px solid transparent;
        }
        &:hover{
                // border-bottom: 1px solid ${Black} !important;
        }
    }

    .custom__single-value{
        font-size: 14px !important;
        font-weight: 500 !important;
        line-height: 20px !important;
    }

    .global-image {
        &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 1;
            width: 100%;
            transform: rotate(0deg);
            opacity: 0.2;
            @media (max-width: 767px) {
                opacity: 0.5;
            }
        }
    }

    .buttons{
        .submit-btn{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            height: 44px;
            width: max-content;
            background-color: ${White};
            padding: 12px 25px;
            gap: 10px;
            border-radius: 10px;

            
            p{
                //font-family: "Banana Grotesk";
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 125%; /* 20px */
                position: relative;
                display: inline-block;
                padding: 0;
                transition: all 0.3s ease-in-out;
                transform-origin: 50% 0;
                transform-style: preserve-3d;
                color: ${hover};


                &:before{
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    content: 'Submit Request';
                    transition: all 0.3s ease-in-out;
                    transform: rotateX(-90deg);
                    transform-origin: 50% 0;
                    text-align: center;
                }
            }         
            
            &:hover{
                background-color: ${Black};
                p{
                    color: ${White};
                }
            }
            &:hover p,
            &:focus p {
                transform: rotateX(90deg) translateY(-22px);
                transition: all 0.3s ease-in-out;               
            }
        }
    }
    
    
    @media(min-width: 1190px) and (max-width: 1200px){
        .contact-from-left__inner form{
            padding-bottom: 60px;
        }
    }

    @media(min-width: 768px) and (max-width: 991px) {
        .contact-from-right__image{
            padding-top: calc(250 / 500 * 100%);
        }
    }
`

export default GetInTouch;