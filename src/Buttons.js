function Buttons({filteredBags}){
    return(
        <div className="cont">
            <button className="change"onClick={() =>filteredBags("миниатюрные")}>Миниатюрные</button>
            <button className="change"onClick={() =>filteredBags("строгая форма")} >Строгая форма</button>
            <button className="change"onClick={() =>filteredBags("хобо")} >Хобо</button>
            <button className="change"onClick={() =>filteredBags("геометрия")} >Геометрия</button>
            <button className="change"onClick={() =>filteredBags("мягкая форма")}>Мягкая форма</button>
            <button className="change"onClick={() =>filteredBags("размер XXL")}>Размер XXL</button>
            <button className="change"onClick={() =>filteredBags("меховая отделка")}>Меховая отделка</button>
            <button className="change"onClick={() =>filteredBags("рюкзак")}>Рюкзак</button> 
            <button className="change"onClick={() =>filteredBags("2000-е")}>2000-е</button> 
            <button className="change"onClick={() =>filteredBags("сумка-ведро")}>Сумка-ведро</button> 
            <button className="change"onClick={() =>filteredBags("вечерние")}>Вечерние</button> 
            <button className="change"onClick={() =>filteredBags("клатч")}>Клатч</button> 
        </div>
    )
    }
    export default Buttons;