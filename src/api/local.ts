import { ResultData } from "../models/ResultData"
import { db } from "./db"


export const getData = async (dbName: string, id: number) =>{
    try {
        const data = await db.getData(dbName, id)
        const response: ResultData = {
            isSuccess: true,
            result: data
        }
        return response
    } catch (error: any) {
        
        const response: ResultData = {
            isSuccess: false,
            message: error.toString()
        }
        return response
        
    }
}