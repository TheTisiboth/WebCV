import React, { ReactElement } from "react";
import {
    Tooltip,
} from "react-bootstrap";

// Display a tooltip next to the element
export const renderTooltip = (propss: string): ReactElement => {
    return <Tooltip id="button-tooltip">{propss}</Tooltip>;
};