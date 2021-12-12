function Drawer({onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer ">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
                </h2>

                {
                items.length > 0 ? (
                    <div className=" ">
                        <div className="items ">
                        {items.map((obj) => (
                        <div className="cartItem d-flex ">
                            <img className="cartImg mr-20" with={90} height={90} src={obj.imgUrl} alt="KroosDrawer"/>
                            <div className="mr-20">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}</b>
                            </div>
                            <img onClick={()=> onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                        </div>
                    ))
                    }
                    </div>
                    <div className="cartTotalBlock">
                    <ul >
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>22 905 ₽</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1145 ₽</b>
                        </li>
                    </ul>

                    <button className="greenBtn">Оформить заказ </button>
                </div>
                    </div>
                ) :(
                <div className="flex-colum flex">
                    <div className="cartEmpty d-flex  justify-center ">
                        <img className="mb-20" width="120px" height="120px" src="/img/eny-box.jpg"/>
                    </div>
                    <h2 className=" d-flex  justify-center">Корзина пустая</h2>
                     <p className="textDrawer opacity-5 d-flex justify-center ">Добавьте хотя бы одну пару кроссовок</p>
                    <button onClick={onClose} className="greenBtn">
                        Вернуться назад
                    </button>
                </div>)
                }
                
            </div>
        </div>
    )
}
export default Drawer