'use client';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import ScrollCounterMobile from '@/components/common/ScrollCounterMobile';
import ScrollCounter from '@/components/common/ScrollCounter';
import ScrollCounterUpdated from '@/components/common/ScrollCounterUpdated';

export default function CounterWrapper({data}) {

  const [isWideScreen, setIsWideScreen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {

    const checkScreenSize = () => {
      setIsWideScreen(window.innerWidth > 991);
    };

    // Set initial screen size
    checkScreenSize();

    // Update screen size on resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [pathname,data]);
  return(
    <StyledComponent>
      <Container>
        {
          isWideScreen ?
            // <ScrollCounter data={data}/>
            <ScrollCounterUpdated data={data}/>
            :
            <ScrollCounterMobile data={data}/>
        }
      </Container>
    </StyledComponent>
  )
}

const StyledComponent = styled.section`

`;