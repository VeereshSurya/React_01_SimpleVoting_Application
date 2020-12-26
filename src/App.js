import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        {
          language: "Angular",
          vote: 0,
        },
        {
          language: "React",
          vote: 0,
        },
        {
          language: "Vue",
          vote: 0,
        },
        {
          language: "Flask",
          vote: 0,
        },
      ],
    };
  }

  vote(i) {
    let newLanguages = [...this.state.languages];
    newLanguages[i].vote++;
    this.setState({
      languages: newLanguages,
    });
  }

  render() {
    return (
      <div>
        <h1>Vote Your Language</h1>
        <div className="languages">
          {this.state.languages.map((lang, i) => (
            <div key={i} className="language">
              <div className="voteCount">{lang.vote}</div>
              <div className="languageName">{lang.language}</div>
              <button onClick={this.vote.bind(this, i)}>Click Here</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
