import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import styled from '@emotion/styled'
/* const MyCV = require ('../docs/Curriculum-efracode.pdf') */

const ContainerPdf = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

const Pdf = () => {
    return (
            <PDFViewer
                document={{
                    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                }}
            />
    )
}

export default Pdf