import { useState } from "react";
import { StyleSheet, View, FlatList, Button} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/Goalitem";
import GoalInput from "./components/Goalinputs";

export default function App() {
  const [modalIsVisible, setModalisVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);
  

  function startAddGoalHandler(){
    setModalisVisible(true);
  }
  
  function endAddGoalHandler(){
    setModalisVisible(false)
  }
  
  function addGoalhandler(enteredGoalText) {
    if(enteredGoalText == ""){
      endAddGoalHandler()
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();

  }
  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title = 'Add New Goal'
     
       color = "#1AF500"
       onPress = {startAddGoalHandler}
       />
      {modalIsVisible && <GoalInput 
      addGoal={addGoalhandler}  
      visible = {modalIsVisible}
      cancel = {endAddGoalHandler}
      />}
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
            <GoalItem
             text={itemData.item.text}
             id = {itemData.item.id}
            onDeleteItem = {deleteGoalHandler}
            />

            )
            
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#1e085e',
    flex: 1,
    paddingTop: 100,
    padding: 50,
    
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 10,
  },
  goalContainer: {
    marginTop: 15,
    flex: 7,
  },
});
