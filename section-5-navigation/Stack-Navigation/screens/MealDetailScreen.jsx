import { useLayoutEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MealItems from '../components/Meals/MealItem';
import { MEALS } from '../data/dummy-data';
import Column from '../layouts/columns/Column';
import Row from '../layouts/rows/Row';
import BulletPoint from '../components/BulletPoint/BulletPoint';
import { colours } from '../constants/colours';
import Subtitle from '../components/Subtitle/Subtitle';
import { useNavigation } from '@react-navigation/core';
import IconButton from '../components/Buttons/IconButton';

export default function MealDetailScreen({ route }) {
  const navigation = useNavigation();
  const { categoryId } = route.params;

  const mealToDisplay = MEALS.find((el) => el.id === categoryId);

  const ingredientsToDisplay = [];
  let i = 0;
  let j = 1;

  if (mealToDisplay.ingredients.length > 2) {
    let notLoopedFully = true;
    while (notLoopedFully) {
      if (i === mealToDisplay.ingredients.length || i === mealToDisplay.ingredients.length - 1) {
        notLoopedFully = false;
        break;
      }

      if (j < mealToDisplay.ingredients.length) {
        ingredientsToDisplay.push({
          meal1: mealToDisplay.ingredients[i],
          meal2: mealToDisplay.ingredients[j],
        });
      } else {
        ingredientsToDisplay.push({
          meal1: mealToDisplay.ingredients[i],
          meal2: null,
        });
      }
      i += 2;
      j += 2;
    }
  } else {
    ingredientsToDisplay.push({
      meal1: mealToDisplay.ingredients[0],
      meal2: null,
    });
  }

  function handleHeaderButtonOnPress() {
    console.log('Tapped');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="heart" onPress={handleHeaderButtonOnPress} />;
      },
    });
  }, [navigation, handleHeaderButtonOnPress]);

  return (
    <SafeAreaView style={styles.container}>
      <MealItems
        title={mealToDisplay.title}
        uri={mealToDisplay.imageUrl}
        duration={mealToDisplay.duration}
        complexity={mealToDisplay.complexity}
        affordability={mealToDisplay.affordability}
        figureStyle={{ borderRadius: 0, marginBottom: 0 }}
        outerContainerStyle={{ marginBottom: 32, flex: 0, padding: 0 }}
      />

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.ingredientsContainer}>
          <Subtitle>Ingredients</Subtitle>
          {ingredientsToDisplay.map(({ meal1, meal2 }, index) => (
            <Row style={{ marginBottom: 12 }} key={index}>
              <Column numRows={2}>
                {meal1 !== null ? (
                  <View style={styles.ingredientLi}>
                    <BulletPoint style={{ marginRight: 12 }} />
                    <Text style={styles.ingrdientLiText}>{meal1}</Text>
                  </View>
                ) : null}
              </Column>

              <Column numRows={2}>
                {meal2 !== undefined ? (
                  <View style={styles.ingredientLi}>
                    <BulletPoint style={{ marginRight: 12 }} />
                    <Text style={styles.ingrdientLiText}>{meal2}</Text>
                  </View>
                ) : null}
              </Column>
            </Row>
          ))}
        </View>

        <View style={styles.stepsContainer}>
          <Subtitle>Steps</Subtitle>
          {mealToDisplay.steps.map((el, index) => (
            <Text style={styles.stepsText} key={index}>
              {index} <BulletPoint style={{ marginRight: 8, colour: colours.black }} /> {el}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  scrollContainer: {
    flex: 1,
    // marginBottom: 32,
  },
  ingredientsContainer: {
    flex: 1,
    marginHorizontal: 16,
    padding: 16,
    paddingTop: 24,
    marginBottom: 32,
    backgroundColor: colours.purple,
    borderRadius: 8,
    elevation: 4,

    shadowColor: colours.black,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  stepsContainer: {
    flex: 1,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colours.green,
    marginBottom: 32,

    elevation: 4,

    shadowColor: colours.black,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  ingredientLi: {
    flexDirection: 'row',
    flex: 1,
  },
  ingrdientLiText: {
    fontFamily: 'roboto-regular',
    fontSize: 14,
    color: colours.black,
    width: '100%',
  },
  stepsText: {
    fontFamily: 'roboto-regular',
    fontSize: 14,
    color: colours.black,
    marginBottom: 12,
  },
});
