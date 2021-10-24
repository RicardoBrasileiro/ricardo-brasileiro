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
          to="/projects"
          icon="fab fa-github-square"
          label="Github"
        />
        <SocialMediaLink
          color="#0077B5"
          to="/projects"
          icon="fab fa-linkedin"
          label="LinkedIn"
        />
        <SocialMediaLink
          color="#03A9F4"
          to="/projects"
          icon="fab fa-twitter"
          label="Twitter"
        />
        <SocialMediaLink
          color="#F02093"
          to="/projects"
          icon="fab fa-instagram"
          label="Instagram"
        />
      </SocialMediaLinks>
    </HomeBox>
  );
};

export default Home;
