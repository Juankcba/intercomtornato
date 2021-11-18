$(document).ready(function () {

    var WEBSOCKET_ROUTE = "/ws";

    if (window.location.protocol == "http:") {
        //localhost
        var ws = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
        var ws1 = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
        var ws2 = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
        var ws3 = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
        var ws4 = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
        var ws5 = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
        var ws6 = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
        var ws7 = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
        var ws8 = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
        var ws9 = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);

    } else if (window.location.protocol == "https:") {
        //Dataplicity
        var ws = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
        var ws1 = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
        var ws2 = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
        var ws3 = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
        var ws4 = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
        var ws5 = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
        var ws6 = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
        var ws7 = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
        var ws8 = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
        var ws9 = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
    }

    ws.onopen = function (evt) {
        $("#ws-status").html("Connected");
    };

    ws.onmessage = function (evt) {};

    ws.onclose = function (evt) {
        $("#ws-status").html("Disconnected");
    };
    ws1.onopen = function (evt) {
        $("#ws-status-1").html("Connected");
    };

    ws1.onmessage = function (evt) {};

    ws1.onclose = function (evt) {
        $("#ws-status-1").html("Disconnected");
    };


    ws2.onopen = function (evt) {
        $("#ws-status-2").html("Connected");
    };

    ws2.onmessage = function (evt) {};

    ws2.onclose = function (evt) {
        $("#ws-status-2").html("Disconnected");
    };


    ws3.onopen = function (evt) {
        $("#ws-status-3").html("Connected");
    };

    ws3.onmessage = function (evt) {};

    ws3.onclose = function (evt) {
        $("#ws-status-3").html("Disconnected");
    };


    ws4.onopen = function (evt) {
        $("#ws-status-4").html("Connected");
    };

    ws4.onmessage = function (evt) {};

    ws4.onclose = function (evt) {
        $("#ws-status-4").html("Disconnected");
    };

    ws5.onopen = function (evt) {
        $("#ws-status-5").html("Connected");
    };

    ws5.onmessage = function (evt) {};

    ws5.onclose = function (evt) {
        $("#ws-status-5").html("Disconnected");
    };


    ws6.onopen = function (evt) {
        $("#ws-status-6").html("Connected");
    };

    ws6.onmessage = function (evt) {};

    ws6.onclose = function (evt) {
        $("#ws-status-6").html("Disconnected");
    };

    ws7.onopen = function (evt) {
        $("#ws-status-7").html("Connected");
    };

    ws7.onmessage = function (evt) {};

    ws7.onclose = function (evt) {
        $("#ws-status-7").html("Disconnected");
    };


    ws8.onopen = function (evt) {
        $("#ws-status-8").html("Connected");
    };

    ws8.onmessage = function (evt) {};

    ws8.onclose = function (evt) {
        $("#ws-status-8").html("Disconnected");
    };


    ws9.onopen = function (evt) {
        $("#ws-status-9").html("Connected");
    };

    ws9.onmessage = function (evt) {};

    ws9.onclose = function (evt) {
        $("#ws-status-9").html("Disconnected");
    };










    $("#green_on").click(function () {
        ws.send("on_g");
    });

    $("#green_off").click(function () {
        ws.send("off_g");
    });

    $("#red_on").click(function () {
        ws.send("on_r");
    });

    $("#red_off").click(function () {
        ws.send("off_r");
    });

    $("#blue_on").click(function () {
        ws.send("on_b");
    });

    $("#blue_off").click(function () {
        ws.send("off_b");
    });

    $("#white_on").click(function () {
        ws.send("on_w");
    });

    $("#white_off").click(function () {
        ws.send("off_w");
    });


});