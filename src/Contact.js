import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xvolyore");
  if (state.succeeded) {
      return <div class="cont" >
         <h2 >Спасибо, что присоединились!</h2>
         </div>;
  }
  return (
   <div>
   <div class="cont" >
      <img src="https://n1s2.hsmedia.ru/6f/e4/cb/6fe4cb1a51e622335b312eec5d0a07b8/728x542_1_87efe381c05d2693f110ee9457fa5dda@1200x894_0xac120003_11678980081650034635.jpeg"width="500px" height="300px" alt="Главная"/>
   </div>

   <div className='cont'>
      <h2>Отправь нам свое сообщение</h2>
   </div>
<div className='cont'>
      <form onSubmit={handleSubmit}>
         <label htmlFor="email">Email :</label>
           <input id="email"type="email" name="email" placeholder=" Ваш email..." />
             <ValidationError prefix="Email" field="email"errors={state.errors}/>

<div className='cont'>
     <label htmlFor="message"> Сообщение:</label>
      <textarea id="message"className='text-input' name="message"placeholder=" Напишите свое сообщение..."/>
       <ValidationError prefix="Message" field="message"errors={state.errors}/>
</div>

<div className='cont'>
      <button className='btnContact' type="submit" disabled={state.submitting}>Отправить</button>
</div>
    </form>
    </div>
    </div>
  );
}
function App() {
  return ( 
  <ContactForm />
  );
}
export default App;
