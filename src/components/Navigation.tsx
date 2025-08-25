import LocaleSwitcher from './LocaleSwitcher';
import '../styles/Navigation.sass';
export default function Navigation() {

  return (
    <nav className='navigationWeb'>
      <LocaleSwitcher />
    </nav>
  );
}