import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [data , setData] = useState([]) ;
    const [isLoading , setIsLoading] = useState(true) ;

    const getData = async () => {
        const response = await fetch(url) ;
        const newData = await response.json() ;

        setData(newData) ;
        setIsLoading(false) ;
    }

    useEffect(
        () => {
            getData() ;
        } , [url]
    ) ;

    return {isLoading , data}
}