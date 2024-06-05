document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    const revealProject = (project) => {
        const windowHeight = window.innerHeight;
        const elementTop = project.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            project.classList.add('reveal');
        }
    };

    const revealOnScroll = () => {
        projects.forEach(project => {
            revealProject(project);
        });
    };


    revealOnScroll();

    window.addEventListener('scroll', revealOnScroll);
});