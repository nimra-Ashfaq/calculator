// Working.js
/*import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../style/Styles';  // Import styles from the Styles.js

const Working = () => {
  const [input, setInput] = useState(''); // To keep track of the input

  // Function to handle button click
  const handleButtonPress = (value) => {
    setInput(input + value);  // Update input with the clicked value
  };

  // Function to evaluate the result of the expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());  // Evaluates the expression
    } catch (error) {
      setInput('Error');  // If evaluation fails
    }
  };

  // Function to clear the input
  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1)); // Remove the last character from the input
  };

  const handleDecimal = () => {
    // Prevent multiple decimals in a number (only one decimal allowed)
    if (!input.includes('.') || input[input.length - 1] === ' ') {
      setInput(input + '.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Displaying input 
      <Text style={styles.display}>{input}</Text>

      {/* Calculator buttons 
      <View style={styles.buttonContainer}>
        
        <View style={styles.row}>    
          <Button title="C" onPress={handleClear} style={[styles.button, styles.operatorButton]}/>
          <Button title="<-" onPress={handleBackspace} style={[styles.button, styles.operatorButton]} />
          <Button title="." onPress={handleDecimal} style={[styles.button, styles.operatorButton]} />
          <Button title="/" onPress={() => handleButtonPress('/')} style={[styles.button, styles.operatorButton]}/>
        </View>

        <View style={styles.row}>    
        <Button title="7" onPress={() => handleButtonPress('7')} style={[styles.button]}/>
        <Button title="8" onPress={() => handleButtonPress('8')}style={[styles.button]} />
        <Button title="9" onPress={() => handleButtonPress('9')} style={[styles.button, styles.operatorButton]}/>
        <Button title="*" onPress={() => handleButtonPress('*')} style={[styles.button, styles.operatorButton]} />
        </View>

        <View style={styles.row}>
          <Button title="4" onPress={() => handleButtonPress('4')} style={[styles.button, styles.operatorButton]}/>
          <Button title="5" onPress={() => handleButtonPress('5')} style={[styles.button, styles.operatorButton]}/>
          <Button title="6" onPress={() => handleButtonPress('6')} style={[styles.button, styles.operatorButton]}/>
          <Button title="-" onPress={() => handleButtonPress('-')} style={[styles.button, styles.operatorButton]}/>
        </View>

        <View style={styles.row}>
          <Button title="1" onPress={() => handleButtonPress('1')} style={[styles.button, styles.operatorButton]}/>
          <Button title="2" onPress={() => handleButtonPress('2')} style={[styles.button, styles.operatorButton]}/>
          <Button title="3" onPress={() => handleButtonPress('3')} style={[styles.button, styles.operatorButton]}/>
          <Button title="+" onPress={() => handleButtonPress('+')} style={[styles.button, styles.operatorButton]}/>
          </View>
        <View style={styles.row}>
          <Button title="C" onPress={handleClear} style={[styles.button, styles.operatorButton]}/>
          <Button title="0" onPress={() => handleButtonPress('0')} style={[styles.button, styles.operatorButton]}/>
          <Button title="=" onPress={handleEvaluate} style={[styles.button, styles.operatorButton]}/>
        </View>

         
      </View>
    </View>
  );
};

export default Working;*/

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style/Styles';  // Import styles from Styles.js

const Working = () => {
  const [input, setInput] = useState(''); // To keep track of the input

  // Function to handle button click
  const handleButtonPress = (value) => {
    setInput(input + value);  // Update input with the clicked value
  };

  // Function to evaluate the result of the expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());  // Evaluates the expression
    } catch (error) {
      setInput('Error');  // If evaluation fails
    }
  };

  // Function to clear the input
  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1)); // Remove the last character from the input
  };

  const handleDecimal = () => {
    // Prevent multiple decimals in a number (only one decimal allowed)
    if (!input.includes('.') || input[input.length - 1] === ' ') {
      setInput(input + '.');
    }
  };

   // Function to calculate percentage
   const handlePercentage = () => {
    setInput((parseFloat(input) / 100).toString());  // Divide the input value by 100 to get the percentage
  };

  return (
    <View style={styles.container}>
      {/* Displaying input */}
      <Text style={styles.display}>{input}</Text>

      {/* Calculator buttons */}
      <View style={styles.buttonContainer}>
        
        <View style={styles.row}>    
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={handleClear}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={handleBackspace}>
            <Text style={styles.buttonText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={handleDecimal}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleButtonPress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>    
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleButtonPress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleButtonPress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleButtonPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={handlePercentage}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={handleEvaluate}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Working;

