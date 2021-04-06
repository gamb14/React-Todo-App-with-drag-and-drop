import './Header.css'

const Header = ({lightMode, setLightMode}) => {

  const moon = './images/icon-moon.svg'
  const sun = './images/icon-sun.svg'

  return (
    <header>
      <h1>todo</h1>
      <img 
        src={lightMode ? moon : sun} alt="icon"
        onClick={() => setLightMode(!lightMode)}
      />
    </header>
  );
}
 
export default Header;