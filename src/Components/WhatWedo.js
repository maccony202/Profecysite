import React from "react";
import  Card  from "react-bootstrap/Card";

const WhatWeDo = (props) => {
    return(
        <Card className="mx-3">
            <strong className="text-dark text-center fs-4 p-1">{props.title}</strong>
            <hr/>
          <p className="p-2">{props.details}</p>
          </Card>
    )
}
export default WhatWeDo;