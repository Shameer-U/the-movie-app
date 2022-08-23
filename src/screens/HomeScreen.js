import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import COLORS from '../constants/Colors'
import FONTS from '../constants/Fonts'
import GenreCard from '../components/GenreCard'
import MovieCard from '../components/MovieCard'
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
      <View>
        <FlatList
         data={Genres} 
         horizontal
         keyExtractor={(item) => item}
         showsHorizontalScrollIndicator={false}
         ItemSeparatorComponent={() => <ItemSeperator width={5}/>}
         ListHeaderComponent={() => <ItemSeperator width={5}/>}
         ListFooterComponent={() => <ItemSeperator width={5}/>}
         renderItem={({item}) => (
            <MovieCard/>
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
    fontFamily: FONTS.REGULAR,
  },
  headerSubTitle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    fontFamily: FONTS.BOLD,
  },
  genreListContainer: {
    paddingVertical: 10,
  }
});

export default HomeScreen;
