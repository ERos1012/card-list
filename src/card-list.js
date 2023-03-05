import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "erosfinal-character-card/src/character-card.js";

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
    .card {
      height: 300px;
      width: 300px;
      background-color: #f1f1f1;
      margin: 10px;
    }
  `;

  constructor() {
    super();
    this.header = "My Card List";
  }

  render() {
    return html`
      <h1>${this.header}</h1>
      <erosfinal-character-card characterName="Eros"></erosfinal-character-card>
    `;
  }
}

customElements.define("card-list", CardList);
