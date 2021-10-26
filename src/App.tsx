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
import { useHistory } from "react-router";

const TIME = 5000;

const App = () => {
  const { push } = useHistory();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get("result");
    if (foo) {
      if (foo === "success") {
        toast.success("Спасибо! Транзакция прошла успешно!", {
          position: "top-center",
          autoClose: TIME,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (foo === "error") {
        toast.error("Что-то пошло не так. Пожалуйста попробуйте снова", {
          position: "top-center",
          autoClose: TIME,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      setTimeout(() => {
        push("/");
      }, TIME);
    }
  }, [push]);
  return (
    <div className={s.app} id='top'>
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
};

export default App;
