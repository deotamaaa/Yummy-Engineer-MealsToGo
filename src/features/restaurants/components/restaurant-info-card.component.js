import React from 'react';
import styled from 'styled-components/native';
import {Text, Image, View} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {Spacer} from '../../../components/spacer/spacer.component';

const CardTitle = styled(Text)`
  color: ${props => props.theme.colors.ui.primary};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.title};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const Info = styled(Card.Content)`
  padding: ${props => props.theme.space[3]};
`;

const Rating = styled(Card.Content)`
  flex-direction: row;
  padding: 0px;
  margin-bottom: ${props => props.theme.space[2]};
  margin-top: ${props => props.theme.space[2]};
`;

const Address = styled(Paragraph)`
  font-size: ${props => props.theme.fontSizes.body};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Test Name',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg',
    ],
    address = 'Random Address',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <RestaurantCardCover source={{uri: photos[0]}} />
      <Info>
        <CardTitle>{name}</CardTitle>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text style={{color: 'red'}}> CLOSED TEMPORARILY </Text>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            <Image style={{width: 15, height: 15}} source={{uri: icon}} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
