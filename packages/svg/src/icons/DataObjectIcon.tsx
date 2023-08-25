import { FC } from "react"
import { IconProps } from "./types"

export const DataObjectIcon: FC<IconProps> = ({ width, height, ...props }) => {
    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            {...props}
        >
            <path d="M54.79785,119.48535A34.95033,34.95033,0,0,1,49.05078,128a34.95033,34.95033,0,0,1,5.74707,8.51465C60,147.24414,60,159.8291,60,172c0,25.93652,1.84424,32,20,32a12,12,0,0,1,0,24c-19.14453,0-32.19775-6.90234-38.79785-20.51465C36,196.75586,36,184.1709,36,172c0-25.93652-1.84424-32-20-32a12,12,0,0,1,0-24c18.15576,0,20-6.06348,20-32,0-12.1709,0-24.75586,5.20215-35.48535C47.80225,34.90234,60.85547,28,80,28a12,12,0,0,1,0,24c-18.15576,0-20,6.06348-20,32C60,96.1709,60,108.75586,54.79785,119.48535ZM240,116c-18.15576,0-20-6.06348-20-32,0-12.1709,0-24.75586-5.20215-35.48535C208.19775,34.90234,195.14453,28,176,28a12,12,0,0,0,0,24c18.15576,0,20,6.06348,20,32,0,12.1709,0,24.75586,5.20215,35.48535A34.95033,34.95033,0,0,0,206.94922,128a34.95033,34.95033,0,0,0-5.74707,8.51465C196,147.24414,196,159.8291,196,172c0,25.93652-1.84424,32-20,32a12,12,0,0,0,0,24c19.14453,0,32.19775-6.90234,38.79785-20.51465C220,196.75586,220,184.1709,220,172c0-25.93652,1.84424-32,20-32a12,12,0,0,0,0-24Z" />
        </svg>
    )
}

export default DataObjectIcon