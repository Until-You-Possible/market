import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { PageTile } from "../dataType/product";
import { Constants } from "../model/constant";


const NavigationHeaderStyle: React.CSSProperties = {
    paddingTop: "10px",
    paddingBottom: "10px"
}

const NavigationHeader: React.FC<PageTile> = (props) => {

    return <div style={NavigationHeaderStyle}>
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to="/home">{Constants.NavigationText.HOME}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                {
                    props.title
                }
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}

export default NavigationHeader;