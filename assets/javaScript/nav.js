const navbar = document.querySelector('header');
        window.addEventListener('scroll', () => {
            
            if(window.scrollY > 0){
                navbar.style.backgroundColor = '#25282B';
            }
            else{
                navbar.style.backgroundColor = 'transparent';
            }
        });

        function toggleNav() {
            const sideNav = document.getElementById("sideNav");
            sideNav.classList.toggle("open"); // Adds/removes the 'open' class to open/close side nav
        }
        