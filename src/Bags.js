import { useState }  from 'react';

function Bags({anyBags}){
const [showText,setShowText] =useState(false); 

const showTextClick = (item )=>{
item.showMore= !item.showMore
setShowText(!showText)
}

return(
<div className="products">
   {anyBags.map((item=>{
   const{id, name,searchTerm,image,discription,showMore}=item;
   return(
   <div className="product-card" key={id}>
      <h2 >{name}</h2>
      <img src={image} width="350px"height="400px"alt="begs"  /> 
      <div className="product-info">
         <h4>Категория: {searchTerm}</h4>
         <p>{showMore ? discription : discription.substring(0,170) + "...." }
            <button className='show' onClick={()=>showTextClick(item)}>{showMore ? "Показать меньше" : "Показать больше"}</button>
         </p>
      </div>
   </div>
   )
   }))}
</div>
)
}
export default Bags;