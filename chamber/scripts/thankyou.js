const memberDetails = new URLSearchParams(window.location.search);
console.log(memberDetails);

const timestamp = memberDetails.get("timestamp");

let currentDate = "";

if (timestamp) {
    const date = new Date(timestamp);

    currentDate = date.toLocaleString();
    console.log(currentDate);
}

document.querySelector('#member-details').innerHTML = `
<h2>Member Details:</h2>
<p><strong>First Name: </strong>${memberDetails.get('firstName')}</p> 
<p><strong>Last Name: </strong>${memberDetails.get('lastName')}</p>
<p><strong>Email address: </strong> ${memberDetails.get('email')}</p>
<p><strong>Mobile Number: </strong> ${memberDetails.get('phone')}</p>
<p><strong>Organization Name: </strong> ${memberDetails.get('organizationName')}</p>
<p><strong>Current Date: </strong> ${currentDate}</p>
`;


