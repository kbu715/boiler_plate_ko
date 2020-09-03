import React from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";
function LandingPage(props) {

    const onClickHandler = () => {
        axios.post("http://localhost:5000/api/users/logout", "", {
            withCredentials : true,
        })
        .then(response => {
            console.log("222", response.data)
          if(response.data.success) {
            props.history.push('/login')
          } else {
              
            alert('로그아웃 하는데 실패했습니다.')
          }
        })
      }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      LandingPage
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default withRouter(LandingPage);
