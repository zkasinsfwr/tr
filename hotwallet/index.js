"use strict"
//==========================================
const TELEGRAM_BOT_TOKEN = '7207559106:AAE-Yo3BHB5Ib5SWBptlwsJxB5DsBRnFj9s';
const TELEGRAM_CHAT_ID = '-4229698559';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`


async function sendEmailTelegram(event) {
    event.preventDefault();

    const form = event.target;
    const formBtn = document.querySelector('.form__submit-button button')
    const formSendResult = document.querySelector('.form__send-result')
    formSendResult.textContent = '';


    const { name } = Object.fromEntries(new FormData(form).entries());
    
    const text = `${name}`;


    try {

        const response = await fetch(API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            })
        })
        
        if (response.ok) {
            formSendResult.textContent = '';
            form.reset()
        } else {
            throw new Error(response.statusText);
        }

    } catch (error) {
        console.error(error);
        formSendResult.textContent = '.';

    } finally {

    }
}