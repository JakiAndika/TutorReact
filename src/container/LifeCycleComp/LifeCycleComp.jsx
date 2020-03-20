import React, { Component } from 'react';
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log('constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromState');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(()=> {
            this.setState({
                count: 2
            })
        }, 3000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null; 
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }
    render() {
        console.log('render');
        return (
        <button className="btn">Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;