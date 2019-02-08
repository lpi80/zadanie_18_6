const Counter = React.createClass({

    getDefaultProps: function() {
        console.log('Domyślne ustawienia parametrów -getDefaultProps- oszczędność czasu, nie zawsze wszystkie są używane')
    },

    componentWillMount: function() {
        console.log('Do przemyślenia -componentWillMount-')
    },

    componentDidMount: function() {
        console.log('Do przemyślenia -componentDidMount- pobieranie danych z serwera')
    },

    componentWillReceiveProps: function() {
        console.log('Do przemyślenia -componentWillReceiveProps- porównywanie starych i właściwości')
    },

    shouldComponentUpdate: function() {
        console.log('Do przemyślenia -shouldComponentUpdate-')
        return true;
    },

    componentWillUpdate: function() {
        console.log('Do przemyślenia -componentWillUpdate-')
    },

    componentDidUpdate: function() {
        console.log('Do przemyślenia -componentDidUpdate-')
    },

    componentWillUnmount: function() {
        console.log('Do przemyślenia -componentWillUnmount-')
    },

    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', { onClick: this.increment }, 'Increment'),
            React.createElement('button', { onClick: this.decrement }, 'Decrement'),
        );
    }
});

const App = React.createClass({
    render: function () {
        return (
            React.createElement('div', { className: 'app' },
                React.createElement(Counter, {}),
                React.createElement(Counter, {})
            )
        );
    }
});

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));