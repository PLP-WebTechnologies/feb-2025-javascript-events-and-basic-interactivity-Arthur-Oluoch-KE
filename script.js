 
        // Button click event
        document.getElementById('changeTextButton').addEventListener('click', function() {
            this.textContent = "You clicked me!";
            this.style.backgroundColor = "#28a745";
        });

        // Hover effect
        document.getElementById('hoverText').addEventListener('mouseover', function() {
            this.textContent = "You hovered over me!";
        });
        document.getElementById('hoverText').addEventListener('mouseout', function() {
            this.textContent = "Hover over me!";
        });

        // Keypress detection
        document.getElementById('keypressInput').addEventListener('keypress', function(event) {
            console.log(`Key pressed: ${event.key}`);
        });

        // Secret action (double-click)
        document.getElementById('secretAction').addEventListener('dblclick', function() {
            alert("You discovered the secret action!");
        });

        // Tabs functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                document.getElementById(`tab-${this.dataset.tab}`).classList.add('active');
            });
        });

        // Form validation
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        emailInput.addEventListener('input', function() {
            if (!this.validity.valid) {
                emailError.textContent = "Please enter a valid email.";
            } else {
                emailError.textContent = "";
            }
        });

        passwordInput.addEventListener('input', function() {
            if (this.value.length < 8) {
                passwordError.textContent = "Password must be at least 8 characters.";
            } else {
                passwordError.textContent = "";
            }
        });

        document.getElementById('signupForm').addEventListener('submit', function(event) {
            if (!emailInput.validity.valid || passwordInput.value.length < 8) {
                event.preventDefault();
                alert("Please fix the errors before submitting.");
            }
        });
   