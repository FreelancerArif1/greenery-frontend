import {createGlobalStyle, css} from 'styled-components';
import { Black, GlobalFont, Green, hover, White } from './globalStyleVars';

function createCSS() {
    let styles = '';

    for (let i = 2; i < 20; i += 1) {
        styles += `
        .anim-active.fade-up:nth-child(${i}) {
          transition-delay: ${i * .12}s;
        }
     `
    }

    for (let a = 2; a < 100; a += 1) {
        styles += `
        .anim-active.fade-right span:nth-child(${a}) {
          transition-delay: ${a * .03}s;
        }
     `
    }

    return css`${styles}`;
}

export default createGlobalStyle`

    ${createCSS()}
    #root {
        min-height: 100vh;
        overflow-x: hidden;
    }


    ::-webkit-scrollbar {
        display: none !important;
        width: 0.3rem; /* Adjusted the width to be smaller */
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #000; /* Color of the thumb */
        border: 1px solid transparent; /* Reduced the border size */
        border-radius: 9px; /* Optionally keep the border-radius */
        background-clip: content-box;
    }

    body {
        font-family: ${GlobalFont}, Arial, freesans, sans-serif !important;
        font-style: normal;
        font-weight: 400;
        margin: 0;
        color: ${Black};
        background: #FFF;
        padding: 0;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        font-size: 18px;
        line-height: 150%;
    }

    a {
        transition: color .3s ease;
        text-decoration: none;

        &:hover {
            color: ${hover} !important;
            text-decoration: none;
            outline: none;
            box-shadow: none;
        }

        &:focus {
            text-decoration: none;
            outline: none;
            box-shadow: none;
            color: ${Black};
        }
    }

    ::selection {
        background: #285E2F;
        color: #FFF;
    }

    p, a, h1, h2, h4, h3, h5, h6 {
        font-weight: 400;
        margin: 0;
    }

    h1, h2 {
        font-family: ${GlobalFont};
    }

    h1 {
        color: #000;
        font-family: "Banana Grotesk";
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 104px */
        
        @media(max-width: 767px){
            font-size: 40px;
            &.heading{
                font-size:  56px;
                font-weight: 600;
                line-height: 120%; /* 168px */
            }
        }
        @media(min-width: 768px) and (max-width: 1200px){
            font-size: 56px;
            &.heading{
                font-size:  72px;
                font-weight: 600;
                line-height: 120%; /* 168px */
            }
        }
        @media(min-width: 1201px) and (max-width: 1600px){
            font-size: 72px;
            &.heading{
                font-size:  120px;
                font-weight: 600;
                line-height: 120%; /* 168px */
            }
        }
        @media(min-width: 1601px){
            font-size: 80px;
            &.heading{
                font-size:  140px;
                font-weight: 600;
                line-height: 120%; /* 168px */
            }
        }        
    }

    h2 {
        color: #000;
        font-family: "Banana Grotesk";
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 83.2px */

        @media(max-width: 767px){
            font-size: 36px;

            &.sub-heading{
                font-size: 48px;
                font-weight: 600;
                line-height: 120%; /* 115.2px */
            }           
        }        
        
        @media(min-width: 768px) and (max-width: 1200px){
            font-size: 48px;
            &.sub-heading{
                font-size: 64px;
                font-weight: 600;
                line-height: 120%; /* 115.2px */
            }
        }
        
        @media(min-width: 1201px) and (max-width: 1600px){
            font-size: 56px;

            &.sub-heading{
                font-size: 80px;
                font-weight: 600;
                line-height: 120%; /* 115.2px */
            }
        }
        
        @media(min-width: 1601px){
            font-size: 64px;
            &.sub-heading{
                font-size: 96px;
                font-weight: 600;
                line-height: 120%; /* 115.2px */
            }
        }
    }

    h3 {

        color: #000;
        font-family: "Banana Grotesk";
        font-style: normal;
        font-weight: 500;
        line-height: 135%; /* 75.6px */

        @media(max-width: 767px){
            font-size: 32px;
        }
        @media(min-width: 768px) and (max-width: 1200px){
            font-size: 32px;
        }
        @media(min-width: 1201px) and (max-width: 1600px){
            font-size: 48px;
        }
        @media(min-width: 1601px){
            font-size: 56px;
        }
    }

    h4 {
        color: #000;
        font-family: "Banana Grotesk";
        font-style: normal;
        font-weight: 500;
        line-height: 135%; /* 75.6px */

        @media(max-width: 767px){
            font-size: 28px;
        }
        @media(min-width: 768px) and (max-width: 1200px){
            font-size: 32px;
        }
        @media(min-width: 1201px) and (max-width: 1600px){
            font-size: 40px;
        }
        @media(min-width: 1601px){
            font-size: 48px;
        }
    }

    h5 {
        color: #000;
        font-family: "Banana Grotesk";
        font-style: normal;
        font-weight: 500;
        line-height: 135%; /* 75.6px */

        @media(max-width: 767px){
            font-size: 24px;
        }
        @media(min-width: 768px) and (max-width: 1200px){
            font-size: 28px;
        }
        @media(min-width: 1201px) and (max-width: 1600px){
            font-size: 32px;
        }
        @media(min-width: 1601px){
            font-size: 40px;
        }
    }

    h6 {
        color: #000;
        font-family: "Banana Grotesk";
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 75.6px */

        @media(max-width: 767px){
            font-size: 20px;
        }
        @media(min-width: 768px) and (max-width: 1200px){
            font-size: 24px;
        }
        @media(min-width: 1201px) and (max-width: 1600px){
            font-size: 28px;
        }
        @media(min-width: 1601px){
            font-size: 32px;
        }
    }


    ul {
        margin: 0;
        padding: 0
    }

    li {
        list-style: none;
    }

    img {
        max-width: 100%;
        object-fit: contain;
    }


    .btn:focus, button:focus, button:active:focus, .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
        outline: none;
        box-shadow: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: 1px solid rgba(0, 0, 0, 0);
        -webkit-text-fill-color: #000;
        -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
        transition: background-color 5000s ease-in-out 0s;
    }


    table {
        width: 100%;
    }

    form div {
        position: relative;
    }


    .form-control {
        box-shadow: none;
        outline: 0;
        border-radius: 0;
       

        &:focus {
            box-shadow: none;
            border-top: 1px solid transparent !important;
        }
    }

    .p-0 {
        padding: 0 !important;
    }

    .pl-0 {
        padding-left: 0;
    }

    .pr-0 {
        padding-right: 0;
    }

    .pt-200 {
        padding-top: 200px;
        @media (max-width: 767px) {
            padding-top: 100px;
        }
    }

    .pb-200 {
        padding-bottom: 200px;
        @media (max-width: 767px) {
            padding-bottom: 100px;
        }
    }

    .pt-180 {
        padding-top: 180px;
        @media (max-width: 767px) {
            padding-top: 90px;
        }
    }

    .pb-180 {
        padding-bottom: 180px;
        @media (max-width: 767px) {
            padding-bottom: 90px;
        }
    }

    .pt-160 {
        padding-top: 160px;
        @media (max-width: 767px) {
            padding-top: 100px;
        }
    }

    .pb-160 {
        padding-bottom: 160px;
        @media (max-width: 767px) {
            padding-bottom: 100px;
        }
    }

    .pt-150 {
        padding-top: 150px;
        @media (max-width: 767px) {
            padding-top: 100px;
        }
    }

    .pb-150 {
        padding-bottom: 150px;
        @media (max-width: 767px) {
            padding-bottom: 100px;
        }
    }

    .pb-130 {
        padding-bottom: 130px;
        @media (max-width: 767px) {
            padding-bottom: 100px;
        }
    }

    .pt-120 {
        padding-top: 120px;
        @media (max-width: 767px) {
            padding-top: 60px;
        }
    }

    .pb-120 {
        padding-bottom: 120px;
        @media (max-width: 767px) {
            padding-bottom: 60px;
        }
    }

    .pt-100 {
        padding-top: 100px;
        @media (max-width: 767px) {
            padding-top: 60px;
        }
    }

    .pb-100 {
        padding-bottom: 100px;
        @media (max-width: 767px) {
            padding-bottom: 60px;
        }
    }

    .pt-80 {
        padding-top: 80px;
        @media (max-width: 767px) {
            padding-top: 40px;
        }
    }

    .pb-80 {
        padding-bottom: 80px;
        @media (max-width: 767px) {
            padding-bottom: 40px;
        }
    }

    .mt-20 {
        margin-top: 20px;
    }

    .mt-40 {
        margin-top: 40px;
    }

    .mt-60 {
        margin-top: 60px;
    }


    @media (min-width: 1500px) {
        .container {
            min-width: 85%;
            margin: auto;
        }
    }

    @media (max-width: 1199px) and (min-width: 768px) {
        .container, .container-lg, .container-md, .container-sm {
            max-width: 90%;
            margin: auto;
        }
    }


    @media (max-width: 767px) {
        .container, .container-sm {
            max-width: 100%;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }


    //react select
    .css-yk16xz-control, .css-1pahdxg-control {
        height: 50px;
        border-radius: 0 !important;
        padding-left: 5px;
        font-size: 16px;
        outline: none !important;
        border-color: #D9D9D9 !important;
        box-shadow: none !important;

        .css-1wa3eu0-placeholder {
            font-weight: 300;
            line-height: 21px;
            color: rgba(0, 0, 0, 0.5);
            outline: none;
        }

        .css-1okebmr-indicatorSeparator {
            display: none;
        }

        .css-tlfecz-indicatorContainer, .css-1gtu0rj-indicatorContainer {
            margin-right: 10px;
        }
    }

    .css-2613qy-menu {
        border-radius: 0 !important;
        margin-top: 0 !important;
    }


    .info-window {
        max-width: 200px;
    }

    .gm-style-iw {
        border-radius: 0 !important;
    }

    .swiper-pagination-bullet {
        outline: none;
    }

    .css-nmuc1a-menu {
        z-index: 5 !important;
    }


    .map-info__img {
        img {
            height: 100px;
            margin-bottom: 12px;
            object-fit: cover;
        }
    }

    .map-info__content {
        h4 {
            font-size: 20px;
        }

        p {
            margin-bottom: 5px;
        }
    }

    .overlay {
        position: fixed;
        height: 100vh;
        width: 100%;
        //background-color: rgba(0,0,0,0.5);
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
        display: none;

        &.show {
            display: block;
        }
    }

    .form-control.has-error {
        border-color: red !important;
        border-top: 1px solid transparent !important;
        border-left: 1px solid transparent !important;
        border-right: 1px solid transparent !important;

    }

    .has-error .find-retainer-filter__control {
        border-color: red !important;
    }

    //preloader
    .content-loader {
        position: absolute;
        height: 70%;
        width: 70%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .loading-before-submit {
        position: fixed;
        height: 100vh;
        width: 100%;
        bottom: 0;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.65);
        z-index: 9;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 40px;
        }
    }


    .swiper-slide {
        height: auto;
    }

    .slick-slide {
        div {
            outline: none !important
        }
    }

    button, button:active, button:focus, button:focus-visible {
        outline: none !important;
        box-shadow: none !important;
    }


    .hover {
        position: relative;
        overflow: hidden;

        span {
            z-index: 2;
        }

        &:after {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            left: 50%;
            top:50%;
            background-color: ${hover};
            transition: all .5s ease;
            border-radius: 50%;
            transform: translate(-50%,-50%) scale(0);
        }

        &:hover {
            &:after {
                transform:translate(-50%,-50%) scale(1.1); 
            }
        }
    }


    .modal-backdrop {
        background-color: rgb(34 31 31 / 90%);
        min-width: 100%;
        //z-index: 9999;

        &.show {
            opacity: 1;
        }
    }


    .valid {
        color: ${hover};
        position: absolute;
        font-size: 12px;
        top: 44px;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }


    .form-control:disabled {
        background-color: transparent;
    }

    @media (max-width: 600px) {
        .prevent-overflow {
            overflow: hidden;
            height: 100vh;
        }
    }

    .Toastify__toast-container {
        z-index: 99999999;
    }

    .mobile-menu {
        #fb-root, .fb_reset {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
        }
    }

    .slick-slide {
        -webkit-transform: translate3d(0, 0, 0);
    }


    //------------------------animation
    .split-parent {
        overflow: hidden;
    }

    .split-child {
        overflow: hidden;
    }

    .reveal {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        img {
            transform-origin: left;
        }

        .global-image {
            background: transparent;
        }
    }

    .mobile-menu {
        #fb-root, .fb_reset {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
        }
    }

    #smooth-content {
        will-change: transform;
    }

    .page-transition {
        display: none;
    }

    form {
        h4 {
            margin: 0 0 5px 0;
        }

        .form-control {
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            background-color: transparent !important;
            outline: none;
            box-shadow: none;

            border: 1px solid ${White} !important;
            color: ${Black} !important;
            padding: 0;
            padding-left: 10px;
            margin-bottom: 20px;

            border-top: 1px solid transparent !important;
            border-left: 1px solid transparent !important;
            border-right: 1px solid transparent !important;


            &::placeholder {
                color: #999999;
            }

            &:focus {
                border-top: 1px solid transparent !important;
                border-left: 1px solid transparent !important;
                border-right: 1px solid transparent !important;
                border-bottom: 2px solid ${Black} !important;
            }
        }

        .form-group {
            position: relative;
            background: ${White};

            p {
                position: absolute;
                bottom: -20px;
                color: rgb(255 133 133 / 50%);
                font-size: 12px;
            }
        }

        textarea {
            background: ${White};
            border: unset;
            width: 100%;
            border-bottom: 1px solid #162213;
            min-height: 200px;
            max-height: 350px;

            &::placeholder {
                color: rgba(71, 82, 99, 0.5) !important;

                /* Body */
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 120%; /* 21.6px */
                text-transform: capitalize;
            }


            &:focus-visible {
                outline: none;
            }
        }

        .form-col{
            display: flex ;
            width: 100%;
            justify-content: space-between;
            .from-group{
                width: calc(50% - 20px);
            }
        }
    }

    .modify-footer .footer {
        @media (min-width: 600px) {
            padding-top: 200px;
        }
    }

    //global form
    .global-popup form .form-control {
        border-bottom: 1px solid rgba(10, 14, 18, 0.3);
        color: ${Black};
        padding: 0 0 15px 0;
        margin-bottom: 30px;

        &::placeholder {
            color: #999999 !important;
            text-transform: capitalize;
        }

        &:focus {
            border-bottom: 1px solid ${Black};
        }
    }

    .services {
        background-color: ${Black};

        .working, .insights {
            padding-top: 0;
        }

        .amenities {
            @media (max-width: 992px) {
                padding-top: 0;
            }
        }
    }

    .career-detail {
        background-color: ${Black};
        padding-top: 140px;
        padding-bottom: 150px;
        overflow: hidden;
    }

    .team-bio {
        background-color: ${Black};
        padding-top: 140px;
    }

    .stop-scroll {
        overflow: hidden;
    }





    //custom cursor
    .cursor {
        z-index: 99999999999999 !important;
    }

    .cursor:before {
        background-color: transparent;

    }

    .cursor.-text {
        font-size: 12px !important;
    }

    #cursor-text {
        font-size: 0.75vw;
    }

    .cursor.-text:before {
        opacity: 1 !important;
        backdrop-filter: blur(2px);
        background-color: rgba(71, 102, 59, 0.8);
    }


    //toast style

    .Toastify__toast-container {
        z-index: 99999999 !important;
    }

    .Toastify__progress-bar--error {
        background: #E6E6E6;
        z-index: 9999999999 !important;
    }

    .Toastify__progress-bar--success {
        background: ${Green};
        z-index: 9999999999 !important;
    }

    .Toastify__toast-icon {
        z-index: 9999999999 !important;

        svg {
            fill: ${Green};
        }
    }

    .Toastify {
        z-index: 9999999999 !important;
    }

    #main-wrapper {
        opacity: 0;
    }


    //video modal
    .modal-video {
        background-color: transparent;
        height: 100vh;
        z-index: 99999;

        .modal-dialog {
            height: 100vh;
            background-color: transparent;
            min-width: 100%;
            margin: 0;
        }

        .modal-body {
            height: 100vh;
        }

        .modal-content {
            background-color: transparent;

        }

        iframe {
            height: 85vh;
            width: 70vw;
            margin: auto;
            position: absolute;
            inset: 0;
        }

        .close-modal {
            position: absolute;
            top: 40px;
            right: 30px;
            height: 30px;
            cursor: pointer;
            z-index: 99;
        }

        @media (max-width: 768px) {
            .modal-content {
                //padding: 0 20px;

                iframe {
                    width: 90vw;
                    height: 60vh;
                }

                .close-modal {
                    top: 80px;
                    right: 20px;
                }
            }
        }
        @media (max-width: 550px) {
            .modal-content iframe {
                width: 90vw;
                height: 40vh;
            }
        }
    }
    
    .mb-150{
        margin-bottom: 150px;
        @media (max-width: 767px) {
            margin-bottom: 80px;            
        }
    }


  .no-scroll{
      overflow: hidden;
  }

    //menu fixed


    //menu fixed
    .scroll-down .menu-bar {
        transform: translate3d(0, -105%, 0);
    }
    
    .scroll-up .menu-bar {
        box-shadow: 0px -7px 27px 3px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0px -7px 27px 3px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px -7px 27px 3px rgba(0, 0, 0, 0.3);
    }
    
    .mb-reverse{
        @media(max-width: 767px){
            flex-direction: column-reverse;
        }
    }

    


`;



