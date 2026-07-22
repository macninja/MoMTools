export const SETUP_STRINGS = {
  da: {
    "meta.title": "Setup Wizard – Mansions of Madness",
    "meta.description": "Setup guide og regelreference til Mansions of Madness 2E.",
    hubBack: "← MoMTools",
    footer: "Fan tool · Ikke tilknyttet Fantasy Flight Games",
    tagline: "Fra kassen til første runde – uden at bladre i regelbogen.",
    "welcome.title": "Velkommen",
    "welcome.lede": "Denne guide hjælper jer med fysisk setup, companion-appen og genopfrisker de vigtigste regler under spillet.",
    "welcome.start": "Start setup →",
    "players.title": "Antal spillere",
    "players.lede": "Hvor mange sidder ved bordet i aften?",
    "players.back": "← Tilbage",
    "players.next": "Videre →",
    "players.info.1": "Solo: Du styrer 2 investigators. Vælg 2 investigators og tag startgenstande for begge.",
    "players.info.2": "Standard 2-spiller: Hver spiller vælger 1 investigator. God balance mellem action economy og horror.",
    "players.info.3": "3 spillere: Vælg 1 investigator hver. I har god dækning af skills.",
    "players.info.4": "4 spillere: Vælg 1 investigator hver. Sørg for variation i stats (Strength, Lore, Influence).",
    "players.info.5": "5 spillere: Maks kapacitet. Scenarierne bliver lettere med flere actions, men Mythos-fasen rammer hårdere.",
    "setup.title": "Fysisk setup",
    "setup.lede": "Klik på hvert punkt når det er klart.",
    "setup.back": "← Tilbage",
    "setup.next": "Videre →",
    "setup.checklist.1": "Find alle map tiles og sorter dem efter nummer",
    "setup.checklist.2": "Shuffle Damage- og Horror-dækkene hver for sig, læg facedown centralt",
    "setup.checklist.3": "Sortér Common Items, Unique Items, Spells og Conditions alfabetisk faceup (shuffle dem IKKE)",
    "setup.checklist.4": "Læg alle monster-figurer (med tokens i basen) tilgængeligt",
    "setup.checklist.5": "Saml alle andre tokens i pools: Clue, Fire, Darkness, Barricade, Wall, Secret Passage, Explore/Search/Interact, Person, Sight",
    "setup.checklist.6": "Find terningerne (custom d8 med 8 sider: 3 Elder Sign, 2 Investigation, 3 Blank)",
    "setup.checklist.7": "Hver spiller: Vælg investigator-kort og tag matchende figur",
    "app.title": "Start companion-appen",
    "app.lede": "Nu er I klar til at åbne appen.",
    "app.tip": "Tip: Brug en tablet fremfor telefon – kortene er lettere at læse, og gåderne er nemmere at interagere med.",
    "app.back": "← Tilbage",
    "app.next": "Vis regler-reference →",
    "app.checklist.1": "Tjek Collection Manager i appen (More → My Collection): aktiver alle produkter/udvidelser I ejer",
    "app.checklist.2": "Vælg \"New Game\", vælg scenarie",
    "app.checklist.3": "Vælg jeres investigators i appen (skal matche de fysiske kort)",
    "app.checklist.4": "Modtag Starting Possessions fra appen og fordel blandt investigators",
    "app.checklist.5": "Læs prologen højt, placer start-tiles og tokens som appen viser",
    "rules.title": "Hurtig regelreference",
    "rules.lede": "Klap sektionerne ud efter behov under spillet.",
    "rules.back": "← Tilbage",
    "rules.reset": "↻ Start forfra",
    "rules.rounds.title": "Runde-struktur",
    "rules.rounds.html": `<p>Hver runde har <strong>2 faser</strong>:</p>
          <ul>
            <li><strong>Investigator Phase</strong> – Investigators tager tur i valgfri rækkefølge (2 actions hver)</li>
            <li><strong>Mythos Phase</strong> (3 steps i rækkefølge):
              <ul>
                <li>1. Event Step – appen genererer narrative events</li>
                <li>2. Monster Step – hvert monster aktiveres (bevægelse + angreb)</li>
                <li>3. Horror Step – hver investigator resolver horror check mod monster inden for range</li>
              </ul>
            </li>
          </ul>
          <p>Tryk "End Phase" i appen efter alle investigators er færdige / efter Mythos er resolved.</p>`,
    "rules.actions.title": "Investigator-handlinger (2 pr. runde)",
    "rules.actions.html": `<p>Hver investigator har <strong>2 actions</strong> pr. tur (Investigation Phase):</p>
          <ul>
            <li><strong>Move</strong> – Flyt op til 2 spaces (space = afgrænset område, ikke rum). Kan afbrydes af anden action og genoptages.</li>
            <li><strong>Explore</strong> – Vælg et Explore-token i appen (kræver du er i samme space eller adjacent til døren med tokenet)</li>
            <li><strong>Search</strong> – Vælg et Search-token i appen (kræver du er i samme space som tokenet)</li>
            <li><strong>Interact</strong> – Brug en Person/Interact-token i dit space (via appen)</li>
            <li><strong>Trade</strong> – Giv/modtag/drop items med investigators i samme space. Koster 1 action, men de andre deltager gratis.</li>
            <li><strong>Component Action</strong> – Brug en "Action"-evne på et kort du ejer (Items, Spells, Conditions)</li>
            <li><strong>Attack</strong> – Angrib et monster i dit space (melee) eller inden for range (ranged)</li>
            <li><strong>Push</strong> – Skub et monster eller en investigator 1 space (Strength-test)</li>
            <li><strong>Set Fire</strong> – Placer Fire i dit space eller adjacent (kræver Light Source)</li>
          </ul>
          <p>Du kan bruge den samme action to gange (f.eks. Move + Move = 4 spaces).</p>`,
    "rules.dice.title": "Skill checks (terninger)",
    "rules.dice.html": `<p>Terningerne har <strong>8 sider</strong>:</p>
          <ul>
            <li><strong>Elder Sign</strong> (stjerne) = Success (3 sider)</li>
            <li><strong>Investigation result</strong> (forstørrelsesglas) = IKKE en success, men kan konverteres (2 sider)</li>
            <li><strong>Blank</strong> = ingen effekt (3 sider)</li>
          </ul>
          <p><strong>Test-flow:</strong></p>
          <ul>
            <li>1. Bestem dice pool = skill-værdi +/- modifiers</li>
            <li>2. Rul terningerne</li>
            <li>3. Brug rerolls/konverteringer (fra effects, items)</li>
            <li>4. Brug Clues: discard 1 Clue = konverter 1 Investigation result til 1 Success</li>
            <li>5. Tæl Elder Signs = dit test result. Sammenlign med test difficulty (hvis angivet)</li>
          </ul>
          <p><strong>Vigtigt:</strong> Investigation results tæller IKKE som successes medmindre de konverteres med Clues.</p>`,
    "rules.combat.title": "Combat (angreb og forsvar)",
    "rules.combat.html": `<ul>
            <li><strong>Attack Action:</strong> Vælg weapon (melee/ranged icon) eller unarmed. Vælg monster fra Monster Drawer i appen. Tryk Attack, rul terninger, indrapporter successes.</li>
            <li><strong>Melee:</strong> Monster skal være i dit space</li>
            <li><strong>Ranged:</strong> Monster kan være inden for range (op til 3 spaces, ikke gennem vægge)</li>
            <li><strong>Monster damage:</strong> Track i appen med +/- knapper. Når damage = health → monsteret dør automatisk.</li>
            <li><strong>Wounded:</strong> Damage (faceup + facedown) >= Health → du bliver Wounded (Condition), discard al facedown Damage.</li>
            <li><strong>Insane:</strong> Horror (faceup + facedown) >= Sanity → du bliver Insane (Condition), discard al facedown Horror. Du får et hemmeligt personligt mål.</li>
            <li><strong>Eliminated:</strong> Wounded + mere Damage >= Health, eller Insane + mere Horror >= Sanity → investigator elimineret, drop items, fjern figur.</li>
          </ul>`,
    "rules.evade.title": "Evade (undvigelse)",
    "rules.evade.html": `<p><strong>Hvornår:</strong> Du SKAL evade hvis du frivilligt forsøger at forlade et monsters space, eller udfører en anden action end Attack/Move i et monsters space.</p>
          <ul>
            <li><strong>Hvilket monster:</strong> Kun det med den højeste awareness (grøn værdi, øverst til højre på token). Ved lighed vælger du.</li>
            <li><strong>Hvordan:</strong> Vælg monsteret i Monster Drawer, tryk Evade. Appen bestemmer effekten.</li>
            <li><strong>Fail:</strong> Du forfeiter din action (kan ikke bevæge dig / kan ikke udføre handlingen).</li>
            <li><strong>Ufrivillig bevægelse:</strong> "move 2 spaces away" (appen tvinger) kræver IKKE evade.</li>
          </ul>`,
    "rules.puzzles.title": "Gåder (puzzles)",
    "rules.puzzles.html": `<p>Tre typer: <strong>Slide</strong> (samle billede), <strong>Lock</strong> (flyt brikker, befri goal piece), <strong>Code</strong> (gæt kombination).</p>
          <ul>
            <li><strong>Puzzle steps:</strong> Du har et antal træk = din relevante skill-værdi (vist af appen).</li>
            <li><strong>Clues:</strong> Discard 1 Clue = 1 ekstra puzzle step. Ingen begrænsning.</li>
            <li><strong>Lukke:</strong> Tryk "Close" for at afslutte. Progress gemmes – du kan prøve igen næste tur.</li>
            <li><strong>Darkness:</strong> Kan du IKKE bruge Clues til ekstra puzzle steps i spaces med Darkness.</li>
          </ul>`,
    "rules.gotchas.title": "Vigtige ting man glemmer",
    "rules.gotchas.html": `<ul>
            <li><strong>Darkness:</strong> Du kan IKKE bruge Clues til at konvertere Investigation results eller til ekstra puzzle steps i et space med Darkness. Ignoreres hvis space eller spiller har Light Source, eller space har Fire (eller adjacent space har det).</li>
            <li><strong>Barricades:</strong> Blokerer bevægelse gennem dør/Secret Passage. Fjern med action: Strength-test, 2+ successes krævet.</li>
            <li><strong>Fire:</strong> Tag 1 facedown Damage når du BEVÆGER dig ind i et space med Fire. Tag yderligere 1 facedown Damage når du udfører action (udover Move) i et Fire-space. Spreder sig i starten af hver Mythos Phase. <strong>Extinguish:</strong> Brug en action, test Agility – for hver success, fjern Fire fra dit space eller et space du bevæger dig til senere i runden.</li>
            <li><strong>Secret Passages:</strong> Spaces med Secret Passage er adjacent til hinanden. Range tælles IKKE gennem dem.</li>
            <li><strong>Spells:</strong> Double-sided. Du kan IKKE kigge på bagsiden medmindre en effekt flipper kortet. Flip = resolve bagsidens effekt (ofte negativt) og modtag en ny kopi.</li>
            <li><strong>Horror Check (Mythos):</strong> Resolve mod det monster inden for range med den HØJESTE horror rating (blå, nederst til højre på token-forsiden).</li>
            <li><strong>Health/Sanity er faste værdier</strong> – tæl dine facedown Damage/Horror-kort for at se hvor tæt du er.</li>
            <li><strong>Range:</strong> Op til 3 spaces. Tælles IKKE gennem vægge eller lukkede døre, men KAN tælles gennem impassable borders.</li>
            <li><strong>Wounded:</strong> Når total Damage (faceup + facedown) >= Health → du bliver Wounded (Condition), al facedown Damage discards. Næste gang det sker igen → elimineret.</li>
            <li><strong>Insane:</strong> Når total Horror (faceup + facedown) >= Sanity → du bliver Insane (Condition), al facedown Horror discards. Du får et hemmeligt personligt mål (bagsiden af kortet). Næste gang det sker igen → elimineret.</li>
            <li><strong>Save and Quit:</strong> Via in-game menu. Notér positions for figurer og possessions (appen husker board/tokens).</li>
          </ul>`,
  },
  en: {
    "meta.title": "Setup Wizard – Mansions of Madness",
    "meta.description": "Setup guide and rules reference for Mansions of Madness 2E.",
    hubBack: "← MoMTools",
    footer: "Fan tool · Not affiliated with Fantasy Flight Games",
    tagline: "From the box to the first round – without flipping through the rulebook.",
    "welcome.title": "Welcome",
    "welcome.lede": "This guide helps you with physical setup, the companion app, and refreshes the most important rules during play.",
    "welcome.start": "Start setup →",
    "players.title": "Number of players",
    "players.lede": "How many are at the table tonight?",
    "players.back": "← Back",
    "players.next": "Continue →",
    "players.info.1": "Solo: You control 2 investigators. Choose 2 investigators and take starting possessions for both.",
    "players.info.2": "Standard 2-player: Each player chooses 1 investigator. Good balance between action economy and horror.",
    "players.info.3": "3 players: Choose 1 investigator each. You have good skill coverage.",
    "players.info.4": "4 players: Choose 1 investigator each. Aim for variety in stats (Strength, Lore, Influence).",
    "players.info.5": "5 players: Maximum capacity. Scenarios become easier with more actions, but the Mythos phase hits harder.",
    "setup.title": "Physical setup",
    "setup.lede": "Click each item when it's done.",
    "setup.back": "← Back",
    "setup.next": "Continue →",
    "setup.checklist.1": "Find all map tiles and sort them by number",
    "setup.checklist.2": "Shuffle the Damage and Horror decks separately and place them face down in the center",
    "setup.checklist.3": "Sort Common Items, Unique Items, Spells, and Conditions alphabetically face up (do NOT shuffle them)",
    "setup.checklist.4": "Place all monster figures (with tokens in the base) within reach",
    "setup.checklist.5": "Gather all other tokens into pools: Clue, Fire, Darkness, Barricade, Wall, Secret Passage, Explore/Search/Interact, Person, Sight",
    "setup.checklist.6": "Find the dice (custom d8 with 8 sides: 3 Elder Sign, 2 Investigation, 3 Blank)",
    "setup.checklist.7": "Each player: Choose investigator cards and take matching figures",
    "app.title": "Launch the companion app",
    "app.lede": "You're ready to open the app.",
    "app.tip": "Tip: Use a tablet rather than a phone – cards are easier to read and puzzles are easier to interact with.",
    "app.back": "← Back",
    "app.next": "Show rules reference →",
    "app.checklist.1": "Check Collection Manager in the app (More → My Collection): enable all products/expansions you own",
    "app.checklist.2": "Select \"New Game\", choose a scenario",
    "app.checklist.3": "Choose your investigators in the app (must match the physical cards)",
    "app.checklist.4": "Receive Starting Possessions from the app and distribute them among investigators",
    "app.checklist.5": "Read the prologue aloud, place starting tiles and tokens as the app shows",
    "rules.title": "Quick rules reference",
    "rules.lede": "Expand sections as needed during play.",
    "rules.back": "← Back",
    "rules.reset": "↻ Start over",
    "rules.rounds.title": "Round structure",
    "rules.rounds.html": `<p>Each round has <strong>2 phases</strong>:</p>
          <ul>
            <li><strong>Investigator Phase</strong> – Investigators take turns in any order (2 actions each)</li>
            <li><strong>Mythos Phase</strong> (3 steps in order):
              <ul>
                <li>1. Event Step – the app generates narrative events</li>
                <li>2. Monster Step – each monster activates (movement + attack)</li>
                <li>3. Horror Step – each investigator resolves a horror check against a monster within range</li>
              </ul>
            </li>
          </ul>
          <p>Press "End Phase" in the app after all investigators are done / after Mythos is resolved.</p>`,
    "rules.actions.title": "Investigator actions (2 per round)",
    "rules.actions.html": `<p>Each investigator has <strong>2 actions</strong> per turn (Investigation Phase):</p>
          <ul>
            <li><strong>Move</strong> – Move up to 2 spaces (a space is a defined area, not a room). Can be interrupted by another action and resumed.</li>
            <li><strong>Explore</strong> – Select an Explore token in the app (requires you to be in the same space or adjacent to the door with the token)</li>
            <li><strong>Search</strong> – Select a Search token in the app (requires you to be in the same space as the token)</li>
            <li><strong>Interact</strong> – Use a Person/Interact token in your space (via the app)</li>
            <li><strong>Trade</strong> – Give/receive/drop items with investigators in the same space. Costs 1 action, but others participate for free.</li>
            <li><strong>Component Action</strong> – Use an "Action" ability on a card you own (Items, Spells, Conditions)</li>
            <li><strong>Attack</strong> – Attack a monster in your space (melee) or within range (ranged)</li>
            <li><strong>Push</strong> – Push a monster or investigator 1 space (Strength test)</li>
            <li><strong>Set Fire</strong> – Place Fire in your space or an adjacent space (requires a Light Source)</li>
          </ul>
          <p>You can use the same action twice (e.g. Move + Move = 4 spaces).</p>`,
    "rules.dice.title": "Skill checks (dice)",
    "rules.dice.html": `<p>The dice have <strong>8 sides</strong>:</p>
          <ul>
            <li><strong>Elder Sign</strong> (star) = Success (3 sides)</li>
            <li><strong>Investigation result</strong> (magnifying glass) = NOT a success, but can be converted (2 sides)</li>
            <li><strong>Blank</strong> = no effect (3 sides)</li>
          </ul>
          <p><strong>Test flow:</strong></p>
          <ul>
            <li>1. Determine dice pool = skill value +/- modifiers</li>
            <li>2. Roll the dice</li>
            <li>3. Use rerolls/conversions (from effects, items)</li>
            <li>4. Spend Clues: discard 1 Clue = convert 1 Investigation result to 1 Success</li>
            <li>5. Count Elder Signs = your test result. Compare with test difficulty (if specified)</li>
          </ul>
          <p><strong>Important:</strong> Investigation results do NOT count as successes unless converted with Clues.</p>`,
    "rules.combat.title": "Combat (attack and defense)",
    "rules.combat.html": `<ul>
            <li><strong>Attack Action:</strong> Choose a weapon (melee/ranged icon) or unarmed. Select a monster from the Monster Drawer in the app. Press Attack, roll dice, report successes.</li>
            <li><strong>Melee:</strong> The monster must be in your space</li>
            <li><strong>Ranged:</strong> The monster can be within range (up to 3 spaces, not through walls)</li>
            <li><strong>Monster damage:</strong> Track in the app with +/- buttons. When damage = health → the monster dies automatically.</li>
            <li><strong>Wounded:</strong> Damage (face up + face down) >= Health → you become Wounded (Condition), discard all face-down Damage.</li>
            <li><strong>Insane:</strong> Horror (face up + face down) >= Sanity → you become Insane (Condition), discard all face-down Horror. You receive a secret personal goal.</li>
            <li><strong>Eliminated:</strong> Wounded + more Damage >= Health, or Insane + more Horror >= Sanity → investigator eliminated, drop items, remove figure.</li>
          </ul>`,
    "rules.evade.title": "Evade",
    "rules.evade.html": `<p><strong>When:</strong> You MUST evade if you voluntarily try to leave a monster's space, or perform an action other than Attack/Move in a monster's space.</p>
          <ul>
            <li><strong>Which monster:</strong> Only the one with the highest awareness (green value, top right on the token). In a tie, you choose.</li>
            <li><strong>How:</strong> Select the monster in the Monster Drawer, press Evade. The app determines the effect.</li>
            <li><strong>Fail:</strong> You forfeit your action (cannot move / cannot perform the action).</li>
            <li><strong>Involuntary movement:</strong> "move 2 spaces away" (forced by the app) does NOT require evade.</li>
          </ul>`,
    "rules.puzzles.title": "Puzzles",
    "rules.puzzles.html": `<p>Three types: <strong>Slide</strong> (assemble the image), <strong>Lock</strong> (move pieces, free the goal piece), <strong>Code</strong> (guess the combination).</p>
          <ul>
            <li><strong>Puzzle steps:</strong> You have a number of moves = your relevant skill value (shown by the app).</li>
            <li><strong>Clues:</strong> Discard 1 Clue = 1 extra puzzle step. No limit.</li>
            <li><strong>Close:</strong> Press "Close" to finish. Progress is saved – you can try again next turn.</li>
            <li><strong>Darkness:</strong> You CANNOT use Clues for extra puzzle steps in spaces with Darkness.</li>
          </ul>`,
    "rules.gotchas.title": "Important things people forget",
    "rules.gotchas.html": `<ul>
            <li><strong>Darkness:</strong> You CANNOT use Clues to convert Investigation results or for extra puzzle steps in a space with Darkness. Ignored if the space or player has a Light Source, or the space has Fire (or an adjacent space does).</li>
            <li><strong>Barricades:</strong> Block movement through a door/Secret Passage. Remove with an action: Strength test, 2+ successes required.</li>
            <li><strong>Fire:</strong> Take 1 face-down Damage when you MOVE into a space with Fire. Take an additional 1 face-down Damage when you perform an action (other than Move) in a Fire space. Spreads at the start of each Mythos Phase. <strong>Extinguish:</strong> Use an action, test Agility – for each success, remove Fire from your space or a space you move to later in the round.</li>
            <li><strong>Secret Passages:</strong> Spaces with a Secret Passage are adjacent to each other. Range does NOT count through them.</li>
            <li><strong>Spells:</strong> Double-sided. You CANNOT look at the back unless an effect flips the card. Flip = resolve the back effect (often negative) and receive a new copy.</li>
            <li><strong>Horror Check (Mythos):</strong> Resolve against the monster within range with the HIGHEST horror rating (blue, bottom right on the front of the token).</li>
            <li><strong>Health/Sanity are fixed values</strong> – count your face-down Damage/Horror cards to see how close you are.</li>
            <li><strong>Range:</strong> Up to 3 spaces. Does NOT count through walls or closed doors, but CAN count through impassable borders.</li>
            <li><strong>Wounded:</strong> When total Damage (face up + face down) >= Health → you become Wounded (Condition), all face-down Damage is discarded. The next time it happens again → eliminated.</li>
            <li><strong>Insane:</strong> When total Horror (face up + face down) >= Sanity → you become Insane (Condition), all face-down Horror is discarded. You receive a secret personal goal (back of the card). The next time it happens again → eliminated.</li>
            <li><strong>Save and Quit:</strong> Via the in-game menu. Note positions of figures and possessions (the app remembers the board/tokens).</li>
          </ul>`,
  },
};
