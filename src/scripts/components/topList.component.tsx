// @ts-ignore
// eslint-disable-next-line no-use-before-define
import React, { ReactElement } from 'react'
import { Names } from '../helper/interfaces'

function topList (props: Names): ReactElement<Element> {
  return (
    <>
      <div className='align-center' style={{ marginBottom: 3 + 'rem' }}>
        <div className="spectrum-Steplist-item is-complete" role="listitem" aria-posinset={1} aria-setsize={3}>
          <span className="spectrum-Steplist-label">1. {props.names[0].name}</span>
          <span className="spectrum-Steplist-markerContainer">
            <span className="spectrum-Steplist-marker"></span>
          </span>
        </div>

        <div className="spectrum-Steplist-item" role="listitem" aria-posinset={2} aria-setsize={3}>
          <span className="spectrum-Steplist-label">2. {props.names[1].name}</span>
          <span className="spectrum-Steplist-markerContainer">
            <span className="spectrum-Steplist-marker"></span>
          </span>
          <span className="spectrum-Steplist-segment"></span>
        </div>

        <div className="spectrum-Steplist-item" role="listitem" aria-posinset={3} aria-setsize={3}>
          <span className="spectrum-Steplist-label">3. {props.names[2].name}</span>
          <span className="spectrum-Steplist-markerContainer">
            <span className="spectrum-Steplist-marker"></span>
          </span>
          <span className="spectrum-Steplist-segment"></span>
        </div>
      </div>
    </>
  )
}

export default topList
