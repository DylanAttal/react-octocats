import React, { Component } from 'react'
import CatIcon from './CatIcon'

class Footer extends Component {
  render() {
    return (
      <div class="footer-border">
        <div class="footer-left">
          <ul>
            <li>RSS</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div class="footer-center">
          <CatIcon />
        </div>
        <div class="footer-right">
          <p>&copy; 2013 - 2018 GitHub, Inc.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    )
  }
}

export default Footer
