const url =
  "https://vgyx5tm3t6.execute-api.us-east-2.amazonaws.com/default/portfolio-handler";

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const loadAWSDiagram = () => {
  window.open("./assets/diagram.pdf");
};

// Update the `addResumeDownload` function to call the Lambda function
const addResumeDownload = async () => {
  try {
    // Make a POST request to the Lambda function for a "download" action
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "download",
      }),
    });

    // Parse the response
    const result = await response.json();
    console.log(result.message);

    // Open the resume
    window.open("./assets/resume.pdf");

    // Optionally fetch the updated data from the Lambda (if needed)
    await getLiveDataFromLambda();
  } catch (error) {
    console.error("Error adding resume download:", error);
  }
};

// Update the `addPageView` function to call the Lambda function
const addPageView = async () => {
  try {
    // Make a POST request to the Lambda function for a "view" action
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "view",
      }),
    });

    // Parse the response
    const result = await response.json();
    console.log(result.message);

    // Optionally fetch the updated data from the Lambda (if needed)
    await getLiveDataFromLambda();
  } catch (error) {
    console.error("Error adding page view:", error);
  }
};

// Fetch live data from the Lambda function
const getLiveDataFromLambda = async () => {
  try {
    // Make a GET request to the Lambda function
    const response = await fetch(url);
    const data = await response.json();

    // Update the live data on the page
    const total_views = document.getElementById("total_views");
    const monthly_views = document.getElementById("monthly_views");
    const resume_views = document.getElementById("resume_downloads");

    total_views.textContent = data.total_views;
    monthly_views.textContent = data.current_month_views;
    resume_views.textContent = data.total_downloads;
  } catch (error) {
    console.error("Error fetching live data:", error);
  }
};

if (!sessionStorage.getItem("pageViewed")) {
  addPageView();
  sessionStorage.setItem("pageViewed", "true");
}

// Call `getLiveDataFromLambda` when the page loads to display the latest data
getLiveDataFromLambda();
