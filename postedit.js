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

const url = new URL(window.location.href);
postId = url.searchParams.get('postId');

if (postId) {
    fetch(`http://localhost:3000/posts/${postId}`).then((res) => {
        return res.json()
    }).then((post) => {
        document.querySelector('textarea#title').textContent = post.title
        document.querySelector('textarea#content').textContent = post.content
        document.querySelector('textarea#topics').textContent = post.topics
    }).catch((err) => console.log(err))
} else {
    window.location.href = 'notfound.html'
}

loading = false;
handleLoaderVisibility();