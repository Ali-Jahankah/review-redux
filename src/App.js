import Counter from "./components/Counter";
import Header from "./components/Header";

import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const authState = useSelector((state) => state.auth);
  return (
    <>
      <Header></Header>
      {authState.isAuth ? <UserProfile></UserProfile> : <Auth></Auth>}
      <Counter />
    </>
  );
}

export default App;
