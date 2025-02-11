'use client'

import {FC, MouseEvent} from 'react'
import {NavDropdown} from 'react-bootstrap'
import Tooltip from '../link/tooltip'
import {FaRegFilePdf} from 'react-icons/fa'
import {getPDFUrl, handleDownload} from '../../utils/pdf'

type CVButtonItemProps = {
    href: string
    tooltip: string
    text: string
}
export const CVButtonItem: FC<CVButtonItemProps> = ({href, tooltip, text}) => {

    const handleOnClick = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        void handleDownload(getPDFUrl(href))
    }

    return (
        <NavDropdown.Item onClick={handleOnClick} className="text-center">
            <Tooltip tooltipLabel={tooltip}>
                <div>
                    <FaRegFilePdf className="mr-2"/>
                    {text}
                </div>
            </Tooltip>
        </NavDropdown.Item>
    )
}
