import * as React from "react";

export interface ContainerProps {
    children?: any
}

export class Container extends React.Component<ContainerProps, {}> {
    render() {
        return (
         <div className="container">
            {this.props.children}
        </div>);
    }
}
