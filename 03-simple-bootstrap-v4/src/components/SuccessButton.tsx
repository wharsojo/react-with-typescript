import * as React from "react";

export interface SuccessButtonProps {
    children?: any;
    onClick?: any;
}

export class SuccessButton extends React.Component<SuccessButtonProps, {}> {
    render() {
        let {children, onClick} = this.props;
        const aProps = {
            className: "btn btn-lg btn-success",
            onClick: onClick,
            role: "button",
            href: "#",
        }
        return (
         <a {...aProps}>
            {children}
        </a>);
    }
}
