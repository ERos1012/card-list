import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "erosfinal-character-card/src/professor-card2.js";

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
        <erosfinal-character-card
        subtitle="Eric">
        </erosfinal-character-card>
    `;
  }
}

customElements.define("card-list", CardList);
