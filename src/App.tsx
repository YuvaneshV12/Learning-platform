import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Progress from './pages/Progress';
import Achievements from './pages/Achievements';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/courses" element={
            <PageTransition>
              <Courses />
            </PageTransition>
          } />
          <Route path="/progress" element={
            <PageTransition>
              <Progress />
            </PageTransition>
          } />
          <Route path="/achievements" element={
            <PageTransition>
              <Achievements />
            </PageTransition>
          } />
          <Route path="/signin" element={
            <PageTransition>
              <SignIn />
            </PageTransition>
          } />
          <Route path="/signup" element={
            <PageTransition>
              <SignUp />
            </PageTransition>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;