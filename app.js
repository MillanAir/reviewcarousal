const reviews = [
    {
        id: 1,
        name: "Joy Mathur",
        job: "Principal",
        img:"https://www.facetuneapp.com/wp-content/uploads/2020/11/kimson-doan-HD8KlyWRYYM-unsplash-1200x1237.jpg",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum vehicula massa, auctor mattis metus placerat vitae. Etiam sollicitudin ullamcorper arcu, sed laoreet massa dapibus eu. Sed ut fringilla ipsum, eget maximus lacus. Aenean imperdiet enim feugiat nibh viverra, at mollis augue porttitor. Mauris semper ante vitae lorem consequat lobortis. Integer sed pulvinar massa. Aliquam eget rhoncus sem, ac luctus justo. Sed enim dolor, malesuada a dolor at, ultricies placerat nibh. Praesent leo dui, varius sit amet justo quis, venenatis vehicula nulla."
    },
    {
        id: 2,
        name: "Kasturi Mrig",
        job: "Dev Tester",
        img:"https://www.facetuneapp.com/wp-content/uploads/2020/11/kimson-doan-HD8KlyWRYYM-unsplash-1200x1237.jpg",
        text:
        "Praesent varius odio sed mauris interdum, ut maximus ante rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras finibus feugiat nunc, non."    
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;
 