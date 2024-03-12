import { EsperoDB } from "esperodb"

const dataStructure: any = [
  {
    users: [
      {
        indexes: [
          {
            email: { unique: true },
          },
        ],
        primaryKey: '_id',
      },
    ],
  },
  {
    contacts: [
      {
        indexes: [
          {
            // email: { unique: true },
          },
        ],
        primaryKey: '_id',
      },
    ],
  },
 
]
const dbVersion: number = 1

// Create an instance of the local database
export const db = new EsperoDB('app_whatsapp', dataStructure, dbVersion)
