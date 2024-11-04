function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected section
            document.getElementById(sectionId).style.display = 'block';

            // Remove active class from all nav links and add to the clicked link
            document.querySelectorAll('.nav a').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.nav a[onclick="showSection('${sectionId}')"]`).classList.add('active');
        }

        // Display the home section by default on page load
        showSection('home');