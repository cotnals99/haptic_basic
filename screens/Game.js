import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GameScreenStyles as styles  } from '../styles'
import * as Haptics from 'expo-haptics';
import { getWinner, findUniqueRandomNumber, Toast, GameTile  } from '../src/utils'
const Game = ({ route }) => {
   const player = route?.params?.selectedPlayer

   const [gameTiles, setGameTile] = useState(Array(9).fill(null))
   const [gameStatus, setGameStatus] = useState('ONGOING')
   const [matchedTiles, setMatchedTiles] = useState([])
   const [isGameDisabled, disableGame] = useState(false)

   const handleTileClick = (position) => {
       Haptics.selectionAsync()

       if (!gameTiles[position] && !isGameDisabled) {
           let tilesCopy = [...gameTiles]

           if (!tilesCopy.includes(null)) {
               setGameStatus("TIE")
               disableGame(true)
               return
           }

           // user move
           tilesCopy[position] = player

           // Simulating computer move
           setTimeout(() => {
            tilesCopy[findUniqueRandomNumber(tilesCopy)] = player === "X" ? "O" : "X"
               const gameResult = getWinner(tilesCopy)

               if (gameResult?.winningPlayer) {
                   disableGame(true)
                   setMatchedTiles(gameResult?.matchingTiles)

                   if (gameResult?.winningPlayer === player) {
                       setGameStatus("WIN")
                       Haptics.notificationAsync(Haptics.impactAsync.Heavy)
                   } else {
                       setGameStatus("LOSS")
                       Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
                   }
               }

               setGameTile(tilesCopy)
           }, 500)
       } else if (!gameTiles.includes(null)) {
           setGameStatus("TIE")
           disableGame(true)

           Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
       }
   }

   const resetGameState = () => {
       setGameTile(new Array(9).fill(null))
       disableGame(false)
       setMatchedTiles([])
       setGameStatus("ONGOING")

       Haptics.notificationAsync(
           Haptics.NotificationFeedbackType.Success
       )
   }

   return (
       <SafeAreaView style={{ flex: 1, backgroundColor: "#8DC7D4" }} >
           <View>
               <Toast eventType={gameStatus} />

               <View style={styles.center} >
                   <View style={[styles.tileContainer,]} >
                       {
                           gameTiles.map((item, idx) =>
                               <GameTile
                                   key={idx}
                                   item={item}
                                   handlePress={() => {
                                       handleTileClick(idx)
                                   }}
                                   matchedTile={matchedTiles.includes(idx)}
                               />
                           )
                       }
                   </View>
               </View>

               <Button title="RESET GAME" onPress={(() => resetGameState())} />
           </View>
       </SafeAreaView>
   )
}

export default Game