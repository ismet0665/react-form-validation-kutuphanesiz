import { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      errorMessage:
        " Username should be 3-16 charecters and shouldn'n include any special charecter!",
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      errorMessage: "It should be a valid email address!",
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      pattern:
        "^(?=.*d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-#$.%&*])(?=.*[a-zA-Z]).{8,16}$",
      errorMessage:
        "It must be between 8 and 16 characters.It must contain at least 1 uppercase and lowercase letters and special characters.",
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your Confirm Password",
      pattern: value.password,
      errorMessage: "Password don't match!.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };

  const onChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  console.log("render");
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        {inputs.map((value) => (
          <FormInput key={value.id} onChange={onChange} {...value} />
        ))}

        <button type="submit">{loading ? "Submit" : "Loading..."} </button>
      </form>
    </div>
  );
}

export default App;
