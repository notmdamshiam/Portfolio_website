/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Header and Navigation */
header {
    background-color: #2c3e50;
    color: #fff;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 2rem;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #3498db;
}

.burger {
    display: none;
    cursor: pointer;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px;
    transition: all 0.3s ease;
}

/* Main content */
main {
    margin-top: 80px;
}

section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

h1, h2 {
    text-align: center;
    margin-bottom: 2rem;
}

/* Home section */
#home {
    text-align: center;
    background-color: #f4f4f4;
    padding: 6rem 2rem;
}

#home h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.cta-button {
    display: inline-block;
    background-color: #3498db;
    color: #fff;
    padding: 0.8rem 2rem;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #2980b9;
}

/* About section */
.about-content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

.about-item {
    flex: 1;
    background-color: #f4f4f4;
    padding: 2rem;
    border-radius: 5px;
}

/* Services section */
.services-content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

.service-item {
    flex: 1;
    text-align: center;
    padding: 2rem;
    background-color: #f4f4f4;
    border-radius: 5px;
}

.service-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
}

/* Portfolio section */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
}

.portfolio-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.portfolio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.portfolio-item:hover img {
    transform: scale(1.1);
}

.portfolio-item:hover .portfolio-overlay {
    opacity: 1;
}

.portfolio-overlay h3 {
    color: #fff;
}

/* Contact section */
#contact-form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
}

#contact-form input,
#contact-form textarea {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#contact-form button {
    background-color: #3498db;
    color: #fff;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#contact-form button:hover {
    background-color: #2980b9;
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: #fff;
    text-align: center;
    padding: 2rem;
}

.footer-links {
    margin-top: 1rem;
}

.footer-links a {
    color: #fff;
    text-decoration: none;
    margin: 0 0.5rem;
}

/* Responsive design */
@media screen and (max-width: 768px) {
    .nav-links {
        position: absolute;
        right: 0px;
        height: 92vh;
        top: 8vh;
        background-color: #2c3e50;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        transform: translateX(100%);
        transition: transform 0.5s ease-in;
    }

    .nav-links li {
        opacity: 0;
    }

    .burger {
        display: block;
    }

    .about-content,
    .services-content {
        flex-direction: column;
    }
}

.nav-active {
    transform: translateX(0%);
}

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}