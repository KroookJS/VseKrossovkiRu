import React from "react"

import axios from 'axios'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Routes, Route,  } from "react-router-dom";
import Home from "./Page/Home";
import Favorites from "./Page/Favorites";





function App() {
    const [items, setItems] = React.useState([])
    const [cardItems, setCardItems] = React.useState([])
    const [favorite, setFavorite] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cardOpened, setCardOpened] = React.useState(false)

    React.useEffect(() => {

        axios.get('https://61a77816387ab200171d2cf9.mockapi.io/items').then(res => {
            setItems(res.data);
        })
        axios.get('https://61a77816387ab200171d2cf9.mockapi.io/cart').then(res => {
            setCardItems(res.data);
        })
        axios.get('https://61a77816387ab200171d2cf9.mockapi.io/favorite').then(res => {
            setFavorite(res.data);
        })
    }, [])

    const onAddToCard = (obj) => {
        axios.post('https://61a77816387ab200171d2cf9.mockapi.io/cart', obj)
        setCardItems(prev => [...prev, obj])
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://61a77816387ab200171d2cf9.mockapi.io/cart/${id}`)
        setCardItems((prev) => prev.filter(item => item.id !== id))
    }

    const onAddToFavorite = (obj) => {
        axios.post('https://61a77816387ab200171d2cf9.mockapi.io/favorite', obj)
        setFavorite(prev => [...prev, obj])
    }

    const onChangeInput = (event) => {
        setSearchValue(event.target.value)
    }


    return (

        <div className="wrapper clear">


            {cardOpened && <Drawer items={cardItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem}/>}


            <Header onClickInput={onChangeInput} value={searchValue} setValue={setSearchValue}
                    onCliclCard={() => setCardOpened(true)}
                    />

           <Routes>
                <Route path="/"
                       element={<Home items={items} searchValue={searchValue} onAddToFavorite={onAddToFavorite} onAddToCard={onAddToCard} />} />
                
                <Route path="/favorite" 
                      element={<Favorites  items={favorite} />} />
            </Routes> 

        </div>
    )
}


export default App;
