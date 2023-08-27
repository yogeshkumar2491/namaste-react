import React from "react";
class User extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userInfo: { name: "", email: "", avatar_url: "" },
    };
    // console.log("Child Constructor: ");
  }

  async componentDidMount() {
    // console.log("Child Did Mount");
    const data = await fetch("https://api.github.com/users/yogeshkumar2491");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    // console.log("Child Render ");
    const { name, email, location, avatar_url } = this?.state?.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: yogeshkuar2491</h4>
      </div>
    );
  }
}

export default User;
