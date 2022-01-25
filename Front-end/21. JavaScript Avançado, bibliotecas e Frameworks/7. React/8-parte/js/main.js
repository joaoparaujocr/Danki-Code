const container = document.getElementById('main')

class App extends React.Component {
    render() {
        return(
            <h1>Nome: {this.props.nome}</h1>
        )
    }
}

class Form extends React.Component {
    render() {
        return(
            <form>
                <input type="text" />
                <input type="submit" />
                <App nome="João"/>
                <App nome="Paulo"/>
                <App nome="Ribeiro"/>
            </form>
        )
    }
}


ReactDOM.render(
    <Form />,
    container
)