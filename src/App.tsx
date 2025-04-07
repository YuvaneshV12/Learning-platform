import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Progress from './pages/Progress';
import Achievements from './pages/Achievements';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CourseVideo from './pages/CourseVideo';
import CourseDetails from './pages/CourseDetails';
import PageTransition from './components/PageTransition';
import ProjectDetails from './pages/ProjectDetails';
import ContactBar from './components/ContactBar';

function App() {
  return (
    <Router>
      <AuthProvider>
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
            <Route path="/course-video" element={
              <PageTransition>
                <CourseVideo />
              </PageTransition>
            } />
            <Route path="/course-details/:courseId" element={
              <PageTransition>
                <CourseDetails />
              </PageTransition>
            } />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
          </Routes>
          <ContactBar />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;