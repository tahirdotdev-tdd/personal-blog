const posts = [
  '2025-07-01-welcome.md',
  '2025-07-02-another-day.md',
  'Introduction.md'
];

const postList = document.getElementById('post-list');
const postContent = document.getElementById('post-content');

function renderPostList() {
  postList.innerHTML = '';
  posts.forEach(post => {
    const link = document.createElement('a');
    link.href = '#';
    link.innerText = post.replace('.md', '').replace(/-/g, ' ');
    link.onclick = (e) => {
      e.preventDefault();
      loadPost(post);
    };
    const div = document.createElement('div');
    div.appendChild(link);
    postList.appendChild(div);
  });
}

function loadPost(filename) {
  fetch(`posts/${filename}`)
    .then(res => res.text())
    .then(data => {
      postList.style.display = 'none'; // hide list
      postContent.innerText = data;

      // Add a back button
      const backBtn = document.createElement('button');
      backBtn.innerText = '← Back to all posts';
      backBtn.onclick = () => {
        postContent.innerHTML = '';
        postList.style.display = 'block';
      };
      postContent.prepend(backBtn);
    });
}

renderPostList();
