import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Colors from '../constants/Colors'
import FONTS from '../constants/Fonts'
import React, {useState, useEffect} from "react"
import { getMovieById, getPoster } from '../services/MovieService'
import ItemSeperator from '../components/ItemSeperator';

const {height, width} = Dimensions.get('screen')
const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

const MovieScreen = ({route, navigation}) => {
  const {movieId} = route.params
  const [movie, setMovie] = useState({})

  useEffect(() => {
    getMovieById(movieId).then((response) => setMovie(response.data))
  }, [])
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.moviePosterImageContainer}>
         <Image style={styles.moviePosterImage} resizeMode="cover"
            source={{uri: getPoster(movie.backdrop_path)}}
        />
      </View>
      <ItemSeperator height={setHeight(37)} />
      <Text>{movie.title}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BASIC_BACKGROUND,
  },
  moviePosterImageContainer: {
    height: setHeight(35),
    width: setWidth(145),
    alignItems: "center",
    position: "absolute",
    left: setWidth((100-145)/2),
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    elevation: 8,
  },
  moviePosterImage: {
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    width: setWidth(145),
    height: setHeight(35),
  }
});

export default MovieScreen;
