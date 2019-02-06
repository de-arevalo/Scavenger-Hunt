$("#introButton").dblclick(function() {
    $("#prompt").hide();
    $("#restaurantClick").show();
    $("#startWalking").show();
});

$("#restaurantClick").hover(function() {
    $("#restaurantClick").hide();
    $("#ponchoScene").fadeIn();
    $("#stepTwoText").show();
    $("#startWalking").hide();
});

$("#goBack").click(function() {
    $("#ponchoScene").hide();
    $("#restaurantClick").fadeIn();
    $("#stepTwoText").hide();
    $("#towardsShed").show();
});

$("#towardsShedButton").click(function() {
    $("#restaurantClick").fadeOut();
    $("#harveyShedPic").fadeIn();
    $("#harveyShedtext").show();
    $("#towardsShed").hide();
    $("#treeButton").show();
});

$("#treeButton").click(function() {
    $("#treePic").show();
    $("#harveyShedPic").hide();
    $("#harveyShedtext").hide();
    $("#returnToShed").show();
});

$("#treeButton").dblclick(function() {
    $("#clearShedPic").show();
    $("#treePic").hide();
    $("#returnToShed").hide();
    $("#clearShedText").show();
    $("#treeButton").hide();
});

$("#clearShedPic").click(function() {
    $("#clearShedPic").fadeOut();
    $("#treasurePic").fadeIn();
    $("#clearShedText").hide();
    $("#treasureText").show();
});