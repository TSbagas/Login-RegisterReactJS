import './style.css';
import { Link } from 'react-router-dom';
import Login from './Login';

const Register = () => {
    return(
      <div id='register' class="container">
      <div class="form">
        <div id='jdl' class="btn">
          <Link to='/Register' class="signUpBtn">DAFTAR</Link>
          <Link to='/' class="loginBtn">MASUK</Link>
        </div>
        <form class="pp"/>
          <div class="formGroup">
          </div>
        <form class="pp"/>
          <div class="formGroup">
            <input type="text" id="username" placeholder="Nama Pengguna" autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="email" placeholder="Alamat Email" name="email" required autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="password" id="password" placeholder="Kata Sandi" required autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="password" id="confirmPassword" placeholder="Konfirmasi Kata Sandi" required autocomplete="off"/>
          </div>
          <div class="checkBox">
            <input type="checkbox" name="checkbox" id="checkbox"/>
            <span class="text">I Aggre all the conditions</span>
          </div>
          <div class="formGroup">
            <button type="button" class="btn2">DAFTAR</button>
          </div>
          </div>
          </div>        
)
}

export default Register;