import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();

    }

    return (
        <div className="hero bg-base-100">
            <div className="hero-content gap-16 flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm border">
                    <h1 className="text-3xl text-center pt-4 font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='w-full p-4 bg-[#FF3811] font-bold text-white rounded-lg' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center font-semibold mb-4'>New to Cars Doctor ? <Link className='text-orange-600 font-bold' to="/sign-up">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;