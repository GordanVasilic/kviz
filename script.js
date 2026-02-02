const allQuestions = [
    // --- 1. BEZBJEDNOST & LOZINKE (30 pitanja) ---
    { q: "Koja je najsigurnija lozinka?", o: ["123456", "lozinka", "Mrav3!#Kupus", "stefan2010"], a: 2 },
    { q: "Kome smiješ reći svoju lozinku?", o: ["Najboljem drugu", "Roditeljima", "Nastavniku", "Nikome"], a: 1 },
    { q: "Ako zaboraviš da se odjaviš sa Facebooka u školi, šta trebaš uraditi?", o: ["Promijeniti lozinku čim dođeš kući", "Plakati", "Ništa", "Napraviti novi profil"], a: 0 },
    { q: "Šta znači 'https' na početku adrese sajta?", o: ["Sajt je spor", "Sajt je zabavan", "Veza je sigurna (šifrovana)", "Sajt je za hakere"], a: 2 },
    { q: "Video si sumnjiv link u emailu. Šta trebaš uraditi?", o: ["Kliknuti da vidiš šta je", "Proslijediti prijateljima", "Obrisati email i ne kliktati", "Odgovoriti pošiljaocu"], a: 2 },
    { q: "Koji je najbolji način da zaštitiš telefon?", o: ["Ne nosiš ga u školu", "Staviš lozinku ili otisak prsta", "Sakriješ ga ispod kreveta", "Isključiš internet"], a: 1 },
    { q: "Ako koristiš javni Wi-Fi (npr. u kafiću), šta NE trebaš raditi?", o: ["Gledati YouTube", "Prijavljivati se na bankovni račun", "Čitati vijesti", "Igrati igrice"], a: 1 },
    { q: "Šta je 'Phishing' (Pecanje)?", o: ["Pecanje na jezeru", "Pokušaj prevare da ti ukradu podatke", "Vrsta kompjuterskog virusa", "Program za crtanje"], a: 1 },
    { q: "Koliko često trebaš mijenjati važne lozinke?", o: ["Nikad", "Svaki dan", "Svakih par mjeseci", "Kad kupim novi računar"], a: 2 },
    { q: "Zašto ne trebaš koristiti '1234' kao PIN?", o: ["Preteško je zapamtiti", "Lako se pogodi", "Nije cool", "Zabranjeno je"], a: 1 },
    { q: "Šta radiš kad završiš rad na školskom računaru?", o: ["Samo ugasim monitor", "Ostavim sve upaljeno", "Odjavim se sa svih naloga", "Istrčim napolje"], a: 2 },
    { q: "Šta je 'Virus' na kompjuteru?", o: ["Bakterija", "Štetan program koji pravi probleme", "Prljav ekran", "Igrice"], a: 1 },
    { q: "Ako ti iskoči prozor 'Vaš računar je zaražen!', to je obično:", o: ["Istina", "Lažna reklama (scareware)", "Poruka od Bila Gejtsa", "Znak da kupiš novi"], a: 1 },
    { q: "Gdje je najsigurnije čuvati slike?", o: ["Samo na telefonu", "Na više mjesta (Backup)", "Na Facebooku", "Na papiru"], a: 1 },
    { q: "Ako ti neko traži sliku bankovne kartice tvojih roditelja za igricu, ti:", o: ["Slikaš krišom", "Ne daš i kažeš roditeljima", "Pitaš koja strana treba", "Daš samo brojeve"], a: 1 },
    { q: "Koja je sigurna dužina lozinke?", o: ["3 znaka", "8 ili više znakova", "Samo brojevi", "Ime tvog psa"], a: 1 },
    { q: "Šta je 'Spam'?", o: ["Ukusna hrana", "Neželjene reklame i poruke", "Virus", "Igra"], a: 1 },
    { q: "Da li trebaš vjerovati svemu što piše na Wikipediji?", o: ["Da, uvijek", "Ne, svako je može urediti", "Samo ako je na engleskom", "Nikad"], a: 1 },
    { q: "Šta radiš ako dobiješ email od 'Direktora Interneta'?", o: ["Odgovaram odmah", "Brišem, to je vjerovatno prevara", "Zovem policiju", "Plačem"], a: 1 },
    { q: "Šta je 'Firewall'?", o: ["Vatreni zid u igrici", "Sigurnosni sistem koji blokira napade", "Požar", "Zid od cigle"], a: 1 },
    { q: "Zašto ne treba otvarati .exe fajlove od nepoznatih ljudi?", o: ["Dosadni su", "Mogu biti virusi", "Zauzimaju puno mjesta", "Ne rade na telefonu"], a: 1 },
    { q: "Šta je 'Haker'?", o: ["Osoba koja pravi namještaj", "Osoba koja provaljuje u računarske sisteme", "Osoba koja igra fudbal", "Nastavnik"], a: 1 },
    { q: "Šta znači 'Incognito' mode?", o: ["Da si nevidljiv hakerima", "Da pregledač ne pamti istoriju posjeta", "Da si anoniman policiji", "Da imaš brži net"], a: 1 },
    { q: "Koji je broj policije u hitnim slučajevima?", o: ["122", "911", "555-333", "000"], a: 0 },
    { q: "Šta je 'Ransomware'?", o: ["Virus koji zaključava fajlove i traži otkup", "Besplatan softver", "Najnovija igrica", "Antivirus"], a: 0 },
    { q: "Da li je pametno koristiti isto ime i lozinku svuda?", o: ["Da, lakše se pamti", "Ne, ako ti provale jedan, provalili su sve", "Svejedno je", "Samo za igrice"], a: 1 },
    { q: "Šta znači 'Update'?", o: ["Ažuriranje softvera (često sigurnosno)", "Brisanje", "Kupovina", "Vrijeme"], a: 0 },
    { q: "Kako prepoznati lažnu nagradnu igru?", o: ["Traže ti lične podatke i pare unaprijed", "Imaju lijep logo", "Reklamira je poznata osoba", "Traje dugo"], a: 0 },
    { q: "Šta radiš ako internet ne radi?", o: ["Plačem", "Provjerim ruter ili pitam roditelje", "Lupam po tastaturi", "Zovem policiju"], a: 1 },
    { q: "Šta je '2FA'?", o: ["Dva Fudbalska Asa", "Dvostruka zaštita naloga", "Dva Filma", "Dva Facebooka"], a: 1 },

    // --- 2. DRUŠTVENE MREŽE & PRIVATNOST (25 pitanja) ---
    { q: "Ko može vidjeti tvoje slike ako ti je profil 'Javan' (Public)?", o: ["Samo prijatelji", "Samo porodica", "Bilo ko na internetu", "Niko"], a: 2 },
    { q: "Šta trebaš uraditi prije nego prihvatiš zahtjev za prijateljstvo?", o: ["Vidjeti ima li lijepu sliku", "Provjeriti da li tu osobu poznaješ u stvarnom životu", "Prihvatiti odmah", "Pitati ga za horoskop"], a: 1 },
    { q: "Koji od ovih podataka NE trebaš objaviti javno?", o: ["Omiljenu boju", "Svoju kućnu adresu", "Koji sport voliš", "Sliku svog crteža"], a: 1 },
    { q: "Ako izbrišeš sliku sa Instagrama, da li je ona zauvijek nestala?", o: ["Da, sigurno", "Ne, neko je mogao napraviti screenshot", "Možda", "Samo ako ugasiš telefon"], a: 1 },
    { q: "Koliko godina moraš imati za Instagram/TikTok (po pravilu)?", o: ["10", "13", "18", "7"], a: 1 },
    { q: "Šta znači 'blokirati' nekoga?", o: ["Gađati ga blokom", "Onemogućiti mu da te kontaktira", "Prijaviti ga policiji", "Obrisati mu slike"], a: 1 },
    { q: "Da li je sve što vidiš na TikToku istina?", o: ["Uvijek", "Nikad", "Ne, mnogo toga je gluma ili laž", "Samo ako ima puno lajkova"], a: 2 },
    { q: "Zašto influenseri reklamiraju proizvode?", o: ["Jer su dobri ljudi", "Jer su plaćeni za to", "Jer im se to stvarno sviđa", "Jer nemaju šta drugo da rade"], a: 1 },
    { q: "Šta je 'Digitalni otisak'?", o: ["Otisak prsta na ekranu", "Tragovi koje ostavljaš svojim aktivnostima na internetu", "Slika tvog stopala", "Virus"], a: 1 },
    { q: "Objavljivanje slika sa ljetovanja u realnom vremenu (dok si tamo) je:", o: ["Super ideja", "Rizično, jer lopovi znaju da nisi kući", "Obavezno", "Dosadno"], a: 1 },
    { q: "Šta je 'Lažni profil'?", o: ["Profil sa tvojim imenom ali tuđom slikom", "Profil koji se pretvara da je neko drugi", "Bilo koji novi profil", "Profil bez slike"], a: 1 },
    { q: "Šta znači 'Privatni profil'?", o: ["Samo ljudi koje odobriš mogu vidjeti tvoj sadržaj", "Niko ne može vidjeti ništa", "Svi mogu vidjeti sve", "Profil je za kompanije"], a: 0 },
    { q: "Da li trebaš slati svoju sliku nepoznatoj osobi?", o: ["Da, ako je ljubazna", "Ne, nikada", "Samo ako pošalje i ona", "Možda"], a: 1 },
    { q: "Šta znači 'Tagovati' nekoga?", o: ["Označiti ga na slici ili u objavi", "Igrati 'šuge'", "Blokirati ga", "Izbrisati ga"], a: 0 },
    { q: "Prije nego što objaviš sliku sa drugom, trebaš:", o: ["Staviti filter", "Pitati ga za dozvolu", "Ništa", "Napisati smiješan opis"], a: 1 },
    { q: "Šta je 'Sextortion'?", o: ["Ucjena intimnim slikama", "Vrsta muzike", "Sekcija u školi", "Igra"], a: 0 },
    { q: "Šta znači 'Seen'?", o: ["Da je poruka viđena", "Da je poruka obrisana", "Da je poruka poslata", "Sjaj"], a: 0 },
    { q: "Šta je 'Influenser'?", o: ["Osoba koja ima uticaj na društvenim mrežama", "Doktor", "Programer", "Haker"], a: 0 },
    { q: "Šta je 'Vlog'?", o: ["Video blog", "Vrsta žabe", "Virus", "Logor"], a: 0 },
    { q: "Šta znači 'Trending'?", o: ["Treniranje", "Popularno trenutno", "Dosadno", "Trgovina"], a: 1 },
    { q: "Šta je 'Hashtag' (#)?", o: ["Oznaka za teme", "Broj telefona", "Greška", "Smajli"], a: 0 },
    { q: "Ko je odgovoran za tvoje ponašanje na internetu?", o: ["Vlada", "Roditelji", "Ti sam", "Bil Gejts"], a: 2 },
    { q: "Kako prepoznati lažni profil?", o: ["Ima malo slika, čudno ime, traži pare", "Ima puno pratilaca", "Ima plavu kvačicu", "Piše mu na čelu"], a: 0 },
    { q: "Šta znači 'DM'?", o: ["Direct Message (Privatna poruka)", "Dobar Momak", "Dan Mladih", "Donkey Man"], a: 0 },
    { q: "Da li Facebook/Instagram smiju koristiti tvoje slike?", o: ["Ne nikad", "Da, pristao si na to u Uslovima korištenja", "Samo ako im platiš", "Ne znam"], a: 1 },

    // --- 3. BONTON & CYBERBULLYING (20 pitanja) ---
    { q: "Kada pišeš poruku VELIKIM SLOVIMA, to znači:", o: ["Da si srećan", "Da vičeš", "Da ti se pokvarila tastatura", "Da je važno"], a: 1 },
    { q: "Neko te vrijeđa u komentarima. Šta radiš?", o: ["Vrijeđam i ja njega", "Blokiram, prijavim i kažem roditeljima", "Plačem", "Zovem ga na tuču"], a: 1 },
    { q: "Šta je 'Cyberbullying'?", o: ["Nasilje preko interneta", "Igranje igrica", "Učenje programiranja", "Kupovina online"], a: 0 },
    { q: "Anonimne poruke mržnje su:", o: ["Zabavne", "Kukavičke i kažnjive", "Dozvoljene", "Cool"], a: 1 },
    { q: "Ako vidiš da nekoga vrijeđaju u grupi, šta radiš?", o: ["Pridružim se", "Prijavim nasilje i podržim žrtvu", "Smijem se", "Ignorišem"], a: 1 },
    { q: "Da li je krađa identiteta nasilje?", o: ["Nije, to je šala", "Jeste, i to je krivično djelo", "Samo ako pišeš gluposti", "Ne znam"], a: 1 },
    { q: "Šta je 'Troll'?", o: ["Osoba koja namjerno provocira druge", "Mitsko biće", "Pametna osoba", "Haker"], a: 0 },
    { q: "Kome se možeš obratiti za pomoć ako doživiš nasilje?", o: ["Plavom telefonu", "Roditeljima/Nastavnicima", "Policiji", "Svima navedenim"], a: 3 },
    { q: "Šta ne trebaš raditi 'hejterima'?", o: ["Blokirati ih", "Prijaviti ih", "Svađati se s njima", "Ignorisati ih"], a: 2 },
    { q: "Ljudi na internetu ne vide tvoje lice. Zato je važno:", o: ["Koristiti smajlije da pojasniš osjećanja", "Pisati kratko", "Ne pisati ništa", "Lagati"], a: 0 },
    { q: "Ako ti neko pošalje neprikladnu sliku, ti:", o: ["Proslijediš dalje", "Sačuvaš", "Ne odgovaraš i prijaviš", "Smiješ se"], a: 2 },
    { q: "Šta znači 'Mute'?", o: ["Pojačati", "Utišati (sakriti objave)", "Izaći", "Blokirati"], a: 1 },
    { q: "Šta je 'Govor mržnje'?", o: ["Vrijeđanje na osnovu vjere, nacije itd.", "Kad neko puno priča", "Kad neko ne voli školu", "Pjevanje"], a: 0 },
    { q: "Da li smiješ slikati nastavnika bez dozvole i objaviti?", o: ["Da, smiješno je", "Ne, to je zabranjeno", "Samo ako ne vidi", "Da, ako je on dobar"], a: 1 },
    { q: "Da li je 'Samo sam se šalio' opravdanje za nasilje?", o: ["Da", "Ne", "Možda", "Uvijek"], a: 1 },
    { q: "Šta uraditi ako si slučajno nekoga povrijedio porukom?", o: ["Blokirati ga", "Izviniti se iskreno", "Smijati se", "Okriviti njega"], a: 1 },
    { q: "Da li trebaš dijeliti tuđe tajne online?", o: ["Da, ako su zanimljive", "Ne, to je kršenje povjerenja", "Samo najboljem drugu", "Ako ti on dozvoli"], a: 1 },
    { q: "Šta je 'Griefing' u igricama?", o: ["Pobjeda", "Namjerno kvarenje igre drugima", "Timska igra", "Pauza"], a: 1 },
    { q: "Ako te neko izbaci iz grupe na Viberu bez razloga, to je:", o: ["Smiješno", "Vid isključivanja (vrsta nasilja)", "Greška", "Nagrada"], a: 1 },
    { q: "Internet pamti sve. To se zove:", o: ["Digitalni otisak", "Velika memorija", "Superkompjuter", "Oblak"], a: 0 },

    // --- 4. GAMING & PEGI (15 pitanja) ---
    { q: "PEGI 3 znači:", o: ["Igrica je za sve uzraste", "Igrica košta 3 marke", "Igrica traje 3 sata", "Igraju je 3 igrača"], a: 0 },
    { q: "PEGI 7 često ima:", o: ["Puno krvi", "Strah", "Blago, nerealno nasilje (kao crtani)", "Psovke"], a: 2 },
    { q: "PEGI 12 može sadržavati:", o: ["Eksplicitno nasilje", "Malo ružnih riječi i blago nasilje", "Kockanje", "Horor bez granica"], a: 1 },
    { q: "PEGI 18 je za:", o: ["Osnovce", "Srednjoškolce", "Samo odrasle", "Penzionere"], a: 2 },
    { q: "Ikonica 'Kocka' 🎲 na PEGI oznaci znači:", o: ["Igra se kockicama", "Igrica sadrži kockanje", "Igrica je kockasta", "Teška je"], a: 1 },
    { q: "Ikonica 'Pauk' 🕷️ znači:", o: ["Spiderman igra", "Sadržaj koji izaziva strah", "Igra o prirodi", "Spora igra"], a: 1 },
    { q: "Ikonica 'Pesnica' ✊ znači:", o: ["Sport", "Nasilje", "Prijateljstvo", "Snaga"], a: 1 },
    { q: "Ikonica 'Oblačić sa simbolima' @*!# znači:", o: ["Puno teksta", "Ružan rječnik (psovke)", "Chat", "Strani jezik"], a: 1 },
    { q: "Ako ti neko u igrici traži da se nađete uživo, ti:", o: ["Odeš odmah", "Odbiješ i blokiraš ga", "Pitaš gdje i kad", "Povedeš druga"], a: 1 },
    { q: "Kupovina u igricama (In-game purchases) pravim novcem:", o: ["Je besplatna", "Troši stvarni novac", "Je obavezna", "Je nemoguća"], a: 1 },
    { q: "Koliko dugo je zdravo igrati igrice dnevno?", o: ["10 sati", "Dok ne padneš u nesvijest", "1-2 sata uz pauze", "5 minuta"], a: 2 },
    { q: "Šta je 'Lag'?", o: ["Kad si dobar", "Kad igra koči zbog interneta", "Kad pobijediš", "Ime lika"], a: 1 },
    { q: "Ako izgubiš u igrici, trebaš:", o: ["Razbiti tastaturu", "Vrijeđati protivnika", "Čestitati i pokušati ponovo", "Plakati"], a: 2 },
    { q: "Da li su ljudi u igricama uvijek oni za koje se predstavljaju?", o: ["Da", "Ne, često lažu o godinama", "Uvijek su stariji", "Uvijek su mlađi"], a: 1 },
    { q: "Šta su 'Skinovi'?", o: ["Koža", "Izgled lika ili oružja u igri", "Novac", "Nivoi"], a: 1 },

    // --- 5. OPŠTA DIGITALNA KULTURA (15 pitanja) ---
    { q: "Šta je 'Download'?", o: ["Poslati", "Preuzeti (skinuti) sa interneta", "Ugasiti", "Upaliti"], a: 1 },
    { q: "Šta je 'Upload'?", o: ["Postaviti na internet", "Skinuti sa interneta", "Igrati igru", "Gledati film"], a: 0 },
    { q: "Šta je 'Screenshot'?", o: ["Pucanje u ekran", "Slika ekrana", "Razbijen ekran", "Video"], a: 1 },
    { q: "Šta je 'Bug' (Bag)?", o: ["Buba", "Greška u programu", "Vrsta igrice", "Dugme"], a: 1 },
    { q: "Šta je 'Cookie' (Kolačić) na sajtu?", o: ["Pravi keks", "Mali fajl koji pamti tvoje postavke", "Virus", "Nagrada"], a: 1 },
    { q: "Kada je u redu koristiti telefon u školi?", o: ["Na času", "Kada nastavnik dozvoli", "U toaletu", "Uvijek"], a: 1 },
    { q: "Šta znači 'BFF'?", o: ["Big Fat Frog", "Best Friends Forever", "Best Food", "Bye For Fnow"], a: 1 },
    { q: "Šta znači 'LOL'?", o: ["Lots of Love", "Laughing Out Loud (Smijanje)", "Lord of Links", "Little Old Lady"], a: 1 },
    { q: "Da li trebaš gasiti Bluetooth kad ga ne koristiš?", o: ["Da, zbog sigurnosti i baterije", "Ne", "Svejedno", "Da te ne nađu vanzemaljci"], a: 0 },
    { q: "Šta je 'Cloud' (Oblak)?", o: ["Kiša", "Serveri na internetu za čuvanje podataka", "Dim", "Magla"], a: 1 },
    { q: "Šta je 'Recycle Bin'?", o: ["Kanta za smeće (na računaru)", "Bicikl", "Reciklaža papira", "Igra"], a: 0 },
    { q: "Šta radi taster 'Ctrl + Z'?", o: ["Briše sve", "Poništava zadnju radnju (Undo)", "Zatvara prozor", "Zumira"], a: 1 },
    { q: "Šta je 'Avatar'?", o: ["Plavi vanzemaljac", "Sličica koja te predstavlja", "Avion", "Auto"], a: 1 },
    { q: "Šta je 'URL'?", o: ["Adresa web stranice", "Vrlo Ruzno Lice", "Udruženje", "Fajl"], a: 0 },
    { q: "Šta znači '404 Error'?", o: ["Stranica nije pronađena", "Imaš 404 virusa", "Vrijeme je 4:04", "Sve je u redu"], a: 0 }
];

