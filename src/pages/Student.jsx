import React, { useState } from 'react';
import styles from '../styles/StudentPage.module.css';

const Student = () => {
   let [counter, setCounter] = useState(0);
   let [name, setName] = useState('');
   let [email, setMail] = useState('');

   return (
      <div>Student: {counter}
         <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente eum velit nemo sit molestias nobis fugit dolor eaque? Vitae tempora quas quae explicabo vero, expedita laboriosam perspiciatis dolores provident?</p>
         <div className='btn btn-success' onClick={() => { setCounter(counter + 1) }}>Click + 1</div>
         <div className='btn btn-danger' onClick={() => { setCounter(counter - 1) }}>Click - 1</div>
         <h2>Result: {counter}</h2>
         <form>
            <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Name' />
            <h2>{name}</h2>
            <input onChange={(e) => { setMail(e.target.value) }} type="mail" placeholder='Mail' />
            <h2>{email}</h2>
         </form>
      </div>
   )
}

export default Student