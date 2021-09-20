// @ts-ignore
// eslint-disable-next-line no-use-before-define
import React, { ReactElement } from 'react'
import { Entry } from '../helper/interfaces'

function table (props: Entry): ReactElement<Element> {
  return (
    <tr className="spectrum-Table-row">
      <td className="spectrum-Table-cell">
        <p className="spectrum-Body spectrum-Body--sizeXXL">{props.order}</p>
      </td>

      <td className="spectrum-Table-cell">
        <p className="spectrum-Body spectrum-Body--sizeXXL">{props.name}</p>
      </td>

      <td className="spectrum-Table-cell">
        <p className="spectrum-Body spectrum-Body--sizeXXL">{props.distance}</p>
      </td>

      <td className="spectrum-Table-cell">
        <p className="spectrum-Body spectrum-Body--sizeXXL">{props.metric}</p>
      </td>
    </tr>
  )
}

export default table
