import React from 'react';
import './fourCircles.css';

export default function FourCircles({
  width = 100,
  height = 100,
  viewBox = "0 0 100 100",
  fill = "none",
  radiusOfAllCircles = "25",
  topCirclesFill = "#8569F4",
  bottomCirclesFill = "#12DFD3",
  topCirclesFillOpacity = "0.5",
  bottomCirclesFillOpacity = "0.5",
}) {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g id="fourCircles">
        <g id="topCircles">
          <circle
            id="topRight"
            cx="63"
            cy="38"
            r={radiusOfAllCircles}
            fill={topCirclesFill}
            fill-opacity={topCirclesFillOpacity}
          />
          <circle
            id="topLeft"
            cx="38"
            cy="38"
            r={radiusOfAllCircles}
            fill={topCirclesFill}
            fill-opacity={topCirclesFillOpacity}
          />
        </g>
        <g id="bottomCircles">
          <circle
            id="bottomRight"
            cx="63"
            cy="63"
            r={radiusOfAllCircles}
            fill={bottomCirclesFill}
            fill-opacity={bottomCirclesFillOpacity}
          />
          <circle
            id="bottomLeft"
            cx="38"
            cy="63"
            r={radiusOfAllCircles}
            fill={bottomCirclesFill}
            fill-opacity={bottomCirclesFillOpacity}
          />
        </g>
      </g>
    </svg>
  );
};