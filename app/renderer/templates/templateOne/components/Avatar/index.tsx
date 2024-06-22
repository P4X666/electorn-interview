/**
 * @desc 头像
 * @author pengdaokuan
 */
import React from 'react';
import AvatarImage from '@assets/avatar.jpg';
import { AvatarBox, AvatarImgWrap } from '@src/templates/styles/template-one';

function Avatar() {
  return (
    <AvatarBox>
      <AvatarImgWrap>
        <img src={AvatarImage} />
      </AvatarImgWrap>
    </AvatarBox>
  );
}

export default Avatar;
