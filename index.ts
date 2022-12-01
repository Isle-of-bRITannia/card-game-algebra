import { Card, Deck, Alg } from "./algebra";

type DeckToDeck = (deck: Deck) => Deck;
type DecksToDeck = (...decks: Deck[]) => Deck;
type DecksToDecks = (...decks: Deck[]) => Deck[];

type CardAPI = {
    shuffle: DeckToDeck,
    draw: DecksToDecks,
    combine: DecksToDeck,
    discard: DecksToDecks
}