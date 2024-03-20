import React from 'react';

const PhotoSlideItem = ({
  rowIdx,
  colIdx,
}: {
  rowIdx: number;
  colIdx: number;
}) => {
  return (
    <img className="h-full w-auto" src={`img/img_${rowIdx}_${colIdx}.png`} />
  );
};

export default PhotoSlideItem;
