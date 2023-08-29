import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";
import bgImg from "../assest/S.jpg";
import {useNavigate,Link} from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Form() {
    const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (
      data.Email === "" ||
      data.Password === "" ||
      data.RePassword === "" ||
      data.Username === "" ||
      data.userLevel === ""
    ) {
      toast.error("Please input all the fields!");
    } else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.Email)) {
        toast.error("Invalid email address");
      } else {
        if (data.Password === data.RePassword) {
          const user = {
            userName: data.Username,
            password: data.Password,
            email: data.Email,
            phoneNumber: "",
            nic: "",
            created: "2023-04-24T15:32:38.602Z",
            updated: "2023-04-24T15:32:38.602Z",
            isDeleted: false,
            deleted: "2023-04-24T15:32:38.602Z",
          };

          fetch("http://localhost:5148/api/User", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-type": "application/json" },
          })
            .then((res) => {
              if (res.status === 200) {
                toast.success("Registration success");
                navigate("/ProjectManeger");

                reset({
                  Email: "",
                  Password: "",
                  RePassword: "",
                  Username: "",
                  userLevel: "",
                });
              }
            })
            .catch((err) => {
              toast.error("Registration failed");
              console.log(err);
            });
        } else {
          toast.error("Passwords are not matching");
        }
      }
    }
  };

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Register New User</h2>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="text" {...register("Email")} placeholder="Email" />
            <input
              type="text"
              {...register("Username")}
              placeholder="Username"
            />

            <select
              {...register("userLevel")}
              style={{
                border: "1px solid #e9ecef",
                padding: ".9em 1em",
                outline: "none",
                margin: "auto",
                width: "100%",
                height: "50%",
              }}
              defaultValue=""
              placeholder="User Type"
            >
              <option value="" disabled>
                Select User Type
              </option>
              <option value="Project manager">Project Manager</option>
              <option value="Develpoer">Develpoer</option>
            </select>
            <input
              type="password"
              {...register("Password")}
              placeholder="Password"
            />
            <input
              type="password"
              {...register("RePassword")}
              placeholder="ReEnter Password"
            />

            <button className="btn" style={{ margin: "auto", width: "100%" }}>
              Register
            </button>
          </form>
        </div>
        
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
