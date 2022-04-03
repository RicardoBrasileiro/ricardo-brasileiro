import React from 'react';
import { ContactBox, TopWave, BottomWave, Or } from './styles';

import topWave from './assets/topWave.svg';
import bottomWave from './assets/bottomWave.svg';
import SendEmail from '../../components/Contact/SendEmail';
import FollowMe from '../../components/Contact/FollowMe';

function Contact(): JSX.Element {
  return (
    <ContactBox>
      <SendEmail />
      <Or>or</Or>
      <FollowMe />
      <TopWave src={topWave} />
      <BottomWave src={bottomWave} />
    </ContactBox>
  );
}

export default Contact;
