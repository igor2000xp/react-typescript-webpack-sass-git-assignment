import React, {FC, useEffect, useState} from 'react';
import styles from './form.module.sass';
import { validateName } from '../helpers/validateName';
import {validateEmail} from '../helpers/validateEmail';
import { validateMessage } from '../helpers/validateMessage';
import { IMessageToSend } from './model';

let checkValidation:boolean = true;

const Form:FC = () => {
  const [email, setEmail] = useState('');
  let [name, setName] = useState('');
  const [phone, setPhone] = useState('+7')
  const [BirthDate, setBirthDate] = useState('');
  const [message, setMessage] = useState('');


  let result:IMessageToSend;

  useEffect(() => {
    setName(name.toUpperCase());
    result = { name, email, phone, message,};

    checkValidation = (validateName(name) !== '' ||
      validateEmail(email) !== '' ||
      validateMessage(message)) !== '';
  }, [name, email, phone, message]);

  const handler = () => {
    console.log(result);
    return 'mess';
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handler}>
        <div className={styles.inputWrapper}>
          <label htmlFor='name'>Name, Surname *required</label>
          <input required aria-required="true" className={styles.formInput} type="text" id='name' value={name} onChange={(e) => setName((e.target.value))} />
          <p className={styles.errorMessage}>
            {validateName(name)}
          </p>
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor='email'>Email *required</label>
          <input required aria-required="true"
                 type='email'
                 id='email'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} />
          <p className={styles.errorMessage}>
            {validateEmail(email)}
          </p>
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor='phone'>Phone</label>
          <input required aria-required="true"
            type='tel'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor='BirthDate'>BirthDate  *required</label>
          <input
            required aria-required="true"
            type='date'
            id='BirthDate'
            value={BirthDate}
            onChange={(e) => setBirthDate(e.target.value)} />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor='message'>Message *required</label>
          <textarea required aria-required="true"
            className={styles.message}
            id='message' value={message}
            onChange={(e) => setMessage(e.target.value)} />
          <p className={styles.errorMessage}>
            {validateMessage(message)}
          </p>
        </div>

        <div className={styles.inputWrapper}>
          <input className={styles.submitButton} disabled={checkValidation} type="submit" value="Submit" />
        </div>

      </form>
    </div>
  );
};

export default Form;
