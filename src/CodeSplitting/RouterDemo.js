import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() =>
  import("./About").then((module) => {
    return { default: module.About };
  })
);
const Contact = lazy(() => import("./Contact"));

export default function RouterDemo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function NavWrapper() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
