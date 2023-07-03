import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`);
      const resData = await res.json();
      dispatch(setDataProduct(resData));
    })();
  });

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-v-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
