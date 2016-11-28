import * as React from "react";

export interface ItemNavProps {
    children?: any,
    active?: string
}

export class ItemNav extends React.Component<ItemNavProps, {}> {
    render() {
        return (
        <li className="nav-item">
            <a className={"nav-link"+(this.props.active ? 'active':'')} href="#">
                {this.props.children}
            </a>
        </li>);
    }
}
