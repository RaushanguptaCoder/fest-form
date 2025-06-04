function searchWithDelay(fn, delay) {
    let lastCall = 0;
    return function (...args) {
        let currentCall = Date.now();
        if (currentCall - lastCall >= delay) {
            lastCall = currentCall;
            fn(...args);
        }
    };
}

function search(query){
    console.log(`searching for ${query}`);
}

const searchwithThrottle = searchWithDelay(search, 10000);

searchwithThrottle("RAU");
searchwithThrottle("RAUS");
searchwithThrottle("RAUSH");
searchwithThrottle("RAUSHA");
searchwithThrottle("RAUSHAN");