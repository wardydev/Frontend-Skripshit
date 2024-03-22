import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";
import { Dashboard } from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Dashboard />} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}
