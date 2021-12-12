import React from "react"
import { Routes, Route, Link } from "react-router-dom";

function Header(props) {


    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img with={40} height={40} src="/img/logo.png" alt="logo" />
                    <div className="headerInfo">
                        <h3 className="text-uppercase">ВСЕ КРОССОВКИ.ру</h3>
                        <p className="opacity-5">Эко-система кроссовок</p>
                    </div>
                </div>
            </Link>
            

            <div className="search_block d-flex">

                <img src="/img/search.svg" alt="search" />

               
                    
                    {props.value && <img onClick={() => props.setValue('')} className="rem cu-p" src="/img/btn-remove.svg" alt="Close"/>}

                    <input onChange={props.onClickInput} value={props.value} placeholder="Я ищу..." />

                

               
              
            </div>

            <ul className="d-flex">
                <li onClick={props.onCliclCard} className="mr-40 d-flex cu-p ">
                    <img className="" width={25} height={25} src="/img/car.svg"alt="car" />
                    <span className="drawerText">12 050 руб.</span>
                </li>

                <li className="cu-p mr-10">
                <Link to="/favorite">
                    <img width={25} height={25} src="/img/like.svg" alt="like"/>
                </Link>
                </li>
                
                
                <li>
                    <img width={25} height={25} src="/img/Union.svg" alt="UnLike"/>
                </li>
            </ul>

        </header>
    )
}
export default Header