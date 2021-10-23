import { React, useState, useEffect } from 'react'
import DogCard from './DogCard'
import Axios from 'axios'

const DogList = () => {
    const dogUrl = "https://dog.ceo/api/breed/husky/images"
    const quoteUrl = "https://type.fit/api/quotes"

    const [dogImages, setDogImages] = useState([])
    const [quotes, setQuotes] = useState([])
    const [data, setData]= useState([])

    useEffect(() => {
        const fetchData = async () => {
            let dogs = await Axios.get(dogUrl)
            let quote = await Axios.get(quoteUrl)
            await setDogImages([...dogs.data.message])
            await setQuotes([...quote.data.slice(0, 1000)])
            const combineData = await quotes.map((obj,idx)=>{
                return(
                    {
                        quote: obj.text,
                        url: dogs.data.message[idx] 
                    } 
                )
            })
            console.log(combineData)
            setData(combineData)
        }
        fetchData()
    }, [])

    const listOfDogCard = data.map((value, idx) => {
        return (<DogCard url={value.url} quote={value.quote} key={idx} />)
    })

    return (
        <div className="row">
            {listOfDogCard}
        </div>
    )
}
export default DogList