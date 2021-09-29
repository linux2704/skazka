// @ts-nocheck
/* eslint-disable */
import { halyk } from "../lib/payment-api";
const devURL = "https://testoauth.homebank.kz/epay2/oauth2/token";
const prodURL = "https://epay-oauth.homebank.kz/oauth2/token";
const isDev = localStorage.getItem("env") === "dev";
const URL = isDev ? devURL : prodURL;

const createPaymentObject = (auth, { invoiceId, amount, description }) => {
  const paymentObject = {
    invoiceId,
    backLink: "https://skazkindom.kz/success=true",
    failureBackLink: "https://skazkindom.kz?success=false",
    postLink: "https://skazkindom.kz?success=true",
    failurePostLink: "https://skazkindom.kz?success=false",
    language: "RU",
    description,
    terminal: "6b6c5021-846e-4601-acaa-b22ab8095b1d",
    amount,
    currency: "KZT",
    cardSave: true,
    auth,
  };
  // paymentObject.auth = auth;
  console.log(paymentObject);
  return paymentObject;
};

export const pay = (auth, config) => halyk.pay(createPaymentObject(auth, config));

export const createPayment = async (formdata, config) => {
  return fetch(URL, {
    method: "POST",
    body: formdata,
  })
    .then((res) => res.json())
    .then((auth) => pay(auth, config))
    .catch((err) => console.error(err));
};
