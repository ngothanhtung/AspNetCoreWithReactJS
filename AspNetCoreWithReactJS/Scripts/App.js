import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: null,
            loading: true
        };
    }
    componentDidMount() {
        // get json data from remote api
        fetch("/api/book")
            .then(res => res.json())
            .then((result) => {
                this.state.model = result;
                this.setState({ loading: false });
                this.setState(this.state);
            });
    }

    render() {
        if (this.state.loading === false) {
            return (
                <div>
                    <h1>Hello From ReactJS</h1>
                    {
                        this.state.model.map((x) =>
                            <h3 key={x.id}>
                                {x.name}
                            </h3>
                        )
                    }
                </div>
            );
        } else {
            return (
                <h1>Loading ... </h1>
            );
        }
    }
}