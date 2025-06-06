import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./shared/constants/route";
import HomePage from "./pages/Home";
import NaTeiaDoBoatoIntroPage from "./pages/NaTeiaDoBoato/0-intro";
import Page1 from "./pages/NaTeiaDoBoato/1";
import Page1_1 from "./pages/NaTeiaDoBoato/1-1";
import Page1_2 from "./pages/NaTeiaDoBoato/1-2";
import PageWrapper from "./shared/components/PageComponents/PageWrapper";
import HomeWrapper from "./shared/components/PageComponents/HomeWrapper";
import Page2_1 from "./pages/NaTeiaDoBoato/2-1";
import Page2_2 from "./pages/NaTeiaDoBoato/2-2";
import Page2_3 from "./pages/NaTeiaDoBoato/2-3";
import Page2_4 from "./pages/NaTeiaDoBoato/2-4";
import Page3 from "./pages/NaTeiaDoBoato/3";
import Page4_Final_1 from "./pages/NaTeiaDoBoato/4-final-1";
import Page4_Final_2 from "./pages/NaTeiaDoBoato/4-final-2";
import Page4_Final_3 from "./pages/NaTeiaDoBoato/4-final-3";
import Page4_Final_4 from "./pages/NaTeiaDoBoato/4-final-4";
import Page4_Final_5 from "./pages/NaTeiaDoBoato/4-final-5";
import Page4_Final_6 from "./pages/NaTeiaDoBoato/4-final-6";
import Page4_Final_7 from "./pages/NaTeiaDoBoato/4-final-7";
import Page4_Final_8 from "./pages/NaTeiaDoBoato/4-final-8";
import ConclusionPage from "./pages/NaTeiaDoBoato/5-conclusao";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeWrapper />}>
          <Route path={APP_ROUTES.home} element={<HomePage />} />
        </Route>
        <Route element={<PageWrapper />}>
          <Route
            path={APP_ROUTES.naTeiaDoBoato.intro}
            element={<NaTeiaDoBoatoIntroPage />}
          />
          <Route path={APP_ROUTES.naTeiaDoBoato["1"]} element={<Page1 />} />
          <Route path={APP_ROUTES.naTeiaDoBoato["1_1"]} element={<Page1_1 />} />
          <Route path={APP_ROUTES.naTeiaDoBoato["1_2"]} element={<Page1_2 />} />
          <Route path={APP_ROUTES.naTeiaDoBoato["2_1"]} element={<Page2_1 />} />
          <Route path={APP_ROUTES.naTeiaDoBoato["2_2"]} element={<Page2_2 />} />
          <Route path={APP_ROUTES.naTeiaDoBoato["2_3"]} element={<Page2_3 />} />
          <Route path={APP_ROUTES.naTeiaDoBoato["2_4"]} element={<Page2_4 />} />
          <Route path={APP_ROUTES.naTeiaDoBoato["3"]} element={<Page3 />} />
          <Route
            path={APP_ROUTES.naTeiaDoBoato.final_1}
            element={<Page4_Final_1 />}
          />
          <Route
            path={APP_ROUTES.naTeiaDoBoato.final_2}
            element={<Page4_Final_2 />}
          />
          <Route
            path={APP_ROUTES.naTeiaDoBoato.final_3}
            element={<Page4_Final_3 />}
          />
          <Route
            path={APP_ROUTES.naTeiaDoBoato.final_4}
            element={<Page4_Final_4 />}
          />
          <Route
            path={APP_ROUTES.naTeiaDoBoato.final_5}
            element={<Page4_Final_5 />}
          />
          <Route
            path={APP_ROUTES.naTeiaDoBoato.final_6}
            element={<Page4_Final_6 />}
          />
          <Route
            path={APP_ROUTES.naTeiaDoBoato.final_7}
            element={<Page4_Final_7 />}
          />
          <Route
            path={APP_ROUTES.naTeiaDoBoato.final_8}
            element={<Page4_Final_8 />}
          />
          <Route
            path={APP_ROUTES.naTeiaDoBoato.conclusion}
            element={<ConclusionPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
