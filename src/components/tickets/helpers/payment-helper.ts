// @ts-nocheck
/* eslint-disable */
import { halyk } from "../lib/payment-api";
const URL = "https://testoauth.homebank.kz/epay2/oauth2/token";

const createPaymentObject = (auth, { invoiceId, amount, description }) => {
  const paymentObject = {
    invoiceId,
    backLink: "https://skazkindom.kz/success=true",
    failureBackLink: "https://skazkindom.kz?success=false",
    postLink: "https://skazkindom.kz?success=true",
    failurePostLink: "https://skazkindom.kz?success=false",
    language: "RU",
    description,
    accountId: "testuser1",
    terminal: "67e34d63-102f-4bd1-898e-370781d0074d",
    amount,
    currency: "KZT",
    cardSave: true,
  };
  paymentObject.auth = auth;
  return paymentObject;
};

export const pay = (auth, config) => halyk.pay(createPaymentObject(auth, config));

export const createPayment = async (formdata, config) => {
  return fetch(URL, {
    method: "POST",
    body: formdata,
  })
    .then((res) => res.json())
    .then((auth) => pay(auth, config));
};
