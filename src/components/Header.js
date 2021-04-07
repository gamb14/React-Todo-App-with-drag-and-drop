import './Header.css'

const Header = ({lightMode, setLightMode}) => {

  const moon = './images/icon-moon.svg'
  const sun = './images/icon-sun.svg'

  const handleKeyDown = e => {
    if (e.code === 'Space' || e.code === 'Enter'){
      setLightMode(!lightMode)
    }
  }

  return (
    <header>
      <h1>todo</h1>
      <div role='button' tabIndex='0' onKeyDown={handleKeyDown} >
        <img 
          src={lightMode ? moon : sun} alt="icon"
          onClick={() => setLightMode(!lightMode)}
        />
      </div>
    </header>
  );
}
 
export default Header;