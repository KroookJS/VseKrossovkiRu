import React from "react"
import Card from "../components/Card/Card"

function Favorites({items}) {
    return (
        <div className="content p-40">
                    <div className=" d-flex align-center justify-between mb-10">
                        <h1>Мои закладки</h1>
                    </div>
                    <div className="d-flex flex-wrap">
                    {items
                            .map((item, index) => (
                                <Card
                                    key={index}
                                    title={item.title}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    favoritePlus={true}
                                />
                            ))}
                    </div> 
         </div>
    )
}

export default Favorites 