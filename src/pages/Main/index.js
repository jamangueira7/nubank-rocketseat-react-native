import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardConent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from '~/pages/Main/styles';



export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardConent>
            <Title>Saldo disponível</Title>
            <Description>R$7.655,05</Description>
          </CardConent>
          <CardFooter>
            <Annotation>
              Tranfêrencia de R$ 35,00 recebida de Jose Silva hoje as 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
