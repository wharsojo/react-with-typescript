import * as React from "react";

export interface HeaderProps {
    children?: any
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
         <div className="header clearfix">
            {this.props.children}
        </div>);
    }
}
