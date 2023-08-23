import { StyleSheet, View, Text, Pressable, Image } from "react-native";



function GoalItem(props){
    return (
        <View  style = {styles.listItems} >
        <Pressable onPress = {
            props.onDeleteItem.bind(this, props.id)}
            style = {({pressed}) => pressed && styles.pressedItem}
            >
        <Text style = {styles.listText} >{props.text}</Text>
         </Pressable>
         </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    listItems: {
       
        borderWidth: 2,
        width: '100%',
        borderRadius: 6,
        borderColor: 'white',
        marginBottom: 6,
        
        backgroundColor: '#5e0acc',
      },
      pressedItem: {
        opacity: 0.5, 

      },
      listText: {
       color: 'white',
       padding: 7,
       paddingLeft: 10,
       fontSize: 19,
       
      }


});