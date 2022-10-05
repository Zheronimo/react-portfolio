import { Routes, Route } from 'react-router-dom';

import Admin from './page/Admin/Admin';
import Welcome from './page/Welcome/Welcome';

import './App.css';

const skills = [
  {
    title: 'Frontend',
    skill: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    skill: ['PHP', 'mySQL', 'Wordpress', 'October CMS'],
  },
  {
    title: 'Workflow',
    skill: ['Git', 'Gulp', 'WebPack'],
  },
];

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Admin skills={skills} />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
