function buying() {
    let sectionCalling = document.getElementById('callingFrom');
    sectionCalling.scrollIntoView({ behavior: 'smooth' })
}

let seat = document.querySelectorAll('.serial')
let perTicketPrice = 550;
let totalPrice = 0;
let count = 0;
let available = 40;


for (let i of seat) {
    i.addEventListener('click', function () {


        if (!i.classList.contains('selected') && count < 4) {
            i.classList.remove('bg-[#F7F8F8]', 'text-[#03071280]')
            i.classList.add('bg-[#1DD100]', 'text-white', 'selected')

            let removeElement = document.getElementById('defult');
            removeElement.innerText = '';

            perTicket(i, perTicketPrice)

            totalPrice += 550


            let totalTk = document.getElementById('total-tk');
            totalTk.innerText = totalPrice;

            let grand = document.getElementById('grand');
            grand.innerText = totalPrice;

            count++;

            document.getElementById('count').innerText = count;

            available--;

            document.getElementById('left').innerText = available;
            if (count === 4) {
                let buttons = document.getElementById('apply');
                buttons.removeAttribute('disabled')
                buttons.addEventListener('click', function () {
                    let inputType = document.getElementById('textInput');
                    if (inputType.value === 'NEW15') {
                        discount15(totalPrice)

                    }
                    else if (inputType.value === 'Couple 20') {

                        discount20(totalPrice)
                    }

                })

            }

            let single = document.getElementById('single')
            single.classList.add('hidden')
            
            checkInputs(i)


        } else {
            let errors = document.getElementById('error');
            let single = document.getElementById('single');
            if (i.classList.contains('selected')) {
                single.classList.remove('hidden')
            }
            else {
                errors.classList.remove('hidden')
            }
        }



    })

}




