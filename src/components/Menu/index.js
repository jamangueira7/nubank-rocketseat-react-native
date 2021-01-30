import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import {
  Container,
  Code,
} from '~/components/Menu/styles';


export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          logoSize={80}
          logoBackgroundColor="#FFF"
          color="#8B10AE"
        />
      </Code>
    </Container>
  );
}
