async function newFormHandler(event) {
    event.preventDefault();

    const commentContent = document.querySelector('#comment-content').value.trim();

    if (commentContent) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ commentContent }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#add-comment').addEventListener('click', newFormHandler);