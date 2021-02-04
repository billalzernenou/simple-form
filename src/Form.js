import { useState } from "react";
import StepTow from "./StepTwo";
const Form = () => {
  const [submited, SetSubmited] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      alert("Vos deux mot de passe ne sont pas identiques");
      console.log(username, email, password, passwordConfirm);
    } else {
      SetSubmited(true);
    }
  };

  return (
    <div className="form-steps">
      <div style={{ display: submited ? "none" : "block" }} className="form">
        <h1>Create account</h1>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="passWord"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <label>Confirm your password</label>
          <input
            type="password"
            placeholder="passwordConfirm"
            value={passwordConfirm}
            onChange={(event) => {
              setPasswordConfirm(event.target.value);
            }}
          />
          <button type="submit">Valider</button>
        </form>
      </div>
      <StepTow
        submited={submited}
        SetSubmited={SetSubmited}
        username={username}
        email={email}
        password={password}
      />
    </div>
  );
};

export default Form;
