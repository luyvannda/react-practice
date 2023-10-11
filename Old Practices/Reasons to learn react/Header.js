import logo from './logo.svg';

export default function Header() {
  return (
    <header>
      <nav className='nav'>
        <img className='app-logo' src={logo} alt="My App logo"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}