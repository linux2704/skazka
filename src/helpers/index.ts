import { request } from "graphql-request";

export const URL = "https://api-eu-central-1.graphcms.com/v2/ckucpcf076f7d01xn73860pv1/master";

export const getPrices = () => {
  return request(
    URL,
    `{
    prices {
     id
     text {
       text
     }
     price
     imgs  {
       text 
     }
     code
   }
 }
 `
  );
};

export interface PricesProps {
  id: string;
  imgs: string;
  text: { text: string };
  price: number;
  code: string;
}

export const getTickets = () => {
  return request(
    URL,
    `{
      tickets {
        id
        title
        availableDates
      }
    }
    `
  );
};

export const getBirthdays = () => {
  return request(
    URL,
    `{ 
      birthdays {
        id
        title
        description
        body
      }
    }
    `
  );
};

export interface BdayProps {
  id: string;
  title: string;
  body: string;
  description: string;
}

export const getShows = () => {
  return request(
    URL,
    `{ 
      shows {
        id
        isMain
        title
        whom
        content
        color
      }
    }
    `
  );
};

export interface ShowProps {
  id: string;
  isMain?: boolean;
  title: string;
  whom?: string;
  content: string;
  color?: string;
}
