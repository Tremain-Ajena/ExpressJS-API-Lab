// $(document).ready(function () {
//     let nameField = ('<input class="text" placeholder= "Name"}>');
//     document.body.appendChild(nameField);
//     let messageField = ('<input>');
//     document.body.appendChild(messageField);
// });

$.get('/api/chirps/', (chirps) => {
    console.log(chirps);
    let writeArray = Object.entries(chirps);
    writeArray.forEach(chirp => {
        $('.chirp-container').append(
            `<div>${chirp[1].user}</div>
            <div>${chirp[1].text}</div>`
    )});
    console.log(writeArray);
});

// $.post('api/chirps/', (chirps) => {
//     let nameField = ('<input class="text" placeholder= "Name"}>');
//     document.body.appendChild(nameField);
//     let messageField = ('<input>');
//     document.body.appendChild(messageField);
// })