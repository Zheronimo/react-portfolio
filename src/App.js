import './App.css';
import Admin from './page/Admin/Admin';

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
      <Admin skills={skills} />
    </div>
  );
}

export default App;
