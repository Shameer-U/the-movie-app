import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import COLORS from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

const movieCard = () => {
  return (
    <TouchableOpacity>
        <View style={styles.container}>
            <Text>Movie</Text>
        </View>
        <View>
            <Text>URI - Surgical Strike</Text>
            <View>
                <Text>Hindi | U/A</Text>
                <View>
                    <Ionicons name="heart" size={24} color="black" />
                    <Text>90%</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.ACTIVE,
        height: 340,
        width: 230,
        borderRadius: 12,
        elevation: 5,
        marginVertical: 2,
    }
})

export default movieCard