import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItems from '../components/Meals/MealItem';
import { MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((el) => el.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItems title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
