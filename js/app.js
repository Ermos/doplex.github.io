// ** Logo Effect ** //
const state = {
    block: document.querySelector("#logo-desc"),
    currentChoice: 0,
    description: "Back-end Developer",
    textChoice: [
        "Back-end Developer",
        "Front-end Developer",
        "Passionate",
        "Blogger",
        "Self-taught",
    ]
}

const setCurrentChoice = (value) => {
    state.currentChoice = value
}

const setDescription = (value) => {
    state.description = value
    state.block.innerHTML = value
}

const descriptionWriter = (write, length, i) => {
    console.log(state.description)
    if (!write) {
        if (i < length) {
            setDescription(state.description.slice(0, -1))
            i++;
            setTimeout(() => {
                descriptionWriter(false, length, i)
            }, 50);
        } else {
            descriptionWriter(true, state.textChoice[state.currentChoice].length, 0)
        }
    } else {
        if (i < length) {
            setDescription(state.description + state.textChoice[state.currentChoice].charAt(i))
            i++;
            setTimeout(() => {
                descriptionWriter(true, length, i)
            }, 50);
        } else {
            setTimeout(() => {
                changeChoice()
            }, 1000);
        }
    }
}

const changeChoice = () => {
    if (state.currentChoice + 1 > state.textChoice.length -1) {
        setCurrentChoice(0)
    } else {
        setCurrentChoice(state.currentChoice +1)
    }

    descriptionWriter(false, state.description.length, 0)
}



changeChoice()

// ** Scroll Top Btn ** //

const scrollTo = (to, duration) => {
        const
            element = document.scrollingElement || document.documentElement,
            start = element.scrollTop,
            change = to - start,
            startDate = +new Date(),
            easeInOutQuad = function(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            },
            animateScroll = function() {
                const currentDate = +new Date();
                const currentTime = currentDate - startDate;
                element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
                if(currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
                else {
                    element.scrollTop = to;
                }
            };
        animateScroll();
    };

document.querySelector("#jump-top").addEventListener("click", (e) => {
    e.preventDefault()
    scrollTo(0, 1000)
})