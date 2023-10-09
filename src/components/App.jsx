import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import SectionCard from "./SectionCard/SectionCard";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      
      <Header />
      <Main>
        <SectionCard />
      </Main>
      <Footer />
    </>
  );
}

export default App;
