const getNextUser = () => {
    const url = "https://randomuser.me/api/";
    fetch(url)
    .then(handleErrors)
    .then(parseJson)
    .then(renderUserProfileInDom)
    .catch(printError);
}


const handleErrors = (response) => {
    console.log("Handle Errors:");
    console.log(response);
    if(!response.ok)
        throw("Error in fetching user data!! Response is not ok!!")
    else
        return response;
}

const parseJson = (response) => {
    console.log("From parseJson:");
    console.log(response);
    //console.log(response.json())

    return response.json();
}


const renderUserProfileInDom = (json) =>{
    console.log("Form renderUserProfileInDom:");
    console.log(json);
    const userData = json.results[0];
    const avatarImageEl = document.querySelector(".avatar-icon");
    avatarImageEl.src= userData.picture.large;

    const emailEl = document.querySelector(".user-email");
    const fullNameEl = document.querySelector(".user-full-name");

    const userNameEl = document.querySelector(".user-name");
    const cityEl = document.querySelector(".user-city");
    emailEl.innerText = `Email: ${userData.email}`;
    fullNameEl.innerText = `${userData.name.first} ${ userData.name.last}`;
    userNameEl.innerText = userData.login.username;
    cityEl.innerText = `City: ${userData.location.city}`;



}

const printError = (error) =>{
    console.log("Form printError:");
    console.error(error);
}