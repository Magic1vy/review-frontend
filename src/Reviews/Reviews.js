import React from "react";

const Reviews = ({name, comment}) => {
    return(
        <div>
            <h6>{ name }</h6>
            <p className="text">{ comment }</p>
        </div>
    )
}
export default Reviews;