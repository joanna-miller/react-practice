import React from 'react';
import NumberOutput from '../NumberOutput/NumberOutput';
import { CalculatorModel } from '../../interfaces/calculatorModels';

interface Props {
  calculatorState:CalculatorModel
}

const holderStyle = {
  marginTop: '20px',
  display: 'inline-grid'
}

export class OutputHolder extends React.Component<Props> {
  render() {
    const operandA = this.props.calculatorState.operandA;
    const operandB = this.props.calculatorState.operandB;

    const sum = Number(operandA) + Number(operandB);
    const dif = operandA - operandB;
    const mul = operandA * operandB;
    const dvs = operandB ? 0 : operandA / operandB;

    return(
      <div style = {holderStyle}>
        <NumberOutput name = "ADDITION" value={sum} />
        <NumberOutput name = "SUBTRACTION" value={dif} />
        <NumberOutput name = "MULTIPLICATION" value={mul} />
        <NumberOutput name = "DIVISION" value={dvs} />
      </div>
    );
  }
}

export default OutputHolder;
