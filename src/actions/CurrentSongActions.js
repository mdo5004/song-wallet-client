var songs = [{content:"{title:American Pie}\n{subtitle:Don McLean}\n{section:Intro}\nA [G]long, [D]long [Em7]time ago,\n[Am]I can still re[C]member how that mus[Em]ic used to make me [D]smile\nAnd [G]I know [D]if I [Em7]had my chance,\nThat [Am]I could make those [C]people dance and [Em]maybe they'd be [C]happy for a [D]while\nBut [Em]February [Am]made me shiver, [Em]with every paper I[Am]'d deliver\n[C]Bad news [G]on the [Am]doorstep, I coul[C]dn't take one more [D]step\nI can't remem[D]ber if I [Em]cried when I [Am7]read about his [D]widowed bride\n[G]Something [D]touched me [Em]deep inside\nThe [C]day the [D7]music [G]died"},{content:"{title:Stairway to Heaven}\n{subtitle:Led Zeppelin}\n{section:Intro:}\n         [Am]     [G#+]     [C]     [D]     [Fmaj7]     [G]   [Am]\nThere's a [Am]lady who's [G#+]sure all that [C]glitters is [D]gold\nand she's [Fmaj7]buying a stairway to [G]hea[Am]ven\nWhen she [Am]gets there she [G#+]knows if the [C]stores are all [D]closed\nwith a [Fmaj7]word she can get what she [G]came [Am]for\n[C]Oh_[D]__ [Fmaj7]oh____ [Am]and she's [C]buying a [G]stairway to [D]heaven\nThere's a [C]sign on the [D]wall but she [Fmaj7]wants to be [Am]sure\n'cause you [C]know sometimes [D]words have two [Fmaj7]meanings\nIn a [Am]tree by the [G#+]brook there's a [C]songbird who [D]sings\nSometimes [Fmaj7]all of her thoughts are [G]mis[Am]given\n[Am]     [G#+]     [C]     [D]     [Fmaj7]     [G]   [Am]\n[G/B]    [Am7]     [Dsus4]     [D]Oh___ it makes me [Am7]wonder   [Em]   [D]   [C]    [D]\n[Am7]Oh___ [Dsus4]it  [D]makes me wonder [Am7]     [Em]     [D]     [C]     [D]"}]

export function loadCurrentSong(id){
    return (dispatch) =>{
        return fetch(`/songs/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then( response => response.json())
        .then( song => dispatch( {type: 'GET_SONG', payload:song} ) )
        .catch( console.log ) 
    }
}
export function updateCurrentSong(content){  
    return {type:'UPDATE_SONG', payload:{content: content}}
}

export function saveCurrentSong(id,content){
    return (dispatch) =>{
        return fetch(`/songs/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(content),
            headers: {
                "Content-Type": "application/json"
            }
        }).then( response => response.json())
        .then( song => dispatch( {type: 'SAVE_SONG', payload:song} ) )
        .catch( console.log ) 
    } 
}