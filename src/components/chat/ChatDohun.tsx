import React from 'react';
import ChatImage from './ChatImage';
import ChatItem from './ChatItem';
import ChatItemReverse from './ChatItemReverse';

const ChatDohun = () => {
  return (
    <>
      <ChatImage src="img/img_dohun_1.png" delay={0} />
      <ChatItem text="안녕하세요, 김도훈입니다." color="dohun" delay={1} />
      <ChatItem
        text="위 사진은 1학년 때의 제 모습이에요"
        color="dohun"
        delay={2}
      />
      <ChatItem
        text="마음 한 켠에 남아있는 제 취미입니다~"
        color="dohun"
        delay={3}
      />
      <ChatItem text="그리고..." color="dohun" delay={4} />
      <ChatItem text="비트코인 1억간다 했제?" color="dohun" delay={5} />
      <ChatItemReverse text="★후원문의★" delay={6} />
      <ChatItem
        text={`✉ Email : kdhhuns2000@gmail.com\n🖥 Github : kdhhuns2000`}
        color="dohun"
        delay={7}
      />
    </>
  );
};

export default ChatDohun;
