import Counter from './components/counter';
export default class Counters extends React.Component{
    constructor(props){
        super(props);  
    }

    render(){
        return(
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
                { this.props.counters.map(counter => ( 
                <Counter key={counter.id } id={counter.id} counter={counter} onIncrement={this.props.onIncrement}  onDelete={this.props.onDelete} >
                </Counter>
                )) }
            </div>
        );
    }
}