/** @jsx jsx */
// import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content }) => (
  <div
    css={css`
      width: 100%;
      max-width: 1024px;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default Slide