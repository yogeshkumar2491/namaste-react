import User from "./User";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>Namaste React</h2>
        <User />
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
