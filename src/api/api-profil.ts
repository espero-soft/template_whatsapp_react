import { cleanData } from '../helpers/utils'
import { apiUrl } from './apiUtils'
import { get } from './fetchHelpers'

export const getProfilByUserId = async (entityName: string) => {
  entityName = entityName.toLowerCase()
  const url = apiUrl + entityName + '/by/userId'
  const datas = await get(url)
  return cleanData(datas)
}
