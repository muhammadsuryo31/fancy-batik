import React, { useEffect, useState } from 'react'
import './style/App.css'
import Header from './components/Header'
import Home from './components/Home'
import CardDetail from './components/cardDetail'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useHistory } from 'react-router-dom'
import Favourites from './components/favourites'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './store/actions'

function App () {
  const dispatch = useDispatch()
  const [batikNew, setBatikNew] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  const { batik, loading, error } = useSelector(state => state.batik)
  const history = useHistory();

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  const filterData = (payload) => {
    history.push(`/`);
    let allBatik = batik
    let keyword = payload
    let filteredBatik = []
    setIsFiltered(true)
    allBatik.forEach(el => {
      if(el.nama_batik.toLowerCase() === keyword || el.daerah_batik.toLowerCase() === keyword) {
        filteredBatik.push(el)
      }
    })
    setBatikNew(filteredBatik)
  }
   const getAllData = () => {
     setBatikNew(batik)
   }
   if (error.length > 0) {
     return (
       <h1>error found please reload</h1>
     )
   } else {
     return (
      <div>
        <Header />
        <Navbar filterData={filterData} getAllData={getAllData}/>
        <Switch>
          <Route exact path='/'>
            {
              loading ? <h1>fetching data please wait</h1> : 
             <Home isFiltered={isFiltered} batikNew={batikNew}/>
            }
          </Route>
          <Route path='/detail/:id'>
            {
              loading ? <h1>fetching data please wait</h1> :  <CardDetail />
            }
           </Route>
           <Route path='/favourites'>
           {
             loading ? <h1>fetching data please wait</h1> : <Favourites />
           }
           </Route>
        </Switch>
      </div>
     )
   }
}

export default App
