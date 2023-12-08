import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import "./style.css";
import axios from "axios";

const ContactPage = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState("");
  const [picurl, setPicUrl] = useState(null);
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        axios
          .post("http://localhost:6000/api/file/upload", data)
          .then(function (response) {
            setPicUrl(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    };
    getImage();
  }, [file]);

  const formData = {
    title: fname,
    body: lname,
  };

  const submitData = () => {
    if (fname !== "" && lname !== "") {
      axios
        .post(
          "https://dev-275895861389117.api.raw-labs.com/json-programming-heroes",
          formData
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setError("Please fill all input fields");
    }
  };
  return (
    <>
      <Layout>
        <div className="contact_page">
          <h2>Contact Us</h2>
          <p>{error && error}</p>

          <div className="input_grid">
            <div className="input_fields">
              <input
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <img src={picurl} alt="Images" />
          </div>
          <div className="btn_send">
            <button onClick={submitData}>Send</button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactPage;
