document.addEventListener("DOMContentLoaded", function() {
    var roles = ['Web Developer', 'Web Designer', 'Graphics Designer'];
    var roleIndex = 0;
    var roleHeader = document.getElementById('roleHeader');
    var roleText = "";
    var currentRole = "";
    var timeout;

    function showRole() {
        if (roleText.length < currentRole.length) {
            roleText += currentRole.charAt(roleText.length);
            roleHeader.textContent = roleText;
            timeout = setTimeout(showRole, 100); // Adjust as needed for typing speed
        }
    }

    function changeRole() {
        roleText = "";
        currentRole = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
        clearTimeout(timeout);
        showRole();
    }

    setInterval(changeRole, 3000); // Change role every 3 seconds (adjust as needed)
    changeRole(); // Initial call
});



document.getElementById("downloadBtn").addEventListener("click", function() {
    // Specify the path to your CV file
    var cvFilePath = "vikash_cv.pdf";

    // Create an anchor element
    var link = document.createElement("a");
    link.href = cvFilePath;
    link.download = "vikash_cv.pdf"; // Specify the name for the downloaded file
    document.body.appendChild(link);

    // Trigger the click event on the anchor element
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
});













const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");


if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}