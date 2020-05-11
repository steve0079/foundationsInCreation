/** @jsx jsx */
// import React from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
    <span
        css={css`
            padding: 10px;
            margin: 0 10px;
            cursor: pointer;
            border-radius: 50%;
            background: ${active ? 'rgba(255,255,255, 0.50)' : 'rgb(255,255,255)'};
    `}
    />
)

const Dots = ({ slides, activeIndex }) => (
    <div
        css={css`
            position: absolute;
            bottom: 25px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
    `}
    >
        {slides.map((slide, i) => (
            <Dot key={slide} active={activeIndex === i} />
        ))}
    </div>
)

export default Dots;