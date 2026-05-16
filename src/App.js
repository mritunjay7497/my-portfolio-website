import React, { lazy, Suspense, useState, createContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";
import { Constants } from "./Constants";
import Books from "./components/Books/Books";
import BlogArticle from "./components/Blogs/BlogArticle";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Blogs = lazy(() => import("./components/Blogs/Blogs"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

export const LoadingContext = createContext();

const PageLoader = () => (
  <div className="loader-container">
    <div className="modern-loader" role="status" aria-label="Loading content">
      <span></span>
    </div>
  </div>
);

function App() {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const isGitHubPages = window.location.hostname === "mritunjay7497.github.io";
  const RouterComponent = isGitHubPages ? HashRouter : Router;
  const routerProps = !isGitHubPages && process.env.PUBLIC_URL ? { basename: process.env.PUBLIC_URL } : {};

  return (
    <LoadingContext.Provider value={{ setIsDataLoading }}>
      <RouterComponent {...routerProps}>
        <div className="App app-shell">
          <Navbar />
          <ScrollToTop />
          {isDataLoading && <PageLoader />}
          <main className="app-main">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/resume" element={<Resume pdfUrl={Constants.RESUME_S3_URL} />} /> */}
                <Route path="/blogs" element={<Blogs blogUrl={Constants.BLOGS_FEED_URL} />} />
                <Route path="/blogs/:articleId" element={<BlogArticle feedUrl={Constants.BLOGS_FEED_URL} />} />
                <Route path="/books" element={<Books />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </RouterComponent>
    </LoadingContext.Provider>
  );
}

export default App;
