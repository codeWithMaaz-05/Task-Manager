import React, { useEffect, useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    email: "joy@email.com",
    password: "",
  });

  const [errorText, setErrorText] = useState("");

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const callApi = async () => {
    setLoading(true);

    const data = await fetch(
      "https://freedictionaryapi.com/api/v1/entries/en/hello",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data1 = await data.json();

    setLoading(false);
    setData(data1);
    console.log(data1, "data");
  };

  

  useEffect(() => {
    callApi();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div>{data}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          const email = formData.get("email");
          const password = formData.get("password");

          console.log("Email:", email);
          console.log("Password:", password);

          if (!email && !password) {
            setErrorText("Please enter both your email and password");
          } else if (!email) {
            setErrorText("Please enter your email");
          } else if (!password) {
            setErrorText("Please enter your password");
          } else {
            setErrorText("");
          }
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div>
            <label>Email:</label>
            <input
              required
              value={formValues.email}
              type="email"
              onChange={(e) => {
                setFormValues((prev) => {
                  prev.email = e.target.value;
                  return {
                    ...prev,
                  };
                });
                //   console.log(e.target.value, "event");
              }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              required
              type="password"
              onChange={(e) => {
                setFormValues((prev) => {
                  prev.password = e.target.value;
                  return {
                    ...prev,
                  };
                });
                //   console.log(e.target.value, "event");
              }}
            />
          </div>

          <div>{errorText.length > 0 && <p>{errorText} </p>}</div>

          <button
            onClick={() => {
              if (
                formValues.email.length === 0 &&
                formValues.password.length === 0
              ) {
                setErrorText("Please enter both your email and password");
              } else if (formValues.email.length === 0) {
                setErrorText("Please enter your email");
              } else if (formValues.password.length === 0) {
                setErrorText("Please enter your password");
              } else {
                setErrorText("");
              }
            }}
          >
            Submit
          </button>

          <button type="button">test</button>
        </div>
      </form>
    </div>
  );
}
