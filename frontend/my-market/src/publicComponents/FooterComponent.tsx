
import React from "react";
import { GithubOutlined } from "@ant-design/icons";

const footerStyle:React.CSSProperties = {
    height     : "80px",
    lineHeight : "80px",
    textAlign  : "center",
    cursor     : "pointer",
    color      : "#CF002C",
    fontWeight : "700",
    border     : "1px solid",
    background : "#fff"
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

    return <div className="" style={footerStyle}>
        <div onClick={onClickGithub} style={wrapperStyle}>
            <GithubOutlined style={iconStyle} />
            github: https://github.com/Until-You-Possible
        </div>
    </div>
}

export default FooterComponent;