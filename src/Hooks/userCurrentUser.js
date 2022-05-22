const { useState, useEffect } = require("react");
const { useAuthState } = require("react-firebase-hooks/auth");
const { default: auth } = require("../firebase.init");

function useCurrentUser() {
  const [user, loading] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        const currentUser = data.find((u) => u.email === user.email);
        setCurrentUser(currentUser);
      });
  }, [user]);
  return [currentUser];
}
export default useCurrentUser;
