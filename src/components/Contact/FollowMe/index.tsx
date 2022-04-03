import React from 'react';
import { socialMedias } from '../../../static/socialMedias';
import SocialMedia from '../SocialMedia';
import { FollowMeBox, FollowMeLabel, SocialMedias } from './styles';

function FollowMe(): JSX.Element {
  return (
    <FollowMeBox>
      <FollowMeLabel>Follow me</FollowMeLabel>
      <SocialMedias>
        {socialMedias.map((socialMedia) => (
          <SocialMedia socialMedia={socialMedia} />
        ))}
      </SocialMedias>
    </FollowMeBox>
  );
}

export default FollowMe;
