import {React} from 'react'
import DogList from '../dog/DogList'

const DashBoard = ()=>{
    return(
        <div className='row'>
            <div className='column'>
               <DogList /> 
            </div>
        </div>
    )
}
export default DashBoard