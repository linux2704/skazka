import { useEffect } from "react";
import { About } from "./components/aboutSection";
import { Birthdays } from "./components/birthdaysSection";
import { Carousel } from "./components/carouselSection";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MainSection } from "./components/mainSection";
import { Prices } from "./components/pricesSection";
import { Shows } from "./components/showsSection";
import { Tickets } from "./components/tickets";
import { ToastContainer, toast } from "react-toastify";
import s from "./app.module.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    const search = window.location.search;
    const isSuccess = search.endsWith("true");
    if (search) {
      if (isSuccess) {
        toast.success("Спасибо! Транзакция прошла успешно!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Что-то пошло не так. Пожалуйста попробуйте снова", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }, []);
  return (
    <div className={s.app}>
      <Header />
      <main>
        <MainSection />
        <About />
        <Carousel />
        <Prices />
        <Birthdays />
        <Shows />
        <Tickets />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
