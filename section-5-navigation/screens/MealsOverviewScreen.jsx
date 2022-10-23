import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MealItems from '../components/Meals/MealItem';
import { MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((el) => el.categoryIds.includes(categoryId));

  function onPressNavigateTo(item) {
    navigation.navigate('Meal Details', { categoryId: item.id });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItems
            duration={item.duration}
            affordability={item.affordability}
            complexity={item.complexity}
            uri={item.imageUrl}
            title={item.title}
            onPress={() => onPressNavigateTo(item)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
