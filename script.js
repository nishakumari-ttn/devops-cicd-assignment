const deploymentButton = document.getElementById("deploymentButton");
const message = document.getElementById("message");

deploymentButton.addEventListener("click", () => {
    message.textContent = "Deployment is working successfully!";
});