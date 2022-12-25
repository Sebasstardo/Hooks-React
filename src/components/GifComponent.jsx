import React, { useLayoutEffect, useRef, useState } from 'react'

const GifComponent = ({ url, type }) => {

    const pRef = useRef();
    const [boxSize, setboxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const {height, width} = pRef.current.getBoundingClientRect();
        setboxSize({height, width})
    }, [type])



    return (

        <>
            <blockquote className='blockquote text-end'
                style={{ display: 'flex' }}>
                <h3 ref={pRef} className='mb-2'>{url}</h3>
                <img src={url} alt="" />
                <footer className='blockquote-footer'>{type}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>



    )
}

export default GifComponent