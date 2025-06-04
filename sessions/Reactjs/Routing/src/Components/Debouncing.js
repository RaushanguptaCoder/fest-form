function searchWithDelay(fn, delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=> fn(...args), delay);
    };
}


const searchwithDebounce = searchWithDelay(search, 8000);
function search(query){
    console.log(`searching for ${query}`);

}
searchwithDebounce("R");
searchwithDebounce("RA");
searchwithDebounce("RAUS");
searchwithDebounce("RAUSH");
searchwithDebounce("RAUSHAN");
searchwithDebounce("RAUSHAN-KUMAR");


