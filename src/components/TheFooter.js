import { Component } from "../core/heropy";


export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/jcdororo/vanillajsMovieApp.git">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/jcdororo">
          ${new Date().getFullYear()}
          DORORO
        </a>
      </div>
    `
  }
}