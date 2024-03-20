import React from 'react';
import ChatItem from './ChatItem';
import ChatImage from './ChatImage';
import ChatItemReverse from './ChatItemReverse';
import ChatImageReverse from './ChatImageReverse';

const ChatJiyoung = () => {
  return (
    <>
      <ChatImage src="img/img_jiyoung_1.png" delay={0} />
      <ChatItem text="안녕하세요. 저는 지영입니다." color="jiyoung" delay={1} />
      <ChatItem text="너가 카엔프하자.. 했잖아?" color="jiyoung" delay={2} />
      <ChatItemReverse text="그럼 취준 이딴 거 안 했어" delay={3} />
      <ChatImageReverse src="img/img_jiyoung_2.png" delay={4} />
      <ChatItem
        text="제 이메일은 ziy913@naver.com 이고"
        color="jiyoung"
        delay={5}
      />
      <ChatItem
        text="깃허브 아이디는 ziiyouth 입니다 🐹"
        color="jiyoung"
        delay={6}
      />
    </>
  );
};

export default ChatJiyoung;
