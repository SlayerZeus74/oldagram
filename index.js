const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21234,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4678,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 1452,
        liked: false
    }
]

const postEl = document.getElementById("posts-el")

renderPosts()
function renderPosts() {
    let html = "";

    for (let i = 0; i < posts.length; i++) {
        html += `
            <div class="user-info">
                <div class="user-avatar">
                    <img src="${posts[i].avatar}" alt="" class="avatar">
                    <div class="name-info">
                        <h1>${posts[i].name}</h1>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
                <img src="${posts[i].post}" alt="" class="post-img">
                <div class="engagement">
                    <div class="icons">
                        <img src="/images/icon-heart${posts[i].liked ? '-like' : ''}.png" alt="" class="logo-engage like-count" data-index="${i}">
                        <img src="/images/icon-comment.png" alt="" class="logo-engage">
                        <img src="/images/icon-dm.png" alt="" class="logo-engage">
                    </div>
                    <div class="likes">
                        <h1>${posts[i].likes} likes</h1>
                    </div>
                    <div class="comments">
                        <p><span class="username">${posts[i].username}</span> ${posts[i].comment}.</p>
                    </div>
                </div>
            </div>
        `;
    }

    postEl.innerHTML = html;

    const likeEl = document.querySelectorAll(".like-count");

    likeEl.forEach(el => {
        el.addEventListener("click", () => {
            const index = el.dataset.index;
            posts[index].liked = !posts[index].liked;
            posts[index].likes += posts[index].liked ? 1 : -1;
            renderPosts();
        });
    });
}