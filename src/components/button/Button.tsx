import * as React from "react";

interface IProps {
    size : "regular" | "large";
}

class Button extends React.PureComponent < IProps > {
    render() {
        const {
            size,
            children,
            ...rest
        } = this.props;
        return (
            <button
                {...rest}
                style={{
                border: "none",
                padding: size === "regular"
                    ? "8px 14px"
                    : "12px 16px",
                background: "hotpink",
                borderRadius: "4px",
                color: "white"
            }}>
                {children}
            </button>
        );
    }

    static defaultProps = {
        size: "regular"
    };
}

export default Button;