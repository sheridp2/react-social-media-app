import React, { useContext } from "react";
import { Image } from "semantic-ui-react";

import { AuthContext } from "../context/auth";

export default function UserPage(props) {
  const userId = props.match.params.userId;

  const { user } = useContext(AuthContext);

  if (user.id === userId) {
    console.log("Its a match");
    return (
      <div>
        <h1>{user.username}</h1>
        <img src={user.userImage} />
      </div>
    );
  } else {
    console.log("not a match");
    //TODO get User by ID and show posts
    return <div>Not you</div>;
  }
}
