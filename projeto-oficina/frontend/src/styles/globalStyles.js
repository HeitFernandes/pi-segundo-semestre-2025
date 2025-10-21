import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  position: relative;
}

.Toastify__toast--success {
  padding: 30px 20px;
  color: #fffff0
}

.Toastify__toast--error {
  padding: 30px 20px;
  color: #fffff0
}

.react-confirm-alert-overlay {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
}

.react-confirm-alert-body {
  background: #fffff0;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 30px;
  width: 450px;
  text-align: center;
  font-size: 20px;
}

.react-confirm-alert-body h1 {
  font-size: 35px;
  color: #252525;
  margin-bottom: 25px;
}

.react-confirm-alert-button-group {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.react-confirm-alert-button-group button {
  font-size: 15px;
  font-weight: bold;
  padding: 10px 25px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;


}

.react-confirm-alert-button-group button:first-child {
  background: #930707;

    &:hover {
    background-color: #c9302c;
  }
}

.react-confirm-alert-button-group button:last-child {
  background: #252525;
  border: 1px solid #ccc;

    &:hover {
    background-color: #1b1a1aff;
  }
}


`;
