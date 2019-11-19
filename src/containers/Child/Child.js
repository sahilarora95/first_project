import React, { Component } from "react";
import "./child.css";
import ChildForm from "../../components/ChildForm/ChildForm";
import api from "../../services/apiConstants";
const axios = require("axios");

export class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddChildForm: false,
      childList: {}
    };
  }

  openAddChildForm = () => {
    this.setState({
      showAddChildForm: true
    });
  };

  componentDidMount() {
    let url = `${api.CHILD_LIST}`;
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
            childList: response.data.child_profile
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { showAddChildForm, childList } = this.state;
    if (showAddChildForm) return <ChildForm />;
    else {
      return (
        <div className="child-wrapper">
          <button
            type="submit"
            onClick={() => this.openAddChildForm()}
            id="add-child"
          >
            ADD CHILD
          </button>
          <div className="table">
            <div className="table-row Apptable-row-1">
              <div id="name">NAME</div>
              <div id="sex">SEX</div>
              <div id="dob">DATE OF BIRTH</div>
              <div id="father-name">FATHER'S NAME</div>
            </div>
            {childList &&
              childList.length > 0 &&
              childList.map(child => {
                return (
                  <div className="table-row">
                    <div id="name">{child.name}</div>
                    <div id="sex">{child.sex}</div>
                    <div id="dob">{child.dob}</div>
                    <div id="father-name">{child.father_name}</div>
                  </div>
                );
              })}
          </div>
        </div>
      );
    }
  }
}

export default Child;
