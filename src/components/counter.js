export default class Counter extends React.Component {
    constructor(props) {
        super(props)
    //    this.state = {
    //        value: this.props.counter.value
    //     //    id: this.props.id
    //    }
        
        this.style = {
            fontSize: 15,
            fontWeight: 'bold'
        }
        
        this.formatCount = this.formatCount.bind(this);
        this.getBadgeClasses = this.getBadgeClasses.bind(this); 

    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value == 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        // console.log(this.props.counter)
        const value = this.props.counter.value;
        return value == 0 ? 'Zero' : value;
    }
    
    render() {
        
        return (
            <div>
               <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
               <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
               <button className="btn btn-danger btn-sm m-2" onClick={ () => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        )
    }
    
}