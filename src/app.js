console.log("connected");
//need to pass in title, artist, and url when an album is made
class Album{
    constructor(title, artist, url){
        this.title = title;
        this.artist = artist;
        this.url = url;
    }
}

class UI{
    //method to show new album 
    addAlbumToList(album) {
        let html = `<div class="display-album flex-row"><div class="display-title">%title%</div><div class="display-artist">%artist%</div><div class="display-cover"><img src="%url%" alt=""></div><div class="remove-album">Remove Album X</div>`
        let newHtml = html.replace("%title%", album.title);
        newHtml = newHtml.replace("%artist%", album.artist);
        newHtml = newHtml.replace("%url%", album.url);
        document.querySelector(".display").insertAdjacentElement("beforeend", newHtml);
    }
    //method to clear our input fields
    clearField(){
        document.getElementById("title").value = "";
        document.getElementById("artist").value = "";
        document.getElementById("url").value = "";
    }
    //method to delete the target album 
    deleteAlbum(target) {
        if (target.className === "remmove-album") {
            target.parentElement.remove();
        }
    }
}

//event listener
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    //get values
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const url = document.getElementById("url").value;
    //add new album values 
    const album = new Album(title, artist, url);
    // console.log(album);
    const ui = new UI();
    ui.addAlbumToList(album);
    ui.clearFields();
});

document.querySelector(".display").addEventListener("click", function (e) {
    const ui = new UI();
    ui.deleteAlbum(e.target);
    ui.clearFields();
    e.preventDefault();
})