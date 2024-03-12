import { cleanData } from '../helpers/utils'
import { apiUrl } from './apiUtils'
import { get } from './fetchHelpers'

export const getMessage = async (chatId: string) => {
  const url = apiUrl + 'chat/messages/' + chatId
  const datas = await get(url)
  return cleanData(datas)
}
export const getChat = async (senderId: string) => {
  const url = apiUrl + 'chat/by/sender/' + senderId
  const datas = await get(url)
  return cleanData(datas)
}
export const getChats = async () => {
  const url = apiUrl + 'chat/user'
  const datas = await get(url)
  return cleanData(datas)
}
