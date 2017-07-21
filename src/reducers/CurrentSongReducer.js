const initialState = [{id:1, name:"American Pie", artist:"Don McLean", content:"{title:American Pie}\n{subtitle:Don McLean}\n{section:Intro}\nA [G]long, [D]long [Em7]time ago,\n[Am]I can still re[C]member how that mus[Em]ic used to make me [D]smile\nAnd [G]I know [D]if I [Em7]had my chance,\nThat [Am]I could make those [C]people dance and [Em]maybe they'd be [C]happy for a [D]while\nBut [Em]February [Am]made me shiver, [Em]with every paper I[Am]'d deliver\n[C]Bad news [G]on the [Am]doorstep, I coul[C]dn't take one more [D]step\nI can't remem[D]ber if I [Em]cried when I [Am7]read about his [D]widowed bride\n[G]Something [D]touched me [Em]deep inside\nThe [C]day the [D7]music [G]died" }]

const currentSongReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_SONG':
            return action.payload || state;
        case 'GET_SONG':
            return action.payload || state;
        default:
            return state;
    }
}

export default currentSongReducer;