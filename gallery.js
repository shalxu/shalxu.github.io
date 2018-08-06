app.controller('GalleryController', function($animate, $scope) {
    var descriptions = {
        "1": "Shal's Baby Photo",
        "2": "Buttermilk's Baby Photo",
        "3": "Hugh's Baby Photo",
        "8": "Wedding on our hill",
        "9": "Reading my love letter to Hugh",
        "12": "Hummingbird wedding cake from Food Co-op (pecans, banana, pineapple, spices)",
        "14": "Sprite with Japanese Cherry Blossom ",
        "15": "Chinese food from Iron Wok (Walnut Shrimp, Cashew Chicken, Signapore Noodles, Veggie Deluxe, White Rice, Spring Roll, Barbecued Pork)",
        "16 ": "Food Bites Tour @Pike 's Place Market, Seattle",
        "17": "Exotic Fruit stand, weird-looking grapes",
        "18": "On the Seattle Ferris Wheel",
        "20": "Gum Wall in Seattle (ewww~)",
        "21": "Rowboat on Lake Union",
        "23": "Ballard Lock, where ships can travel between ocean and freshwater. There is also a salmon ladder for salmons to travel.",
        "24": "Chinese-styled desserts  @C Fruit Life. Taro shaved ice and Blueberry crepe cake.",
        "25": "University of Washington's gothic Hogwarts-style library ",
        "26": "Hot pot @Sichuan Hot Pot. Highly recommend the Tomato soup base with fatty lamb/beef and fish dumplings ",
        "27": "Smoked Salmon and Banana Cream Crumpets @Queen Bee Cafe ",
        "28": "Feast Buffet, with very fresh sushi ",
        "29": "Nite Seattle @Kerry Park ",
        "30": "Football Stadiums and Mount Rainier from Seattle ",
        "31": "Tasty Poke bowls. Scallop, Shrimp, Salmon, crab, orange, mango, cucumber, seaweed etc. on top of rice.",
        "32": "Breakfast @Cat Cafe: Kitty mocha, Mango Italian Soda, Baked Samon Brioche, Shrimp Cutlet Sandwich, chocolate cake ",
        "33": "Guard your food when the cats are around! Which drink are you thinking to take? ",
        "36": "Very chocolaty kitty cake ",
        "35": "Full menu. At the bottom are colorful kitty ice-cream macaroons.",
        "37": "My birthday presents! Mouse pad for developer's wrist",
        "38": "Trying out VR at Living Computer Museum",
        "39": "Almond Boba and Lychee Macaroon",
        "40": "Pan-Seared Scallops and Lobster Ink Pasta @Cortina",
        "41": "Citrus-Based Ramen, Garlic Pepper Tonkotsu Ramen (with fatty pork) & Deep fried calamari @Kizuki",
        "42": "Watching puppies in front of Amazon Spheres",
        "43": "Cod and Chips @Duke's Seafood ",
        "44": "Sunset Seattle @Kerry Park",
        "45": "Paradise Meadow @Mount Rainier National Park ",
        "46": "Crab cake, prawns and scallops @Duke's Seafood",
        "47": "Horse Riding @Crystal Mountain",
        "49": "Patriarch of the Grove",
        "50": "Crystal clear water",
        "53": "Indoor Skydiving!"
    };

    for (var i = 1; i < 54; i++) {
        let imgNode = document.createElement("img");
        imgNode.src = `/images/photo${i}.jpg`;
        document.getElementById("column" + Math.floor(i / 18)).appendChild(imgNode);
        if (descriptions[i.toString()]) {
            let descNode = document.createElement("p");
            descNode.innerHTML = descriptions[i.toString()];
            document.getElementById("column" + Math.floor(i / 18)).appendChild(descNode);
        }
    }
});