// Transform simple format to object format used by logic
// q -> question, o -> options, a -> answer index
const questions = allQuestions.map(item => ({
    question: item.q,
    options: item.o,
    answer: item.a
}));

// State
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let currentQuizQuestions = []; // Array for current session
const QUESTIONS_PER_QUIZ = 15;

// Profanity Filter
const badWords = [
    // SR/HR/BS
    "jeb", "kurac", "kurc", "picka", "pička", "pizda", "govno", "sranje",
    "idiot", "budala", "kreten", "debil", "glupan", "stoka", "majmun",
    "peder", "pedu", "kucka", "kučka", "drolja", "kurva", "balija",
    "ustasa", "ustaša", "cetnik", "četnik", "siptar", "šiptar", "retard", "ubiti", "mrzim",
    // ENG
    "fuck", "shit", "bitch", "ass", "dick", "cunt", "pussy", "whore", "slut", "fag", "nigger", "nigga",
    // Internet Slang
    "wtf", "stfu", "gtfo", "kys"
];

function containsBadWords(text) {
    const lowerText = text.toLowerCase();
    return badWords.some(word => lowerText.includes(word));
}

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const leaderboardScreen = document.getElementById('leaderboard-screen');

const playerNameInput = document.getElementById('player-name');
const startBtn = document.getElementById('start-btn');
const showLeaderboardBtn = document.getElementById('show-leaderboard-btn');
const backToStartBtn = document.getElementById('back-to-start-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const questionCount = document.getElementById('question-count');
const scoreDisplay = document.getElementById('score-display');
const feedbackArea = document.getElementById('feedback-area');

const finalScoreEl = document.getElementById('final-score');
const finalMessageEl = document.getElementById('final-message');
const leaderboardListEl = document.getElementById('leaderboard-list');
const mainLeaderboardListEl = document.getElementById('main-leaderboard-list');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', resetQuiz);
showLeaderboardBtn.addEventListener('click', showMainLeaderboard);
backToStartBtn.addEventListener('click', () => {
    switchScreen(startScreen);
});

// Init
function init() {
    loadLeaderboard();
}

function startQuiz() {
    const name = playerNameInput.value.trim();
    if (!name) {
        alert("Molim te upiši svoje ime ili nadimak!");
        return;
    }

    if (containsBadWords(name)) {
        alert("Hej! Internet Heroji koriste pristojne nadimke. Molim te izaberi drugo ime. 😊");
        playerNameInput.value = '';
        return;
    }

    playerName = name;
    score = 0;
    currentQuestionIndex = 0;

    // 1. Shuffle ALL questions
    // Make a copy first so we don't mess up the original order permanently (optional but good practice)
    const shuffled = [...questions].sort(() => Math.random() - 0.5);

    // 2. Slice first 15
    currentQuizQuestions = shuffled.slice(0, QUESTIONS_PER_QUIZ);

    updateStats();
    showQuestion();
    switchScreen(quizScreen);
}

function showQuestion() {
    const q = currentQuizQuestions[currentQuestionIndex];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';

    // Create status flags so user can't click multiple times
    let answered = false;

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index, q.answer, btn, answered);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, correctIndex, btnElement, answeredState) {
    if (document.querySelector('.option-btn.clicked')) return; // Prevent double clicks

    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(b => b.classList.add('clicked')); // Mark all as clicked to disable hover effects visually if needed

    if (selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score += 10; // 10 points per question
        // feedbackArea.textContent = "Tačno! Bravo!";
    } else {
        btnElement.classList.add('wrong');
        // Highlight correct answer
        buttons[correctIndex].classList.add('correct');
        // feedbackArea.textContent = "Netačno. Tačan odgovor je označen zelenom bojom.";
    }

    updateStats();

    // Auto advance after short delay
    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function updateStats() {
    questionCount.textContent = `Pitanje ${Math.min(currentQuestionIndex + 1, currentQuizQuestions.length)}/${currentQuizQuestions.length}`;
    scoreDisplay.textContent = `Bodovi: ${score}`;

    const progress = ((currentQuestionIndex) / currentQuizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function endQuiz() {
    saveScore(playerName, score);
    finalScoreEl.textContent = score;

    // Message based on score
    const maxScore = QUESTIONS_PER_QUIZ * 10;
    if (score === maxScore) {
        finalMessageEl.textContent = "SAVRŠENO! Ti si pravi Internet Ekspert! 🥇";
    } else if (score >= maxScore * 0.8) {
        finalMessageEl.textContent = "Odlično znanje! Skoro pa savršeno! 🥈";
    } else if (score >= maxScore * 0.5) {
        finalMessageEl.textContent = "Dobar rezultat, ali može i bolje! 👍";
    } else {
        finalMessageEl.textContent = "Trebaš još malo učiti o bezbjednosti. Probaj ponovo! 📚";
    }

    renderLeaderboard(leaderboardListEl);
    switchScreen(resultScreen);

    // Confetti effect trigger can go here
}

function resetQuiz() {
    playerNameInput.value = '';
    switchScreen(startScreen);
}

function switchScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

    screen.classList.remove('hidden');
    screen.classList.add('active');
}

// Leaderboard Logic
async function saveScore(name, score) {
    // 1. Try Global Save (Server)
    try {
        await fetch('/api/leaderboard', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, score })
        });
    } catch (e) {
        console.warn("Offline mode or API error. Saving locally.");
    }

    // 2. Always Save Locally (Backup/Offline support)
    let leaderboard = getLocalLeaderboard();
    leaderboard.push({ name, score, date: new Date().toLocaleDateString() });
    leaderboard.sort((a, b) => b.score - a.score);
    if (leaderboard.length > 10) leaderboard = leaderboard.slice(0, 10);
    localStorage.setItem('kviz_leaderboard', JSON.stringify(leaderboard));
}

