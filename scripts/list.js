let videoObj = [
    {
        title: 'Creative Frontend Course | Master GSAP, Three.js & React in 10 Hours',
        url: 'https://www.youtube.com/watch?v=ATdaYQw0ptk',
        complete: false,
    },
    {
        title: 'Python FastAPI Tutorial (Part 1): Getting Started - Web App + REST API',
        url: 'https://www.youtube.com/watch?v=7AMjmCTumuo',
        complete: false,
    },
    {
        title: 'Python FastAPI Tutorial (Part 2): HTML Frontend for Your API - Jinja2 Templates',
        url: 'https://www.youtube.com/watch?v=G4NIB9Rx9Qs',
        complete: false,
    },
     {
        title: 'PostgreSQL Tutorial | What Is PostgreSQL? | PostgreSQL Tutorial For Beginners | Simplilearn',
        url: 'https://www.youtube.com/watch?v=evJuky1ZtD8',
        complete: false,
    },
    {
        title: 'Building modern Python web apps with PostgreSQL | POSETTE: An Event for Postgres 2025',
        url: 'https://www.youtube.com/watch?v=wJ9ieWxA7lI',
        complete: false,
    },
    {
        title: 'How To Build a FastAPI & React Full Stack App | Clerk, Databases, LLMs & More',
        url: 'https://www.youtube.com/watch?v=13tMEW8r6C0',
        complete: false,
    },
    {
        title: 'Learn Fast API With This ONE Project',
        url: 'https://www.youtube.com/watch?v=SR5NYCdzKkc',
        complete: false,
    },
    {
        title: 'The ONLY FastAPI Deployment Tutorial You\'ll Ever Need (CICD)',
        url: 'https://www.youtube.com/watch?v=p7caQ1Cvl6Y',
        complete: false,
    },
    {
        title: 'You\'re Probably Building FASTAPI Apps WRONG (Clean Architecture)',
        url: 'https://www.youtube.com/watch?v=H9Blu0kWdZE',
        complete: false,
    },
    {
        title: 'SQLAlchemy vs. SQLModel: Which Python ORM is BEST?',
        url: 'https://www.youtube.com/watch?v=jzEJ6eRwc1c',
        complete: false,
    },
    {
        title: 'Learn Middleware by Building a REAL Project (fastapi rate limiting)',
        url: 'https://www.youtube.com/watch?v=2-exKF2Vszg',
        complete: false,
    },
    {
        title: 'FastAPI Tutorial for Beginners – Full Course',
        url: 'https://www.youtube.com/watch?v=VirndPTeRaw',
        complete: false,
    }
];

/*
// Add this to your JS to reset everything if needed
const resetBtn = document.getElementById('reset-progress');
resetBtn?.addEventListener('click', () => {
    localStorage.removeItem('study_plan_data');
    window.location.reload(); // Refresh to reload default list.js data
});
*/


const embedVid = videoObj.map(v => v.url.replace('watch?v=', 'embed/'));

export default videoObj;
export { embedVid };