import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Transition,hover} from "../../../styles/globalStyleVars";

const NavigationIcon = ({next_id, prev_id, color, isbeginning, isend, bgcolor, hoverbg, disablebg, hovercolor,onNextClick,onPrevClick}) => {


    return (
        <StyledNavigationIcon className={"navigation_button"} hovercolor={hovercolor} bgcolor={bgcolor}
                              hoverbg={hoverbg} disablebg={disablebg}>
            <ul>
                <li
                    className={`hover_left hover ${isbeginning ? 'disabled' : ''}`}
                    id={next_id ? next_id : "service-prev"}
                    onClick={!isbeginning ? onNextClick : undefined}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                        <path d="M7.46386 13.9277L0.999999 7.46388L7.46386 1.00002"
                              stroke={color ? color : '#2E2E2E'}
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </li>
                <li
                    className={`hover_right hover ${isend ? 'disabled' : ''}`}
                    id={prev_id ? prev_id : "service-next"}
                    onClick={!isend ? onPrevClick : undefined}  //
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                        <path stroke={color ? color : '#2E2E2E'} d="M1.00001 13.9277L7.46387 7.46388L1.00001 1.00002" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </li>
            </ul>
        </StyledNavigationIcon>
    );
};

const StyledNavigationIcon = styled.div`
    position: relative;
    z-index: 10;
    display: inline-flex;
    //padding: 10px;

    ul {
        display: flex;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 40px;
            height: 40px;
            background-color: ${props => props.bgcolor || "transparent"};
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            border: 1px solid #2E2E2E;
            transition: 0.5s ${Transition} border;
            &:nth-of-type(1) {
                margin-right: 10px;
            }

            &:hover {
                border: 1px solid #285E2F;
                svg {
                    path {
                        stroke: ${props => props.hovercolor || "#F8F0E8"};
                        transition: 0.5s ${Transition} stroke;
                    }
                }
            }

            svg {
                position: relative;
                z-index: 3;

                path {
                    transition: 0.5s ${Transition} stroke;
                }
            }


            &.disabled {
                opacity: 0.5;
                cursor: not-allowed;
                background-color: ${props => props.disablebg || "#F8F8F9"};

                svg {
                    path {
                        stroke: #394854;
                    }
                }

                &:hover {
                    &:after {
                        display: none;
                    }
                }
            }

            &.swiper-button-disabled {
                opacity: 0.5;
            }
        }
    }

    @media (max-width: 767px) {
        .hover {
            &:after {
                content: unset !important;
            }
        }


        li {
            width: 40px !important;
            height: 40px !important;
            &:hover {
                svg path {
                    stroke: ${hover} !important;
                }
            }
        }
    }
`;

export default React.memo(NavigationIcon);
