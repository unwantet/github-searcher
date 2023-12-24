const form = document.getElementById("myForm")


form.addEventListener("submit", function(e) {
    e.preventDefault();
    let search = document.querySelector("input").value
    
    let org = search.split(' ').join('')

    fetch("https://api.github.com/users/"+org)

    .then((result) => result.json())
    .then((data) => {
        document.querySelector(".avatar").src = `${data.avatar_url}`
        document.querySelector(".profil").textContent = `${data.bio}`
        document.querySelector("h2").textContent = `${data.name}`
        document.getElementById("company").textContent = `${data.company}`
        document.getElementById("location").textContent = `${data.location}`
        if(data.twitter_username == null){
            document.getElementById("twitter_username").textContent = `Not Available`
        }else{
            document.getElementById("twitter_username").textContent = `${data.twitter_username}`

        }
        if (data.blog == "") {
            document.getElementById("blog").textContent = `https://github.blog/${data.blog}`
        } else {
            document.getElementById("blog").textContent = `${data.blog}`
        }
        document.getElementById("repos").textContent = `${data.public_repos}`
        document.getElementById("followers").textContent = `${data.followers}`
        document.getElementById("following").textContent = `${data.following}`
        
        let orgDate = data.created_at.substring(0, 10);
        document.getElementById("date").textContent = `Joined at ${orgDate}`

        
        
    })

})