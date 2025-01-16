fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => response.json())
.then((data) => {
    console.log(data.name, data.username, data.email)
  document.getElementById("user-data").innerHTML = `
  <p>Name: ${data.name}</p>
  <p>Username: ${data.username}</p>
  <p>Email: ${data.email}</p>
`;
})
.catch((error) => console.error("Error fetching user:", error));


fetch("https://jsonplaceholder.typicode.com/comments/1")
.then((response) => response.json())
.then((data) => {
    console.log("Name: ", data.name, "Email: ", data.email, "Comment: ", data.body)
  document.getElementById("comment-data").innerHTML = `
  <p>Comment Name: ${data.name}</p>
  <p>Email: ${data.email}</p>
  <p>Body: ${data.body}</p>
`;
})
.catch((error) => console.error("Error fetching comment:", error));


fetch("https://jsonplaceholder.typicode.com/users/4")
.then((response) => response.json())
.then((data) => {
  console.log("Street: ", data.address.street, "Suite: ", data.address.suite, "City: ", data.address.city, "Zipcode: ", data.address.zipcode)
  document.getElementById("user-address").innerHTML = `
  <p>Street: ${data.address.street}</p>
  <p>Suite: ${data.address.suite}</p>
  <p>City: ${data.address.city}</p>
  <p>Zipcode: ${data.address.zipcode}</p>
`;
})
.catch((error) => console.error("Error fetching address:", error));


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((users) => {
  const addressDiv = document.getElementById("addresses");
  users.slice(0, 3).forEach((user) => {
    console.log("Name: ", user.name, "Street: ", user.address.street, "Suite: ", user.address.suite, "City: ", user.address.city, "Zipcode: ", user.address.zipcode)
    const addressHTML = `
    <div class="address-box">
      <p><strong>${user.name}</strong></p>
      <p>Street: ${user.address.street}</p>
      <p>Suite: ${user.address.suite}</p>
      <p>City: ${user.address.city}</p>
      <p>Zipcode: ${user.address.zipcode}</p>
    </div>
  `;
    addressDiv.innerHTML += addressHTML;
  });
})
.catch((error) => console.error("Error fetching addresses:", error));




fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((posts) => {
  const appContent = document.getElementById("app-content");
  posts.slice(0, 10).forEach((post) => {
    const postHTML = `
    <div class="post">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
  `;
    appContent.innerHTML += postHTML;
  });
})
.catch((error) => console.error("Error fetching posts:", error));
