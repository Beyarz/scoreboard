interface Entry {
  order?: number,
  name: string,
  distance: number,
  metric: string,
}

interface Names {
  names: {
    name: string
  }[]
}

export {
  Entry,
  Names
}
