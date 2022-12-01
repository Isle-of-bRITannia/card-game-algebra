import { Card, Deck, Alg, MultiDeck } from "./algebra";

type DeckToDeck = (deck: Deck) => Deck;
type DecksToDeck = (...decks: Deck[]) => Deck;
type DecksToDecks = (...decks: Deck[]) => Deck[];

type CardAPI = {
    shuffle: DeckToDeck,
    draw: DecksToDecks,
    combine: DecksToDeck,
    discard: DecksToDecks
}

const API: CardAPI = {
    shuffle: (inputDeck) => {
        if (inputDeck._tag === "MultiDeck")
        {
            for (let i = inputDeck.deck.length - 1; i > 0; i--)
            {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = inputDeck.deck[i];
                inputDeck.deck[i] = inputDeck.deck[j];
                inputDeck.deck[j] = temp;

                return inputDeck as Deck;
            }
        }
        else
        {
            return inputDeck as Deck;
        }
    },
    draw: () => {},
    combine: () => {},
    discard: () => {}
};

export {
    API as Card
}