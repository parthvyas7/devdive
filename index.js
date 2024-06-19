async function fetchItems() {
    try {
        const response = await fetch('http://localhost:3000/posts');
        const items = await response.json();
        const posts = document.getElementById('posts');

        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            posts.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

window.onload = fetchItems;