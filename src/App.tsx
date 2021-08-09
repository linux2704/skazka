import s from "./app.module.css";
import { About } from "./components/aboutSection";
import { Birthdays } from "./components/birthdaysSection";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MainSection } from "./components/mainSection";
import { Prices } from "./components/pricesSection";
import { Shows } from "./components/showsSection";
import { Tickets } from "./components/tickets";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <main>
        <MainSection />
        <About />
        <Prices />
        <Birthdays />
        <Shows />
        <Tickets />
      </main>
      <Footer />
    </div>
  );
}

export default App;
