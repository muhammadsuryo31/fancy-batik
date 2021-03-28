import React, { useState } from 'react'
import '../style/App.css'
import Batik from './card'
import { useSelector } from 'react-redux'
function Home (props) {
  const batik2 = useSelector(state => state.batik.batik)
   return (
     <div>
       <br/>
        <div className="row my-5 mx-3" id="card-container">
          { (!props.isFiltered) ?  
            batik2.map(data => {
              return  <Batik data={ data } key={data.id} />
            }) : props.batikNew.map(data => {
              return  <Batik data={ data } key={data.id} />
            })
          }
        </div>
     </div>
   )
}

export default Home