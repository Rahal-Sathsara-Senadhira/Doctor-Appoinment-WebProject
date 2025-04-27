import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("sign up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      action=""
      className="min-h-[80vh] shadow-lg rounded-lg flex items-center"
    >
      <div>
        <p>{state === "sign up" ? "Create Account" : "Login"}</p>
        <p>
          Please {state === "sign up" ? "sign up" : "login"} to book appointment
        </p>
      </div>
    </form>
  );
};

export default Login;
