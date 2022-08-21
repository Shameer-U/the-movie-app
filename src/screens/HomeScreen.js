import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import COLORS from '../constants/Colors'
import GenreCard from '../components/GenreCard'
import ItemSeperator from '../components/ItemSeperator';
import { useState } from 'react';

const Genres = ['All', 'Action', 'Comedy', 'Romance', 'Horror', 'Sci-Fi']

const HomeScreen = () => {
  const [activeGenre, setActiveGenre] = useState("All")

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" translucent={false} backgroundColor={COLORS.BASIC_BACKGROUND}/>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList
         data={Genres} 
         horizontal
         keyExtractor={(item) => item}
         showsHorizontalScrollIndicator={false}
         ItemSeparatorComponent={() => <ItemSeperator width={5}/>}
         ListHeaderComponent={() => <ItemSeperator width={5}/>}
         ListFooterComponent={() => <ItemSeperator width={5}/>}
         renderItem={({item}) => (
            <GenreCard 
               genreName={item}
               active={item === activeGenre ? true : false}
               onPress={(genreName) => setActiveGenre(genreName)}
            />
         )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 28,
  },
  headerSubTitle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
  },
  genreListContainer: {
    paddingVertical: 10,
  }
});

export default HomeScreen;
