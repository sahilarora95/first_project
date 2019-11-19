import React, { Component } from "react";
import api from "../../services/apiConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./state.css";

const axios = require("axios");

export class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateList: {},
      state_name: ""
    };
  }

  componentDidMount() {
    let url = `${api.STATE}`;
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
            stateList: response.data.state
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  addState = () => {
    let url = `${api.ADD_STATE}`;
    let _this = this;
    let data = {
      state_name: "sdddsds"
    };
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
            stateList: response.data.state
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleChange = event => {
    this.setState({
      state_name: event.target.value
    });
  };

  render() {
    const { stateList } = this.state;

    return (
      <div>
        <div className="cards-wrapper">
          <div className="state-card">
            <div id="card-number">+</div>
            <div id="card-right-side">
              <input
                type="text"
                id="add-state-input"
                placeholder="Enter State Name"
                onChange={event => this.handleChange(event)}
              />
              <button
                type="submit"
                id="add-state-button"
                onClick={() => this.addState()}
              >
                ADD STATE
              </button>
            </div>
          </div>
          {stateList &&
            stateList.length > 0 &&
            stateList.map(state => {
              return (
                <div className="state-card">
                  <div id="card-number">{state.id}</div>
                  <div id="state-name">{state.state_name}</div>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default State;
