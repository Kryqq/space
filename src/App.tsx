import "./App.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";

function App() {
  return (
    <div className="app__container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
