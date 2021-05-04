import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    //Anytime a new instance of the class is created,
    //this function is called before anything else.
    //Called before anything else on a new instance
    // constructor(props){
    //     super(props);
        
    //     this.state = { lat: null, errorMessage: '' };

    // }

    state = { lat:null, errorMessage: ''};

    componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({  errorMessage: err.message })
        );
    }

    componentDidUpdate(){
        console.log('My component was just updated - it rerendered');
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat)
        {
            return <SeasonDisplay lati = {this.state.lat} />;
        }

        return <Spinner  message="Please accept location request" />;
    }
    //Requirement of React to define Render!!
    render(){
        return (
           <div className="border-red">
               {this.renderContent()}
           </div> 
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);