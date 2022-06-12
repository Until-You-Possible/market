
import React from "react";
import { GithubOutlined } from "@ant-design/icons";

const footerStyle:React.CSSProperties = {
    height     : "50px",
    lineHeight : "50px",
    textAlign  : "center",
    cursor     : "pointer",
    color      : "#CF002C",
    fontWeight : "700"
}

const iconStyle: React.CSSProperties = {
    marginRight: "10px"
}

const wrapperStyle: React.CSSProperties = {

}


const FooterComponent: React.FC = () => {

    const onClickGithub = () => {
        window.open("https://github.com/Until-You-Possible");
    }

    return <div className="wrap" style={footerStyle}>
        <div onClick={onClickGithub} style={wrapperStyle}>
            <GithubOutlined style={iconStyle} />
            github: https://github.com/Until-You-Possible
        </div>
    </div>
}

export default FooterComponent;