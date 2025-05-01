import React from 'react';
import './LoginForm.css';
import { FaUser , FaLock } from "react-icons/fa";

const LoginForm =() =>{
     return (
        <div className='wrapper'> 
         <form action="">
             <h1>Đăng Nhập</h1>
            <div className="input-box">
               <input type="text" placeholder='Tên Tài Khoản' required /><FaUser />
          
          </div>

         <div className="input-box">
               <input type="password" placeholder='Mật Khẩu' required /><FaLock />
           
          </div>

            <div className="remember-forgot">
              <label><input type ="checkbox"/> Nhớ Mật Khẩu</label>
              <a href="#">Quên Mật Khẩu ?</a>
              </div>

             <button type="submit">Đăng Nhập </button>
              
              <div className="register-link">
                <p>Bạn chưa có tài khoản? <a href="#">Đăng Kí</a></p>  


              </div>
      
         </form>

        </div>
     ); 

};

export default LoginForm