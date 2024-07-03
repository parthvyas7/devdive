let postsList = document.querySelector('div#postsList')
let template = document.getElementById('postCard').content;
let clone = document.importNode(template, true);

let postTopicsTemplate = document.querySelector('template#postTopics').content
let postTopicsTemplateClone = document.importNode(postTopicsTemplate, true)

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

fetch('http://localhost:3000/posts').then((res) => {
    return res.json()
}).then((posts) => {
    posts.forEach(item => {
        template = document.getElementById('postCard').content;
        clone = document.importNode(template, true);

        postTopicsTemplate = document.querySelector('template#postTopics').content
        postTopicsTemplateClone = document.importNode(postTopicsTemplate, true)

        clone.querySelector('h3#title').textContent = item.title

        clone.querySelector('a#postLink').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = `postview.html?postId=${item._id}`;
        })

        clone.querySelector('a#editPostId').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = `postedit.html?postId=${item._id}`;
        })

        clone.querySelector('p#author').textContent = item.author
        clone.querySelector('time#publishedOn').textContent = formatDateRelative(new Date(item.datePublished))
        clone.querySelector('p#appreciationCount').textContent = item.appreciation
        clone.querySelector('p#commentCount').textContent = item.comments.length

        item.topics.forEach((topic) => {
            postTopicsTemplateClone.querySelector('span#postTopic').textContent = topic
        })
        clone.querySelector('div#postTopics').appendChild(postTopicsTemplateClone)
        postsList.appendChild(clone);
    });
}).catch((err) => console.log(err))

const paginationContainer = document.getElementById('pagination');
template = document.getElementById('page-template').content;
const totalPages = 10; // Replace with server value
const maxVisiblePages = 5; // Number of pages to show at once

function createPageLink(pageNumber) {
    const clone = document.importNode(template, true);
    const link = clone.querySelector('a');
    link.textContent = pageNumber;
    link.href = `#page-${pageNumber}`;
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Page ${pageNumber} clicked`);
    });
    paginationContainer.appendChild(clone);
}

function createEllipsis() {
    const span = document.createElement('span');
    span.textContent = '...';
    paginationContainer.appendChild(span);
}

function renderPagination(currentPage) {
    paginationContainer.innerHTML = ''; // Clear existing pagination

    if (currentPage > 1) createPageLink(1); // First page

    if (currentPage > maxVisiblePages) createEllipsis();

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
        createPageLink(i);
    }

    if (currentPage < totalPages - maxVisiblePages + 1) createEllipsis();

    if (currentPage < totalPages) createPageLink(totalPages); // Last page
}

renderPagination(1); // Initial render with the first page

