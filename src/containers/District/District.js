import React, { Component } from "react";
import api from "../../services/apiConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./district.css";
const axios = require("axios");

export class District extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtList: {},
      state_name: ""
    };
  }

  componentDidMount() {
    let url = `${api.DISTRICT_LIST}`;
    let _this = this;
    axios({
      url,
      headers: {
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ3IiwidW5pcXVlX3VzZXJfaWQiOiIxMTg4IiwibmFtZSI6IkJhcm1lciBTb3V0aCBDb29yZGluYXRvciIsInVzZXJuYW1lIjoiMjA0MCIsIm1vYmlsZSI6Ijk5OTk5OTk5OTkiLCJsZXZlbF9pZCI6IjUiLCJwYXNzd29yZF9yZXNldF90b2tlbiI6bnVsbCwiZW1haWwiOiJhYmNuZ0BnbWFpbC5jb20iLCJhdXRoX2tleSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RhdHVzIjoiMSIsImNyZWF0ZWRfYXQiOiIwMDAwLTAwLTAwIDAwOjAwOjAwIiwidXBkYXRlZF9hdCI6IjIwMTktMTEtMDYgMDc6MTg6MDQiLCJjaGFuZ2VkX3Bhc3N3b3JkX29uY2UiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzEiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzIiOiIxOCIsInVzZXJfbGV2ZWwiOiJDbHVzdGVyIFN1cGVydmlzb3IiLCJsb2dpbl9pZCI6M30.ak3OSYopsW211SvJnzH4nNLvcj9Z4B16fR329fZbHeA"
      }
    })
      .then(function(response) {
        if (response && response.data)
          _this.setState({
            districtList: response.data.district
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  addState = () => {
    const { state_name } = this.state;
    let url = `${api.ADD_STATE}`;
    let _this = this;
    let data = {
      state_name: "sdddsds"
    };
    if (state_name !== "") {
      axios
        .post(url, data, {
          headers: {
            "content-type": "application/json",
            token:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ3IiwidW5pcXVlX3VzZXJfaWQiOiIxMTg4IiwibmFtZSI6IkJhcm1lciBTb3V0aCBDb29yZGluYXRvciIsInVzZXJuYW1lIjoiMjA0MCIsIm1vYmlsZSI6Ijk5OTk5OTk5OTkiLCJsZXZlbF9pZCI6IjUiLCJwYXNzd29yZF9yZXNldF90b2tlbiI6bnVsbCwiZW1haWwiOiJhYmNuZ0BnbWFpbC5jb20iLCJhdXRoX2tleSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RhdHVzIjoiMSIsImNyZWF0ZWRfYXQiOiIwMDAwLTAwLTAwIDAwOjAwOjAwIiwidXBkYXRlZF9hdCI6IjIwMTktMTEtMDYgMDc6MTg6MDQiLCJjaGFuZ2VkX3Bhc3N3b3JkX29uY2UiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzEiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzIiOiIxOCIsInVzZXJfbGV2ZWwiOiJDbHVzdGVyIFN1cGVydmlzb3IiLCJsb2dpbl9pZCI6M30.ak3OSYopsW211SvJnzH4nNLvcj9Z4B16fR329fZbHeA"
          }
        })
        .then(function(response) {
          if (response && response.data)
            _this.setState({
              districtList: response.data.district
            });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  handleChange = event => {
    this.setState({
      state_name: event.target.value
    });
  };

  render() {
    const { districtList } = this.state;

    return (
      <div>
        <div className="cards-wrapper">
          {districtList &&
            districtList.length > 0 &&
            districtList.map(district => {
              return (
                <div className="state-card">
                  <div id="card-number">{district.id}</div>
                  <div id="state-name">{district.district_name}</div>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default District;
