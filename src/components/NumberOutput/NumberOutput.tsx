import * as React from 'react';
// import styles from './NumberOutput.module.scss';

interface Props {
  name:string,
  value:number
}

const inputStyle = {
  marginTop: '10px',
  display: 'inline-flex'
}

const divStyle = {
  width: '150px'
}

export class NumberOutput extends React.Component<Props> {
  render() {
    return (
      <div style={inputStyle}>
        <div style={divStyle}>{this.props.name}</div>
        <div>: {this.props.value}</div>
      </div>
    );
  }
}

export default NumberOutput;
