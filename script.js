function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// temporary data to simulate live data
dummyData = {
  total_views: 200,
  monthly_views: 100,
  resume_views: 50,
};

// set up a function that updates the live data
const getLiveData = () => {
  const total_views = document.getElementById("total_views");
  const monthly_views = document.getElementById("monthly_views");
  const resume_views = document.getElementById("resume_downloads");

  total_views.textContent = dummyData.total_views;
  monthly_views.textContent = dummyData.monthly_views;
  resume_views.textContent = dummyData.resume_views;
};

// set up a function that adds a resume download when clicked
const addResumeDownload = () => {
  dummyData.resume_views += 1;
  window.open("./assets/resume.pdf");
  getLiveData();
};

// function that loads aws diagram of resume project
const loadAWSDiagram = () => {
  window.open("./assets/diagram.pdf");
};

const addPageView = () => {
  // TODO: to be implemented
};

// call the function to update the live data when the page loads
getLiveData();
