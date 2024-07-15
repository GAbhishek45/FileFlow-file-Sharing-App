import { QRCodeSVG } from 'qrcode.react'
import React from 'react'

const Qr = ({downloadURL}) => {
  return (
    <div>
        <QRCodeSVG value={downloadURL} size={100} /> 
    </div>
  )
}

export default Qr