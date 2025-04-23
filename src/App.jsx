import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Jadidlar from "./pages/Jadidlar";
import BookDetail from "./pages/BookDetail";
import Login from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      ></Route>
      <Route
        path="/authors"
        element={
          <MainLayout>
            <Jadidlar />
          </MainLayout>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/book/:id" element={<BookDetail />}></Route>
    </Routes>
  );
}

export default App;
