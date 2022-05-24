import { useEffect } from "react";

function useUserInsert(gUser) {
  useEffect(() => {
    if (gUser) {
      fetch("https://valiga-hardware.herokuapp.com/user", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: gUser?.user?.displayName,
          email: gUser?.user?.email,
          image: gUser?.user?.photoURL,
          phone: gUser?.user?.phoneNumber,
          role: "user",
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, []);
}
export default useUserInsert;
