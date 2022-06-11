const postId = document.querySelector('data-id').value;
console.log(data-id.value);





const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('#dashboardactions')
  .addEventListener('submit', editFormHandler);
  
  document
    .querySelector('#dashboardactions')
    .addEventListener('click', delButtonHandler);

