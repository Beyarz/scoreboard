// @ts-ignore
// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from 'react'

export default function tableSkeleton (props: { children: ReactNode }) {
  return (
    <div className="app-list-table">
      <table className="spectrum-Table spectrum-Table--quiet align-center">
        <tbody className="spectrum-Table-body">
          {props.children}
        </tbody>
      </table>
    </div>
  )
}
