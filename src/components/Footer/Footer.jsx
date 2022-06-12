import './Footer.css';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/re-cycle-logo.svg';
import WhatsappImg from '../../assets/whatsapp.svg';

export function Footer() {
  return (
    <footer className="footer-main-container">
      <div className="content-display">
        <div className="links-container">
          <h1 className="footer-links-title">Informações e contatos.</h1>
          <ul className="footer-links">
            <li className="footer-links-list"><Link className="links" to="/">Home</Link></li>
            <li className="footer-links-list"><Link className="links" to="/About">Sobre</Link></li>
          </ul>

          <a href="mailto:recycle348@gmail.com" className="links-send">Envie nos um e-mail.</a>
        </div>

        <div className="links-container">
          <h1 className="footer-links-title">Nossas redes sociais.</h1>

          <div className="social-media-container">
            <a className="links-send" href="https://web.whatsapp.com/send?phone=5531991151126">Whatsapp: <img src={WhatsappImg} alt="Whatsapp" /></a>
          </div>
        </div>

        <div className="links-container">
          <h1 className="footer-links-title">Visite-nos.</h1>
          
          <address className="endereco">

          </address>
        </div>

        <div className="logo-svg">
          <img className="logo-img" src={LogoImg} alt="re-cycle"/>
        </div>
      </div>
    <svg className="svg-wave" width="100%" height="100%" id="svg" viewBox="0 0 1100 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,166 0,166 C 89.14285714285714,151.64285714285714 178.28571428571428,137.28571428571428 294,149 C 409.7142857142857,160.71428571428572 552,198.49999999999997 693,212 C 834,225.50000000000003 973.7142857142858,214.71428571428572 1098,203 C 1222.2857142857142,191.28571428571428 1331.142857142857,178.64285714285714 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#7bdcb588" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,500 C 0,500 0,333 0,333 C 131.67857142857142,338.1428571428571 263.35714285714283,343.2857142857143 384,339 C 504.64285714285717,334.7142857142857 614.25,320.99999999999994 716,307 C 817.75,293.00000000000006 911.6428571428571,278.7142857142857 1031,283 C 1150.357142857143,287.2857142857143 1295.1785714285716,310.1428571428571 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#7bdcb5ff" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
    </footer>
  )
}