function useUserInsert(data, imgStored) {
  fetch("https://valiga-hardware.herokuapp.com/user", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: data.fullName,
      email: data.email,
      image: imgStored,
      phone: data.phone,
      role: "user",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
export default useUserInsert;
