import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {gsap, TimelineLite} from "gsap";
import {hover} from "@/styles/globalStyleVars";
import {usePathname} from "next/navigation";


const Message = ({offset}) => {

    let tl = new TimelineLite();
    let tl2 = new TimelineLite();
    const searchClickRef = useRef()

    const location = usePathname();
    const isDesktop = typeof window !== 'undefined' && window.innerWidth > 991;
    useEffect(() => {
        // Set initial properties
        if (isDesktop) {

            gsap.set('.reveal-up-inner-sticky', {y: '50%'});

            // Animation
            gsap.fromTo(
              '.reveal-up-inner-sticky',
              {y: '50%'},
              {
                  delay: 1.5,
                  y: '0',
                  duration: 1.5, // Adjust the duration as needed
                  ease: 'power3.out', // Experiment with different easing functions
              }
            );
        }
    }, [location])

    // on click search input toggle action --  desktop menu
    useEffect(() => {
        searchClickRef.current.addEventListener('click', (e) => {
            // disableScroll.off()
            if (searchClickRef.current.classList.contains('social-open')) {

                tl.to('.social_list', {
                    duration: .4,
                    height: 0,
                    opacity: 1
                }).to('.social_list', {
                    padding: 0,
                }, '-=.4').to('.social_list', {
                    display: 'none'
                }, '-=.3')
                searchClickRef.current.classList.remove('social-open')
                // document.body.style.overflow = "inherit"

            } else {
                // disableScroll.on();
                tl.to('.social_list', {
                    display: 'block'
                }).to('.social_list', {
                    duration: .4,
                    height: 'auto',
                    opacity: 1
                }, '-=.2').to('.social_list', {
                    padding: '0',
                }, '-=.4')
                searchClickRef.current.classList.add('social-open')
                // document.body.style.overflow = "hidden"
            }

        })

    }, []);


    // disableScroll.on()

    return (
      <StyledMessage offset={offset} className={`sticky-message-right reveal-up-inner-sticky`}
      >
          <div className={'message_wrapper'}>
              <ul className={'social_list'}>
                  <li>
                      <a href="https://wa.me/+8809639272106" target={"_blank"}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                              <g id="Group_19685" data-name="Group 19685" transform="translate(0.309 0.309)">
                                  <circle id="Ellipse_335" data-name="Ellipse 335" cx="25" cy="25" r="25"
                                          transform="translate(-0.309 -0.309)" fill="#64b161"/>
                                  <path id="Path_7666" data-name="Path 7666"
                                        d="M16.9,2.847A9.708,9.708,0,0,0,1.627,14.558L.25,19.588,5.4,18.238a9.7,9.7,0,0,0,4.638,1.181h0A9.71,9.71,0,0,0,16.9,2.847ZM10.038,17.78h0a8.057,8.057,0,0,1-4.106-1.125l-.294-.175-3.053.8L3.4,14.3,3.2,14a8.067,8.067,0,1,1,6.834,3.781Zm4.425-6.042c-.242-.121-1.435-.708-1.657-.789s-.384-.121-.546.121-.626.789-.768.951-.283.182-.525.061a6.624,6.624,0,0,1-1.95-1.2A7.316,7.316,0,0,1,7.667,9.2c-.141-.243,0-.362.106-.495a6.861,6.861,0,0,0,.606-.83.446.446,0,0,0-.02-.425c-.06-.121-.546-1.315-.748-1.8s-.4-.409-.546-.416-.3-.008-.465-.008a.891.891,0,0,0-.647.3A2.72,2.72,0,0,0,5.106,7.55a4.718,4.718,0,0,0,.99,2.509,10.811,10.811,0,0,0,4.143,3.662,13.882,13.882,0,0,0,1.383.511,3.325,3.325,0,0,0,1.528.1,2.5,2.5,0,0,0,1.637-1.153,2.026,2.026,0,0,0,.141-1.153C14.867,11.92,14.705,11.859,14.463,11.738Zm0,0"
                                        transform="translate(14.741 14.897)" fill="#fff" fill-rule="evenodd"/>
                              </g>
                          </svg>
                      </a>
                  </li>
                  <li>
                      <a href="https://www.facebook.com/messages/t/1791482657760579" target={"_blank"}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                              <g id="Group_19686" data-name="Group 19686" transform="translate(0.309 0.309)">
                                  <circle id="Ellipse_334" data-name="Ellipse 334" cx="25" cy="25" r="25"
                                          transform="translate(-0.309 -0.309)" fill="#3384ff"/>
                                  <g id="icon" transform="translate(14.897 15.05)">
                                      <path id="Path_7662" data-name="Path 7662"
                                            d="M52.588,44.069c0,5.009-4.386,9.069-9.794,9.069a10.547,10.547,0,0,1-2.81-.379l-3.335,1.829V51.129A8.806,8.806,0,0,1,33,44.069C33,39.06,37.386,35,42.794,35S52.588,39.062,52.588,44.069Z"
                                            transform="translate(-33 -35)" fill="#fff"/>
                                      <path id="Path_7663" data-name="Path 7663"
                                            d="M64.844,71.67,59.49,77.35,57,74.692l-4.867,2.66,5.355-5.682,2.555,2.659Z"
                                            transform="translate(-48.724 -65.14)" fill="#3384ff"/>
                                  </g>
                              </g>
                          </svg>
                      </a>
                  </li>
              </ul>
              <div id={'click_message'} ref={searchClickRef} className="social_bar">

                  <svg className={'hover_bar'} id="Chat_Button" data-name="Chat MainButton" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                      <g id="Group_19685" data-name="Group 19685" transform="translate(20.309 20.309)">
                          <circle id="Ellipse_335" data-name="Ellipse 335" cx="15" cy="15" r="15" transform="translate(-0.309 -0.309)" fill="#47663B"/>
                          <path id="Path_7666" data-name="Path 7666" d="M10.242,1.708A5.825,5.825,0,0,0,1.076,8.735L.25,11.753l3.087-.81a5.817,5.817,0,0,0,2.783.709h0a5.826,5.826,0,0,0,4.119-9.944Zm-4.12,8.96h0a4.834,4.834,0,0,1-2.464-.675l-.177-.1-1.832.481.489-1.786L2.022,8.4a4.84,4.84,0,1,1,4.1,2.268ZM8.778,7.043c-.145-.073-.861-.425-.994-.473s-.23-.073-.327.073-.376.473-.461.57-.17.109-.315.036a3.975,3.975,0,0,1-1.17-.722A4.389,4.389,0,0,1,4.7,5.519c-.085-.146,0-.217.064-.3a4.116,4.116,0,0,0,.364-.5.268.268,0,0,0-.012-.255c-.036-.073-.327-.789-.449-1.08s-.238-.245-.327-.25-.182-.005-.279-.005a.534.534,0,0,0-.388.182A1.632,1.632,0,0,0,3.163,4.53a2.831,2.831,0,0,0,.594,1.505,6.486,6.486,0,0,0,2.486,2.2,8.329,8.329,0,0,0,.83.307A2,2,0,0,0,7.99,8.6,1.5,1.5,0,0,0,8.972,7.9a1.216,1.216,0,0,0,.085-.692C9.02,7.152,8.923,7.116,8.778,7.043Zm0,0" transform="translate(8.621 8.814)" fill="#fff" fill-rule="evenodd"/>
                      </g>
                      <g id="Group_19686" data-name="Group 19686" transform="translate(20.309 20.309)">
                          <circle id="Ellipse_334" data-name="Ellipse 334" cx="15" cy="15" r="15" transform="translate(-0.309 -0.309)" fill="#47663B"/>
                          <g id="icon" transform="translate(8.814 8.907)">
                              <path id="Path_7662" data-name="Path 7662" d="M44.753,40.441a5.672,5.672,0,0,1-5.876,5.441,6.328,6.328,0,0,1-1.686-.228l-2,1.1V44.678A5.283,5.283,0,0,1,33,40.441,5.672,5.672,0,0,1,38.876,35,5.672,5.672,0,0,1,44.753,40.441Z" transform="translate(-33 -35)" fill="#fff"/>
                              <path id="Path_7663" data-name="Path 7663" d="M59.758,71.67l-3.213,3.408-1.5-1.6-2.92,1.6,3.213-3.409,1.533,1.6Z" transform="translate(-50.086 -67.752)" fill="#3384ff"/>
                          </g>
                      </g>
                      <circle id="animation" cx="35" cy="35" r="35" fill="#47663B"/>
                      <circle id="Ellipse_4" data-name="Ellipse 4" cx="25" cy="25" r="25" transform="translate(10 10)" fill="#47663B"/>
                      <g id="Group_19676" data-name="Group 19676" transform="translate(25 21.146)">
                          <g id="Group_19677" data-name="Group 19677" transform="translate(0 4.011)">
                              <g id="Group_19676-2" data-name="Group 19676" transform="translate(0 0)">
                                  <path id="Path_7658" data-name="Path 7658" d="M19.928,19.551l-1.162-3.381A8.457,8.457,0,0,0,11.313,4.012a8.448,8.448,0,0,0-8.584,8.337A6.156,6.156,0,0,0,.861,19.912l-.8,2.328A1.1,1.1,0,0,0,1.1,23.7a1.107,1.107,0,0,0,.36-.061l2.328-.8a6.182,6.182,0,0,0,2.632.594h.01A6.147,6.147,0,0,0,11.4,20.9a8.474,8.474,0,0,0,3.491-.855l3.381,1.162a1.316,1.316,0,0,0,.428.072,1.307,1.307,0,0,0,1.231-1.731Zm-13.5,2.689H6.419a4.979,4.979,0,0,1-2.312-.574.6.6,0,0,0-.472-.037l-2.388.82.82-2.388a.6.6,0,0,0-.037-.472,4.963,4.963,0,0,1,.809-5.755,8.48,8.48,0,0,0,7.069,6.976A4.951,4.951,0,0,1,6.427,22.241Zm12.348-2.183a.108.108,0,0,1-.119.028l-3.619-1.244a.6.6,0,0,0-.472.037,7.271,7.271,0,0,1-3.377.838h-.011a7.286,7.286,0,0,1-7.257-7.14A7.258,7.258,0,0,1,11.294,5.2a7.259,7.259,0,0,1,6.3,10.645.6.6,0,0,0-.037.472L18.8,19.938A.108.108,0,0,1,18.774,20.057Z" transform="translate(0 -4.011)" fill="#fff"/>
                              </g>
                          </g>
                          <g id="Group_19679" data-name="Group 19679" transform="translate(7.035 9.304)">
                              <g id="Group_19678" data-name="Group 19678">
                                  <path id="Path_7659" data-name="Path 7659" d="M187.781,139.512h-7.092a.6.6,0,1,0,0,1.19h7.092a.6.6,0,0,0,0-1.19Z" transform="translate(-180.094 -139.512)" fill="#fff"/>
                              </g>
                          </g>
                          <g id="Group_19681" data-name="Group 19681" transform="translate(7.035 11.752)">
                              <g id="Group_19680" data-name="Group 19680" transform="translate(0 0)">
                                  <path id="Path_7660" data-name="Path 7660" d="M187.781,202.183h-7.092a.6.6,0,1,0,0,1.19h7.092a.6.6,0,0,0,0-1.19Z" transform="translate(-180.094 -202.183)" fill="#fff"/>
                              </g>
                          </g>
                          <g id="Group_19683" data-name="Group 19683" transform="translate(7.035 14.2)">
                              <g id="Group_19682" data-name="Group 19682">
                                  <path id="Path_7661" data-name="Path 7661" d="M185.05,264.852h-4.362a.6.6,0,1,0,0,1.19h4.362a.6.6,0,0,0,0-1.19Z" transform="translate(-180.093 -264.852)" fill="#fff"/>
                              </g>
                          </g>
                      </g>
                  </svg>



                  <svg className={'closee'} xmlns="http://www.w3.org/2000/svg"
                       xmlnsZxlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 50 50">
                      <defs>
                          <clipPath id="clip-path-1">
                              <circle id="Ellipse_333" data-name="Ellipse 333" cx="25" cy="25" r="25"
                                      transform="translate(-1051 1408)" fill="#47663B"/>
                          </clipPath>
                      </defs>
                      <g id="Mask_Group_132" data-name="Mask Group 132" transform="translate(1051 -1408)"
                         clip-path="url(#clip-path-1)">
                          <circle id="Ellipse_4" data-name="Ellipse 4" cx="25" cy="25" r="25"
                                  transform="translate(-1051 1408)" fill="#47663B"/>
                          <g id="Group_19676" data-name="Group 19676" transform="translate(-1036 1378.146)">
                              <g id="Group_19677" data-name="Group 19677" transform="translate(0 4.011)">
                                  <g id="Group_19676-2" data-name="Group 19676" transform="translate(0 0)">
                                      <path id="Path_7658" data-name="Path 7658"
                                            d="M19.928,19.551l-1.162-3.381A8.457,8.457,0,0,0,11.313,4.012a8.448,8.448,0,0,0-8.584,8.337A6.156,6.156,0,0,0,.861,19.912l-.8,2.328A1.1,1.1,0,0,0,1.1,23.7a1.107,1.107,0,0,0,.36-.061l2.328-.8a6.182,6.182,0,0,0,2.632.594h.01A6.147,6.147,0,0,0,11.4,20.9a8.474,8.474,0,0,0,3.491-.855l3.381,1.162a1.316,1.316,0,0,0,.428.072,1.307,1.307,0,0,0,1.231-1.731Zm-13.5,2.689H6.419a4.979,4.979,0,0,1-2.312-.574.6.6,0,0,0-.472-.037l-2.388.82.82-2.388a.6.6,0,0,0-.037-.472,4.963,4.963,0,0,1,.809-5.755,8.48,8.48,0,0,0,7.069,6.976A4.951,4.951,0,0,1,6.427,22.241Zm12.348-2.183a.108.108,0,0,1-.119.028l-3.619-1.244a.6.6,0,0,0-.472.037,7.271,7.271,0,0,1-3.377.838h-.011a7.286,7.286,0,0,1-7.257-7.14A7.258,7.258,0,0,1,11.294,5.2a7.259,7.259,0,0,1,6.3,10.645.6.6,0,0,0-.037.472L18.8,19.938A.108.108,0,0,1,18.774,20.057Z"
                                            transform="translate(0 -4.011)" fill="#fff"/>
                                  </g>
                              </g>
                              <g id="Group_19679" data-name="Group 19679" transform="translate(7.035 9.304)">
                                  <g id="Group_19678" data-name="Group 19678">
                                      <path id="Path_7659" data-name="Path 7659"
                                            d="M187.781,139.512h-7.092a.6.6,0,1,0,0,1.19h7.092a.6.6,0,0,0,0-1.19Z"
                                            transform="translate(-180.094 -139.512)" fill="#fff"/>
                                  </g>
                              </g>
                              <g id="Group_19681" data-name="Group 19681" transform="translate(7.035 11.752)">
                                  <g id="Group_19680" data-name="Group 19680" transform="translate(0 0)">
                                      <path id="Path_7660" data-name="Path 7660"
                                            d="M187.781,202.183h-7.092a.6.6,0,1,0,0,1.19h7.092a.6.6,0,0,0,0-1.19Z"
                                            transform="translate(-180.094 -202.183)" fill="#fff"/>
                                  </g>
                              </g>
                              <g id="Group_19683" data-name="Group 19683" transform="translate(7.035 14.2)">
                                  <g id="Group_19682" data-name="Group 19682">
                                      <path id="Path_7661" data-name="Path 7661"
                                            d="M185.05,264.852h-4.362a.6.6,0,1,0,0,1.19h4.362a.6.6,0,0,0,0-1.19Z"
                                            transform="translate(-180.093 -264.852)" fill="#fff"/>
                                  </g>
                              </g>
                          </g>
                          <g id="Group_19684" data-name="Group 19684" transform="translate(-2164.5 1297.5)">
                              <line id="Line_3598" data-name="Line 3598" x2="16.971"
                                    transform="translate(1132.5 141.5) rotate(-45)" fill="none" stroke="#fff"
                                    stroke-linecap="round" stroke-width="2"/>
                              <line id="Line_3599" data-name="Line 3599" x2="16.971"
                                    transform="translate(1132.5 129.5) rotate(45)" fill="none" stroke="#fff"
                                    stroke-linecap="round" stroke-width="2"/>
                          </g>
                      </g>
                  </svg>


              </div>

          </div>
      </StyledMessage>

    )
};


