import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "erosfinal-character-card/src/character-card.js";
import "erosfinal-character-card/src/card-meme-maker.js";

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  constructor() {
    super();
    this.header = 'My Card List';
  }

  render() {
    return html` 
    <p> ${this.header} </p>  
     <erosfinal-character-card
     characterName="Pikachu"
     characterBio="Pikachu is a good boi"
     accentColor="red"
     meme="https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip">
     </erosfinal-character-card>
    `;
  }
}

customElements.define('card-list', CardList);