import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
    state = {
        ninjas : [
            { name: 'Леха', age: 40, id:1},
            { name: 'Петя', age: 35, id:2},
            { name: 'Вова', age: 21, id:3}
        ]
    }
    addNinja = (ninja) => {
            ninja.id = Math.random();
            let ninjas = [...this.state.ninjas, ninja]; //копия + пуш
            this.setState({
                ninjas: ninjas 
            })
        }

    deleteNinja = (id) =>{
        let ninjas = this.state.ninjas.filter(ninja => {
            return ninja.id !== id
         })
         this.setState({
             ninjas:ninjas
         })
    }
   

    render(){
        return(
            <div className="App">
                <h1>My first React app</h1>
                <h2>Weclome Епта!</h2>
                <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
                <AddNinja addNinja={this.state.addNinja}/>
            </div>
        );
    }
}

export default App;