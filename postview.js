let loading = true;
let loader = document.getElementById('loader');
let article = document.querySelector('article')

article.classList.add('hidden')

function handleLoaderVisibility() {
    if (!loading) {
        loader.classList.add('hidden');
        article.classList.toggle('hidden')
    }
}

function formatDateRelative(date) {
    const now = new Date();
    const diffInMs = now - date;

    const seconds = Math.round(Math.abs(diffInMs) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);

    const months = Math.round(days / 30);
    const years = now.getFullYear() - date.getFullYear();

    if (years > 0) {
        return years === 1 ? '1 year ago' : `${years} years ago`;
    } else if (months > 0) {
        return months === 1 ? '1 month ago' : `${months} months ago`;
    } else if (days > 0) {
        return days === 1 ? 'Yesterday' : `${days} days ago`;
    } else if (hours > 0) {
        return `${hours} hours ago`;
    } else if (minutes > 0) {
        return `${minutes} minutes ago`;
    } else if (seconds > 0) {
        return `${seconds} seconds ago`;
    } else {
        return 'Just now';
    }
}

const url = new URL(window.location.href);
postId = url.searchParams.get('postId');
if (postId) {
    let postTopicsTemplate = document.querySelector('template#postTopics').content
    let postTopicsTemplateClone = document.importNode(postTopicsTemplate, true)

    fetch(`http://localhost:3000/posts/${postId}`).then((res) => {
        return res.json()
    }).then((post) => {
        document.querySelector('h1#title').textContent = post.title
        document.querySelector('time#publishedOn').textContent = formatDateRelative(new Date(post.datePublished))
        document.querySelector('p#author').textContent = post.author
        document.querySelector('p#content').textContent = post.content

        post.topics.forEach((topic) => {
            postTopicsTemplateClone.querySelector('span#postTopic').textContent = topic
        })
        document.querySelector('div#postTopics').appendChild(postTopicsTemplateClone)

        document.querySelector('p#appreciationCount').textContent = post.appreciation

        document.querySelector('button#appreciationCount').addEventListener('click', (e) => {
            let appreciationCount = Number(document.querySelector('p#appreciationCount').textContent)
            document.querySelector('p#appreciationCount').textContent = appreciationCount + 1
            // TODO: sent appreciationCount to server
        })

        post.comments.forEach((comment) => {
            let commentTemplate = document.querySelector('template#comment').content
            let commentTemplateClone = document.importNode(commentTemplate, true)
            commentTemplateClone.querySelector('p#commentAuthor').textContent = comment.writtenBy
            commentTemplateClone.querySelector('p#commentDate').textContent = formatDateRelative(new Date(comment.when))
            commentTemplateClone.querySelector('p#commentBody').textContent = comment.body
            document.querySelector('div#comments').appendChild(commentTemplateClone)
        })
    }).catch((err) => console.log(err))
} else {
    window.location.href = 'notfound.html'
}

loading = false;
handleLoaderVisibility();

// TODO allow comments for registered user only
document.querySelector('div#commentBox button').addEventListener('click', () => { 
    let commentTemplate = document.querySelector('template#comment').content
    let commentTemplateClone = document.importNode(commentTemplate, true)
    commentTemplateClone.querySelector('p#commentAuthor').textContent = "Guest" // TODO fetch username from local storage
    commentTemplateClone.querySelector('p#commentDate').textContent = formatDateRelative(new Date())
    commentTemplateClone.querySelector('p#commentBody').textContent = document.querySelector('textarea#commentBody').value
    document.querySelector('div#comments').appendChild(commentTemplateClone)
    // TODO send the new comment to server
})
