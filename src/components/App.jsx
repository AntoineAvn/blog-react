import { Route, Routes } from "react-router-dom";
import UserCard from "./UserCard";
import Banniere from "./Banniere";

function App() {
  return(
    <div>
      <Banniere />
      <Routes>
        <Route path="/userCard" element={<UserCard />} />
      </Routes>
    </div>
  )

}

export default App;  