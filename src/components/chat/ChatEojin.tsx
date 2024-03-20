import React from 'react';
import ChatItem from './ChatItem';
import ChatItemReverse from './ChatItemReverse';
import ChatImage from './ChatImage';

const ChatEojin = () => {
  return (
    <>
      <ChatImage src="img/img_eojin_1.png" delay={0} />
      <ChatItem text="안녕하세요, 강어진입니다 😊" color="eojin" delay={0} />
      <ChatItem
        text="저는 이 팀의 유일한 프론트를 맡고 있어요!"
        color="eojin"
        delay={1}
      />
      <ChatItem
        text="카엔프에 부트스트랩의 등장이라...재밌어지겠네"
        color="eojin"
        delay={2}
      />
      <ChatItemReverse text="부트스트랩 사건에 대해 알려줘" delay={3} />
      <ChatItem
        text={`부트스트랩 사건\n:팀 부트스트랩이 카엔프를 통해 취뽀에 성공한 사건이다`}
        color="eojin"
        delay={4}
      />
      <ChatItem
        text="저에 대해 궁금한 게 있으시면 언제든 연락주세요!"
        color="eojin"
        delay={5}
      />
      <ChatItem
        text={`✉ Email : kaj1226@naver.com\n 🖥 Github : Ginieee`}
        color="eojin"
        delay={6}
      />
    </>
  );
};

export default ChatEojin;
