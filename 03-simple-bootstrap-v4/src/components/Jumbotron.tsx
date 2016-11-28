import * as React from "react";

export interface JumbotronProps {
    children?: any
}

export class Jumbotron extends React.Component<JumbotronProps, {}> {
    render() {
        return (
         <div className="jumbotron">
            {this.props.children}
        </div>);
    }
}
