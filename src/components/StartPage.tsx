import React from 'react';
import { ReactComponent as Stars } from '../assets/illust_stars.svg';
import { ReactComponent as StarsBg } from '../assets/illust_stars_bg.svg';
import { ReactComponent as Down } from '../assets/icon_arrow_down.svg';

const StartPage = () => {
  return (
    <div className="flex h-screen w-full shrink-0 flex-col items-center justify-center pb-12 pt-32">
      <div className="flex w-full grow items-center justify-center px-10 relative">
        <div className="w-full h-full relative">
          <Stars className="h-full w-auto animate-pulse absolute top-0 left-0 right-0 bottom-0 w-full" />
          <StarsBg className="h-full w-auto absolute  top-0 left-0 right-0 bottom-0 w-full" />
        </div>
      </div>
      <div className="mt-20 flex shrink-0 flex-col items-center justify-center gap-y-7 px-4">
        <div className="text-4xl font-bold">
          성장의 즐거움을 아는 친구들, 부트스트랩
        </div>
        <div className="whitespace-pre text-center text-6xl font-bold">{`LET'S DO OUR BEST\nIN THE CURRENT SITUATION`}</div>
      </div>
      <div className="mt-16 shrink-0 animate-bounce rounded-3xl border border-[#CFCFCF] px-3 py-4">
        <Down />
      </div>
    </div>
  );
};

export default StartPage;
