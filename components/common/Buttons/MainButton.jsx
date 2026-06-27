"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Black, hover, Transition } from "@/styles/globalStyleVars";
import arrow from "@/public/images/static/arrow-right.svg";
import Image from "next/image";

const MainButton = ({
                    onSubmit,
                    text,
                    src,
                    img,
                    hoverImg,
                    fontSize,
                    fontWeight,
                    color,
                    letterSpacing,
                    lineHeight,
                    margin,
                    background,
                    borderRadius,
                    border,
                    width,
                    height,
                    hoverBackground,
                    target,
                    borderColor,
                    hoverColor,
                    icon,
                    marginSm,
                    onClick,
                    className,
                    noAnim,externalSrc
                }) => {
    return (
        <StyledBtn
            onClick={onClick}
            className={`${className ? className : null} dc-btn ${
                !noAnim ? "" : ""
            }`}
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
            background={background}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            margin={margin}
            border={border}
            img={img}
            borderRadius={borderRadius}
            width={width}
            hoverImg={hoverImg}
            hoverBackground={hoverBackground}
            height={height}
            borderColor={borderColor}
            target={target}
            hoverColor={hoverColor}
            onSubmit={onSubmit}
            icon={icon}
            marginSm={marginSm}

        >
            <Link href={src ? src : externalSrc ?externalSrc :''} prefetch={true} target={externalSrc ? "_blank":''}>
                <span>{text ? text : "Learn More"}</span>
                <span>{text ? text : "Learn More"}</span>
            </Link>
        </StyledBtn>
    );
};

const StyledBtn = styled.div`
    overflow: hidden;
    margin: ${(p) => p.margin || 0};
    width: ${props => props.width || 'max-content'};
    height: ${props => props.height || '44'}px;
    a {
        padding: 10px 30px;
        height: 44px;
        display: block;
        width: fit-content;
        background-color: ${(p) => p.background || "#285E2F"};
        color: ${(p) => p.color || "#ffffff"};
        border-radius: 10px;
        font-weight: ${props => props.fontWeight || '400'};
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${props => props.fontSize || '16'}px !important;
        font-weight: ${props => props.fontWeight || 400} !important;
        font-family: "Inter" !important;
        line-height: ${props => props.lineHeight || '24'}px !important;

        /* flex-wrap: wrap; */
        position: relative;
        transition: background-color 0.5s ease;
        border: ${(p) => p.border || "none"};
        svg {
            margin-left: 10px;
            line {
                stroke: ${(p) => p.color || "#FFF"};
            }
        }
        span {
            display: flex;
            overflow: hidden;
            width: max-content;
            height: 100%;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease;
            color: ${(p) => p.color || "#ffffff"};
            font-family: "Banana Grotesk" !important;

            &:nth-child(2) {
                position: absolute;
                transform: translateY(100%);
                width: 100%;
                left: 0;
                right: 0;
            }
        }
        &:hover {
            color: ${(p) => p.hoverColor || "#FFF"} !important;
            background: ${props => props.hoverBackground ? props.hoverBackground : hover};
            border: ${(p) => p.border || "none"};
            svg line {
                stroke: ${(p) => p.hoverColor || "#FFF"};
            }
            span {
                color: ${(p) => p.hoverColor || "#ffffff"};

                &:nth-child(1) {
                    transform: translateY(-130%);
                }
                &:nth-child(2) {
                    transform: none;
                }
            }
        }
    }

    @media (max-width: 768px) {
    }
`;

export default MainButton;
