// @ts-ignore
// eslint-disable-next-line no-use-before-define
import React, { ReactElement, useState, useEffect, SetStateAction, Dispatch } from 'react'

// Types
import ApiSearchResponse from './types/ApiSearchResponse'

// Helpers
import { Entry } from './helper/interfaces'
import { docType, docName, Prismic, Client } from './helper/prismic'
import { sortedProps } from './helper/functions'

// Components
import Table from './components/table.component'
import TopList from './components/topList.component'
import Title from './components/title.component'
import TableSkeleton from './components/tableSkeleton.component'
import StepList from './components/stepList.component'
import Loading from './components/loading.component'

import 'typeswift'

function App () {
  const [doc, setDocData]: [string, Dispatch<SetStateAction<string>>] = useState<string>(docType)

  useEffect(() => {
    const fetchData = async () => {
      const response: ApiSearchResponse = await Client.query(Prismic.Predicates.at('document.type', doc))
      if (response) {
        // @ts-expect-error
        //* Error is expected because the typescript does not recognize ".first" from typeswift
        setDocData(response.results.first.data[docName])
      }
    }
    fetchData()
  }, [])

  let key: number = 0
  const top3: Entry[] = doc as unknown as Entry[]

  return (
    <>
      <Title />

      <StepList>
        {
          typeof doc === 'object'
            ? <TopList names={sortedProps(top3).slice(0, 3)} />
            : null
        }
      </ StepList>

      <TableSkeleton>
        {
          typeof doc === 'object'
            ? sortedProps(doc).map((prop: Entry): ReactElement<Element> => {
              key++
              return (
                <Table key={key} order={key} name={prop.name} distance={prop.distance} metric={prop.metric} />
              )
            })
            : <Loading />
        }
      </TableSkeleton>
    </>
  )
}

export default App
