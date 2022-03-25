import { observer } from 'mobx-react-lite';
import './Login.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import storeLogin from '../../store/storeLogin';

const Login = observer(() => {
    return (
        <>
            <Navbar />
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4 login_table">
                            <h4 className='font_color'>Login</h4>
                            <form className="p-4" onSubmit={(e) => storeLogin.login(e)}>
                                <div className="mb-3">
                                    <label for="exampleDropdownFormEmail2" className="form-label font_color">Email address</label>
                                    <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" onInput={(e) => { storeLogin.setFormLogin('email', e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleDropdownFormPassword2" className="form-label font_color">Password</label>
                                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" onInput={(e) => { storeLogin.setFormLogin('pass', e.target.value) }} />
                                </div>
                                <button type="submit" className="btn btn_enter">ВОЙТИ</button>
                            </form>
                            <p className="text-danger text-center">{storeLogin.error}</p>
                            <p className="text-success text-center">{storeLogin.notify}</p>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
})

export default Login