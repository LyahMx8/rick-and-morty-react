import './Navbar.css';

export const Navbar = ({brand}) => {
  return (
    <a href="/" className="navbar">
      <img className="navbar-image" src="/assets/logo.png" alt="Rick and morty Logo" />
    </a>
  )
}
