
    function onLinkedInLoad() {
        IN.Event.on(IN, "auth", getProfileData);
    }
      function getProfileData() {
        IN.API.Profile("me").fields("id",
        "first-name",
        "last-name",
        "headline",
        "location",
        "picture-url",
        "public-profile-url",
        "email-address").result(displayProfileData).error(onError);
    }

    function displayProfileData(data){
        var user = data.values[0];
        document.getElementById("picture").innerHTML = '<img src="'+user.pictureUrl+'" />';
        document.getElementById("name").innerHTML = user.firstName+' '+user.lastName;
        document.getElementById("intro").innerHTML = user.headline;
           document.getElementById("email").innerHTML = user.emailAddress;
        document.getElementById("location").innerHTML = user.location.name;
                document.getElementById("link").innerHTML = '<a href="'+user.publicProfileUrl+'" >Visit profile</a>';
        document.getElementById('profileData').style.display = 'block';
    }
     function onError(error) {
        console.log(error);
    }
    function logout(){
        IN.User.logout(removeProfileData);
    }
function removeProfileData(){
        document.getElementById('profileData').remove();
    }