import axios from 'axios'
import { URL_PROFILE } from '../config'

export async function userUpdateInfos(userFirstLastName) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(URL_PROFILE, userFirstLastName)
      resolve(result.data)
    } catch (error) {

      reject(error)
    }
  })
}