import React, { useContext } from "react";

import { AuthContext } from "../context/auth";

import { Image, Grid, Icon } from "semantic-ui-react";

export default function UserPage(props) {
  const userId = props.match.params.userId;

  const { user } = useContext(AuthContext);

  function goBack() {
    props.history.push("/");
  }

  if (!user) {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h1>Successfully Logged out</h1>
            <button className="ui button teal" onClick={goBack}>
              <Icon name="left arrow" />
              Back
            </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  if (user.id === userId) {
    return (
      <div>
        <h1>{user.username}</h1>
        <Image src={user.userImage} />
      </div>
    );
  } else {
    console.log("not a match");
    //TODO get User by ID and show posts
    return <div>Not you</div>;
  }
}
