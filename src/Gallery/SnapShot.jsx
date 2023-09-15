import React, { useEffect, useState } from "react";
import axios from 'axios'
import Photos from "./Photos";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127"
const SnapShot = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {

    }, [])
    const changeHandler = (e) => {
        setSearch(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => setData(response.data.photos.photo))
            .catch(err => console.log(err))
    }
    return <div>
              <center>
        <h2>Gallery Snapshot</h2><br></br>
        <form onSubmit={submitHandler}>
          <input size="30" type="text" onChange={changeHandler} value={search}/><br /><br />
          <input type="submit" name="Search" />
        </form>
        <br />
        {data.length>=1?<Photos data={data}/>:<h4>No data found</h4>}
      </center>
    </div>
}

export default SnapShot;