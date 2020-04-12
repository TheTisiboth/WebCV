import React, { ReactElement } from "react";
import {
    Tooltip,
} from "react-bootstrap";

export const renderTooltip = (propss: string): ReactElement => {
    return <Tooltip id="button-tooltip">{propss}</Tooltip>;
};