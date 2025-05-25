import React from 'react';

interface GridContainerProps extends React.PropsWithChildren {
  spacing?: number;
}

interface GridItemProps extends React.PropsWithChildren {
  xs?: number;
  md?: number;
  lg?: number;
}

export const GridContainer: React.FC<GridContainerProps> = ({ 
  children, 
  spacing = 3 
}) => (
  <div style={{ 
    display: 'flex', 
    flexWrap: 'wrap', 
    width: '100%', 
    gap: `${spacing * 8}px`,
    margin: `-${spacing * 4}px`
  }}>
    {children}
  </div>
);

export const GridItem: React.FC<GridItemProps> = ({ 
  children, 
  xs = 12, 
  md = 6,
  lg = 4
}) => {
  const getWidth = (size: number) => `${(size / 12) * 100}%`;

  return (
    <div
      style={{
        flex: `0 0 ${getWidth(xs)}`,
        padding: '16px',
        '@media (min-width: 600px)': {
          flex: `0 0 ${getWidth(md)}`,
        },
        '@media (min-width: 900px)': {
          flex: `0 0 ${getWidth(lg)}`,
        },
      }}
    >
      {children}
    </div>
  );
}; 