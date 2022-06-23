
import React, { Fragment } from "react";
import { Constants } from "../../model/constant";
import "../../css/personalInfo.css";
import NavigationHeader from "../../publicComponents/NavigationHeader";


const PersonalInfo: React.FC = () => {
    return <Fragment>
        <div className="wrap personalContainer">
            <NavigationHeader title={Constants.NavigationText.PERSONAL} />
        </div>
    </Fragment>
}

export default PersonalInfo