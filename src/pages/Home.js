import Intro from "../components/Intro";
import NavigationBar from "../components/NavigationBar";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll ke atas saat halaman dimuat
  }, []);
  return (
    <>
      <NavigationBar logo="NSI Asistent" />
      <Intro />
    </>
  );
}

export default Home;
