var list = ["Today it’s up to you to create the peacefulness you long for.",
            "A friend asks only for your time not your money.",
            "If you refuse to accept anything but the best, you very often get it.",
            "A smile is your passport into the hearts of others.",
            "A good way to keep healthy is to eat more Chinese food.",
            "Your high-minded principles spell success.",
            "Hard work pays off in the future, laziness pays off now.",
            "Change can hurt, but it leads a path to something better.",
            "Enjoy the good luck a companion brings you.",
            "People are naturally attracted to you.",
            "Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.",
            "A chance meeting opens new doors to success and friendship.",
            "You learn from your mistakes... You will learn a lot today.",
            "If you have something good in your life, don’t let it go!",
            "What ever you’re goal is in life, embrace it visualize it, and for it will be yours.",
            "Your shoes will make you happy today.",
            "You cannot love life until you live the life you love.",
            "Be on the lookout for coming events; They cast their shadows beforehand.",
            "Land is always on the mind of a flying bird.",
            "The man or woman you desire feels the same about you.",
            "Meeting adversity well is the source of your strength.",
            "A dream you have will come true.",
            "Our deeds determine us, as much as we determine our deeds.",
            "Never give up. You’re not a failure if you don’t give up.",
            "You will become great if you believe in yourself.",
            "There is no greater pleasure than seeing your loved ones prosper.",
            "You will marry your lover.",
            "A very attractive person has a message for you.",
            "You already know the answer to the questions lingering inside your head.",
            "It is now, and in this world, that we must live.",
            "You must try, or hate yourself for not trying.",
            "You can make your own happiness."]

function generate_cookie() {
    //var location = "file:///C:/Users/jensj/OneDrive/Dokumenter/Aarhus_University/3_Semester/Distribuerede_Systems/CloudComputing/Distributed_Systems_P2/Website/fortunes.json";
    // var location = "https://reqres.in/api/users";
    // fetch(location)
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    document.getElementById("fortune_text").innerHTML = list[Math.floor(Math.random()*list.length)];
    document.getElementById("fc").style.display = "none";
    document.getElementById("insert_fortune").style.display = "block";
}

var dark_mode = false;

function ui_toggle() {
    var btn = document.getElementById("btn_ui_toggle");

    document.body.classList.toggle("dark_mode")
    btn.classList.toggle("light_mode")

    dark_mode = !dark_mode;
    if (dark_mode) {
        btn.innerHTML = "Light Mode";
    }
    else {
        btn.innerHTML = "Dark Mode";
    }
}