import { useEffect } from "react";
import { useSelector } from "react-redux";
import { calculateTotal } from "../src/control/cartSlice";
import "./App.css";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <div className="App">
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;
