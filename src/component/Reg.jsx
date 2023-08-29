import React from 'react'
import bgImg from '../assest/S.jpg';
import { useForm } from 'react-hook-form';
import "./Form.css";
import { toast } from "react-toastify";
import {useNavigate,Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';


export default function Form() {

    const navigate = useNavigate();


     const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
    console.log(data);


        if ( data.Password === "" || data.Username === "" ) {
            toast.error("Please input all the fields!");
        } else {
      
            toast.success("Successful");
            navigate("/ProjectManeger");
        
        }
    

    console.log(watch('username'));
    }

    // const reqPage = () => {
    //     navigate('Requirment');
    // }
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
               

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("Username")} placeholder='username' />
                    <input type="password" {...register("Password")} placeholder='password' />
                    <a href="ForgotPassword" className="card-link">
                    Forgot Password 
                        </a>
                 
                    <button className='btn' style={{ margin: "auto", width: "100%" }}>Sign In</button>

                    <p>All ready Registed? <a href="Register" className="card-link">
                            Register Now 
                        </a></p>
                        

                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}


