// @ts-ignore
// eslint-disable-next-line no-use-before-define
import React from 'react'
import config from '../config.json'

export default function title () {
  return (
    <h1 className='spectrum-Heading spectrum-Heading--sizeXXXL' style={{ textAlign: 'center' }}>
      { config.TITLE.toUpperCase() }
    </h1>
  )
}
