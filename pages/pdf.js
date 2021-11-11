import React, { useState } from 'react'
import { Document, Page } from "react-pdf";
import styled from '@emotion/styled'
/* const MyCV = require ('../docs/Curriculum-efracode.pdf') */

const ContainerPdf = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

const Pdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    
    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
      
    function previousPage() {
        changePage(-1);
    }
      
    function nextPage() {
        changePage(1);
    }

    return (
        <div>

            <div style={{ width: 600 }}>
                <Document
                    file="docs/Curriculum-efracode.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
            
        </div>
    )
}

export default Pdf