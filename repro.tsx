import { Component, render } from "preact";

class ReproParent extends Component<{}, { first: boolean }> {
    constructor(props) {
        super(props);
        this.state = { first: true };
    }

    public render() {
        if (this.state.first) {
            return <>
                {<><p>1. Original item first paragraph</p></>}
                <p>2. Original item second paragraph</p>
                <button onClick={() => this.setState({ first: false })}>Click me</button>
            </>;
        } else {
            return <>
                <p>1. Second item first paragraph</p>
                {<>
                    <p>2. Second item second paragraph</p>
                    <div></div>
                </>}
            <button onClick={() => this.setState({ first: true })}>Click me</button>
            </>;
        }
    }
}

render(<ReproParent/>, document.getElementById("root"));
