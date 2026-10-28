const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Select the HTML elements needed.
const courseContent = document.querySelector("#course-content");
const courseCount = document.querySelector("#course-count");
const creditTotal = document.querySelector("#credit-total");
const filterButtons = document.querySelectorAll(".filter-btn");

// Store the currently selected filter.
let currentFilter = "all";

// Display the courses that match the selected filter.
function displayCourses(courseList) {
  // Remove the previous course cards.
  courseContent.innerHTML = "";

  // Create a card for every course in the filtered array.
  
courseList.forEach((course) => {
    const card = document.createElement("div");

    card.classList.add("course-card");

    if (course.completed) {
        card.classList.add("completed");
        card.textContent = `✓ ${course.subject} ${course.number}`;
    } else {
        card.classList.add("not-completed");
        card.textContent = `${course.subject} ${course.number}`;
    }

    courseContent.appendChild(card);
});




  // Update the number of courses being displayed.
  courseCount.textContent =
    `Showing ${courseList.length} course(s)`;

  // Calculate the credits for the displayed courses.
  const totalCredits = courseList.reduce(
    (total, course) => total + course.credits,
    0
  );

  creditTotal.textContent =
    `The total credits for course listed above is ${totalCredits}`;
}

// Filter courses by subject or display all courses.
function filterCourses(filter) {
  currentFilter = filter;

  let filteredCourses;

  if (filter === "all") {
    filteredCourses = courses;
  } else {
    filteredCourses = courses.filter(
      (course) => course.subject === filter
    );
  }

  displayCourses(filteredCourses);

  // Highlight the active filter button.
  filterButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.filter === filter
    );
  });
}

// Listen for clicks on each filter button.
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterCourses(button.dataset.filter);
  });
});

// Display all courses when the page first loads.
filterCourses(currentFilter);