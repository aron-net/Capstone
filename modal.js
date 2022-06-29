const featuredSpeakers = document.getElementById('modal');

const speakers = [
  {
    img: 'Kent.png',
    name: 'Kent Beck',
    profession: 'American software engineer',
    description: 'Kent Beck is an American software engineer and the creator of extreme programming, a software development methodology that eschews rigid formal specification for a collaborative and iterative design process',
  },
  {
    img: 'Syamala.png',
    name: 'Syamala Umamaheswaran',
    profession: 'Engineering Lead at Zalando',
    description: 'Software Engineer, cares about Diversity and Inclusion topics, A public speaker, Blogger driven to always give back to the community.',
  },
  {
    img: 'Lemi.png',
    name: 'Lemi Orhan Ergin',
    profession: 'Software Crafter & Co-Founder at Craftgate',
    description: 'Lemi Orhan Ergin is a software crafter based in Turkey with a passion for raising the bar of his profession and sharing his experiences with communities.',
  },
  {
    img: 'Birgitta.png',
    name: 'Birgitta Böckeler',
    profession: 'Technical Principal',
    description: 'software developer, architect and technical leader who is passionate about helping teams and organisations break down complexity, and find new perspectives to look at their systems.',
  },
  {
    img: 'Pia.png',
    name: 'Pia Nilsson',
    profession: 'Director of Engineering at Spotify',
    description: "leading Spotify's Platform Developer Experience (PDX) tribe which is focused on creating the world's best developer experience for every engineer",
  },
  {
    img: 'Ariel.png',
    name: 'Ariel Camus',
    profession: 'founder and CEO of Microverse,',
    description: 'he founder and CEO of Microverse, an online school that offers opportunities to people around the world.',
  },
];

const loadSpeakers = () => {
  let cardSpeakers = '';
  for (let speakersIndex = 0; speakersIndex < speakers.length; speakersIndex += 1) {
    const card = `<div class="speakers-grid">
        <div class="speakers-clo">
            <article class="speaker-container">
                <div >
                    <img class="speaker-img" class="img-${speakersIndex + 1}" src="./Image/Speakers/${speakers[speakersIndex].img}" alt="speakers-image"></img>
                </div>
                <div class="speaker-content">
                    <h2 class="speaker-header">${speakers[speakersIndex].name}</h2>
                    <p class="speaker-profession">${speakers[speakersIndex].profession}</p>
                    <p class="speaker-description">${speakers[speakersIndex].description}</p>
                </div>
            </article>
        </div>
        </div>`;
    cardSpeakers += card;
  }
  featuredSpeakers.innerHTML = cardSpeakers;
};
loadSpeakers();