const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0'

    const updatecounter = () => {
        const target = Number(counter.getAttribute('data-target'))// also we can use + instead of Number//
        // console.log(typeof target ,target);
        const c = +counter.innerText

        const increment = target / 200

        //   console.log(increment)
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updatecounter, 15)
        }
        else {
            counter.innerText = target
        }
    }
    updatecounter();
})