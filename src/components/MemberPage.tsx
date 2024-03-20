import React, { RefObject, useState } from 'react';
import ChatEunseob from './chat/ChatEunseob';
import ChatEojin from './chat/ChatEojin';
import ChatDohun from './chat/ChatDohun';
import ChatKwanKon from './chat/ChatKwanKon';
import ChatJiyoung from './chat/ChatJiyoung';
import ChatJinyoung from './chat/ChatJinyoung';

const MemberPage = ({
  lastContainer,
  memberPageContainer,
}: {
  lastContainer: RefObject<HTMLDivElement>;
  memberPageContainer: RefObject<HTMLDivElement>;
}) => {
  const [member, setMember] = useState<string>('eojin');

  return (
    <div
      ref={memberPageContainer}
      className="flex min-h-screen w-full shrink-0 flex-col items-center justify-center gap-y-16 pt-24"
    >
      <div className="flex w-full shrink-0 flex-col items-center justify-center gap-y-9">
        <div className="text-5xl font-bold">
          부트스트랩의 멋진 팀원들을 소개할게!
        </div>
        <div className="whitespace-pre text-center text-2xl font-normal">{`어떤 상황에서도 최선을 다하는 부트스트랩 멤버들은\n서로에게 큰 힘이 되어주고 있어요.`}</div>
      </div>
      <div className="w-full grow flex flex-col justify-start items-center">
        <div className="w-full flex items-center justify-between text-3xl px-20 max-w-[1300px] shrink-0">
          <div
            onClick={() => setMember('eojin')}
            className={`cursor-pointer ${
              member === 'eojin' ? 'text-eojin' : ''
            }`}
          >
            강어진
          </div>
          <div
            onClick={() => setMember('dohun')}
            className={`cursor-pointer ${
              member === 'dohun' ? 'text-dohun' : ''
            }`}
          >
            김도훈
          </div>
          <div
            onClick={() => setMember('kwankon')}
            className={`cursor-pointer ${
              member === 'kwankon' ? 'text-kwankon' : ''
            }`}
          >
            류관곤
          </div>
          <div
            onClick={() => setMember('jiyoung')}
            className={`cursor-pointer ${
              member === 'jiyoung' ? 'text-jiyoung' : ''
            }`}
          >
            박지영
          </div>
          <div
            onClick={() => setMember('jinyoung')}
            className={`cursor-pointer ${
              member === 'jinyoung' ? 'text-jinyoung' : ''
            }`}
          >
            오진영
          </div>
          <div
            onClick={() => setMember('eunseob')}
            className={`cursor-pointer ${
              member === 'eunseob' ? 'text-eunseob' : ''
            }`}
          >
            이은섭
          </div>
        </div>
        <div className="w-full grow flex flex-col justify-start items-center text-xl px-20 max-w-[1300px] gap-y-6 pt-20 shrink-0 ">
          {member === 'eojin' ? (
            <ChatEojin />
          ) : member === 'dohun' ? (
            <ChatDohun />
          ) : member === 'kwankon' ? (
            <ChatKwanKon />
          ) : member === 'jiyoung' ? (
            <ChatJiyoung />
          ) : member === 'jinyoung' ? (
            <ChatJinyoung />
          ) : (
            <ChatEunseob />
          )}
        </div>
        <div ref={lastContainer} className="w-full h-32" />
      </div>
    </div>
  );
};

export default MemberPage;
