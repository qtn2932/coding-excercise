import { React, useState, useEffect } from 'react'
import DogCard from './DogCard'
import Axios from 'axios'

const DogList = () => {
    const dogUrl = "https://dog.ceo/api/breed/husky/images"
    const quoteUrl = "https://type.fit/api/quotes"

    const [dogImages, setDogImages] = useState([])
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let dogs = await Axios.get(dogUrl)
            let quotes = await Axios.get(quoteUrl)
            setDogImages([...dogs.data.message])
            setQuotes([...quotes.data.slice(0, 1000)])
        }
        fetchData()
    }, [])

    const listOfDogCard = dogImages.map((url, idx) => {

        return (<DogCard url={url} quote={quotes[idx]["text"]} key={idx} />)
    })

    return (
        <div className="row">
            {listOfDogCard}
        </div>
    )
}
export default DogList