
const testimonialList =[
    {
        img: "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_017_huang_2.png",
        quote: "Keren 😳",
        rating: 5,
        user: "Blaze"  
    },

    {
        img: "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_377_gdglow_snow%235.png",
        quote: "Boleh lah",
        rating: 4,
        user: "Goldenglow"
    },

    {
        img:"https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_1028_texas2_2.png",
        quote: "Biasa banget",
        rating: 3,
        user: "Texas The Omertosa"
    },

    {
        img: "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_003_kalts_boc%236.png",
        quote: "Apa ini?",
        rating: 1,
        user: "Kal'tsit"
    },

]

function showAll() {
    let markUp = "";

    testimonialList.forEach(function (item) {
        markUp += `
        <div class="cards">
            <img src="${item.img}">
            <p class="quote">"${item.quote}"</p>
            <p class="user">${item.rating} <i class="fa-solid fa-star fa-fw"></i> from ${item.user}</p>
        </div>
        `;
    });

    document.getElementById("testimonial").innerHTML = markUp;
};

showAll();

function sort(rating) {
    let markUp = "";

    const sorted = testimonialList.filter(function (item) {
        return item.rating === rating;
    });

    if (sorted.length === 0) {
        markUp += `
        <h2>Empty</h2>
        `;
    } else {
        sorted.forEach(function (item) {
            markUp += `
            <div class="cards">
                <img src="${item.img}">
                <p class="quote">"${item.quote}"</p>
                <p class="user">${item.rating} <i class="fa-solid fa-star fa-fw"></i> from ${item.user}</p>
            </div>
            `;
        });
    };

    document.getElementById("testimonial").innerHTML = markUp;
};
