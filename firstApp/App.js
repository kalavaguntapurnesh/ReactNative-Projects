
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)

  }
  

  function addGoalHandler() {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>

       <View style={styles.inputContainer}>
        <TextInput style = {styles.textInput}
        placeholder='Your Course Goal'
        onChangeText={goalInputHandler}
        ></TextInput>
        <Button title='Add Goal'
        onPress={addGoalHandler}
        ></Button>
       </View>

       <View  style = {styles.goalsContainer}>

       <ScrollView>
        {courseGoals.map((goal) => 
        <Text style={styles.goalItem} key={goal}>{goal}</Text>
        )}
       </ScrollView>
       </View>

    </View>
  
   
  );

}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex:1,
 
  },
  inputContainer: {
    flex: 1,
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding:8,
  },

  goalsContainer: {
    flex: 3,

  },

  goalItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: 'white',
  }
   

});
