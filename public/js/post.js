const newPostHandler = async (evt) => {
    evt.preventDefault();
    const title = document.querySelector('#posttitle').value;
    const content = document.querySelector('#postcontent').value;
  
    await fetch('/api/posts', {
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
    .querySelector('#create-blog-form')
    .addEventListener('submit', newPostHandler);