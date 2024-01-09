import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="relative min-h-dvh">
      <Header />
      <div className="pb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
