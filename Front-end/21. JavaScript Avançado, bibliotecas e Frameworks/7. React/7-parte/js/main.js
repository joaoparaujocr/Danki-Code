const container = document.getElementById('main')

class App extends React.Component {
    render() {
        let n = 10
        return(
            <h1>Número {n}</h1>
        )
    }
}

class Form extends React.Component {
    render() {
        return(
            <form>
                <input type="text" />
                <input type="submit" />
                <App />
            </form>
        )
    }
}


ReactDOM.render(
    <Form />,
    container
)