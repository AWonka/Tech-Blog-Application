async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;

    if(title && content) {

        const response = await fetch('/api/posts/${id}', {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

async function deleteHandler(event) {
    event.preventDefault();

    await fetch('/api/posts/${id}', {
        method: 'DELETE'
    });

    document.location.replace('/dashboard');
};

document.querySelector('#update-post').addEventListener('submit', newFormHandler);
document.querySelector('#delete-post').addEventListener('click', deleteHandler);