import { Entry } from './interfaces'

function sortByHighestDistance (a: Entry, b: Entry): number {
  return b.distance - a.distance
}

function sortedProps (value: Entry[]): Entry[] {
  return value.sort((a: Entry, b: Entry): number => {
    return sortByHighestDistance(a, b)
  })
}

export {
  sortedProps
}
