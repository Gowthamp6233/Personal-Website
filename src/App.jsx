import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const Home = lazy(() => import("./Pages/Home.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const Projects = lazy(() => import("./Pages/projects.jsx"));
const ProjectDetails = lazy(() => import("./Pages/projectDetails.jsx"));
const Contact = lazy(() => import("./Pages/Contact.jsx"));
const NotFound = lazy(() => import("./Pages/NotFound.jsx"));

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Home />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <About />
            </Suspense>
          } />
          <Route path="projects" element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Projects />
            </Suspense>
          } />
          <Route path="projects/:id" element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <ProjectDetails />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Contact />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <NotFound />
            </Suspense>
          } />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
