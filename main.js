const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=ALiCzsaGjCB5yRh1yoh8-nFozdefx30zkQ%3A1653236226895&source=hp&ei=AmKKYou2MYHomAWmwJGgBA&iflsig=AJiK0e8AAAAAYopwEkYgHGVKQu34QOqlefeNGdcj9G4e&ved=0ahUKEwiLv53wwPP3AhUBNKYKHSZgBEQQ4dUDCAg&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMgsILhCABBCxAxCDATILCAAQgAQQsQMQgwEyDgguEIAEELEDEMcBEKMCMggILhCABBCxAzILCC4QgAQQxwEQ0QMyBQgAEIAEMggILhCABBCxAzILCC4QgAQQsQMQgwEyCwgAEIAEELEDEIMBOg4ILhCABBCxAxDHARDRAzoICAAQsQMQgwE6CAgAEIAEELEDOgUILhCABFAAWNwCYOcFaABwAHgAgAHMAYgB4gKSAQUwLjEuMZgBAKABAQ&sclient=gws-wiz"
}
