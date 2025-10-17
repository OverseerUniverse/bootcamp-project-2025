var blogs = [
    {
        title: "Title 4 blog!@",
        date: "08/13/2025",
        description: "This is me!!",
        image: "../images/mewithcats.jpg",
        imageAlt: "me with cats",
        slug: "blog-about-me.html",
    },
    {
        title: "My Past Projects!",
        date: "08/13/2025",
        description: "I made some pretty cool things",
        image: "../images/domocat.jpg",
        imageAlt: "cats with domos",
        slug: "blog-projects.html",
    },
];
var mainBlogPage = document.getElementById("blog-container");
function constructBlogPage() {
    blogs.forEach(function (blog) {
        var newDiv = document.createElement("div");
        newDiv.className = "post-container";
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        var header = document.createElement("h1");
        header.innerHTML = blog.title;
        var text = document.createElement("p");
        text.innerText = blog.description;
        var learnMore = document.createElement("p");
        learnMore.innerText = "Learn More";
        var link = document.createElement("a");
        link.href = blog.slug;
        newDiv.appendChild(header);
        newDiv.appendChild(image);
        newDiv.appendChild(text);
        newDiv.appendChild(link);
        link.appendChild(learnMore);
        if (mainBlogPage) {
            mainBlogPage.appendChild(newDiv);
        }
        else {
            console.error("blog container not found");
        }
    });
}
function constructBlogPages() {
    for (var i = 0; i < blogs.length; i++) {
        var blog = blogs[i];
        if (blog) {
            var title = document.createElement("title");
            title.innerHTML = blog.title;
            var headerTag = document.createElement("h1");
            headerTag.innerHTML = blog.title;
            var datePosted = document.createElement("p");
            datePosted.innerHTML = blog.date;
            var image = document.createElement("img");
            image.src = blog.image;
            image.alt = blog.imageAlt;
            var leftDiv = document.createElement("div");
            leftDiv.className = "left";
            leftDiv.appendChild(headerTag);
            leftDiv.appendChild(image);
            var description = document.createElement("p");
            description.innerHTML = blog.description;
            var rightDiv = document.createElement("div");
            rightDiv.className = "right";
            rightDiv.appendChild(datePosted);
            rightDiv.appendChild(description);
            var blogTitle = document.getElementById("blog-title");
            if (blogTitle) {
                blogTitle.appendChild(title);
            }
            var aboutMe = document.getElementById("blog-about-me");
            var projects = document.getElementById("blog-projects");
            if (blog.slug == "blog-about-me.html" && blogTitle && aboutMe) {
                aboutMe.appendChild(leftDiv);
                aboutMe.appendChild(rightDiv);
                aboutMe.appendChild(blogTitle);
            }
            if (blog.slug == "blog-projects.html" && blogTitle && projects) {
                projects.appendChild(leftDiv);
                projects.appendChild(rightDiv);
                projects.appendChild(blogTitle);
            }
        }
    }
}
//
if (mainBlogPage) {
    constructBlogPage();
}
else {
    constructBlogPages();
}
