import styled from 'styled-components/native';
import {Card, Paragraph} from 'react-native-paper';
export const Icon = styled.Image`
  width: 22px;
  height: 22px;
`;
export const RestaurantCard = styled(Card)`
  margin-bottom: 16px;
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Info = styled(Card.Content)`
  padding: ${props => props.theme.space[3]};
`;

export const Rating = styled(Card.Content)`
  flex-direction: row;
  padding: 0px;
  margin-bottom: ${props => props.theme.space[2]};
  margin-top: ${props => props.theme.space[2]};
`;

export const Address = styled(Paragraph)`
  font-size: ${props => props.theme.fontSizes.body};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
