import * as React from "react";

export interface NavProps {
    children?: any
}

export class Nav extends React.Component<NavProps, {}> {
    render() {
        return (
        <nav>
            <ul className="nav nav-pills float-xs-right">
                {this.props.children}
            </ul>
        </nav>);
    }
}
