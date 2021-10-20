import { GraphQLClient } from "graphql-request";
import { URL } from "helpers";
const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzMzNjEzMjMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrdWNwY2YwNzZmN2QwMXhuNzM4NjBwdjEvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZWZmY2EzYWYtMDM4YS00N2FiLWJiYTktOTUwMTVhMmQ0NGJiIiwianRpIjoiY2t1Y3Q1cXh1NmlyNzAxeG4xZzEyM2VnNSJ9.mhwZRJsYBsym8xVIECff2kSvVAhkp4LsMssOE7EQwmsM-OsjxI7GYS8Pylhf4K8Xk1caI1HT-2_Bzs0uVK8Yb09-akYTaxHkWiZtha0y2vQfWyZop3grqe4ypjPankuvoeRvD7E046IqPNtzFE4enauDIC8qdXFryJ06lVzGp6sZJMMBfqI-55u3jmCbr2LAHO4a7ZvpUnrCYQW2IS-LE7lfDO2KBL9suDQrvEB95MhBuBf1SqbQfF2jegveEx647ej2tkE-bfJVfd9FHDgzKi_8ZNpfGvRGNGBsKv4Wc198L733XK6STcDU6gP_KTpM05sCiAQGSvoA_8ANsK2a7a_3MS5bJ3r24UaP8zL14GVQ4SxrIwlRNbIH20xHCOWnDH85C-weRCfZqTUW923EMaRr5ESX2Wm00ccqlIcEENUIQLntNY7dJ8aDb7YzmPI3GfF-xj4gN2QwEdR12YXeZd0CbL3bsfwxHAzZPKJHqQy4ovmC6EWOJFq3FS-QlhmXCVSMdsQ-Q-T6G1eRKqOyZoy5aDBRajnCeh73vqakVdwyrNeumQ3XHZWADNT7UDT0EmHyaBEK4joDptn4pCEVa_E4sBEe6mX8_neOk33QHoB3JT3jqNArIeG1pmkdmMjPsBbUZ71Frz3qYT5-QmamevG3AsBROCRrVLOzfV15Vl8";

const client = new GraphQLClient(URL, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const updateTicket = `mutation ($id: ID!, $title: String!, $availableDates: Json!) {
  updateTicket(
    where: { id: $id }
    data: {title: $title, availableDates: $availableDates }
    ) {
    id
    title
    availableDates
  }
  publishTicket(where: {id: $id}) {
    availableDates
    title
  }  
}
`;

const updatePrice = `mutation ($id: ID!, $price: Int!) {
  updatePrice(
    where: { id: $id }
    data: {price: $price }
    ) {
    id
    price
  }
  publishPrice(where: {id: $id}) {
    price
  }  
}
`;

const updateBirthday = `mutation ($id: ID!, $title: String!, $description: String, $body: String!) {
  updateBirthday(
    where: { id: $id }
    data: {title: $title, description: $description, body: $body }
    ) {
    id
    title
    description
    body
  }
  publishBirthday(where: {id: $id}) {
    title
    description
    body
  }  
}
`;

const updateShow = `mutation ($id: ID!, $title: String!, $content: String!, $whom: String) {
  updateShow(
    where: { id: $id }
    data: {title: $title, content: $content, whom: $whom }
    ) {
    id
    title
    content
    whom
  }
  publishShow(where: {id: $id}) {
    title
    content
    whom
  }  
}
`;

export const update = async (queryName: "price" | "ticket" | "birthday" | "show", variables: any) => {
  const m = {
    price: updatePrice,
    ticket: updateTicket,
    birthday: updateBirthday,
    show: updateShow,
  };

  const mutation = m[queryName];

  return client.request(mutation, variables);
};
