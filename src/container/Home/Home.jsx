import React, { Component } from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
// import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000);
    }
    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YoutubeComp
                    time="7.12"
                    title="Toturial React Js - Bagian 1"
                    desc="2x ditontin. 2 hari yang lalu"
                />
                <YoutubeComp
                    time="8.02"
                    title="Toturial React Js - Bagian 2"
                    desc="200x ditontin. 10 hari yang lalu"
                />
                <YoutubeComp
                    time="5.04"
                    title="Toturial React Js - Bagian 3"
                    desc="500x ditontin. 4 hari yang lalu"
                />
                <YoutubeComp
                    time="4.12"
                    title="Toturial React Js - Bagian 4"
                    desc="1k ditontin. 14 hari yang lalu"
                />
                <YoutubeComp /> */}
                {/* <p>Counter</p>
                <hr />
                <Product /> */}

                <p>Life Cycle Component</p>
                <hr />
                {
                    this.state.showComponent ?
                        <LifeCycleComp />
                        : null
                }
            </div>
        )
    }
}

export default Home;