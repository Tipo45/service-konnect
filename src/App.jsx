import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logform from "./pages/login/Login";
import Client from "./pages/Cuserside/Client";
import Regform from "./pages/registration/Registration";
import Homepage from "./pages/HomePage/Homepage";
import SkillsorService from "./pages/SkillsorService/SkillsorService";
import Artisan from "./pages/Auserside/Artisan";
import Registrationartisan from "./pages/registration/Registrationartisan";
import About from "./pages/About/About";
import NoPage from "./pages/Nopage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./pages/SkillorServiceDetails/Details";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/productsandservices/:activepage" element={<SkillsorService />} />
          <Route path="/clientregistration" element={<Regform />} />
          <Route path="/artisanregistration" element={<Registrationartisan />}/>
          <Route path="/login" element={<Logform />} />
          <Route path="/client/:activepage" element={<Client />} />
          <Route path="/artisan/:activepage" element={<Artisan />} />
          <Route path="/artisan-details" element={<Details />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
