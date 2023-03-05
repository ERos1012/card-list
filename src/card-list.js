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
        <p>${this.header}</p>
        <meme-maker
          top-text="Bulbasaur!"
          bottom-text="I choose you!"
          image="https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        >
        </meme-maker>
        <erosfinal-character-card 
          class="card"
          characterName="Pikachu"
          characterBio="Pikachu is a good boi"
          characterImage="https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        >
        </erosfinal-character-card>
    `;
  }
}

customElements.define("card-list", CardList);
