import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import api from "../../services/apiConstants";
import "./childForm.css";
const axios = require("axios");

export class ChildForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sex: "",
      dob: "",
      father_name: "",
      mother_name: "",
      district_id: null,
      photo:
        "https://staging-dhwani.s3.ap-south-1.amazonaws.com/82ac44b1c5d7ef91a9e912abca5fc3f5.jpg"
    };
  }

  submitForm = () => {
    let url = `${api.CHILD_CREATE}`;
    let _this = this;

    axios
      .post(url, this.state, {
        headers: {
          "content-type": "application/json",
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ3IiwidW5pcXVlX3VzZXJfaWQiOiIxMTg4IiwibmFtZSI6IkJhcm1lciBTb3V0aCBDb29yZGluYXRvciIsInVzZXJuYW1lIjoiMjA0MCIsIm1vYmlsZSI6Ijk5OTk5OTk5OTkiLCJsZXZlbF9pZCI6IjUiLCJwYXNzd29yZF9yZXNldF90b2tlbiI6bnVsbCwiZW1haWwiOiJhYmNuZ0BnbWFpbC5jb20iLCJhdXRoX2tleSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RhdHVzIjoiMSIsImNyZWF0ZWRfYXQiOiIwMDAwLTAwLTAwIDAwOjAwOjAwIiwidXBkYXRlZF9hdCI6IjIwMTktMTEtMDYgMDc6MTg6MDQiLCJjaGFuZ2VkX3Bhc3N3b3JkX29uY2UiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzEiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzIiOiIxOCIsInVzZXJfbGV2ZWwiOiJDbHVzdGVyIFN1cGVydmlzb3IiLCJsb2dpbl9pZCI6M30.ak3OSYopsW211SvJnzH4nNLvcj9Z4B16fR329fZbHeA"
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  };

  render() {
    return (
      <div className="child-form-wrapper">
        <div id="header">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => window.location.reload()}
          />
          <div id="title">ADD CHILD</div>
        </div>
        <div id="form-data">
          <input
            type="text"
            placeholder="Name"
            onChange={event => {
              this.handleChange(event, "name");
            }}
          />
          <input
            type="sex"
            placeholder="sex"
            onChange={event => {
              this.handleChange(event, "sex");
            }}
          />
          <input
            type="dob"
            placeholder="Date of Birth"
            onChange={event => {
              this.handleChange(event, "dob");
            }}
          />
          <input
            type="father-name"
            placeholder="Father's Name"
            onChange={event => {
              this.handleChange(event, "father_name");
            }}
          />
          <input
            type="mother-name"
            placeholder="Mother's Name"
            onChange={event => {
              this.handleChange(event, "mother_name");
            }}
          />
          {/* <input
            type="state"
            placeholder="State"
            onChange={event => {
              this.handleChange(event, "name");
            }}
          /> */}
          <input
            type="district"
            placeholder="District"
            onChange={event => {
              this.handleChange(event, "district_id");
            }}
          />
          <button>Take/ Upload A Photo</button>
          <button type="submit" onClick={() => this.submitForm()}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default ChildForm;
