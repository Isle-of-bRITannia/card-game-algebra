// name string
// attributes - name, art, effects
//identity - blank card?

// API
//deck - a collection of some number of cards
//draw - return X number of cards from a collection
//search - basically filter
//shuffle - randomize a deck

// export type Name<A> = {
//     readonly _tag: "name";
//     readonly tile: Card<A>;
// }

// export type Card<A> = | Name<A> | Art<A> | Description<A>;

export type EnergyCard = {
    name: string;
    art: HTMLImageElement;
}

export type PokemonCard = {
    name: string;
    stage: number;
    art: HTMLImageElement;
    ability: string;
    attacks: string[];
    type: string;
    weakness: string;
    retreat: number;
}

export type TrainerCard = {
    name: string,
    art: HTMLImageElement,
    description: string;
}

export type Card = | EnergyCard | PokemonCard | TrainerCard;

export type NilDeck = {
    _tag: "NilDeck";
    //deck: [];
}

export type SingleDeck = {
    _tag: "SingleDeck";
    card: Card;
}

export type MultiDeck = {
    _tag: "MultiDeck";
    deck: Card[];
}

export type ConcatDeck = {
    _tag: "ConcatDeck";
    deckA: Deck;
    deckB: Deck;
}

export type DrawnDeck = {
    _tag: "DrawnDeck";
    drawn: Number;
    origin: Deck;
}

export type MinusDeck = {
    _tag: "MinusDeck";
    origin: Deck;
    subtractor: Deck;
}

export type Deck = | NilDeck | SingleDeck | MultiDeck | ConcatDeck | DrawnDeck | MinusDeck;

type Algebra = {
    nilDeck: () => Deck,
    singleDeck: (card: Card) => Deck,
    multiDeck: (cards: Card[]) => Deck,
    concatDeck: (dA: Deck, dB: Deck) => Deck,
    drawnDeck: (drawn: Number, origin: Deck) => Deck,
    minusDeck: (origin: Deck, subtractor: Deck) => Deck
}

const Alg: Algebra = {
    nilDeck: () => ({ //Doesn't need anything
        _tag: "NilDeck"
    }),
    singleDeck: (card: Card) => ({ //Is only a single card
        _tag: "SingleDeck",
        card: card
    }),
    multiDeck: (cards: Card[]) => ({ //Is an array of cards
        _tag: "MultiDeck",
        deck: cards
    }),
    concatDeck: (dA: Deck, dB: Deck) => ({ //Takes in two decks to build off of
        _tag: "ConcatDeck",
        deckA: dA,
        deckB: dB
    }),
    drawnDeck: (drawnCards: Number, originDeck: Deck) => ({ //Takes in two decks to build off of
        _tag: "DrawnDeck",
        drawn: drawnCards,
        origin: originDeck
    }),
    minusDeck: (originDeck: Deck, subtractorDeck: Deck) => ({ 
        _tag: "MinusDeck",
        origin: originDeck,
        subtractor: subtractorDeck
    }),

};

export {
    Alg
};

/*type Algebra = {
    draw: (input: Deck, amount: number) => Deck,
    search: (input: Deck) => Deck,
    shuffle: (input: Deck) => Deck,
    startGame: (input: Deck) => Deck //combination of shuffle (three times?) and draw, like how ccw is just three cw
}; //Things you do to a deck*/

/*const alg: Algebra = {
    draw: (input, amount) => ({
        deck: []
        // deck: input.deck
        //Currently an empty array, since it isn't just supposed to be the input deck again
        //Supposed to take the input deck and make a new deck that is the size of the indicated amount
        //When drawing cards to add to hand, remove from deck
        //include some sort of failsafe for if you want to draw more cards than there are cards in the deck?
    }),
    search: (input) => ({
        deck: []
        // deck: input.deck
        //Currently an empty array, since it isn't just supposed to be the input deck again
        //Supposed to take the input deck, filter it based on some sort of criteria, and then return a new deck based on that result
        //include some sort of failsafe for invalid searches? 
    }),
    shuffle: (input) => ({
        deck: []
        // deck: input.deck
        //Currently an empty array, since it isn't just supposed to be the input deck again
        //Supposed to take the input deck and just reorder it, such that deckN[0] ... deckN[n] != deckS[0] ... deckS[n]
        //N is "no shuffle" and S is "shuffle"
        //Basically just reorder it so that it isn't identical to how it was before the shuffling and return that.
        //Loop through, building a new deck based on randoms and removal?
        //For however many cards there are, roll a random based on that number, 
        //put that one in index 0, remove it, roll again, insert in index 1, and continue?

    }),
    startGame: (input) => ({
        deck: []
        // deck: input.deck
        //Currently an empty array, since it isn't just supposed to be the input deck again
        //Supposed to do shuffle multiple times, then call draw with some sort of hardcoded number, like 5
    })

    //
};*/