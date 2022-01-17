import React from 'react';
import Profile from '../../components/Home/Profile';
import SocialMediaLink from '../../components/Home/SocialMediaLink';
import { HomeBox, SocialMediaLinks } from './styles';

const Home = (): JSX.Element => {
  return (
    <HomeBox>
      <Profile />
      <SocialMediaLinks>
        <SocialMediaLink
          color="#000000"
          to="https://github.com/ricardobgx"
          icon="github"
          label="Github"
        />
        <SocialMediaLink
          color="#0077B5"
          to="https://www.linkedin.com/in/ricardobgx/"
          icon="linkedin"
          label="LinkedIn"
        />
        <SocialMediaLink
          color="#03A9F4"
          to="https://twitter.com/ricardobgx"
          icon="twitter"
          label="Twitter"
        />
        <SocialMediaLink
          color="#F02093"
          to="https://www.instagram.com/ricardobgx/"
          icon="instagram"
          label="Instagram"
        />
      </SocialMediaLinks>
    </HomeBox>
  );
};

export default Home;
