import React from "react"
import Card from "../components/Card/Card";

  

   

function Home({items,
                  searchValue,
                  onAddToFavorite,
                  onAddToCard }) {
    return (
        <div className="content p-40">
                    <div className=" d-flex align-center justify-between mb-10">
                        <h1 className="">{searchValue ? `Результат по запросу "${searchValue}"` : 'Хиты продаж'}</h1>
                    </div>
                    <div className="d-flex flex-wrap">

                        {items
                            .filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
                            .map((item, index) => (
                                <Card
                                    key={index}
                                    title={item.title}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    onFavorite={(obj) => onAddToFavorite(obj)}
                                    onPlus={(obj) => onAddToCard(obj)}
                                />
                            ))}
                    </div> 
         </div>
    )
}

export default Home 