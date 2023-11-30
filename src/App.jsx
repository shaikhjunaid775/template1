import { useState, useEffect } from "react";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import About from "./Components/about";
import Services from "./Components/Services";
import { Container } from "react-bootstrap";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Fab } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import DownloadIcon from "@mui/icons-material/Download";

function App() {
  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true);
  console.log(loading);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });


  return (
    <>
      <Container>
        <Header />
        <Slider loading={loading} />
        <About loading={loading} />
        <Services loading={loading} />
        <Contact loading={loading} />
        <Footer loading={loading} />
      </Container>
      <FloatingWhatsApp phoneNumber="8652016993" accountName="Your Assistant" />
      <Fab color="primary" className="fab" aria-label="add">
        <DownloadIcon />
      </Fab>
      
      
     
    </>
  );
}

export default App;