const StyledMessage = styled.div`

  &.sticky-message-right {
    position: fixed;
    right: 0;
    bottom: 30px;
    z-index: 990;
    padding: 0 50px;

    @keyframes blink {
      0% {
        r: 10;
      }
      50% {
        r: 45
      }
      100% {
        opacity: 0;
      }
    }
    #animation {
      stroke:#47663B;
      animation: blink 2.5s infinite;
    }

    .message_wrapper {
      cursor: pointer;
      svg{
        border-radius: 50px;
      }
      .social_bar {
        .hover_bar {
          visibility: visible;
          opacity: 1;
          transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
          display: block;
        }

        .closee {
          visibility: hidden;
          opacity: 0;
          transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
          display: none;
          margin: 10px 10px;
        }

        &.social-open {
          .closee {
            visibility: visible;
            opacity: 1;
            transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);

            display: block;
          }

          .hover_bar {
            visibility: hidden;
            opacity: 0;
            transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
            display: none;

          }

        }
      }
    }

    .social_list {
      position: relative;
      height: 0;
      z-index: 0;
      overflow: hidden;
      bottom: 0;
      li{
        display: flex;
        justify-content: center;
      }
    }

    ul {
      li {
        margin-bottom: 10px;
      }
    }

    @media (max-width: 767px) {
      right: 0;
      left: unset;
      bottom: 40px;
      padding: 0 15px;
    }
  }

`;


export default Message;