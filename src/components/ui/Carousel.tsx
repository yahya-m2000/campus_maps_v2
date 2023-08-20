import React from 'react';
import {View, ScrollView, Pressable, StyleSheet} from 'react-native';
import Card from './Card';
import {Style} from '../../theme/Style';

const mockData = [
  {
    id: 1,
    title: 'Card 1',
    subtitle: 'Subtitle for Card 1',
    imageUrl: 'https://dummyimage.com/500x700/000/fff',
  },
  {
    id: 2,
    title: 'Card 2',
    subtitle: 'Subtitle for Card 2',
    imageUrl: 'https://dummyimage.com/500x700/000/fff',
  },
  // Add more mock data here
];

const Carousel = () => {
  const visibleCards = mockData.slice(0, 5);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselContainer}>
      {visibleCards.map(item => (
        <Pressable
          key={item.id}
          onPress={() => {
            // Handle press action here
          }}
          style={styles.cardContainer}>
          <Card
            title={item.title}
            subtitle={item.subtitle}
            imageUrl={item.imageUrl}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
    marginHorizontal: Style.MARGIN_LESS0,
  },
  cardContainer: {
    marginRight: 10,
  },
});

export default Carousel;
