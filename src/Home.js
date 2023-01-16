import { useState }  from 'react';
import { data }  from './data';
import Bags from './Bags';
import Buttons from './Buttons';

function Home(){
const[bags,setBags] = useState(data);

const chosenBags = ( searchTerm) =>{
const newBags = data.filter (element => element.searchTerm === searchTerm);
setBags(newBags);
}
return (
<div>
   <div className='cont'>
      <h2 className='moda'>Самые модные сумки осени и зимы 2022/23</h2>
   </div>
   <div class="cont" >
             <img src="https://n1s2.hsmedia.ru/6f/e4/cb/6fe4cb1a51e622335b312eec5d0a07b8/728x542_1_87efe381c05d2693f110ee9457fa5dda@1200x894_0xac120003_11678980081650034635.jpeg"width="600px" height="400px" alt="Главная"/>
   </div>
   <Buttons filteredBags={chosenBags}/>
   <Bags anyBags={bags}/>
</div>
);
}
export default Home;





