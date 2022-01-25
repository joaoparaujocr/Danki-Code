const container = document.getElementById('main')

class App extends React.Component {
    render() {
        return(
            <h1>Nome: {this.props.nome}</h1>
        )
    }
}

class Form extends React.Component {
    handleClick() {
        // document.body.style.backgroundColor = "red"
        document.body.innerHTML += '<div style="width: 500px; height: 500px; background-color: green;"></div>'
    }
    render() {
        return(
            <div>
                <input type="text" />
                <input type="submit" onClick={this.handleClick}/>
                <App nome="João"/>
                <App nome="Paulo"/>
                <App nome="Ribeiro"/>
            </div>
        )
    }
}


ReactDOM.render(
    <Form />,
    container
)