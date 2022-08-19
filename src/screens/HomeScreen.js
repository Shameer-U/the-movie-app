import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import COLORS from '../constants/Colors'
import GenreCard from '../components/GenreCard'

const Genres = ['All', 'Action', 'Comedy', 'Romance']

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" translucent={false} backgroundColor={COLORS.BASIC_BACKGROUND}/>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View>
        <FlatList data={Genres} 
         horizontal
         keyExtractor={(item) => item}
         renderItem={({item}) => <GenreCard/>}
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
  }
});

export default HomeScreen;
