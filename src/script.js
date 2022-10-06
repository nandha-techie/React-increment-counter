import Counters from './components/counters';
import Nav from './components/nav';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counters:[
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
            ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleDelete(counterId){
        const counters = this.state.counters.filter(data => data.id != counterId);
        this.setState({ counters });
    }

    handleIncrement(counter){
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = counter;
        counters[index].value++;
        this.setState({ counters });
    }

    handleReset(){
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    }
    
    render(){
        return (
            <React.Fragment>
                <Nav totalCounter={this.state.counters.filter(counter => { return counter.value > 0}).length } />
                <Counters counters={this.state.counters } onIncrement={this.handleIncrement} onDelete={this.handleDelete} onReset={this.handleReset}></Counters>
            </React.Fragment>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
