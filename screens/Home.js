import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeScreenStyles as styles } from '../styles'
import * as Haptics from 'expo-haptics';

const gamePlayers = ["X", "O"]

const Home = ({navigation}) => {
    const [selectedPlayer, selectPlayer] = useState(null)

  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#8DC7DA"}}>
      <View style={styles.container}>
        <Text style={[styles.text, {marginTop: 30}]}>Welcome</Text>
        <Text style={styles.text}>Pick Your Player</Text>

        <View style={[styles.center]}>
            <View style={styles.row}>
                {
                    gamePlayers.map((player, idx) => (
                        <TouchableOpacity key={idx} onPress={() => selectPlayer(player)}>
                            <Text style={[styles.text, {
                                fontSize: 30
                            }]}>{player}</Text>

                            <View
                                style={
                                    [styles.underline, {
                                        backgroundColor: selectedPlayer === player ? "green" : "#D8D8D8"
                                    }]
                                }
                            />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>

        <View style={[styles.center, {marginBottom: 20}]}>
            <TouchableOpacity
            onPress={() => {
                if(selectedPlayer) {
                    navigation.navigate("Game", {selectedPlayer})
                    return
                }
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
            }}
            style={[styles.button, {opacity: !selectedPlayer && 0.5}]}
            >
                <Text style={styles.buttonText}>Match me with my opponent</Text>

            </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  )
}

export default Home