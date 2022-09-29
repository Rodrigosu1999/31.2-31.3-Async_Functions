// Deck of Cards

document.addEventListener("DOMContentLoaded", function(){

    const baseURL = "http://deckofcardsapi.com/api/deck";

    const $cardArea = $("#card-area");
    const $button = $("button");
    let deckId = null;

    //1
    const deck = axios.get(`${baseURL}/new/shuffle/?deck_count=1`)
    .then(res => {
        console.log(res.data);
        deckId = res.data.deck_id
    })
    .catch(err => {console.log(err);})

    //2
    let firstCard = null;
    axios.get(`${baseURL}/new/draw/`)
    .then(resp => {
      firstCard = resp.data.cards[0];
      let deckId = resp.data.deck_id;
      return axios.get(`${baseURL}/${deckId}/draw/`);
    })
    .then(resp => {
      let secondCard = resp.data.cards[0];
      for (const card of [firstCard, secondCard]) {
        console.log(
            `${card.value} of ${card.suit}`
          );
      }
    });

    //3
    $button.on("click", function (e) {
    e.preventDefault
    axios.get(`${baseURL}/${deckId}/draw/`)
    .then(res => {
        console.log(res.data.cards[0]);
        let card = res.data.cards[0]
        $cardArea.append(`<img src="${card.image}" alt="">`);
        if (res.data.remaining === 0) $button.remove();
    })
    .catch(err => {console.log(err);})
})
})



