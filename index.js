var user1 = {
  userName: "@elonmusk",
  displayName: "Elon Musk",
  joinedDate: "June 2009",
  followingCount: 103,
  followerCount: 47900000,
  avatarURL: "assets/elonmusk.jpg",
  coverPhotoURL: "assets/elonmusk-cover.jpeg",
  tweets: [
    {
      text: "I admit to judging books by their cover",
      timestamp: "2/10/2021 00:01:20",
    },
    {
      text: "Starship to the moon",
      timestamp: "2/09/2021 18:37:12",
    },
    {
      text: "Out on launch pad, engine swap underway",
      timestamp: "2/09/2021 12:11:51",
    },
  ],
};

var user2 = {
  userName: "@BillGates",
  displayName: "Bill Gates",
  joinedDate: "June 2009",
  followingCount: 274,
  followerCount: 53800000,
  avatarURL: "assets/billgates.jpg",
  coverPhotoURL: "assets/billgates-cover.jpeg",
  tweets: [
    {
      text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
      timestamp: "2/10/2021 00:01:20",
    },
    {
      text: "Should I start tweeting memes? Let me know in a comment.",
      timestamp: "2/09/2021 18:37:12",
    },
    {
      text: "In 2020, I read a book every hour.",
      timestamp: "2/09/2021 12:11:51",
    },
  ],
};

function fillTwitter(user) {
  //classes are apparently arrays so if I'm doing something to a particular member of a class then I need to treat it like an array and use the index for it to work, else just use ID.
  document.getElementsByClassName("header")[0].innerHTML = `
  <div id="header-left">⬅️ </div>
  <div id="header-right">
  <h3>${user.displayName} ☑️</h3>
  <p class="grey">${user.tweets.length} Tweets</p>
  </div>
  `;
  document.getElementById("cover-photo").style.backgroundImage = `url(
    ${user.coverPhotoURL}
  )`;
  var img = document.createElement("img");
  img.src = `${user.avatarURL}`;
  img.classList.add("profile-img");
  document.getElementById("profile-image-left").appendChild(img);
  document.getElementsByClassName("profile-details").innerHTML = `
<h3>${user.displayName} ☑️</h3>
<p class="grey">${user.userName}</p>
<p class="grey">📅 ${user.joinedDate}</p>
<p><b>${
    user.followingCount
  }</b> <span class="grey">Following</span>    <b>${nFormatter(
    user.followerCount
  )}</b> <span class="grey">Followers</span></p>
`;

  for (var i = 0; i < user.tweets.length; i++) {
    var individualTweetContainer = document.createElement("div");
    individualTweetContainer.classList.add("tweet-cntr");

    individualTweetContainer.innerHTML = `
    <div id="tweetProfileImg"><img id="avatar-img" src= ${user.avatarURL}></div>
<div id="actual-tweet">
        <p><b>${user.displayName}</b>☑️ ${user.userName} ${user.tweets[i].timestamp}</p>
     <p>${user.tweets[i].text}</p>    
     <p class="spaced-words"> 💬5.2K  🔁7.7K ♡65.2K 🔗 </p>
     </div>
    `;
    document
      .getElementById("tweet-container")
      .appendChild(individualTweetContainer);
  }

  function setNewActive(el) {
    var contentBodies = document.getElementsByClassName("tab-container");
    for (var contentBody of contentBodies) {
      contentBody.classList.remove("show-active");
    }
    console.log(el.textContent);
    //Get element by ID, must have the same case. So here the text content is what the tab is called on the page ("Media") and the ID for its container has to reflect that. This is even the case for Tweets & Replies.
    document.getElementById(el.textContent).classList.add("show-active");

    var tabs = document.getElementsByClassName("tab");
    for (var tab of tabs) {
      tab.classList.remove("tab-active");
    }
    el.classList.add("tab-active");
  }

  var tabs = document.getElementsByClassName("tab");
  for (var tab of tabs) {
    tab.addEventListener("click", function (e) {
      console.log(e.currentTarget);
      setNewActive(e.currentTarget);
    });
  }
}

function nFormatter(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
}

function followBtnText() {
  var followBtn = document.getElementById("follow-button");
  if (followBtn.innerHTML === "Following") {
    followBtn.innerHTML = "Follow";
  } else {
    followBtn.innerHTML = "Following";
  }
}

// let querystring = window.location.search.substring(6);

// if (querystring === "user1") {
fillTwitter(user1);
// } else if (querystring === "user2") fillTwitter(user2);
