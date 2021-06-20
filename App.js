import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import InputNumberButton from './InputNumberButton'

const App = () => {
  const[buttonValue, setButtonvalue] = useState("");
      const getValue = (value) => {
        try
          {if (value === '='){
            if (buttonValue == ""){
              return setButtonvalue("")
            }
            else{
              console.log(buttonValue)
              return setButtonvalue(eval(buttonValue))
            }
          }
          else if (value === 'CLEAR'){
            return setButtonvalue("")
          }
          else if (value === 'DEL'){
            return setButtonvalue(String(buttonValue).slice(0,-1))
          }
          console.log(value);
          setButtonvalue(buttonValue + value)
          }
        catch (e){
          setButtonvalue("ERROR")
        }
      }
  
  const buttons = [
    ['CLEAR','DEL'],
    ['7','8','9','/'],
    ['4','5','6','*'],
    ['1','2','3','+'],
    ['0','.','=','-']
  ];

  const renderButtons = () => {
    let layouts = buttons.map((buttonRow, index) =>{
      let rowItem = buttonRow.map((buttonItem, buttonIndex) =>{
        return <InputNumberButton
                    value={buttonItem}
                    handleOnPress={() =>{getValue(buttonItem)}} 
                    key={'btn-' + buttonIndex}/>
      });
      return <View style={styles.inputRows} key={'row-' + index}>{rowItem}</View>
    });
    return layouts
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{buttonValue}</Text>
      </View>
      <View style={styles.inputContainer}>
        {renderButtons()}
      </View>

    </View>
  )
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1, 
    },
    resultContainer:{
      flex: 2,
      justifyContent: "center",
      backgroundColor: "#22252D",
    },
    inputContainer:{
      flex: 8,
      backgroundColor: "#292D36",
    },
    resultText:{
      color: "white",
      fontSize: 80,
      fontWeight: "bold",
      padding: 20,
      textAlign: "right"
    },
    inputRows:{
      flex: 1,
      flexDirection: 'row',
    }
  }
);

export default App