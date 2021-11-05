import React from 'react';
import './threeTriangles.css';

export default function ThreeTriangles({
  width = 120,
  height = 100,
  viewBox = "0 0 120 100",
  fill = "none",
  light1Fill = "#12DFD3",
  light1FillOpacity = "0.5",
  dark1Fill = "#8569F4",
  dark1FillOpacity = "0.5",
  dark2Fill = "#8569F4",
  dark2FillOpacity = "0.5",
}) {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g id="triangles">
        <g id="lightGroup">
          <path
            id="light1"
            d="M47 49.268C48.3333 50.0378 48.3333 51.9622 47 52.732L15.5 70.9186C14.1667 71.6884 12.5 70.7261 12.5 69.1865V32.8135C12.5 31.2739 14.1667 30.3116 15.5 31.0814L47 49.268Z"
            fill={light1Fill}
            fill-opacity={light1FillOpacity}
          />``
        </g>
        <g id="darkGroup">
          <path
            id="dark1"
            d="M67 49.268C68.3333 50.0378 68.3333 51.9622 67 52.732L35.5 70.9186C34.1667 71.6884 32.5 70.7261 32.5 69.1865V32.8135C32.5 31.2739 34.1667 30.3116 35.5 31.0814L67 49.268Z"
            fill={dark1Fill}
            fill-opacity={dark1FillOpacity}
          />
          <path
            id="dark2"
            d="M47 49.268C48.3333 50.0378 48.3333 51.9622 47 52.732L15.5 70.9186C14.1667 71.6884 12.5 70.7261 12.5 69.1865V32.8135C12.5 31.2739 14.1667 30.3116 15.5 31.0814L47 49.268Z"
            fill={dark2Fill}
            fill-opacity={dark2FillOpacity}
          />``
        </g>
      </g>
    </svg>
  );
};