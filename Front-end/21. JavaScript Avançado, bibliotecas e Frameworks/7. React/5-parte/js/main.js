const container = document.getElementById('main')

class App extends React.Component {
    render() {
        return(
            <h1>Olá Mundo</h1>
        )
    }
}

class Form extends React.Component {
    render() {
        return(
            <form>
                <input type="text" />
                <input type="submit" />
            </form>
        )
    }
}


ReactDOM.render(<Form />, container)