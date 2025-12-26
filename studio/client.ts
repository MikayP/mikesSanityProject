// ./src/sanity/lib/client.ts
import {createClient} from 'next-sanity'

// import {apiVersion, dataset, projectId} from '../env'

export const client = createClient({
  projectId: '3x5rcx8y',
  dataset: 'production',
  apiVersion: 'v2025-12-20', // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
