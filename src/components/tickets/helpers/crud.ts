import { get, child, getDatabase, ref, set } from "firebase/database";

export const updateCurrentInvoiceNumber = async (number: string) => {
  const db = getDatabase();
  return set(ref(db, "invoices"), {
    id: number,
  })
    .then((res) => console.log("success: ", res))
    .catch(console.error);
};

export const readCurrentInvoiceNumber = async () => {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `invoices`))
    .then((snapshot: any) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        return data;
      } else {
        console.log("No data available");
      }
    })
    .catch((error: any) => {
      console.error(error);
    });
};
