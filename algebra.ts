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

export type Art = {
    readonly _tag: "art";
    readonly image: HTMLImageElement;
    //readonly tile: Card<A>;
}

export type Description = {
    readonly _tag: "description";
    text: string;
}

// export type Card<A> = | Name<A> | Art<A> | Description<A>;

type Card = {
    name: string,
    art: Art,
    description: Description
}

export type Deck = {
    deck: Card[]
}

type Algebra = {
    draw: (input: Deck, amount: number) => Deck,
    search: (input: Deck) => Deck,
    shuffle: (input: Deck) => Deck,
    startGame: (input: Deck) => Deck //combination of shuffle (three times?) and draw, like how ccw is just three cw
}; //Things you do to a deck

const alg: Algebra = {
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
};