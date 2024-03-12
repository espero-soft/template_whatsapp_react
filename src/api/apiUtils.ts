

export const baseUrl = () => {
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:8080/"
    }else {
      return "https://api.funnel.mudey.fr/"
    }
  }
  
  export const apiUrl: string = baseUrl()