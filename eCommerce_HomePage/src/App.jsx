import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import HomeLayout from "./layout/HomeLayout";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const ProductListing = lazy(() => import("./pages/ProductListing"));
  return (
    <>
      <Router>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="/products/:category/:id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ProductListing />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
