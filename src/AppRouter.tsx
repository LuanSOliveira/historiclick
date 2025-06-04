import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./shared/constants/route";
import HomePage from "./pages/Home";
import NaTeiaDoBoatoIntroPage from "./pages/NaTeiaDoBoato/0-intro";
import Page1 from "./pages/NaTeiaDoBoato/1";
import Page1_1 from "./pages/NaTeiaDoBoato/1-1";
import Page1_2 from "./pages/NaTeiaDoBoato/1-2";
import PageWrapper from "./shared/components/PageComponents/PageWrapper";
import HomeWrapper from "./shared/components/PageComponents/HomeWrapper";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
