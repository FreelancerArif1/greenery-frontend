'use client'
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Title from '@/components/common/Title/Title';

// Bangladesh divisions data with coordinates
const divisionsData = [
  {
    name: 'Dhaka',
    position: [23.8103, 90.4125],
    dealers: 150,
  },
  {
    name: 'Chittagong',
    position: [22.3569, 91.7832],
    dealers: 150,
  },
  {
    name: 'Rajshahi',
    position: [24.3745, 88.6042],
    dealers: 250,
  },
  {
    name: 'Khulna',
    position: [22.8456, 89.5403],
    dealers: 100,
  },
  {
    name: 'Sylhet',
    position: [24.8949, 91.8687],
    dealers: 200,
  },
  {
    name: 'Barisal',
    position: [22.7010, 90.3535],
    dealers: 100,
  },
  {
    name: 'Rangpur',
    position: [25.7439, 89.2752],
    dealers: 150,
  },
  {
    name: 'Mymensingh',
    position: [24.7471, 90.4203],
    dealers: 50,
  }
];

const BangladeshDivisionMap = () => {
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !leafletMapRef.current) {
      // Load Leaflet dynamically
      const loadLeaflet = async () => {
        if (!window.L) {
          // Load Leaflet CSS
          const cssLink = document.createElement('link');
          cssLink.rel = 'stylesheet';
          cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          document.head.appendChild(cssLink);

          // Load Leaflet JS
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
          script.onload = initializeMap;
          document.head.appendChild(script);
        } else {
          initializeMap();
        }
      };

      const initializeMap = () => {
        if (!leafletMapRef.current && window.L) {
          // Initialize the map
          const map = window.L.map(mapRef.current, {
            scrollWheelZoom: false,
            zoomControl: true,
          }).setView([23.8, 90.3563], 8);

          // Add tile layer without labels (using CartoDB Positron which has minimal text)
          window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          }).addTo(map);

          // Load Bangladesh GeoJSON for accurate borders
          fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
            .then(response => response.json())
            .then(data => {
              // Find Bangladesh in the GeoJSON data
              const bangladesh = data.features.find(
                feature => feature.properties.ADMIN === 'Bangladesh' ||
                          feature.properties.name === 'Bangladesh' ||
                          feature.properties.ISO_A3 === 'BGD'
              );

              if (bangladesh) {
                // Add Bangladesh with custom styling
                window.L.geoJSON(bangladesh, {
                  style: {
                    color: '#A8D5BA',        // Lighter green border
                    weight: 2,               // Border width
                    opacity: 0.8,            // Border opacity
                    fillColor: '#D4E8DC',    // Very light green fill
                    fillOpacity: 0.25        // Semi-transparent fill
                  }
                }).addTo(map);
              }
            })
            .catch(() => {
              console.log('Could not load GeoJSON, using fallback polygon');
              // Fallback: Simple polygon if GeoJSON fails to load
              const bangladeshBorder = [
                [26.6317, 88.0844], [26.5812, 88.3344], [26.4468, 88.5844],
                [26.3124, 88.8344], [26.1780, 89.0844], [26.0436, 89.3344],
                [25.9092, 89.5844], [25.7748, 89.8344], [25.6404, 90.0844],
                [25.5060, 90.3344], [25.3716, 90.5844], [25.2372, 90.8344],
                [25.1028, 91.0844], [24.9684, 91.3344], [24.8340, 91.5844],
                [24.6996, 91.8344], [24.5652, 92.0844], [24.4308, 92.3344],
                [24.2964, 92.5844], [24.0000, 92.6717], [23.7036, 92.6717],
                [23.4072, 92.6717], [23.1108, 92.6717], [22.8144, 92.6717],
                [22.5180, 92.6717], [22.2216, 92.5500], [21.9252, 92.3500],
                [21.7500, 92.1500], [21.6288, 91.9500], [21.5500, 91.7500],
                [21.5076, 91.5500], [21.4820, 91.3500], [21.4564, 91.1500],
                [21.4308, 90.9500], [21.4052, 90.7500], [21.3796, 90.5500],
                [21.3540, 90.3500], [21.3400, 90.1500], [21.3400, 89.9500],
                [21.3500, 89.7500], [21.3700, 89.5500], [21.4000, 89.3500],
                [21.4400, 89.1500], [21.5000, 88.9500], [21.5800, 88.7500],
                [21.6800, 88.5500], [21.8000, 88.3500], [21.9400, 88.2000],
                [22.1000, 88.0844], [22.2800, 88.0200], [22.4800, 88.0000],
                [22.6800, 88.0000], [22.8800, 88.0000], [23.0800, 88.0000],
                [23.2800, 88.0200], [23.4800, 88.0400], [23.6800, 88.0600],
                [23.8800, 88.0844], [24.0800, 88.1200], [24.2800, 88.1700],
                [24.4800, 88.2300], [24.6800, 88.3000], [24.8800, 88.3844],
                [25.0800, 88.4844], [25.2800, 88.6000], [25.4800, 88.7300],
                [25.6800, 88.8800], [25.8600, 89.0500], [26.0200, 89.2500],
                [26.1600, 89.4700], [26.2800, 89.7000], [26.3800, 89.9500],
                [26.4600, 90.2000], [26.5200, 90.4500], [26.5600, 90.6800],
                [26.5800, 90.8500], [26.5900, 90.9500], [26.6000, 90.9800],
                [26.6100, 90.9500], [26.6200, 90.8500], [26.6250, 90.6800],
                [26.6270, 90.4500], [26.6280, 90.2000], [26.6280, 89.9500],
                [26.6270, 89.7000], [26.6250, 89.4700], [26.6220, 89.2500],
                [26.6180, 89.0500], [26.6130, 88.8800], [26.6070, 88.7300],
                [26.6000, 88.6000], [26.5920, 88.4844], [26.5830, 88.3844],
                [26.5730, 88.3000], [26.5620, 88.2300], [26.5500, 88.1700],
                [26.5370, 88.1200], [26.5230, 88.0844], [26.5080, 88.0600],
                [26.4920, 88.0400], [26.4750, 88.0200], [26.4570, 88.0000],
                [26.4380, 88.0000], [26.4180, 88.0200], [26.3970, 88.0400],
                [26.3750, 88.0600], [26.3520, 88.0844], [26.3280, 88.1200],
                [26.3030, 88.1700], [26.2770, 88.2300], [26.2500, 88.3000],
                [26.2220, 88.3844], [26.1930, 88.4844], [26.1630, 88.6000],
                [26.1320, 88.7300], [26.1000, 88.8800], [26.0670, 89.0500],
                [26.0330, 89.2500], [25.9980, 89.4700], [25.9620, 89.7000],
                [25.9250, 89.9500], [25.8870, 90.2000], [25.8480, 90.4500],
                [25.8080, 90.6800], [25.7670, 90.8500], [25.7250, 90.9500],
                [25.6820, 90.9800], [25.6380, 90.9500], [25.5930, 90.8500],
                [25.5470, 90.6800], [25.5000, 90.4500], [25.4520, 90.2000],
                [25.4030, 89.9500], [25.3530, 89.7000], [25.3020, 89.4700],
                [25.2500, 89.2500], [25.1970, 89.0500], [25.1430, 88.8800],
                [25.0880, 88.7300], [25.0320, 88.6000], [24.9750, 88.4844],
                [24.9170, 88.3844], [24.8580, 88.3000], [24.7980, 88.2300],
                [24.7370, 88.1700], [24.6750, 88.1200], [24.6120, 88.0844]
              ];

              window.L.polygon(bangladeshBorder, {
                color: '#E8E8E8',
                weight: 1,
                opacity: 0.5,
                fillColor: '#F5F5F5',
                fillOpacity: 0.15
              }).addTo(map);
            });

          // Create bounds for Bangladesh to center it properly
          const bounds = window.L.latLngBounds(
            [20.5, 88.0],  // Southwest coordinates
            [26.6, 92.7]   // Northeast coordinates
          );

          // Fit map to Bangladesh bounds with padding
          map.fitBounds(bounds, {
            padding: [50, 50],
            maxZoom: 7
          });

          // Invalidate size after a short delay to ensure proper rendering
          setTimeout(() => {
            map.invalidateSize();
            map.fitBounds(bounds, {
              padding: [50, 50],
              maxZoom: 7
            });
          }, 100);

          // Add divisions with markers using favicon
          divisionsData.forEach((division) => {
            // Create custom marker icon using favicon
            const customIcon = window.L.icon({
              iconUrl: '/images/static/fav.svg',
              iconSize: [32, 32],
              iconAnchor: [16, 16],
              popupAnchor: [0, -16]
            });

            // Add marker with custom icon (no popup)
            window.L.marker(division.position, { icon: customIcon }).addTo(map);
          });

          leafletMapRef.current = map;
          setIsLoading(false);
        }
      };

      loadLeaflet();
    }

    // Cleanup
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  return (
    <StyledMapComponent>
      <Container>
        <div className="map-header">
          <Title text={'Explore our presence across all 8 divisions of Bangladesh'}/>
        </div>
      </Container>

      <div className="map-wrapper">
        <div
          ref={mapRef}
          id="bangladesh-map"
          style={{ height: '100vh', width: '100%' }}
        />
        {isLoading && (
          <div className="map-loading">
            <p>Loading map...</p>
          </div>
        )}
      </div>

      {/*<Container>*/}
      {/*  <div className="legend">*/}
      {/*    <h4>Divisions</h4>*/}
      {/*    <div className="legend-items">*/}
      {/*      {divisionsData.map((division, index) => (*/}
      {/*        <div key={index} className="legend-item">*/}
      {/*          <span*/}
      {/*            className="color-box"*/}
      {/*            style={{ backgroundColor: division.color }}*/}
      {/*          ></span>*/}
      {/*          <span className="division-name">{division.name}</span>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Container>*/}
    </StyledMapComponent>
  );
};

