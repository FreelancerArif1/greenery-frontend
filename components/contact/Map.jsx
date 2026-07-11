'use client';

import React from 'react';
import styled from 'styled-components';

const GoogleMap = () => {
  return (
    <MapWrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233330.7004229091!2d90.14851865834102!3d23.96778740569689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c500352c3d9f%3A0x17a7a429602aabba!2sGreenery%20Energy%20Solution%20LTD!5e0!3m2!1sen!2sbd!4v1782552028116!5m2!1sen!2sbd"
        width="100%"
        height="370"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Greenery Energy Solution LTD Location"
      />
    </MapWrapper>
  );
};

const MapWrapper = styled.div`
  // width: 100%;
  // height: 500px;
  // overflow: hidden;
  // border-radius: 20px;

  // iframe {
  //   width: 100%;
  //   height: 100%;
  //   display: block;
  // }

  // @media (max-width: 768px) {
  //   height: 350px;
  //   border-radius: 12px;
  // }
`;

export default GoogleMap;