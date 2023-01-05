import { GameScreenStyles as styles  } from '../styles'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

const GAME_WINNING_COMBINATIONS = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
]

const guessNumber = () => Math.floor(Math.random() * 9)

export const findUniqueRandomNumber = (exisitingArr) => {
   let rand = guessNumber();

   for (let i = 0; i < exisitingArr.length; i++) {
       if (exisitingArr[rand]) {
           rand = guessNumber()
       } else {
           return rand
       }
   }
}

export const getWinner = (existingArray) => {
   for (let i = 0; i <= 7; i++) {
       const winCombination = GAME_WINNING_COMBINATIONS[i];

       let a = existingArray[winCombination[0]];
       let b = existingArray[winCombination[1]];
       let c = existingArray[winCombination[2]];

       if (a === b && b === c) {
           return { winningPlayer: a, matchingTiles: [winCombination[0], winCombination[1], winCombination[2]] }
       }
   }
}

export const Toast = ({ eventType }) => (
   <View style={{ alignItems: 'center' }} >
       <View style={[styles.toastContainer, { backgroundColor: eventType === "LOSS" ? "red" : "#5CB85C" }]} >
           {
               eventType === "ONGOING" &&
               <Text style={{ color: "white" }} > Match is ON! </Text>
           }
           {
               eventType === "WIN" &&
               <Text style={{ color: "white" }} > You have WON this round! </Text>
           }
           {
               eventType === "LOSS" &&
               <Text style={{ color: "white" }} > You have been DEFEATED!  </Text>
           }
           {
               eventType === "TIE" &&
               <Text style={{ color: "white" }} > It's a TIE </Text>
           }
       </View>
   </View>
)

export const GameTile = ({ item, handlePress, matchedTile }) => (
   <TouchableWithoutFeedback
       onPress={() => handlePress()}
   >
       <View
           style={[styles.tile, { backgroundColor: matchedTile ? "#5CB85C" : "transparent" }]}
       >
           <Text style={[styles.text, { fontSize: 27 }]} > {item}  </Text>
       </View>
   </TouchableWithoutFeedback>
)