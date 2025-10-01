// Criar a cena (o "mundo" onde tudo vai ficar)
const scene = new THREE.Scene();

// Criar a câmera (o que o usuário vai ver)
const camera = new THREE.PerspectiveCamera(
    75, // zoom
    window.innerWidth / window.innerHeight, // proporção
    0.1,
    1000
);

// Criar o renderizador (desenha na tela)
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("particulas")
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Quantidade de partículas
const particlesCount = 2000;

// Array para armazenar as posições (x, y, z de cada partícula)
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - 0.5) * 50; // posições aleatórias
}

// Criar geometria e adicionar as posições
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Material das partículas
const material = new THREE.PointsMaterial({
    color: 0x1E90FF,
    size: 0.09
});

// Criar o objeto de partículas com a cor e a forma 
const newParticles = new THREE.Points(geometry, material);

// Adicionar as partículas dentro da cena
scene.add(newParticles);

function animate() { //Aqui basicamente estou ajustando a posição de cada frame das partículas 
    requestAnimationFrame(animate);

    newParticles.rotation.y += 0.001;
    newParticles.rotation.x += 0.0005;

    renderer.render(scene, camera);
}
animate();

// Ajustar ao mudar o tamanho da tela
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --------- INTERAÇÕES DO PORTFÓLIO ---------
const secaoAboutMe = document.querySelector(".aboutMe");
const secaoProjects = document.querySelector(".projects");
const secaoContact = document.querySelector(".contact");

// Áreas de conteúdo
const textoOriginal = document.querySelector(".paragrafo-apresentacao");
const menu = document.querySelector(".secao-informacao")

secaoAboutMe.addEventListener("click", function (event) {
    event.preventDefault();


    document.querySelector("#conteudo").innerHTML = `

<div class="apresentacao">
<p>
         Sou desenvolvedor Front-End, natural de Manaus, onde cresci e me formei como pessoa e cidadão.<br>
        Meu interesse pela programação surgiu de forma inesperada, a partir de um simples anúncio no YouTube,<br>
        que despertou minha curiosidade por esse universo.
        Desde então, tenho me dedicado a aprender,<br>
        desenvolver projetos próprios e transformar ideias em soluções digitais.
        Busco colaborar<br> em projetos criativos e desafiadores,
        sempre com foco em crescimento e evolução constante.
     </p>   
         </div>
    `;
});

secaoProjects.addEventListener("click", function (event) {
    event.preventDefault();


    document.querySelector("#conteudo").innerHTML = `
    <div class="projetos">
    <p>
    Você pode conferir todos os meus projetos no meu <a href="https://github.com/Emanoelneres" target="_blank">GitHub</a>.
    </p>
    </div>
    `;

});

document.querySelector(".technical-skills").addEventListener("click", function () {//aqui com o clique na seção habilidades vou colocar as imagens
    document.querySelector("#conteudo").innerHTML = `
<div class="habilidades">
<img src="./imagens/html-removebg-preview.png" alt="HTML" class="icone">
<img src="./imagens/css-3__2_-removebg-preview.png" alt="CSS" class="icone">
<img src="./imagens/imagem-javascript.png" alt="javascript" class="icone">
<img src="./imagens/imagem-react-photoroom.png" alt="React" class="icone">
<img src="./imagens/nodejs-logo-adesivo-sticker-photoroom.png" alt="nodes" class="icone">
<img src="./imagens/imagem-mongo-db.png" alt="mongodb" class="icone">
<img src="./imagens/imagem-github-photoroom.png" alt="GITHUB" class="icone">
<img src="./imagens/git_imagem.png" alt="GIT" class="icone">
</div>
`;
});

secaoContact.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector("#conteudo").innerHTML = `
  <div class="contato">
  <p>🚀Me siga nas redes sociais e entre em contato comigo:<p>
   <ul>
   <li class="contact-linkedin"><a href="https://www.linkedin.com/in/messsiasneres" target="_blank">linkedin.com/in/messsiasneres</a></li>
   <li class="contact-instagram"  ><a href="https://www.instagram.com/neres.exe" target="_blank">instagram.com/messsiasneres</a></li>
   <li class="contact-email" ><a href="mailto:messiasemanoel933@gmail.com">messiasemanoel933@gmail.com</a></li>
   </ul>
   </div>
    `;
});


function trocarTexto(){
const principal=document.querySelector(".paragrafo-apresentacao");
const novoTexto=document.querySelector("apresentacao");


principal.style.display="none";

novoTexto.style.dispLay="block";


}

function trocarTextoProjects(){
    const principalTexto=document.querySelector(".paragrafo-apresentacao");
    const novoTextoProjects=document.querySelector("projetos");
    
    
    principalTexto.style.display="none";
    
    novoTextoProjects.style.dispLay="block";
    
    
    }


  function  trocarTextoSkill(){
    const principalTexto=document.querySelector(".paragrafo-apresentacao");
    const novoTextoSkills=document.querySelector(".habilidades");
    
    
    principalTexto.style.display="none";
    
    novoTextoSkills.style.dispLay="block";


    }


    function trocarTextoContato(){
        const principalTexto=document.querySelector(".paragrafo-apresentacao");
        const novoTextoContacts=document.querySelector(".contato");
        
        
        principalTexto.style.display="none";
        
        novoTextoContact.style.dispLay="block";


    }


