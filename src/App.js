import s from './App.module.scss';
import Routes from './Routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header className={s.AppHeader}>
        <Link className={s.AppLink} to="/">
          TV Shows
        </Link>
      </header>
      <Routes />
    </>
  );
}

export default App;
