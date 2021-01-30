import React from 'react';
import Navbar from './components/Navbar/Navbar';
import RezultatLista from './components/Rezultat/RezultatLista';

class App extends React.Component {

    state = {
        rezultati : []
    }

    componentDidMount(){
        fetch('https://api.waqi.info/feed/Tuzla/?token=72e6cd3bd51cefac96d3416c2ed9ac7f9f242f77')
        .then(res=>{
            return res.json();
        })
        .then(rezultat =>{
            this.setState({rezultati:rezultat.data})
        })
    }

    render() { 
        return ( 
            <>
            <Navbar/>
            <RezultatLista rezultati = {this.state.rezultati} />
            </>
         )
    }
}
 
export default App;