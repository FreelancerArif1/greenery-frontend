'use client'
import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import {White, Green, Black} from "@/styles/globalStyleVars";
import Title from "@/components/common/Title/Title";
import MainButton from "@/components/common/Buttons/MainButton";
import NavigationButton from "@/components/common/Buttons/NavigationButton";

const MyComponent = ({ }) => {

    return (
        <StyledMyComponent className={'pt-200 pb-60'}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1 className={'heading'}>A quick brown fox jumps over a lazy dog</h1>
                        <h1 className={'heading'} style={{fontWeight: 400}}>A quick brown fox jumps over a lazy dog</h1>
                        <h1>A quick brown fox jumps over a lazy dog</h1>
                        <h1 style={{fontWeight: 400}}>A quick brown fox jumps over a lazy dog</h1>
                        <h2 className={'sub-heading'}>A quick brown fox jumps over a lazy dog</h2>
                        <h2 className={'sub-heading'} style={{fontWeight: 400}}>A quick brown fox jumps over a lazy
                            dog</h2>
                        <h2>A quick brown fox jumps over a lazy dog</h2>
                        <h2 style={{fontWeight: 400}}>A quick brown fox jumps over a lazy dog</h2>
                        <h3>A quick brown fox jumps over a lazy dog</h3>
                        <h4>A quick brown fox jumps over a lazy dog</h4>
                        <h5>A quick brown fox jumps over a lazy dog</h5>
                        <h6>A quick brown fox jumps over a lazy dog</h6>
                        <p>A quick brown fox jumps over a lazy dog</p>
                    </Col>
                    <Col md={9}>
                        <Title text={'Accelerating clean energy adoption across Bangladesh'}/>
                        <p>GreeneryES, a clean-technology company under the Livenza Group, connects global innovation with local execution. Through exclusive distribution rights, certified engineering teams, and a nationwide service network, we deliver efficient, reliable, and sustainable clean-energy solutions for every sector.</p>
                        <MainButton noAnim
                                    margin={'40px 0 40px 0'}
                                    text={"Learn More"}
                                    externalSrc={'https://global.andersen.com/'}
                                    background={Green}
                                    hoverBackground={Black}
                                    color={White}
                                    hoverColor={White}
                        />

                        <MainButton noAnim
                                    margin={'40px 0 40px 0'}
                                    text={"Learn More"}
                                    externalSrc={'https://global.andersen.com/'}
                                    background={White}
                                    hoverBackground={Green}
                                    color={Green}
                                    hoverColor={White}
                        />
                        <NavigationButton
                            bgcolor={'transparent'}
                            hoverbg={Green}

                        />
                    </Col>
                </Row>
            </Container>
        </StyledMyComponent>
    )
};

const StyledMyComponent = styled.section`


    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 25px;
        color: ${Black};
    }
  
`;


export default MyComponent;














