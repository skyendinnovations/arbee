import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import WhyChooseUs from "./pages/WhyChooseUs";
import ProjectsSection from "./pages/ProjectsSection";
import OngoingProjects from "./pages/OngoingProjects";
import CompletedProjects from "./pages/CompletedProjects";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ongoing Projects: NavBar + Footer only */}
        <Route
          path="/projects/ongoing"
          element={
            <>
              <NavBar />
              <OngoingProjects />
              <Footer />
            </>
          }
        />
        {/* Completed Projects: NavBar + Footer only */}
        <Route
          path="/projects/completed"
          element={
            <>
              <NavBar />
              <CompletedProjects />
              <Footer />
            </>
          }
        />
        {/* All other routes: full layout */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
              <NavBar />
              <main className="mx-auto flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/ongoing-projects" element={<OngoingProjects />} />
                  <Route path="/completed-projects" element={<CompletedProjects />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <div className="mt-8">
                  <div className="p-4 bg-white rounded shadow-sm text-left">
                    <h3 className="font-semibold mb-2">API Tester</h3>
                    <p className="text-sm text-gray-600 mb-3">Try calling the bundled API backend.</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={async () => {
                          try {
                            const r = await fetch('/api/hello');
                            const j = await r.json();
                            alert(JSON.stringify(j));
                          } catch (e) {
                            alert('Error: ' + String(e));
                          }
                        }}
                        className="px-3 py-1 bg-indigo-600 text-white rounded"
                      >
                        Call /api/hello
                      </button>
                    </div>
                  </div>
                </div>
              </main>
              <ProjectsSection />
              <WhyChooseUs />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;