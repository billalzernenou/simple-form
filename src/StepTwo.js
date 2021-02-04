const StepTow = ({ submited, SetSubmited, username, email, password }) => {
  const handleClick = () => {
    SetSubmited(false);
    console.log("submioted");
  };
  return (
    <div style={{ display: submited ? "block" : "none" }} className="stepTwo">
      <div>
        <h1>Results</h1>
        <p>username: {username}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
      <button onClick={handleClick}>Edit your information</button>
    </div>
  );
};

export default StepTow;
