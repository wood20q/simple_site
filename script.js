// Download Button Events
const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  downloadButton.textContent = "Downloading..."
  // alert('Download button clicked');
})

// Form Submission Events
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  console.log("event =", event)
  formMessage.style.display = "none";
  event.preventDefault();

  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const message = document.getElementById("messageInput").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all of the fields before submitting the contact form.");
    return;
  }

  console.log(`Form submitted: name=${name}, email=${email}, message=${message}`);

  form.reset();
  formMessage.textContent = `Thank you for your message ${name}! We will get back to you soon at the email address you provided: ${email}.`;
  formMessage.style.display = "block";
})