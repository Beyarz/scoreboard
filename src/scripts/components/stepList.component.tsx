// @ts-ignore
// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from 'react'

export default function steplist (props: {children: ReactNode}) {
  return (
    <div className='spectrum-Steplist' role="list">
      {props.children}
    </div>
  )
}
