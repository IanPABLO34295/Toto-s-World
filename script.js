function contactUs() {
    alert("Thank you for your interest! Please call us at 0712 345 678 or email totosworld@events.com.");
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for booking with Toto's World Agency! We'll contact you shortly.");
    this.reset();
});


