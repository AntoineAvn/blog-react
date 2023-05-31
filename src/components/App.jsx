import { Route, Routes } from "react-router-dom";
import UserCard from "./UserCard/UserCard";
import Banniere from "./Banniere/Banniere";
import FormBlog from "./FormBlog/FormBlog";

function App() {

  return(
    <div>
      <Banniere />
      <Routes>
        <Route path="/userCard" element={<UserCard />} />
        <Route path="/form" element={<FormBlog />} />
      </Routes>
    </div>
  )

}

export default App;  