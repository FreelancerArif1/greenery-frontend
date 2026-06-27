# Bangladesh Division Map Component

## Overview
A React component that displays an interactive map of Bangladesh showing all 8 divisions with different colors, markers, and tooltips using Leaflet.js.

## Features
- **Interactive Map**: Built with Leaflet and React-Leaflet
- **8 Divisions**: Dhaka, Chittagong, Rajshahi, Khulna, Sylhet, Barisal, Rangpur, and Mymensingh
- **Color-coded Regions**: Each division has a unique color for easy identification
- **Division Markers**: Clickable markers on each division showing the division name
- **Legend**: A visual legend showing all divisions with their respective colors
- **Responsive**: Fully responsive design that works on desktop and mobile devices
- **SSR Compatible**: Uses Next.js dynamic imports to avoid server-side rendering issues

## Installation
The required packages are already installed in the project:
- `leaflet@^1.9.4`
- `react-leaflet@^5.0.0`

## Usage

```jsx
import BangladeshDivisionMap from '@/components/global-supply/BangladeshDivisionMap';

export default function Page() {
  return (
    <div>
      <BangladeshDivisionMap />
    </div>
  );
}
```

## Component Structure

### Division Data
Each division contains:
- `name`: Division name
- `position`: [latitude, longitude] for the marker
- `color`: Hex color code for the division
- `boundaries`: Array of coordinates defining the division polygon

### Divisions
1. **Dhaka** - #FF6B6B (Red)
2. **Chittagong** - #4ECDC4 (Teal)
3. **Rajshahi** - #95E1D3 (Light Teal)
4. **Khulna** - #F38181 (Light Red)
5. **Sylhet** - #AA96DA (Purple)
6. **Barisal** - #FCBAD3 (Pink)
7. **Rangpur** - #FFD93D (Yellow)
8. **Mymensingh** - #A8D8EA (Light Blue)

## Customization

### Changing Colors
Edit the `divisionsData` array in the component:

```javascript
const divisionsData = [
  {
    name: 'Dhaka',
    position: [23.8103, 90.4125],
    color: '#YOUR_COLOR', // Change this
    boundaries: [...]
  },
  // ...
];
```

### Adjusting Map Settings
Modify the MapContainer props:

```javascript
<MapContainer
  center={[23.685, 90.3563]} // Map center
  zoom={7}                    // Zoom level
  scrollWheelZoom={false}     // Enable/disable scroll zoom
  style={{ height: '600px', width: '100%' }}
>
```

### Updating Division Boundaries
For more accurate boundaries, update the `boundaries` array with proper coordinates:

```javascript
boundaries: [
  [lat1, lng1],
  [lat2, lng2],
  [lat3, lng3],
  [lat4, lng4],
]
```

## Styling
The component uses styled-components for styling. All styles are contained within the component file.

### Main Style Sections:
- `.map-header`: Title and description above the map
- `.map-wrapper`: Container for the Leaflet map
- `.legend`: Color legend showing all divisions
- `.custom-popup`: Styling for marker popups

## Mobile Responsive
The component automatically adjusts for mobile devices:
- Smaller map height (400px on mobile vs 600px on desktop)
- Smaller fonts and spacing
- Grid layout adjusts for smaller screens

## Browser Compatibility
Works in all modern browsers that support:
- ES6+
- CSS Grid
- Flexbox

## Performance
- Uses Next.js dynamic imports to prevent SSR issues
- Lazy loads map only on client-side
- Shows loading placeholder until map is ready

## Troubleshooting

### Map not showing
1. Ensure Leaflet CSS is imported in your layout:
   ```javascript
   import 'leaflet/dist/leaflet.css';
   ```

2. Check that the component is being rendered client-side

### Markers not appearing
The component uses CDN links for marker icons. Ensure your application has internet connectivity.

### SSR Errors
The component uses dynamic imports to prevent SSR. If you still encounter issues, ensure the component is only rendered on the client side.

## Future Enhancements
- Add more detailed GeoJSON boundaries for accurate division shapes
- Add district-level data
- Interactive statistics on hover
- Filter functionality
- Custom marker icons
- Animation on load
- Export functionality

## License
Part of the Greenery Energy Solutions project.

