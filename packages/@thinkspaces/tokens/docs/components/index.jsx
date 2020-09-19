/* eslint import/prefer-default-export: 0, react/prop-types: 0 */
import React from 'react';

export const ColorBlock = ({ labelColor, label, color }) => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      padding: 12,
      background: color,
      color: labelColor,
    }}
  >
    <span>{label}</span>
    <span>{color}</span>
  </div>
);

export const ColorBlockList = ({
  label = '',
  labelColor = 'black',
  colors,
}) => {
  return (
    <div>
      {Object.keys(colors).map((color, idx) => {
        if (idx > 4) labelColor = 'white';
        return (
          <ColorBlock
            labelColor={labelColor}
            label={`${label} ${color}`}
            color={colors[color]}
          />
        );
      })}
    </div>
  );
};

export const GridContainer = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gridGap: 20,
    }}
  >
    {children}
  </div>
);

export const SimpleGrid = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto',
    }}
  >
    {children}
  </div>
);

export const SubGrid = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      borderBottom: '1px solid lightgray',
    }}
  >
    {children}
  </div>
);

export const Spacer = () => <p>&nbsp;</p>;
