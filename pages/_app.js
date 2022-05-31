import '../styles/globals.css'
import Nav from "../components/Nav";

function _app({ Component, pageProps }) {
  return(
    <>
      <Nav />
      <Component {...pageProps} />;
    </>
  )
}

export default _app
