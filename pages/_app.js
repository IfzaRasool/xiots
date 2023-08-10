import '../styles/globals.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import store from '../redux/store';
import Modal from 'react-modal';
import { Provider } from 'react-redux';

Modal.setAppElement('#__next');
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
