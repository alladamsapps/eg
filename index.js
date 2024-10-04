let startedAnimation = false
document.addEventListener("DOMContentLoaded", function () {
    const messages = Array.from({ length: 100 }, () => `${getRandomName()} cashed out ₦${getRandomAmount()}`);

    function getRandomName() {
        const names = [
            "John", "Emma", "Liam", "Sophia", "Noah", "Ava", "William", "Charlotte",
            "James", "Amelia", "Benjamin", "Mason", "Isabella", "Lucas", "Mia",
            "Henry", "Harper", "Alexander", "Evelyn", "Olivia", "Daniel", "Ella",
            "Michael", "Abigail", "Matthew", "Avery", "Joseph", "Scarlett", "Samuel",
            "Grace", "David", "Lily", "Jackson", "Zoey", "Sebastian", "Chloe",
            "Aiden", "Aria", "Owen", "Lillian", "Gabriel", "Hannah", "Carter",
            "Addison", "Wyatt", "Aubrey", "Jayden", "Ellie", "Dylan", "Stella",
            "Luke", "Natalie", "Levi", "Zoe", "Isaac", "Leah", "Andrew", "Hazel",
            "Lincoln", "Violet", "Jaxon", "Aurora", "Nathan", "Savannah", "Ryan",
            "Audrey", "Brooklyn", "Christopher", "Bella", "Eli", "Claire",
            "Hunter", "Skylar", "Connor", "Lucy", "Landon", "Paisley", "Julian",
            "Everly", "Christian", "Anna", "Jonathan", "Caroline", "Isaiah",
            "Nova", "Charles", "Genesis", "Thomas", "Emilia", "Aaron", "Kennedy",                 "Ethan", "Samantha", "Adrian", "Maya", "Nicholas", "Willow",
        "Adebayo", "Ngozi", "Chinedu", "Oluwatobi", "Fatima", "Uche", "Adesuwa",
        "Ibrahim", "Chimamanda", "Emeka", "Zainab", "Oghenekaro", "Kehinde", "Yemi"
    ];
    return names[Math.floor(Math.random() * names.length)];
}

function getRandomAmount() {
    return `${Math.floor(Math.random() * 200) + 1},000.00`;
}

const notification = document.getElementById('notification');
let currentIndex = 0;

function showNotification() {
    if (messages.length > 0) {
        notification.textContent = messages[currentIndex];
        notification.classList.add('show');
        currentIndex = (currentIndex + 1) % messages.length;
        setTimeout(function () {
            notification.classList.remove('show');
            setTimeout(showNotification, Math.random() * 5000 + 1000); // Random interval between 1s and 6s
        }, 25000); // Duration of showing the notification
    }
}
let sleepTime = 0;
if(startedAnimation){
    sleepTime = 7000;
}
startedAnimation = true;
setTimeout(showNotification, sleepTime);
});
