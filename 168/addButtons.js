AFRAME.registerComponent("createbuttons", {
    init: function() {
        // 1 create the order button
        var button1 = document.createElement("button");
        button1.innerHTML = "ORDER NOW";
        button1.setAttribute("id", "order-button");
        button1.setAttribute("class", "btn btn-danger ml-3 mr-3");

        //2 create the bill button
        var button2 = document.createElement("button");
        button2.innerHTML = "ORDER SUMMARY";
        button2.setAttribute("id", "order-summary-button");
        button2.setAttribute("class", "btn btn-danger ml-3");

        //3 append somewhere
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.appendChild(button2);
        buttonDiv.appendChild(button1);
    },
    getoderSummary: async function(uid) {
        return await firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then(doc => doc.data());
    },
});