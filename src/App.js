import { lazy, Suspense } from "react";
import { GlobalStyle } from "./globalStyles";

//importing components using lazy - we can use suspense to load a spinner
const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
