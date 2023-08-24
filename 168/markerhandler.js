AFRAME.registerComponent("markerhandler", {
    init: async function() {
        this.el.addEventListener("markerFound", () => {
            console.log("marker is found");
            this.handelMarkerFound();
        });

        this.el.addEventListener("markerLost", () => {
            console.log("marker is lost");
            this.handelMarkerLost();
        });
    },
    handelMarkerFound: function() {
        // changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var orderButton = document.getElementById("order-button");
        var orderSummaryButton = document.getElementById("order-summary-button");

        // handling click events
        orderButton.addEventListener("click", () => {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks For Order !",
                text: " ",
                timer: 2000,
                buttons: false
            });
        });

        orderSummaryButton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "Order Summary",
                text: "Work In Progress"
            });
        });
    },
    getAllToys: async function() {
        return await firebase
        .firestore()
        .collection("toys")
        .get()
        .then(snap => {
            return snap.docs.map(doc => doc.data());
        });
    },
    handleRatings: function(toy) {
        //Close Modal
        document.getElementById("rating-modal-div").style.display = "flex";
        document.getElementById("rating-input").value = "0";

        var saveRatingButton = document.getElementById("save-rating-button");
        saveRatingButton.addEventListener("click", () => {
            document.getElementById("rating-modal-div").style.display = "none";
            var rating = document.getElementById("rating-input").value;

            firebase
            .firestore()
            .collection("toys")
            .doc(toy.id)
            .update({
                rating: rating 
            })
            .then(() => {
                swal({
                    icon: "success",
                    title: "Thanks For Rating!",
                    text: "We Hope You Like Toy !!",
                    timer: 2500,
                    buttons: false
                });
            });
        });
    },
})