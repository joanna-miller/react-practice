import * as React from 'react';
// import styles from './NumberInput.module.scss';

interface Props {
  name: string,
  value:number,
  callback: any
}

interface ClassState {
  value:number;
}

const inputStyle = {
  marginTop:'10px',
  display: 'inline-flex'
}

const divStyle = {
  width: '150px'
}

export class NumberInput extends React.Component<Props, ClassState>
{
  constructor(props: any, context: any) {
    super(props, context);
    this.onNumberChange = this.onNumberChange.bind(this);
  }

  onNumberChange(e:any) {
    this.props.callback(e.target.value);
  }

  render() {
    return (
      <div style={inputStyle}>
        <div style={divStyle}>{this.props.name}</div>
        <input
          type="number"
          value={this.props.value}
          onChange={this.onNumberChange}
        />
      </div>
    )
  }

}

export default NumberInput;