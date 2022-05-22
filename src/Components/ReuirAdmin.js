import useCurrentUser from "../hooks/currentUser";
const ReuirAdmin = ({ children }) => {
  const [currentUser] = useCurrentUser();

  if (currentUser?.role === "user") {
    return;
  } else {
    return children;
  }
};

export default ReuirAdmin;
