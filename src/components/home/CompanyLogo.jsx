import React from 'react';
import {PearsonLogo} from "../Icons.jsx";


export default function CompanyLogo ({data}) {
    return (
        <img src={data.logo} width={75} height={75} />
    )
}

