import { useNavigate } from 'react-router-dom';
import '../ComponentsCss/Header.css';
import './Login.css';
import LoginHeader from './LoginHeader';
import Logo from '../assets/image/badge.png';

function LoginForm() {
        
    const navigate = useNavigate();
      
    const handleLogout = () => {
    // Logout back to homepage
    navigate('/');
  }

  const goToAdmin = () => {
    navigate('/Admin')
  }

  const goToTeacher = () => {
    navigate('/Teacher')
  }

  const goToStudent = () => {
    navigate('/Student')
  }

  const goToBursar = () => {
    navigate('/Bursar')
  }
    return (
        <div className='bg-primary bg-opacity-25'>
            <LoginHeader

              onLogout={handleLogout}
              
            />
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="card shadow bg-light p-4 login-form-card" style={{maxWidth: "400px", width:"95%"}} >
                    <div className='text-center m,b-4'>
                    <img src={Logo} alt="school logo" className="img-fluid" style={{height: "70px", width:"70px"}} />
                    </div>
                    <h3 className='text-center mb-4 mt-2'>Welcome!</h3>

                    <form>
                        <div className='mb-4'>
                            {/* <i className='fas fa-id-badge me-2'></i> */}
                            <label className='form-label px-2'>Reg No | Staff Number</label><br/>
                            <input className='w-100 rounded p-2' type='text' id='regNo' placeholder='Enter Reg No | Staff Number' style={{border: "2px solid gray"}}/>
                        </div>

                        <div className='mb-4'>
                            {/* <i className='fas fa-lock me-2'></i> */}
                            <label className='form-label px-2'>Password</label><br/>
                            <input className='w-100 rounded p-2' type='password' id='password' placeholder='Enter your password' style={{border: "2px solid gray"}}/>
                        </div>
                        
                        <button type='submit' className='btn btn-primary fw-semibold fs-5 mb-3 w-100'>Login</button>

                        <div>
                            <a href='##' className='text-decoration-none'>Forgot Password</a>
                        </div>
                        <div>
                            <p className='text-center pt-3'>Temporary links</p> <hr></hr>
                            <div className='text-center'>
                                <button onClick={goToAdmin} >Admin</button>
                                <button onClick={goToTeacher} >Teacher</button>
                                <button onClick={goToStudent} >Student</button>
                                <button onClick={goToBursar} >Bursar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginForm;