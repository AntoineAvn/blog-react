import { Route, Routes } from "react-router-dom";
import UserCard from "./UserCard";
import Banniere from "./Banniere";
import FormBlog from "./FormBlog";


function App() {
  return (
    <div>
      <Banniere />
      <Routes>
        <Route path="/userCard" element={<UserCard />} />
        <Route path="/form" element={<FormBlog />} />
      </Routes>
    </div>
  );
}

export default App;
