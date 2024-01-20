import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS file

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Steve Jobs',
        bio: 'Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American businessman, inventor, and investor best known for co-founding the technology giant Apple Inc. Jobs was also the founder of NeXT and chairman and majority shareholder of Pixar. He was a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak.',
        imgSrc: 'https://m.media-amazon.com/images/I/71sVQDj0SCL._AC_UF1000,1000_QL80_.jpg',
        profession: 'Former CEO of Apple',
      },
      shows: false,
      mountTime: null,
      elapsedTime: 0,
    };

    // Binding the toggleShow method to the component instance
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    // Set the mountTime when the component is mounted
    this.setState({ mountTime: new Date() });

    // Update the elapsed time every second
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  toggleShow() {
    // Toggle the shows state
    this.setState((prevState) => ({ shows: !prevState.shows }));
  }

  render() {
    const { person, shows, elapsedTime } = this.state;

    return (
      <div className="app-container">
        <h1>React State Checkpoint!</h1>

        {/* Displaying person information based on the state */}
        {shows && (
          <div className="profile">
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        {/* Button to toggle the shows state */}
        <Button variant="primary" onClick={this.toggleShow}>
          Toggle Profile
        </Button>

        {/* Time interval since the last component mount */}
        <p className="elapsed-time">Time since mount: {elapsedTime} seconds</p>

        {/* Other JSX content goes here */}
      </div>
    );
  }
}

export default App;
