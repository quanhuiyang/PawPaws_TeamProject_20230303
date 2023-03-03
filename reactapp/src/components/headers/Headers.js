import './headers.scss'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

function Headers() {
  return (
    <header>
      <section className="logo">
        <img src="http://localhost:3001/images/logo.svg" alt="PawPawsLogo" />
        <h1>PawPaws</h1>
      </section>
      <nav>
        <ul>
          <li>
            <Nav.Link as={Link} to="/">
              首頁
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/shop">
              商城
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/hotel">
              飯店
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/activity">
              活動
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/members">
              登入｜註冊
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/shopcart">
              購物車
            </Nav.Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Headers
