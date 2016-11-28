import * as React from "react";

export interface LeadProps {
    children?: any
}

export class Lead extends React.Component<LeadProps, {}> {
    render() {
        return (
        <p className="lead">
            {this.props.children}
        </p>);
    }
}
