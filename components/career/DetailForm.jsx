"use client"
import React, {useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import { DarkBlue, hover, White } from '@/styles/globalStyleVars';
import axios from "axios";
import Button from '@/components/MainButton';

const MyComponent = ({data,position}) => {


    const [cv, setCv] = useState(null)

    const [selectedFileName, setSelectedFileName] = useState('');
    const [selectedFileSize, setSelectedFileSize] = useState('');

    const handleFileChange = (event) => {
        setCv(event.target.files[0])
        const file = event.target.files[0];
        setSelectedFileName(file.name);
        setSelectedFileSize(file.size/1024);

    };

    const {register, control, handleSubmit, formState: {errors, isSubmitSuccessful}, reset, watch} = useForm({
        mode: "all",
    })
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
            formData.append('email', e?.email);
            formData.append('phone', e?.phone);
            formData.append('subject', e?.subject);
            formData.append('file', cv);
            formData.append('position', position);
            formData.append('form_id', 'career-form');

            if(selectedFileSize>2048){
                error('The file size exceeds 2MB.');
                return;
            }

            const response = await axios.post('https://dcfix.dcastalia.com/2509BBL/api/post-req-data/form-submit', formData);
            if (response.status === 200) {
                success(response?.data?.message);
                reset(); // Reset form fields
                setSelectedFileName('');
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
        // error(firstError.message);
    };

    return (
        <StyledComponent className={'career-detail-form pb-100 pt-100'}>
            <Container>
                <Form className={'form'} >
                    <Row>
                        <Col md={12} className='modal-data__content mobile-version'>
                            <div className={'modal-data__content-title'}>
                                <h2 className={'split-up'}>Apply For A Role</h2>
                            </div>
                            <Form.Group className="from-group">
                                <Form.Control
                                    className={errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Enter your full name'
                                        },
                                        pattern: {
                                            value: /^[A-Za-z ]+$/,
                                            message: 'Name must contain only letters',
                                        },
                                    })}
                                    type="text" placeholder="Your full name*"/>
                                {errors.name && <span className="error-message">{errors.name.message}</span>}
                            </Form.Group>

                            <Form.Group className="from-group">
                                <Form.Control
                                    className={errors?.phone?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Enter your phone number'
                                        },
                                        pattern: {
                                            value: /^[0-9]*$/,
                                            message: 'Enter a valid phone number',
                                        }
                                    })}
                                    type="number" placeholder="Your mobile number*"/>
                                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                            </Form.Group>

                            <Form.Group className="from-group">
                                <Form.Control
                                    className={errors?.email?.message ? 'has-error form-control-lg' : 'form-control-lg'}
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
                                    type="email" placeholder="Your email address*"/>
                                {errors.email && <span className="error-message">{errors.email.message}</span>}
                            </Form.Group>

                            <Form.Group className="from-group">
                                <Form.Control
                                    className={errors?.subject?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                    {...register("subject", {
                                        required: {
                                            value: true,
                                            message: 'Enter a valid subject'
                                        },
                                        pattern: {
                                            value: /^[A-Za-z ]+$/,
                                        },
                                    })}
                                    type="text" placeholder="Write your subject*"/>
                                {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                            </Form.Group>

                            <Row className={'modal-data__content-bottom'}>
                                <Col md={12}>
                                    {
                                        selectedFileName ? "" :
                                            <h4>Upload Your Resume</h4>


                                    }
                                </Col>
                                <Col md={12}>
                                    <div className="button-group">
                                        <div className="attachCvName" >
                                            <div className="attach-cv">


                                                <Form.Control
                                                  type="file"
                                                  accept=".pdf"
                                                  id="resume-upload"
                                                  style={{ display: 'none' }}
                                                  onChange={handleFileChange}

                                                />

                                                <Form.Label htmlFor="resume-upload" className="resume-upload-label"
                                                            style={{ display: selectedFileName ? 'none' : 'block' }}>
                                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         style={{ display: selectedFileName ? 'none' : 'block' }}>
                                                        <path
                                                          d="M7.92617 16.6182C6.29058 16.2493 4.95662 15.4167 3.92429 14.1205C2.89143 12.8253 2.375 11.3402 2.375 9.66501C2.375 7.98984 2.89381 6.50546 3.93142 5.21188C4.96956 3.91724 6.30114 3.08599 7.92617 2.71813C8.05494 2.68277 8.16683 2.7052 8.26183 2.78542C8.35683 2.86565 8.40433 2.97331 8.40433 3.10842C8.40433 3.20237 8.37847 3.28391 8.32675 3.35305C8.27556 3.42219 8.20483 3.46626 8.11458 3.48526C6.66319 3.81512 5.47569 4.55401 4.55208 5.70192C3.62847 6.84984 3.16667 8.16928 3.16667 9.66026C3.16667 11.1512 3.62847 12.4707 4.55208 13.6186C5.47569 14.7665 6.66319 15.5054 8.11458 15.8353C8.208 15.8648 8.27951 15.9152 8.32912 15.9865C8.37874 16.0577 8.40354 16.1387 8.40354 16.2295C8.40354 16.3593 8.35604 16.4654 8.26104 16.5478C8.16604 16.6301 8.05442 16.6536 7.92617 16.6182ZM11.0746 16.6024C10.9559 16.6383 10.8464 16.6169 10.7461 16.5383C10.6458 16.4596 10.5957 16.3549 10.5957 16.224C10.5957 16.1321 10.6181 16.0519 10.663 15.9833C10.7078 15.9142 10.777 15.8648 10.8704 15.8353C11.2293 15.7561 11.5781 15.6471 11.917 15.5083C12.2558 15.3695 12.5783 15.2014 12.8844 15.004C12.9583 14.9597 13.0388 14.9438 13.1258 14.9565C13.2124 14.9702 13.2879 15.0103 13.3523 15.0768C13.442 15.1703 13.4789 15.2758 13.4631 15.3935C13.4467 15.5107 13.3887 15.6062 13.2889 15.6801C12.9464 15.8928 12.5891 16.0762 12.217 16.2303C11.8449 16.3844 11.4639 16.5084 11.0738 16.6024M14.9071 13.5228C14.8427 13.4547 14.805 13.3798 14.7939 13.298C14.7823 13.2162 14.7989 13.1383 14.8438 13.0644C15.0417 12.7636 15.21 12.4427 15.3488 12.1018C15.4876 11.7608 15.5964 11.4138 15.675 11.0607C15.6945 10.9689 15.7399 10.8984 15.8112 10.8493C15.8824 10.8003 15.9634 10.7757 16.0542 10.7757C16.184 10.7757 16.2901 10.8232 16.3725 10.9182C16.4543 11.0132 16.4775 11.1251 16.4421 11.2539C16.3477 11.6444 16.2236 12.0255 16.07 12.397C15.9159 12.7691 15.7325 13.1264 15.5198 13.469C15.4459 13.5687 15.3478 13.6268 15.2253 13.6431C15.1029 13.6595 14.9968 13.6189 14.9071 13.5228ZM16.0566 8.5638C15.9595 8.5638 15.8763 8.54163 15.8072 8.4973C15.7386 8.45244 15.6945 8.3833 15.675 8.28988C15.5937 7.93363 15.4818 7.58741 15.3393 7.25121C15.1968 6.91502 15.0316 6.58991 14.8438 6.27588C14.7889 6.19883 14.7696 6.11702 14.786 6.03046C14.8018 5.94338 14.8422 5.86765 14.9071 5.80326C14.9968 5.71353 15.1032 5.67501 15.2261 5.68767C15.3486 5.70087 15.4462 5.76209 15.519 5.87134C15.7323 6.21334 15.9157 6.57065 16.0693 6.94326C16.2234 7.31534 16.3477 7.6964 16.4421 8.08642C16.4775 8.20465 16.4566 8.3139 16.3796 8.41417C16.3025 8.51445 16.1949 8.56459 16.0566 8.56459M12.8844 4.31651C12.5809 4.11859 12.2611 3.95023 11.9249 3.81142C11.5887 3.67262 11.2422 3.5639 10.8854 3.48526C10.7957 3.46573 10.725 3.42034 10.6733 3.34909C10.6215 3.27784 10.5959 3.19683 10.5965 3.10605C10.5965 2.97621 10.644 2.87013 10.739 2.7878C10.834 2.70599 10.9456 2.68277 11.0738 2.71813C11.4686 2.81313 11.8512 2.93399 12.2218 3.08071C12.5922 3.22744 12.948 3.41401 13.2889 3.64042C13.3918 3.71431 13.4512 3.8101 13.467 3.9278C13.4834 4.04496 13.4465 4.15158 13.3562 4.24763C13.2923 4.31624 13.2171 4.35846 13.1306 4.3743C13.0435 4.39013 12.9614 4.37087 12.8844 4.31651ZM9.49525 13.0708C9.38283 13.0708 9.28889 13.0328 9.21342 12.9568C9.13794 12.8808 9.09995 12.7868 9.09942 12.6749V7.78005L6.93025 9.95396C6.84317 10.0416 6.74896 10.0854 6.64763 10.0854C6.54629 10.0854 6.45208 10.0416 6.365 9.95396C6.27792 9.86635 6.23358 9.77241 6.232 9.67213C6.23042 9.57185 6.27343 9.47764 6.36104 9.38951L9.04796 6.69784C9.17304 6.57276 9.32214 6.51021 9.49525 6.51021C9.66836 6.51021 9.81772 6.57276 9.94333 6.69784L12.6208 9.37605C12.7084 9.46313 12.753 9.55787 12.7545 9.66026C12.7561 9.76264 12.7131 9.85764 12.6255 9.94526C12.5379 10.0329 12.4429 10.0764 12.3405 10.0759C12.2381 10.0754 12.1431 10.0318 12.0555 9.94526L9.89108 7.78005V12.6749C9.89108 12.7868 9.85308 12.8808 9.77708 12.9568C9.70108 13.0328 9.60714 13.0708 9.49525 13.0708Z"
                                                          fill="white" />
                                                    </svg>

                                                    <p>Attach Your Resume</p>
                                                </Form.Label>
                                                {selectedFileName && (
                                                  <div className="file-name">
                                                      {selectedFileName}
                                                  </div>
                                                )}

                                            </div>
                                            {
                                                selectedFileSize > 2048 ?
                                                  <p>The file size exceeds 2MB.</p> : ''
                                            }
                                            {/*<p>DOC/PDF || Max 2MB </p>*/}
                                        </div>
                                        <div>
                                            <div onClick={handleSubmit(onSubmit, onError)}>
                                                <MainButton
                                                  text={'Apply Now'}
                                                  color={White}
                                                  svgColor={White}
                                                  background={'transparent'}
                                                  borderColor={White}

                                                />

                                            </div>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>

            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    margin-top: -5px;
    position: relative;
    padding: 100px 65px;
    border-radius: 20px;
    //border: 1.5px solid #F1C760;
    background: ${DarkBlue};

    .top-floating {
        position: absolute;
        right: -15%;
        bottom: 60%;
        z-index: 1;
        //bottom: 10%;

        img {
            width: 138px;
            height: 138px;
        }

        @media (max-width: 767px) {
            display: none;
        }

    }

    .title {
        margin-bottom: 60px;

        h3 {
            color: #ffffff;
        }
    }

    .from-group {
        margin-bottom: 38px !important;
    }

    .error-message {
        color: red;
        font-size: 14px;
    }


    .form-control {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${White};
        margin-bottom: 0px;
        color: ${White} !important;
        padding-left: 0;
        padding-bottom: 20px;

        /* Button */
        font-family: "Roboto Slab";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        letter-spacing: -0.32px;

        &:focus {
            border: transparent;
            border-bottom: 1px solid ${White} !important;
            color: ${White} !important;
        }

        &::placeholder {
            color: ${White};
            color: #F4F4F4;

            /* Button */
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 19.2px */
            letter-spacing: -0.32px;
        }

        &:hover {
            border-bottom: 1px solid ${White};
        }

        @media (max-width: 767px) {
            margin-bottom: 25px;
            padding-bottom: 0px;
            &::placeholder {
                color: #6A6A6A;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px; /* 125% */
                text-transform: capitalize;
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
    }

    .button-group {
        width: fit-content;
        //padding-top: 15px;
    }

    @media (max-width: 767px) {
        border-radius: 0px;
        border: 1.5px solid transparent;
        .button-group {
            display: flex;
            justify-content: center;
        }
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
        .modal-data__content {
            h2 {
                color: ${White};
                width: max-content;

                /* Header */
                font-family: "Roboto Slab";
                font-size: 48px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%; /* 57.6px */
                letter-spacing: -0.96px;
                margin-bottom: 50px;
            }

            .modal-data__content-bottom {
                h4 {
                    color: #F4F4F4;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 20px; /* 142.857% */
                    text-transform: capitalize;
                    margin-bottom: 15px;
                }

            }

            @media (max-width: 767px) {
                .modal-data__content-title{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                h2 {
                    margin-bottom: 24px;
                    color: ${White};
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 104%; /* 41.6px */
                    letter-spacing: -0.92px;
                    text-align: center;
                }
                &.mobile-version{
                    margin-top: 15px;
                }
                .modal-data__content-bottom {
                    margin-top:30px;
                }
               
            }

        }
    }

    .button-group {
        //display: flex;
        gap: 40px;
        margin-bottom: 10px;
        .attachCvName{
            margin-bottom: 50px;
            p{
                color: rgba(244, 244, 244, 0.28);
                font-size: 10px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px; /* 200% */
                text-transform: capitalize;
                margin-top: 12px;
            }
        }
       

        .attach-cv {
            //width: 222px;
            cursor: pointer;
            display: flex;
            align-items: center;
            //justify-content: center;
            gap: 10px;

            label {
                margin-bottom: 0;
                cursor: pointer;
                color: #F4F4F4;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px; /* 166.667% */
                text-transform: capitalize;
            }
        }

        @media (max-width: 767px) {
            flex-direction: column;
            .attachCvName{
                margin-bottom: 0px;
            }
        }
    }

    .file-name {
        font-size: 16px;
        color: ${hover};
    }
    
    
    @media (max-width: 767px) {
        padding: 38px 0px;
    }
    input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus{
        color: ${White} !important;
        -webkit-text-fill-color: ${White} !important;
    }


    .button-group{
        .dc-btn a .icon{
            border: 1px solid ${White} !important;
            color: ${White} !important;

            svg{
                path{
                    stroke: ${White} !important;
                }
            }
        }
        .dc-btn a .btn-text{
            color: ${White} !important;
        }
    }
    
    .resume-upload-label{
        display: flex !important;
        p{
            margin-top: 0 !important;
            color: ${White} !important;
        }
        svg{
            margin-right: 10px;
        }
    }
    

`;

export default React.memo(MyComponent);
