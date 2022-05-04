import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "./src/components/Button";
import Display from "./src/components/Display";

const initialState = {
  displayValue: "0",
  displayNeedsCleaning: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component {
  state = { ...initialState }; //gera um clone do estado inicial para resetar posterioremente

  addDigitToDisplay = (n) => {
    if (n === "." && this.displayValue.includes(".")) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === "0" || this.state.displayNeedsCleaning;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, displayNeedsCleaning: false });

    if (n != ".") {
      //se o valor digitado nao foi o ponto, foi um valor valido
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values]; //clona o vetor values dentro da funcao para manipular e entao alterar no estado da classe
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  };

  clearMemory = () => {
    this.setState({ displayValue: "0" });
  };

  setOperation = (operation) => {};

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button label="/" operation onClick={this.setOperation} />
          <Button label="7" onClick={this.addDigitToDisplay} />
          <Button label="8" onClick={this.addDigitToDisplay} />
          <Button label="9" onClick={this.addDigitToDisplay} />
          <Button label="*" operation onClick={this.setOperation} />
          <Button label="4" onClick={this.addDigitToDisplay} />
          <Button label="5" onClick={this.addDigitToDisplay} />
          <Button label="6" onClick={this.addDigitToDisplay} />
          <Button label="-" operation onClick={this.setOperation} />
          <Button label="1" onClick={this.addDigitToDisplay} />
          <Button label="2" onClick={this.addDigitToDisplay} />
          <Button label="3" onClick={this.addDigitToDisplay} />
          <Button label="+" operation onClick={this.setOperation} />
          <Button label="0" double onClick={this.addDigitToDisplay} />
          <Button label="." onClick={this.addDigitToDisplay} />
          <Button label="=" operation onClick={this.setOperation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
