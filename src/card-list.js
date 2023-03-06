import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "erosfinal-character-card/src/character-card2.js";
import "msanyal7character-card/src/character-card.js";

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      display: inline-block
    }
  `;

  constructor() {
    super();
    this.header = "Our Card List";
  }

  render() {
    return html`
      <h1>${this.header}</h1>
      <!-- Eric's Card -->
      <!-- first card -->
      <character-card2
        title="Pikachu"
        subtitle="The Mouse Pokemon"
        characterImage="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg"
        topText="When the code actually works"
        bottomText="But you didn't change anything"
        accent-color="red"
      > <p>HP:20/20</p>
      </character-card2>
      <!-- second card -->
      <character-card2
        title="Bulbasour"
        subtitle="The Pokemon"
        characterImage="https://i.kym-cdn.com/photos/images/newsfeed/002/012/821/a64.png"
        topText="When they don't choose you"
        bottomText=""
        accent-color="yellow"
        bio="He is a grass type pokemon"
      > <p>HP:10/10</p>
      </character-card2>
      <!-- fourth card -->
      <character-card2
        title="Rowlet"
        subtitle="The Owl Pokemon"
        characterImage="https://i.imgflip.com/2vvi06.jpg?a465720"
        topText="I am done with this project"
        bottomText="Even though nothing works"
        accent-color="red"
        bio="SOO CUTE!!!"
      > <p>HP:15/15</p>
      </character-card2>
      <!-- third card -->
        <character-card2
        title="Charmander"
        subtitle="The Best Fire Starter Pokemon"
        characterImage="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/10/Pok--mon-10-Fire-Type-Memes-Only-True-Fans-Understand-Featured-Image.jpg"
        topText="I finished the code"
        bottomText="And there's five more minutes left"
        accent-color="orange"
        bio="FAVORITE POKEMON"
      > <p>HP:50/50</p>
      </character-card2>
      <!-- fifth card -->
      <character-card2
        title="MewTwo"
        subtitle="The OG Pokemon"
        characterImage="https://hypixel.net/attachments/2135658/"
        topText="Me tackling my problems"
        bottomText=""
        accent-color="yellow"
        bio="He is a psychic type pokemon"
      > <p>HP:100/100</p>
      </character-card2>

      <!-- Manali's Card -->
      <!-- card 1-->
      <character-card>
      <p> Pusheen on a regular day! </p>
      
      </character-card>
      <!-- card 2  -->
      <character-card
      pusheenImg= https://dk2dv4ezy246u.cloudfront.net/widgets/sSFCaxH9f0X_large.jpg
      ><p>Pusheen loves bread!!</p>
      </character-card>
      <!-- card 3  -->
      <character-card
      pusheenImg= 'https://cdn.shopify.com/s/files/1/1240/0898/files/step2_img.png?v=1620248424'
      ><p>Pusheen practicing web programming!</p>
      </character-card>
      <!-- card 4  -->
      <character-card
      pusheenImg= https://i.pinimg.com/originals/8d/ec/ca/8decca007a6f86e1b00ea4277d678067.jpg
      ><p>Pusheen loves hanging out with friends</p>
      </character-card>
       <!-- card 5  -->
       <character-card
      pusheenImg= https://i.pinimg.com/originals/52/8f/6c/528f6c536204f79f8ef63808d57152e9.jpg
      ><p>Pusheen catching some rays at the beach</p>
      </character-card>

    `;
  }
}

customElements.define("card-list", CardList);
