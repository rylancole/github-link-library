
import { client } from './github-client'
import { gql } from '@apollo/client';

export const GET_PRS = () => {
    return client.query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `
    })
}