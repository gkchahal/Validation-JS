var loggedIn = false;
var array = [
  {
    text: "heckin good boys I am bekom fat aqua doggo. Dat tungg tho snoot length boy wow such tempt snoot dat tungg tho, noodle horse adorable doggo wow very biscit doggo. Thicc you are doing me a frighten mlem yapper floofs fat boi, I am bekom fat doing me a frighten much ruin diet pats long water shoob, sub woofer h*ck borkdrive mlem. Boofers such treat wow such tempt fluffer, boof. I am bekom fat shoob fluffer borking doggo thicc boof, pats wrinkler wow very biscit.",
    importance: 3
  },
  {
    text: "Rub against owner because nose is wet. Sit and stare loved it, hated it, loved it, hated it attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently purr when being pet the cat was chasing the mouse. While happily ignoring when being called lick butt and make a weird face yet stares at human while pushing stuff off a table fall asleep on the washing machine kitty scratches couch bad kitty. Cats woo please stop looking at your phone and pet me really likes hummus, for scream for no reason at 4 am so show belly, fish i must find my red catnip fishy fish or a nice warm laptop for me to sit on. I am the best all of a sudden cat goes crazy eat plants, meow, and throw up because i ate plants yet push your water glass on the floor. Stares at human while pushing stuff off a table let me in let me out let me in let me out let me in let me out who broke this door anyway for curl up and sleep on the freshly laundered towels but leave dead animals as gifts. Flex claws on the human's belly and purr like a lawnmower.",
    importance: 2
  },
  {
    text: "Lorem ipsum dolor sit amet, sea ne affert consul regione, ut liber eripuit quo. Augue ancillae nam ea, ius an invidunt democritum. Duis officiis mei eu, nisl ridens at sed, te duo omnis iuvaret. Eam deseruisse expetendis eu, has ex vocibus ullamcorper disputationi. Nonumy everti laboramus ne cum, ex nam reque porro..",
    importance: 5
  },
  {
    text: "I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot.",
    importance: 4
  },
  {
    text: "Bacon ipsum dolor amet shankle sausage cow chuck leberkas pancetta strip steak short loin ham brisket turkey jowl prosciutto. Hamburger pastrami pork chop, boudin pancetta kevin bresaola beef pig t-bone cow frankfurter tail. Shankle beef burgdoggen, tenderloin pork belly turkey swine kevin leberkas spare ribs bresaola ham hock corned beef pancetta meatloaf. Short ribs sausage pork belly cow. Filet mignon turducken cow spare ribs sausage pancetta salami landjaeger.",
    importance: 2
  },
  {
    text: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
    importance: 1
  },
  
  
];

function app() {
  if (loggedIn == true) {
    var pages = ["Add Notes", "View Notes"];
   

    nav(pages);
  } else {
    initialElements();
    renderPage("login");
  }
}

function initialElements() {
  var nav = document.createElement("nav");
  nav.classList.add("nav");
  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper"); 
  document.body.appendChild(nav);
  document.body.appendChild(wrapper);
}

function nav(list) {
  for (var i = 0; i < list.length; i++) {
    const button = document.createElement("button");
    const val = list[i];
    button.innerHTML = list[i];
    button.addEventListener("click", function () {
      renderPage(val);
    });
    document.body.querySelector(".nav").appendChild(button);
  }
}

function renderPage(page) {
  if (page === "login") {
    login();
  } else if (page === "home") {
    home();
  } else if (page === "Add Notes") {
    addNotes();
  } else if (page === "View Notes") {
    displayNotes();
  } else if (page === "logOut")  {
    window.location.reload(false);
  }
}

