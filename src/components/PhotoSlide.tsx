import React, { useEffect, useState } from 'react';
import PhotoSlideItem from './PhotoSlideItem';

const PhotoSlide = () => {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onStart = () => setAnimate(true);

  useEffect(() => {
    onStart();
  }, []);

  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-5 overflow-hidden">
      <div
        onMouseEnter={onStop}
        onMouseLeave={onStart}
        className="phone:h-[180px] tablet:h-[200px] laptop:h-[230px] desktop:h-[300px] flex w-full items-center justify-start gap-x-7 flex-nowrap"
      >
        <div
          className={`shrink-0 h-full flex items-center justify-start gap-x-7 ${
            animate ? 'animate-original' : 'animate-stop'
          }`}
        >
          {[...Array(11)].map((_, index) => (
            <PhotoSlideItem
              key={`row1-${index}`}
              rowIdx={1}
              colIdx={index + 1}
            />
          ))}
        </div>
        <div
          className={`shrink-0 h-full flex items-center justify-start gap-x-7 ${
            animate ? 'animate-clone' : 'animate-stop'
          }`}
        >
          {[...Array(11)].map((_, index) => (
            <PhotoSlideItem
              key={`row1-${index}`}
              rowIdx={1}
              colIdx={index + 1}
            />
          ))}
        </div>
      </div>
      <div
        onMouseEnter={onStop}
        onMouseLeave={onStart}
        className="phone:h-[180px] tablet:h-[200px] laptop:h-[230px] desktop:h-[300px] flex w-full items-center justify-start gap-x-7 flex-nowrap"
      >
        <div
          className={`shrink-0 h-full flex items-center justify-start gap-x-7 ${
            animate ? 'animate-original' : 'animate-stop'
          }`}
        >
          {[...Array(9)].map((_, index) => (
            <PhotoSlideItem
              key={`row2-${index}`}
              rowIdx={2}
              colIdx={index + 1}
            />
          ))}
        </div>
        <div
          className={`shrink-0 h-full flex items-center justify-start gap-x-7 ${
            animate ? 'animate-clone' : 'animate-stop'
          }`}
        >
          {[...Array(9)].map((_, index) => (
            <PhotoSlideItem
              key={`row2-${index}`}
              rowIdx={2}
              colIdx={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlide;
