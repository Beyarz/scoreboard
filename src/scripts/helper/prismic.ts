import Prismic from '@prismicio/client'
import config from '../config.json'

const apiEndpoint: string = config.PRISMIC_ENDPOINT
const accessToken: string = config.ACCESS_TOKEN
const Client = Prismic.client(apiEndpoint, { accessToken })

const docName: string = config.DOCUMENT_NAME
const docType: string = config.DOCUMENT_TYPE

export {
  docType,
  docName,
  Client,
  Prismic
}
