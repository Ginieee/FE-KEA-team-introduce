import React from 'react';
import { ReactComponent as Gift } from '../assets/illust_gift.svg';

const ProjectPage = () => {
  return (
    <div className="flex h-screen w-full shrink-0 flex-col items-center justify-center gap-y-24 pb-20 pt-24">
      <div className="flex w-full shrink-0 flex-col items-center justify-center gap-y-9">
        <div className="text-5xl font-bold">우리가 만든 것들 한 번 볼래?</div>
        <div className="whitespace-pre text-center text-2xl font-normal">{`다양한 동아리, 외부활동을 통해 다져진 경험으로\n끈끈한 협업을 통해 프로젝트를 완성해가요.`}</div>
      </div>
      <div className="grow w-full flex items-center justify-center flex-col gap-y-5">
        <Gift className="w-full max-w-[400px] h-auto animate-pulse" />
        <div className="text-4xl font-bold">COMING SOON</div>
      </div>
    </div>
  );
};

export default ProjectPage;
