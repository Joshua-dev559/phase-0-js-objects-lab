//Write your code here
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}

function logAttendeeName() {
  console.log(attendee.name);
}

function logTicketPrice() {
  console.log(attendee.ticketPrice);
}

function updateTicketType(attendee, newticketType) {
  attendee.ticketType = newticketType;
  console.log(attendee);
}

function updateTicketPrice(attendee, newticketPrice) {
  attendee.ticketPrice = newticketPrice;
  console.log(attendee);
}

function removeEventProperty(attendee) {
  delete attendee.event;
  console.log(attendee);
}

function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
    console.log(attendee);
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};