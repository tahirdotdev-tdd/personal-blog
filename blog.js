const posts = [
  '2025-07-01-welcome.md',
  '2025-07-02-another-day.md'
];

const postList = document.getElementById('post-list');
const postContent = document.getElementById('post-content');

posts.forEach(post => {
  const link = document.createElement('a');
  link.href = '#';
  link.innerText = post.replace('.md', '').replace(/-/g, ' ');
  link.onclick = () => loadPost(post);
  const div = document.createElement('div');
  div.appendChild(link);
  postList.appendChild(div);
});

function loadPost(filename) {
  fetch(`posts/${filename}`)
    .then(res => res.text())
    .then(data => {
      postContent.innerText = data;
    });
}
