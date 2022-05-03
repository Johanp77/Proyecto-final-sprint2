import React, {useEffect, useState}  from 'react'
import styled from 'styled-components'
import getData from '../helpers/Api'



const Array = ({state, Link}) => {

    const [data, setData] = useState([])
    useEffect(() => {
        getData(state)
        .then(data => setData(data))
    }, [state])

    // const {img, title, description, price} = data

    console.log(data)
    return (
        data.map(mape => (
            <Card key={mape.id} className="card">
                <img src={mape.img} alt=""/>
                <h2>{mape.title}</h2>
                <Precio> $ {mape.price}MXN</Precio>
            </Card>
        ))
        )

}
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 15rem;
    margin: 1rem;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 10px #000;
    
`

const Precio = styled.p`
    color: #FA4A0C;
`



export default Array