import { Text, View, StyleSheet, Pressable } from "react-native";

function AddButt(props){
    return(
        <View>
            <Pressable 
            onPress = {props.cancel}
            
            >
            <View>
                <Text>ADD GOAL</Text>

            </View>
            </Pressable>
            <Pressable>
            <View>
            <Text>CANCEL</Text>

            </View>
            </Pressable>
        </View>
    )
}
    // <View>
    //             <Button style = {styles.buttonStyle} title = 'CANCEL' onPress = {props.cancel} colors= "#f31282"/> 
    //         </View>
    //         <View >
    //         <Button style = {styles.buttonStyle} title='ADD GOAL'  onPress={addGoalHandler} color ="#1AF500"/>
    //         </View>


const styles = StyleSheet.create({
    buttonContainers: {
        
    },
    textIN: {

    }


})