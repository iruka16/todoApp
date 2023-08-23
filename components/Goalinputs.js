import { StyleSheet ,TextInput, View, Button, Modal, Image, Pressable, Text} from "react-native";
import { useState } from "react";


function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalinputhandler(enterTexted) {
        setEnteredGoalText(enterTexted)
      };
     
    
    
    function addGoalHandler(){
        props.addGoal(enteredGoalText);
       setEnteredGoalText('')
       };

    return(
      <Modal visible = {props.visible} animationType="slide">
        <View style = {styles.inputContainer}>
          <Image style = {styles.image} source = {require('../assets/images/goal.png')} />
        <TextInput style = {styles.textInput} placeholder='your course goal'  onChangeText={goalinputhandler} value = {enteredGoalText}/>
        <View style = {styles.ButtonContainer}>
        <Pressable 
            onPress = {props.cancel}
            style ={styles.celButton}
            >
            <View>
                <Text>CANCEL</Text>

            </View>
            </Pressable>
            <Pressable
            onPress = {addGoalHandler}
            style = {styles.addButton}
            >
            <View>
            <Text>ADD GOAL</Text>

            </View>
            </Pressable>
           </View>

        
           </View>
           </Modal>
           
    )

}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
      
      paddingHorizontal: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        
        backgroundColor: '#311b6b'    
        }, 
      ButtonContainer: {
        flexDirection: 'row',
        marginTop: 13
      },
      addButton: {
      marginLeft: 6,
       padding: 13,
       backgroundColor: '#1AF500',
        borderColor:'black',
        borderWidth:2,
          borderRadius: 6

      },
      celButton: {
        marginRight: 6,
         padding: 13,
         backgroundColor: '#f31282',
          borderColor:'black',
          borderWidth:2,
          borderRadius: 6
  
        },
      buttonStyle: {
        marginHorizontal: 8,
        width: 100 

      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },

      textInput: {
        color:'black',
        borderColor: '#e4f0ff',
        backgroundColor: '#e4d0ff',
        borderWidth: 1,
        width: '100%',
        margin: 8,
        padding: 18,
        borderRadius: 6
       
      }


})