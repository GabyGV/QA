import ReactDOM from 'react-dom';
import './Alert.css';

function Alert({ tipo, children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById('modal')
  );
}

export { Alert };