import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getData from '../helpers/Api'
import Array from './Array'


const Home = ({ Link }) => {

    const [drinks, setData] = useState('loading')


    return (
        <>
            <h1>Nada como una Guajolota para empezar el día</h1>
            <InputSearch type="text" placeholder="Sabor de guajolotas, bebidas"></InputSearch>
            <BoxButtons>
                <MyButton>Guajolotas</MyButton>
                <MyButton onClick={useEffect(() => {
                    getData(Link)
                        .then(data => setData(drinks))
                }, [Link])}>Bebidas</MyButton>
                <MyButton>Tamales</MyButton>
            </BoxButtons>
            <Array Link />
        </>
    )
}

const BoxButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    `

const InputSearch = styled.input`
    align-self: center;
    text-align: center;
    padding: 1rem 0;
    border-radius: 50px;
    border: none;
    background-color: #e7e7e7;
    color: #9a9a9d;
    margin: 0 auto;
    width: 30vh;
    
`

const MyButton = styled.button`
    text-decoration: none;
    background-color: #f5f5f5;
    border: 1px solid #000;
    border: none;
    cursor: pointer;
`;

export default Home