const StyledMapComponent = styled.section`
  padding: 60px 0 0 0;
  background: #fafbfc;

  .map-header {
    text-align: center;
    margin-bottom: 40px;
    
    h2 {
      font-family: "Banana Grotesk", sans-serif;
      font-size: 48px;
      font-weight: 500;
      color: #000;
      margin-bottom: 15px;
      line-height: 130%;
    }
    
    p {
      font-size: 18px;
      color: #666;
    }
  }

  .map-wrapper {
    position: relative;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 60px;
    
    #bangladesh-map {
      z-index: 1;
    }
  }

  .map-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f2f5;
    z-index: 10;
    
    p {
      font-size: 20px;
      color: #666;
    }
  }

  .legend {
    background: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 60px;
    
    h4 {
      font-family: "Banana Grotesk", sans-serif;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 20px;
      color: #000;
    }
    
    .legend-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
      gap: 10px;
      
      .color-box {
        width: 30px;
        height: 30px;
        border-radius: 4px;
        border: 2px solid rgba(0, 0, 0, 0.1);
      }
      
      .division-name {
        font-size: 16px;
        font-weight: 500;
        color: #333;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 40px 0 0 0;
    
    .map-header {
      h2 {
        font-size: 32px;
      }
      
      p {
        font-size: 16px;
      }
    }
    
    .map-wrapper {
      margin-bottom: 40px;
      
      #bangladesh-map {
        height: 400px !important;
      }
    }
    
    .legend {
      padding: 20px;
      margin-bottom: 40px;
      
      h4 {
        font-size: 20px;
      }
      
      .legend-items {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
      }
      
      .legend-item {
        .color-box {
          width: 25px;
          height: 25px;
        }
        
        .division-name {
          font-size: 14px;
        }
      }
    }
  }
`;

export default BangladeshDivisionMap;

