import React from 'react'
import './Calculator.css'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        action: '+',
        a:0,
        b:0
    }
    calculate = () => {
        if(!this.state.a || !this.state.b){
            alert("Fill in the both fields")
            return;
        }
        const a = Number.parseFloat(this.state.a)
        const b = Number.parseFloat(this.state.b)
        switch(this.state.action) {
            case '+':
                this.props.onResult(a + b)
                break;
            case '-':
                    this.props.onResult(a - b)
                break;
            case '*':
                    this.props.onResult(a * b)
                break;
            case '/':
                    b === 0 ? alert("B cannot be 0 in this case!") : this.props.onResult(a / b)
            break;
            case '%':
                b === 0 ? alert("B cannot be 0 in this case!") : this.props.onResult(a % b)
            break;
        }
    }
    render(){
        return (
            <div className='container-dark p-3 border border-info text-info w-50 m-2'>
                <h1>Calculator</h1>
                <div className='d-flex column-gap-2'>
                    <input style={{boxShadow: `2px 2px 20px rgb(3, 122, 254, ${this.state.a}%)`}} className='form-control text-info border-info' type='number' step={0.1} value={this.state.a} onChange={(event)=>this.setState({a: event.target.value})}/>
                    <select className='form-select bg-primary border-0 w-25' onChange={(event)=>this.setState({action: event.target.value})}>
                        <option value={'+'}>+</option>
                        <option value={'-'}>-</option>
                        <option value={'*'}>*</option>
                        <option value={'/'}>/</option>
                        <option value={'%'}>%</option>
                    </select>
                    <input style={{boxShadow: `2px 2px 20px rgb(3, 122, 254, ${this.state.b}%)`}} className='form-control text-info border-info' type='number' step={0.1} value={this.state.b} onChange={(event)=>this.setState({b: event.target.value})}/>
                    <button className='btn btn-outline-info w-25' onClick={this.calculate}>=</button>
                </div>
            </div>
        )
    }
}

export default Calculator