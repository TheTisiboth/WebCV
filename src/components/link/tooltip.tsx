import {FC, ReactElement} from 'react'
import {OverlayTrigger, Tooltip as BTooltip} from 'react-bootstrap'
import type {Placement} from 'react-bootstrap/types'

type TooltipProps = {
    placement?: Placement
    tooltipLabel: string
    children: ReactElement
}
const Tooltip: FC<TooltipProps> = ({placement = 'bottom', tooltipLabel, children}) => {
    return (
        <OverlayTrigger
            placement={placement}
            delay={{show: 0, hide: 0}}
            overlay={<BTooltip>{tooltipLabel}</BTooltip>}
        >
            {children}
        </OverlayTrigger>
    )
}

export default Tooltip
