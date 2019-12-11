import React, { Component } from 'react';

class Halloworld extends Component{
    state = {
        nama: 'Code',
        age: '16',
        gender: 'male'
    }
    componentDidMount(){
        this.setState({
            nama: "halloooooo",
            age: '59',
            gender: 'female',
            number: 0
        })
    }

    handleAddValue(){
        this.setState({
            number: this.state.number + 1
        })
    }

    handleMinValue(){
        if(this.state.number > 0)
        {
            this.setState({
                number: this.state.number - 1
            })
        }
    }

    handleResetValue(){
        this.setState({
            number: 0
        })
    }
    render(){
        return(
            <div>
                <h1>hello world {this.state.nama} the age is {this.state.age} my gender : {this.state.gender}</h1>

            <div>
            <h1><b>{this.state.number}</b></h1>
            <button onClick={()=> this.handleAddValue()}>tambahkan 1</button>
            <button onClick={()=> this.handleMinValue()}>tambahkan 1</button>
            <button onClick={()=> this.handleResetValue()}>tambahkan 1</button>
        
        </div>
        </div>
        )
    }
}

export default Halloworld;