function getLocalLeaderboard() {
    const stored = localStorage.getItem('kviz_leaderboard');
    return stored ? JSON.parse(stored) : [];
}

async function renderLeaderboard(listElement) {
    listElement.innerHTML = '<li class="leaderboard-item" style="justify-content:center;">Učitavanje... ⏳</li>';

    let leaderboard = [];
    let isGlobal = false;

    // 1. Try Fetch Global
    try {
        const res = await fetch('/api/leaderboard');
        if (res.ok) {
            const data = await res.json();
            // Data comes as [{name: "Name#Timestamp", score: 100}, ...]
            // Clean up the name
            leaderboard = data.map(item => ({
                name: item.name.split('#')[0], // Remove timestamp suffix
                score: item.score
            }));
            isGlobal = true;
        } else {
            throw new Error("API Limit or Error");
        }
    } catch (e) {
        // 2. Fallback to Local
        console.log("Using local leaderboard");
        leaderboard = getLocalLeaderboard();
    }

    listElement.innerHTML = '';

    if (leaderboard.length === 0) {
        listElement.innerHTML = '<li>Još nema rezultata. Budi prvi!</li>';
        return;
    }

    // Header indicating source
    if (isGlobal) {
        const badge = document.createElement('div');
        badge.style.textAlign = 'center';
        badge.style.fontSize = '0.8rem';
        badge.style.color = '#2ECC71';
        badge.style.marginBottom = '10px';
        badge.innerHTML = '🌍 Globalna Rang Lista (Svijet) 🌍';
        listElement.appendChild(badge);
    } else {
        const badge = document.createElement('div');
        badge.style.textAlign = 'center';
        badge.style.fontSize = '0.8rem';
        badge.style.color = '#888';
        badge.style.marginBottom = '10px';
        badge.innerHTML = '🏠 Lokalna Rang Lista (Tvoj uređaj) 🏠';
        listElement.appendChild(badge);
    }

    leaderboard.forEach((entry, index) => {
        const li = document.createElement('li');
        li.className = 'leaderboard-item';

        // Disable top 3 colors for global if it gets messy, or keep them
        let rankClass = '';
        if (index === 0) rankClass = 'rank-1';
        if (index === 1) rankClass = 'rank-2';
        if (index === 2) rankClass = 'rank-3';

        li.innerHTML = `
            <span class="${rankClass}">#${index + 1} ${entry.name}</span>
            <span>${entry.score} pts</span>
        `;
        listElement.appendChild(li);
    });
}


function showMainLeaderboard() {
    renderLeaderboard(mainLeaderboardListEl);
    switchScreen(leaderboardScreen);
}

function loadLeaderboard() {
    // Just ensuring we have access to local storage
}

// Start
init();
