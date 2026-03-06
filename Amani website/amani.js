       /* "use strict";

        var menuList = document.getElementById('manulist');
        menuList.style.maxHeight = "0px";

        function menutoggle() {
            if (menuList.style.maxHeight == "0px") {
                menuList.style.maxHeight = "100vh";
            }
            else {
                menuList.style.maxHeight = "0px";
            }

        }
        */
        window.addEventListener('scroll', function(){
            const header = document.querySelector('header');
            header.classList.toggle("sticky", window.scrollY > 0)
         });

         function toggleMenu(){
            const menuToggle = document.querySelector('.menuToggle');
            const navigation = document.querySelector('.navigation');
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        
         }

        /* document.querySelector("form").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission behavior
        
            // Gather form data
            const arrivalDate = document.getElementById("Adate").value;
            const departureDate = document.getElementById("Ddate").value;
            const adults = document.getElementById("adults").value;
            const children = document.getElementById("Children").value;
        
            // Validate form fields
            if (!arrivalDate || !departureDate || !adults || !children) {
                alert("Please fill in all fields before submitting.");
                return;
            }
        
            // Format the message
            const message = `Booking Details:\nArrival Date: ${arrivalDate}\nDeparture Date: ${departureDate}\nAdults: ${adults}\nChildren: ${children}`;
        
            // Send to email
            const email = "sammymugo745@gmail.com";
            const emailSubject = encodeURIComponent("New Booking Request");
            const emailBody = encodeURIComponent(message);
            window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
        
            // Send to WhatsApp
            const whatsappNumber = "0728058559"; // WhatsApp number without leading zero
            const whatsappMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/254${whatsappNumber}?text=${whatsappMessage}`;
            window.open(whatsappURL, "_blank");
        });*/
        document.addEventListener("DOMContentLoaded", function () {
            const arrivalDate = document.getElementById("Adate");
            const departureDate = document.getElementById("Ddate");
            const adults = document.getElementById("adults");
            const children = document.getElementById("Children");
            const checkAvailabilityButton = document.querySelector("input[type='submit']");
        
            // Set minimum dates for arrival and departure
            const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
            arrivalDate.setAttribute("min", today);
            departureDate.setAttribute("min", today);
        
            // Function to validate the form and disable/enable the button
            function validateForm() {
                const arrivalDateValue = new Date(arrivalDate.value);
                const departureDateValue = new Date(departureDate.value);
                const numAdults = parseInt(adults.value, 10) || 0; // Default to 0 if field is empty
                const numChildren = parseInt(children.value, 10) || 0; // Default to 0 if field is empty
        
                // Conditions for disabling the button
                const isAdultsZero = numAdults === 0;
                const isAdultsInvalid = numAdults < 0;
                const isChildrenInvalid = numChildren < 0;
                const isDepartureBeforeArrival = departureDateValue < arrivalDateValue;
        
                // Handle specific validation cases
                if (isAdultsZero) {
                    alert("Number of adults can't be zero. Children cannot make reservations.");
                    checkAvailabilityButton.disabled = true;
                    return;
                }
        
                if (isDepartureBeforeArrival) {
                    alert("Invalid dates. Departure date cannot be before the arrival date.");
                    checkAvailabilityButton.disabled = true;
                    return;
                }
        
                // General validation for other cases
                if (isAdultsInvalid || isChildrenInvalid) {
                    checkAvailabilityButton.disabled = true;
                } else {
                    checkAvailabilityButton.disabled = false;
                }
            }
        
            // Success message on form submission
            function showSuccessMessage(event) {
                event.preventDefault(); // Prevent form from actually submitting
                alert("✅ Thank you for reaching out to Amani Homes where modern design meets timeless serenity.");
            }
        
            // Add event listeners for input fields to trigger validation
            arrivalDate.addEventListener("input", validateForm);
            departureDate.addEventListener("input", validateForm);
            adults.addEventListener("input", validateForm);
            children.addEventListener("input", validateForm);
        
            // Initial validation on page load
            validateForm();
        
            // Add event listener to the form for submission
            const form = document.querySelector("form");
            form.addEventListener("submit", function (e) {
                validateForm(); // Re-validate before submission
                if (!checkAvailabilityButton.disabled) {
                    showSuccessMessage(e);
                }
            });
        });
        