import React from 'react'

interface ICopyToClipboard {
    text: string;
}

const CopyToClipboard: React.FC<ICopyToClipboard> = (text) => {
    return (
        <>
        <button>Copy!</button>
        </>
    )
}