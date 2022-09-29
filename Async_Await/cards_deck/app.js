// Deck of Cards

document.addEventListener("DOMContentLoaded", async function(){

    const baseURL = "http://deckofcardsapi.com/api/deck";

    const $cardArea = $("#card-area");
    const $button = $("button");

    //1
    
    const deck = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`);
    console.log(deck.data);

    //2
    let firstCard = null;
    const resp = await axios.get(`${baseURL}/new/draw/`)
    firstCard = resp.data.cards[0];
    const deckId = resp.data.deck_id;
    const resp2 = await axios.get(`${baseURL}/${deckId}/draw/`);
    const secondCard = resp2.data.cards[0];
    for (const card of [firstCard, secondCard]) {
      console.log(
          `${card.value} of ${card.suit}`
        );
    }

    //3
    $button.on("click", async function (e) {
    e.preventDefault
    const resp = await axios.get(`${baseURL}/${deckId}/draw/`)
    console.log(resp.data.cards[0]);
    let card = resp.data.cards[0]
    $cardArea.append(`<img src="${card.image}" alt="">`);
    if (resp.data.remaining === 0) $button.remove();
})
})


