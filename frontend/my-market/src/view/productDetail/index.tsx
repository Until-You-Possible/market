
import React, { Fragment } from "react";
import NavigationHeader from "../../publicComponents/NavigationHeader";
import { Constants } from "../../model/constant";

const ProductDetail: React.FC = () => {
    return <Fragment>
        <div className="wrap productDetailContainer">
            <NavigationHeader title={Constants.NavigationText.DETAIL} />
        </div>
    </Fragment>
}

export default ProductDetail