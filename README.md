# SVG Animations with Figma and React

## 1. Create a small Frame in [Figma](https://www.figma.com/)

- Frame tool shortcut: F

- Edit W and H in Frame editor in right sidebar.

- ~100 x 100 is about right

## 2. Add a few shapes in their start/finish positions

- Rectange tool shortcut: R

- Ellipse tool shortcut: O

- Hold shift when drawing an ellipse to make a circle.

- Edit the fill of your shapes from the right sidebar.

## 3. Rename your frame, shapes, and groups

- In the left sidebar rename your Frame.

- group shapes of the same type (also group shapes of their own type).

- Add camelCased names to each group.

- Add camelCased names to each shape.

- Group selection shortcut: ⌘G

- Rename shortcut: ⌘R

## 4. Export your file as an SVG

- Select the entire Frame.

- Find the Export section in the side panel on the right and choose SVG.

- Click the 3 dots and select **Include “id” attribute**.

- Deselect **Show in exports**.

## 5. Open file in Visual Studio Code and drop SVG into JSX.

- Convert most of the SVG's attributes into props so the component is quickly customizable and reusable.

```javascript
import React from 'react';
import './fourCircles.css';

export default function FourCircles({ width = 100, height = 100, viewBox = '0 0 100 100', fill = 'none', radiusOfAllCircles = '25', topCirclesFill = '#8569F4', bottomCirclesFill = '#12DFD3', topCirclesFillOpacity = '0.5', bottomCirclesFillOpacity = '0.5' }) {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g id="fourCircles">
        <g id="topCircles">
          <circle id="topRight" cx="63" cy="38" r={radiusOfAllCircles} fill={topCirclesFill} fill-opacity={topCirclesFillOpacity} />
          <circle id="topLeft" cx="38" cy="38" r={radiusOfAllCircles} fill={topCirclesFill} fill-opacity={topCirclesFillOpacity} />
        </g>
        <g id="bottomCircles">
          <circle id="bottomRight" cx="63" cy="63" r={radiusOfAllCircles} fill={bottomCirclesFill} fill-opacity={bottomCirclesFillOpacity} />
          <circle id="bottomLeft" cx="38" cy="63" r={radiusOfAllCircles} fill={bottomCirclesFill} fill-opacity={bottomCirclesFillOpacity} />
        </g>
      </g>
    </svg>
  );
}
```

## 6. Add CSS animation with transition and transforms

```css
#topRight,
#topLeft,
#bottomLeft,
#bottomRight {
  transition: all 1s ease;
}

/* Start positions */
#bottomRight {
  transform: translateX(40%);
  opacity: 0;
}

#topLeft {
  transform: translateX(-40%);
  opacity: 0;
}

/* Positions on hover */
svg:hover #topLeft {
  transform: translateX(0%);
  opacity: 1;
}

svg:hover #topRight {
  transform: translateY(40%);
  opacity: 0;
}

svg:hover #bottomRight {
  transform: translateX(0%);
  opacity: 1;
}

svg:hover #bottomLeft {
  transform: translateY(-40%);
  opacity: 0;
}
```
