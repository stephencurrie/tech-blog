const newPostHandler = async (evt) => {
    evt.preventDefault();

    const content = document.querySelector('#comment-text-area').value;
  
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#comment-form')
    .addEventListener('submit', newPostHandler);