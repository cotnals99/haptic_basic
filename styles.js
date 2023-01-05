import { Dimensions, StyleSheet } from 'react-native'
const { height, width } = Dimensions.get("screen")

export const GameScreenStyles = StyleSheet.create({
   toastContainer: {
       position: "absolute",
       width: 200,
       textAlign: 'center',
       borderBottomLeftRadius: 10,
       borderBottomRightRadius: 10,
       height: 40,
       alignItems: 'center',
       justifyContent: 'center',
   },
   center: {
       height: height - 150,
       alignItems: "center",
       justifyContent: 'center'
   },
   text: {
       textTransform: "uppercase",
       textAlign: "center",
       fontSize: 18
   },
   button: {
       height: 45,
       backgroundColor: "#201238",
       width: width - 50,
       borderRadius: 5,
       justifyContent: "center"
   },
   buttonText: {
       textTransform: "uppercase",
       textAlign: "center",
       color: "#fff"
   },
   tileContainer: {
       height: 300,
       flexWrap: "wrap",

   },
   tile: {
       flex: 1,
       flexGrow: 1,
       flexBasis: 100,
       borderColor: "red",
       borderWidth: 1,
       justifyContent: 'center',
       height: 80,
       width: 80
   }
})


export const HomeScreenStyles = StyleSheet.create({
   underline: {
       height: 5,
       width: 45,
       backgroundColor: "#D8D8D8"
   },
   center: {
       alignItems: "center",
   },
   row: {
       flexDirection: "row",
       justifyContent: "space-between",
       width: width / 2,
   },
   container: {
       height,
       flex: 1,
       justifyContent: 'space-between'
   },
   text: {
       textTransform: "uppercase",
       textAlign: "center",
       fontSize: 18
   },
   button: {
       height: 45,
       backgroundColor: "#201238",
       width: width - 50,
       borderRadius: 5,
       justifyContent: "center"
   },
   buttonText: {
       textTransform: "uppercase",
       textAlign: "center",
       color: "#fff"
   },
})