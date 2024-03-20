import React, { RefObject } from 'react';
import PhotoSlide from './PhotoSlide';

const PhotoPage = ({
  upperContainer,
}: {
  upperContainer: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      ref={upperContainer}
      className="flex h-screen w-full shrink-0 flex-col items-center justify-center gap-y-24 pb-20 pt-24"
    >
      <div className="flex w-full shrink-0 flex-col items-center justify-center gap-y-9">
        <div className="text-5xl font-bold">
          우리가 부트스트랩에서 노는 방식!
        </div>
        <div className="whitespace-pre text-center text-2xl font-normal">{`가천대학교 SW아카데미에서 만난 우리는 개발은 물론\n좋은 동료가 되기 위해 노력하고 있어요`}</div>
      </div>
      <PhotoSlide />
    </div>
  );
};

export default PhotoPage;
