import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import ErrorPage from "./_error";

export default class About extends Component {
  //   state = {
  //     user: null
  //   };

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/searchs");

    const statusCode = res.status > 200 ? res.satus : false;

    const data = await res.json();
    //   .then(res => res.json())
    //   .then(data => {
    console.log(data);
    //   });
    return { user: data, statusCode };
  }

  //   componentDidMount() {
  //     fetch("https://api.github.com/users/searchs")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         this.setState({
  //           user: data,
  //         });
  //       });

  render() {
    const { user, statusCode } = this.props;

    if(statusCode) {
        return <Error statusCode={statusCode} />;
    }
 
    return (
      <Layout title="About Mk2">
        <p>{user.name}</p>
    <p>{user.bio}</p>
        <p>{user.company}</p>
        <img
          src={user.avatar_url}
          alt="About MTP"
          height="300px"
          width="auto"
        />
      </Layout>
    );
  }
}
