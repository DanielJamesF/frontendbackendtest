let names = ['Daniel', 'Stewart', 'Jacob', 'St', 'sT', 'straight', 'Scarlett', 'Scott', 'Swift']
        let display = document.getElementById('names')
        names.forEach((item, index) => {
            if ((names[index].charAt(0) == 'S') && (names[index].charAt(names[index].length - 1) == "t")) {
                display.innerHTML += `<p>${item}</p>`
            }
        });