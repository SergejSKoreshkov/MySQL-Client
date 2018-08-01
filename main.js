let socket = io();

socket.on("data", (data) => {
    $(".console").append(JSON.stringify(data) + "<br>");
});

//comment