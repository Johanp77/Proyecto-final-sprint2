import React, { useEffect, useState } from 'react'




const getData = async (Link) => {
    let url = `https://api-final-sprint2.herokuapp.com/${encodeURI('guajolotas')}`
    const resp = await fetch(url)
    const  data  = await resp.json()

    return data
}

export default getData