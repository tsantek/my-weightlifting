import React from 'react';

class App extends React.Component {
  componentDidMount = async function() {
    fetch('/api/workouts', {
      headers: {
        'Accept': 'application/json'
      }
    })
  }
  render() {
    return (
      <>Yo</>
    )
  }
}

export default App;
