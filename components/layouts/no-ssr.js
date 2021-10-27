import React from 'react'
import dynamic from 'next/dynamic'

const NoSsr = (Props => <>{Props.children}</>)

export default dynamic(() => Promise.resolve(NoSsr), {
    ssr: false
})