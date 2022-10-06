export default class Nav extends React.Component {
    constructor(props) {
        super(props)
    //   

    }
    render() {
        
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar <span className="badge badge-secondary">{ this.props.totalCounter }</span></a>
            </nav>
        )
    }
    
}