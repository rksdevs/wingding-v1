import { lazy, Suspense } from "react";
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importing components using lazy - we can use suspense to load a spinner
const Home = lazy(() => import("./pages/Home"));
const ArtistManagement = lazy(() => import("./pages/ArtistManagement"));
const DanceCostume = lazy(() => import("./pages/DanceCostume"));
const DanceStudio = lazy(() => import("./pages/DanceStudio"));
const DecorCompany = lazy(() => import("./pages/DecorCompany"));
const EventManagement = lazy(() => import("./pages/EventManagement"));
const Photography = lazy(() => import("./pages/Photography"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={null}>
          <GlobalStyle />
          {/* <ScrollToTop /> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artistmanagement" element={<ArtistManagement />} />
            <Route path="/dancecostume" element={<DanceCostume />} />
            <Route path="/dancestudio" element={<DanceStudio />} />
            <Route path="/decorcompany" element={<DecorCompany />} />
            <Route path="/eventmanagement" element={<EventManagement />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
