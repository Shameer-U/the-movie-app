import { StyleSheet, Text, View, Dimensions} from 'react-native'
import COLORS from '../constants/Colors'

const {width} = Dimensions.get('screen')

const setWidth = (w) => (width / 100) * w;

const GenreCard = () => {
    return(
        <View style={StyleSheet.container}>
            <Text>Action</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: COLORS.WHITE,
        paddingVertical: 8,
        elevation: 3,
        marginVertical: 2,
        width: 25,//setWidth(25),
    },
})

export default GenreCard