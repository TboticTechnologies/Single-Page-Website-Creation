// Set background color of the entire page
document.body.style.backgroundColor = "#444"; // Dark shade of grey background color

// Create header element
const header = document.createElement("header");
header.style.backgroundColor = "#444"; // Dark shade of grey background color
header.style.color = "#fff"; // White text color
header.style.padding = "20px"; // Padding around the header
header.style.textAlign = "center"; // Center-align the content

// Create h1 element for the header
const headerTitle = document.createElement("h1");
headerTitle.innerHTML = "Quest XR Headsets"; // Title text
headerTitle.style.margin = "0"; // Remove default margin
headerTitle.style.fontSize = "32px"; // Larger font size for title
headerTitle.style.fontFamily = "Arial, sans-serif"; // Clean font family

// Append header title to the header element
header.appendChild(headerTitle);

// Create navigation menu
const nav = document.createElement("nav");
nav.style.marginTop = "20px"; // Spacing from header

// Create unordered list for navigation links
const navList = document.createElement("ul");
navList.style.listStyle = "none"; // Remove default list style
navList.style.padding = "0"; // Remove default padding
navList.style.display = "flex"; // Flexbox layout for navigation links
navList.style.justifyContent = "center"; // Center-align navigation links

// Array of navigation links
const navLinks = ["Home", "Images", "Services", "About", "Testimonials", "Contact"];

// Loop through navigation links and create list items
navLinks.forEach(link => {
  const listItem = document.createElement("li");
  listItem.style.marginRight = "20px"; // Spacing between navigation links

  const anchor = document.createElement("a");
  anchor.href = `#${link.toLowerCase()}`; // Set href attribute to link to sections
  anchor.innerHTML = link; // Link text
  anchor.style.textDecoration = "none"; // Remove default underline
  anchor.style.color = "#fff"; // White text color

  // Append anchor to list item
  listItem.appendChild(anchor);
  
  // Append list item to the navigation list
  navList.appendChild(listItem);
});

// Append navigation list to the navigation menu
nav.appendChild(navList);

// Append navigation menu to the header
header.appendChild(nav);

// Append header to the document body
document.body.appendChild(header);

// Create image section
const imageSection = document.createElement("section");
imageSection.id = "images"; // Set section ID for navigation linking
imageSection.style.textAlign = "center"; // Center-align the content
imageSection.style.marginTop = "40px"; // Spacing from header

// Create h2 element for image section
const imagesTitle = document.createElement("h2");
imagesTitle.innerHTML = "Images"; // Section title
imagesTitle.style.color = "#fff"; // White text color
imagesTitle.style.fontFamily = "Arial, sans-serif"; // Clean font family

// Create container for images
const imageContainer = document.createElement("div");
imageContainer.style.display = "flex"; // Flexbox layout for images
imageContainer.style.justifyContent = "center"; // Center-align images horizontally
imageContainer.style.marginTop = "20px"; // Spacing from section title

// Array of image file paths
const imagePaths = [
  "image1.png",
  "image2.jpeg",
  "image3.jpeg",
];

// Loop through image paths and create image elements
imagePaths.forEach(path => {
  const img = document.createElement("img");
  img.src = path;
  img.style.width = "auto"; // Set width of images
  img.style.height = "200px"; // Maintain aspect ratio
  img.style.marginRight = "20px"; // Spacing between images
  img.style.borderRadius = "10px"; // Rounded corners
  imageContainer.appendChild(img);
});

// Append image title and container to image section
imageSection.appendChild(imagesTitle);
imageSection.appendChild(imageContainer);

// Append image section to the document body
document.body.appendChild(imageSection);

// Create main content section
const main = document.createElement("main");
main.style.backgroundColor = "#444"; // Dark shade of grey background color
main.style.padding = "20px"; // Padding around the main content
main.style.textAlign = "center"; // Center-align the content

// Create section for Services
const servicesSection = document.createElement("section");
servicesSection.id = "services"; // Set section ID for navigation linking
servicesSection.style.marginTop = "40px"; // Spacing from images section

// Create h2 element for services section
const servicesTitle = document.createElement("h2");
servicesTitle.innerHTML = "Our Services"; // Section title
servicesTitle.style.color = "#fff"; // White text color
servicesTitle.style.fontFamily = "Arial, sans-serif"; // Clean font family

// Create service items
const serviceItems = [
  { title: "Hardware", description: "Providing fully set-up hardware to your buisness." },
  { title: "XR Design", description: "Effective digital marketing strategies to boost your online XR presence." },
  { title: "Graphic Design", description: "Eye-catching graphic designs for all your branding needs." }
];

// Create container for service items
const serviceContainer = document.createElement("div");
serviceContainer.style.display = "flex"; // Flexbox layout for service items
serviceContainer.style.justifyContent = "center"; // Center-align service items horizontally
serviceContainer.style.marginTop = "20px"; // Spacing from section title

// Loop through service items and create service cards
serviceItems.forEach(service => {
  const serviceCard = document.createElement("div");
  serviceCard.style.backgroundColor = "#333"; // Dark grey background color
  serviceCard.style.color = "#fff"; // White text color
  serviceCard.style.padding = "20px"; // Padding around service card
  serviceCard.style.marginRight = "20px"; // Spacing between service cards
  serviceCard.style.borderRadius = "10px"; // Rounded corners

  // Create h3 element for service title
  const serviceTitle = document.createElement("h3");
  serviceTitle.innerHTML = service.title; // Service title
  serviceTitle.style.marginBottom = "10px"; // Spacing below service title

  // Create paragraph element for service description
  const serviceDescription = document.createElement("p");
  serviceDescription.innerHTML = service.description; // Service description

  // Append title and description to service card
  serviceCard.appendChild(serviceTitle);
  serviceCard.appendChild(serviceDescription);

  // Append service card to service container
  serviceContainer.appendChild(serviceCard);
});

// Append services title and container to services section
servicesSection.appendChild(servicesTitle);
servicesSection.appendChild(serviceContainer);

// Append services section to main content
main.appendChild(servicesSection);

// Append main content to the document body
document.body.appendChild(main);

// Create footer element
const footer = document.createElement("footer");
footer.style.backgroundColor = "#444"; // Dark shade of grey background color
footer.style.color = "#fff"; // White text color
footer.style.padding = "20px"; // Padding around the footer
footer.style.textAlign = "center"; // Center-align the content

// Create footer text
const footerText = document.createElement("p");
footerText.innerHTML = "&copy; 2024 My Glorious Website"; // Footer text with copyright information

// Append footer text to the footer element
footer.appendChild(footerText);

// Append footer to the document body
document.body.appendChild(footer);
