import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { PageTileType } from "../dataType/product";
import { Constants } from "../model/constant";


const NavigationHeaderStyle: React.CSSProperties = {
    paddingTop    : "10px",
    paddingBottom : "10px",
    borderTop     : "2px solid #CF002C",
    marginTop     : "30px"
}

const NavigationHeader: React.FC<PageTileType> = (props) => {

    return <div style={NavigationHeaderStyle}>
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to="/home">{Constants.NavigationTextEnum.HOME}</Link>
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