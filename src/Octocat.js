import React, { Component } from 'react'
import Cat from './Cat'

class Octocat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    fetch('https://sdg-octodex.herokuapp.com/')
      .then(response => response.json())
      .then(rawData => {
        this.setState({ cats: rawData.data })
      })
  }

  render() {
    return (
      <main>
        {this.state.cats.map(cat => {
          return (
            <Cat
              number={cat.number}
              image={cat.image}
              name={cat.name}
              authors={cat.authors}
            />
          )
        })}
      </main>
    )
  }
}

export default Octocat
