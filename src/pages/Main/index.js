import React from 'react';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import { Container } from '~/pages/Main/styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}