function login() {
  var wrapper = document.querySelector(".wrapper");

  var username = document.createElement("input");
  username.id = "inputUser";
  username.placeholder = "Enter Your Username";

  var password = document.createElement("input");
  password.setAttribute("type", "password");
  password.id = "inputPass";
  password.placeholder = "Enter Your Password";

  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Login";
  submitButton.className = "button";

  var loginInsight = document.createElement("h4");
  loginInsight.innerHTML =
    "Enter your Username and Password.";
  loginInsight.id = "loginInsight";

  wrapper.innerHTML = "";
  wrapper.appendChild(loginInsight);
  wrapper.appendChild(username);
  wrapper.appendChild(password);
  wrapper.appendChild(submitButton);

  document.body.querySelector(".button").addEventListener("click", function () {
    if (usernameValid(inputUser) && passwordValid(inputPass)) {
      loggedIn = true;
      app();
     
      home();
    } else {
      if (!usernameValid(inputUser) && passwordValid(inputPass)) {
        window.alert("You entered the wrong username. Please try again!");
      } else if (usernameValid(inputUser) && !passwordValid(inputPass)) {
        window.alert("You entered the wrong password. Please try again!");
      } else {
        window.alert(
          "You must type your username and password to login. Please try again!"
        );
      }
    }
  });

  function usernameValid(ele) {
    if (ele.value == "coolStudent123") {
      return true;
    } else {
      return false;
    }
  }

  function passwordValid(ele) {
    if (ele.value == "coolPassword") {
      return true;
    } else {
      return false;
    }
  }
}

function home() {
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";

  
}

function addNotes() {
  var wrapper = document.querySelector(".wrapper");

  var text = document.createElement("textarea");
  text.id = "inputNote";
  text.placeholder = "Add note here.";

  var importance = document.createElement("input");
  importance.setAttribute("type", "number");
  importance.setAttribute("value", "Importance");
  importance.setAttribute("min", "0");
  importance.setAttribute("max", "5");
  importance.id = "inputImp";
  importance.placeholder = "(1-5)";

  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.className = "button";

  var noteInsight = document.createElement("h4");
  noteInsight.innerHTML =
    "Add notes below and assign the note an importance value.";
  noteInsight.id = "noteInsight";

  wrapper.innerHTML = "";
  wrapper.appendChild(noteInsight);
  wrapper.appendChild(text);
  wrapper.appendChild(importance);
  wrapper.appendChild(submitButton);

  document.body.querySelector(".button").addEventListener("click", function () {
    if (inputValid(inputNote) && numberValid(inputImp)) {
      submission();
      window.alert(
        "Note succesfully entered."
      );
      addNotes();
    } else {
      if (!inputValid(inputNote) && numberValid(inputImp)) {
        window.alert(
          "You forgot to enter a note."
        );
      } else if (inputValid(inputNote) && !numberValid(inputImp)) {
        window.alert("Oops! You need to enter an importance value to continue.");
      } else {
        window.alert(
          "You must type something."
        );
      }
    }
  });

  function submission() {
    var obj = {
      text: inputNote.value,
      importance: Number(inputImp.value)
    };

    array.push(obj);
  }

  function inputValid(ele) {
    if (ele.value !== "") {
      return true;
    } else {
      return false;
    }
  }

  function numberValid(ele) {
    if (!isNaN(ele.value) && ele.value >= 1 && ele.value < 6) {
      return true;
    } else {
      return false;
    }
  }
}

function displayNotes() {
  var wrapper = document.querySelector(".wrapper");

  var sortBy = [
    {
      prop: "importance",
      direction: -1
    },
    {
      prop: "text",
      direction: 1
    }
  ];

  array.sort(function (a, b) {
    let i = 0,
      result = 0;
    while (i < sortBy.length && result === 0) {
      result =
        sortBy[i].direction *
        (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString()
          ? -1
          : a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString()
          ? 1
          : 0);
      i++;
    }
    return result;
  });

  wrapper.innerHTML = "";

  for (var i = 0; i < array.length; i++) {
    var ele = document.createElement("div");
    ele.classList.add("borderBottom");
    ele.innerHTML = array[i].importance + " || " + array[i].text;
    wrapper.appendChild(ele);
  }
}

app();