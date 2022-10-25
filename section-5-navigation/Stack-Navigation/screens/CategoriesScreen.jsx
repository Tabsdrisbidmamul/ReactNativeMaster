import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function renderCateogryItem(item, navigation) {
  function handleOnPressThenNavigate() {
    navigation.navigate('Meals Overview', {
      title: item.title,
      categoryId: item.id,
    });
  }

  return <CategoryGridTile title={item.title} color={item.color} handlePress={handleOnPressThenNavigate} />;
}

export default function CategoriesScreen({ navigation }) {
  return (
    <SafeAreaView>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderCateogryItem(item, navigation)}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
