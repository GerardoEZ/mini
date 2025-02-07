const questionText = "¿Quieres ser mi San Valentín? 💘";
const questionElement = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseMessage = document.getElementById("responseMessage");

let index = 0;
function typeQuestion() {
    if (index < questionText.length) {
        questionElement.textContent += questionText.charAt(index);
        index++;
        setTimeout(typeQuestion, 100);
    } else {
        questionElement.style.borderRight = "none";
    }
}

setTimeout(typeQuestion, 500);

yesBtn.addEventListener("click", () => {
    responseMessage.textContent = "¡Sabía que dirías que sí! ❤️✨";
    responseMessage.style.display = "block";
    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(1.2)";
});

noBtn.addEventListener("click", () => {
    responseMessage.textContent = "¿Estás segura? 🥺💔";
    responseMessage.style.display = "block";
});

/* Partículas de fondo */
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 2,
        speedY: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
    };
}

for (let i = 0; i < 50; i++) {
    particles.push(createParticle());
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let particle of particles) {
        ctx.fillStyle = `rgba(255, 0, 100, ${particle.opacity})`;
        ctx.font = `${particle.size}px Arial`;
        ctx.fillText("❤️", particle.x, particle.y);
        particle.y -= particle.speedY;

        if (particle.y < -10) {
            particle.y = canvas.height;
            particle.x = Math.random() * canvas.width;
        }
    }
    
    requestAnimationFrame(drawParticles);
}

drawParticles();
