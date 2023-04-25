// const http = require('http');
// const PORT = 3000;



// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });


const PORT = process.env.PORT || 8000

const express = require('express')
// const axios = require('axios')
// const cheerio = require('cheerio')

const app = express()  // call the library as app


const words = ['one', 'two', 'three']

const affirmations = [
  "Everyday you are a shining star",
  "You are as natural as the sunset, where the clouds are pink in a blue sky",
  "You are special, you have something that no one else has",
  "you are rockin' it",
  "some people don't know how awesome you are",
  "take a few minutes, breathe, say something positive about yourself",
  "only you have the PhD in the study of you",
  "the binary was never meant to hold you",
  "your 3 lucky colors are #51C5FA, #FB8190, #FCECFF",
  "fun fact: Transgender people are awesome, even when you don't feel like it",
  "your difference is the special sauce in the recipe of life",
  "don't let them win, you are strong to make it",
  "everyone is on their journey, it's okay to be unsure",
  "how you feel is legit",
  "you are made with 100% astronomy, you are a star",
  "not everyday will feel like this",
  "your lacose-free nut milk milkshake brings all the non-binary people to the yard",
  "truth hurts that you are so wonderful and others have issues with that",
  "gender euphoria, that feels good as hell",
  "the gender affirming people are so lovely",
  "make a chatbot to say positive gender affirmations outloud to you",
  "some of us are struggling, some of us are soaring, there is no binary",
  "living your truth takes courage, safety, strength, and determination",
  "in Sci-Fi fantasy we exist, here on Earth we do too",
  "it's not like everyday a cisgender person questions their gender in a meaningful way",
  "your gender today can change, it's not written in stone, and if it were, you can break it",
  "computer code is binary, but we run on special software",
  "grey skies today, sunshine tomorrow",
  "being Trans is special, you get to redo parts of life",
  "your trauma does not define you, be kind to yourself",
  "being Transgender is the calculus of social construct of gender, the study of change",
  "your future self will want to see you shining",
  "not all of society sees you, but fellow Trans people do",
  "today [do that gender thing], or don't, do whatever you want!",
  "in the shower, shower yourself with soap and compliments",
  "live in the infinity of love and self acceptance",
  "CONGRATS! You just won a high five!",
  "you were entered into a contest, you won!",
  "Jadzia Dax considers you a friend and lovely person",
  "try to not let the haters live rent free in your head, that's valued property",
  "similar to your computer, you can delete the pre-installed gender software",
  "some traditions die, some become lifesavers",
  "REMINDER: breathe, say something positive about yourself",
  "Transgender people found the gender cheatcodes",
  "you are valid, your gender is valid, your pronouns are valid",
  "did you know that you don't have to a role model for the Trans community",
  "REMINDER: drink some water, stay hydrated",
  "each day in your truth you get closer to knowing yourself",
  "you can write it down, then make editorial changes, make yourself feel better",
  "life is full of prizes, some of us don't know it yet",
  "Tegan & Sara said you're walking with a ghost",
  "you got the body humps in all the right places",
  "you are the very definition of Biology, diversity",
  " Play 'I Will Survive' by Gloria Gaynor, say it to yourself",
  "What a Wonderful World, especially with you in it",
  "any day you leave your home as yourself, you are brave, bold and badass",
  "ain't no gender euphoria is enough",
  " Play 'Beautiful' by Christina Aguilera",
  " Play 'I m Still Standing' by Elton John",
  "let the world hear your roar",
  "you can burst with pride and joy, be a starburst",
  "before 1492 Transgender people existed like me and you",
  "you have the power, you got the power, YOU GOT THE POWER",
  "Transgender people are Marvelous humanoids with super powers",
  "between the ears is something special, handle with care",
  "SHIPMENT UPDATE: your box of self love has been delivered",
  "your Transgender realness token is A76L8H1WA6X",
  "you have admin priviledges on your gender ",
  "the traffic light is green, you can keep going, you are doing great",
  "Tip: use BASH commands for your gender, touch pronouns , rm *.patriarchy ",
  "take this promo code UMATTER and get yourself a treat ",
  "REMINDER: self.care is an act of love ",
  "REMINDER: self.care is important ",
  "being in Stealth_Mode is okay, be safe ",
  "wear socks & underwear that is gender affirming, small wins matter ",
  "gender is software, it changes and there is no one way to run software",
  "if Farrokh Bulsara can change his name (Freddie Mercury), you can too.",
  "the real owners of Bath & Body Works are Trans people",
  "your pronouns can be returned if they don't fit you",
  "give yourself a compliment, you earned it",
  "Transgender care is best served with love and acceptance, especially within yourself",
  "loving yourself can take time, can be a struggle, but keep trying",
  "Trans people exist in all parts of society, you exist, we exist  ",
  "caring for yourself is not only for holidays",
  "try to have the confidence of a white cisgender heterosexual man ",
  "hormones, we all have them, some of us want more of a specifc type",
  "your plane of existence can be in higher dimensions, use your Trans cheatcodes ",
  "some people live by 1 book, Trans people have many books",
  "your daily gender password is: noBinary4me",
  "your daily gender password is: GenderSpectrumPass",
  "your daily gender password is: careBear_countdown",
  "your daily gender password is: transRage",
  "your daily gender password is: transHistory",
  "your daily gender password is: transThemstory",
  "your daily gender password is: youRvalid",
  "{The Matrix}  you now know karate and taekwondo  ",
  "the say you are the Oracle or you worked there ",
  "expect yourself to find joy in your gender journey",
  "we all have gender neutral bathrooms in our homes ",
  "find something today that makes you laugh! ",
  "gender is like a tea bag, you can steep in a gender, let it get stronger",
  "on your calendar it says you have 5 minutes to say something nice about yourself",
  "your gender is 100% naturally grown, ethically sourced",
  "YOU WANT THE TRUTH? you are wonderful ",
  "gender is a daily iteration",
  "name one part of you that you like ",
  "your energy is not an endless supply, you need to rest",
  "for G in gender_spectrum : print( gender_spectrum[ G ] ) ",
  "the rainbow lives inside you, let the world see all the colors ",
  "the Trans community Blockchain appreciates you ",
  "you can survive, but also thrive ",
  "hit the like and subscribe button for your _self_ positivity",
  "this is a digital hug :: hug ::, it is for you ",
  "REMINDER: breathe, drink some water, say the word LOVE ",
  "loving yourself despite of all the negativity is an act of defiance",
  "the pronouns you use are valid ",
  "only mushrooms grow in the dark, find the light, even some of it ",
  "Apple says 'Think Different' but Orange you happy you are?",
  "there is no one true way in being Trans ",
  "you are doing the best you can, and that is good ",
  "you can cry, you can scream, you can even enjoy some ice cream",
  "fun fact: gender has n! permutations",
  "Trans Rage Against the cishet normcore Machine want you to join the band ",
  "your daily gender cheatcode: up up down down left right left right B A ",
  "your daily gender cheatcode: IDDQD {Doom invincibility}",
  "your daily gender cheatcode: up right right down up kick kick jump ",
  "your daily gender cheatcode: back back jump punch punch B ",
  "your daily gender cheatcode: fwd fwd up up A B ",
  "your daily gender cheatcode: back fwd down up jump jump ",
  "your daily gender cheatcode: jump fwd fwd jump B jump ",
  "your daily gender cheatcode: B A fwd fwd A jump",
  "WIFI passcode: whiteBluePink",
  "WIFI passcode: construct2destruct",
  "WIFI passcode: BLACKTRANSLIVESMATTER",
  "WIFI passcode: hackURgender",
  "WIFI passcode: lessGenderRoles_morePizzaRoles ",
  "WIFI passcode: hackTheBinary",
  "WIFI passcode: TransIsBeautiful",
  "gender is like water, it is fluid, yet powerful",



  "the binary is for computers",
	"binaries are old-fashioned, you're open source, 100% \"libre\"",
  "# rm -rf gender_roles gender_stereotypes gender_assigned_at_birth && deluser patriarchy sudoers && chown me gender_identity",
  "Operation completed successfully: you now have administration rights for your own gender identity.",
  "Transphobes are draining your battery faster. Switch to your trans friends for up to 75% more gender euphoria.",
	"Your computer is running low on storage space. We can create some space by deleting Cisnormativity.",
	"transphobia.exe: This application failed to start because hate.dll was not found.",
	"If someone asks about your gender or transition, you can just say: \"I got an update\"!",
  



  "Robot is Czech for 'slave.' You are human, not a robot. You have the right to have boundaries.",
  "They say trans folks are obsessed with sex. Is there a culture that isn't?",
  "You're not obsessed with gender. You are on a journey of self-discovery.",
  "It is okay to try and understand yourself.",
  "It is okay to feel good about being trans.",
  "Gender Euphoria is a thing."
  
  
  
  
]

const NASA_planets = [
  "Planet Cyb B b (16 Cyg B) is a planet you can rule over",
  "Planet 17 Sco b has voted President",
  "Planet 4 UMa b is a planet that needs U ",
  "You just won the Exoplanet lottery, you now own 55 Cnc b, c, d, e, and f",
  "Some planets are a throuple like 61 Vir b, 61 Vir c and 61 Vir d",
  "select a Exoplanet: AU Mic b or AU Mic c",
  "planet tau Gem b is for Geminis",
  "when you see XO, think of the planets XO-1 b, XO-2, XO-3 ... XO-7",
  "Planet UZ For c and b are safe for vacation",
  "have tea at the trendy new planet, Teegarden's Star c (star b isn't as good)",
  "if you like Trap music, then we suggest TRAPPIST-1 h (g,f,e,d,c,b are back albums)",
  "every Trans person gets to have a TOI planet, options include TOI-969 c or b",
  "you won the sweepstakes! You won the planets SWEEPS-4 b and SWEEPS-11 b !!",
  "those gender affirming clothes come from planets Ross 508 b, 458 c and 128 b",
  "your DNA comes from the planet ROXs 42 B b, 'cuz you rocks baby! ",
  "if you're a Virgo from NY, NY Vir c or b is place to check out",
  "my eye makeup comes from the planet MASCARA-4 b, maturally sourced ",
  "planet LHS 3844 b, is Lovely Health Services 3844 "
]

const Transgender_People = [
  "Singer Jake Zyrus (he/him) invites you to lunch, what will you ask him?",
  "Entertainer Marie-Pier Ysser (she/her) invites you to a show, what will you ask her?",
  "Cyclist & Journalist Philippa York (she/her) wants write article on you, what will she write about?",
  "Electronic Musician Sophie Xeon (no prounouns), sends you a demo song, what will your review be?",
  "YouTuber Natalie Wynn (ContraPoints) (she/her) wants your advice on something, what advice do you have?",
  "Video Ganer & Website creator Narcissa Wright is going to make a website for you, you won a prize!",
  "Actor & performer Holly Woodlawn (she/her) is going to star in your Sci-Fi story",
  "Soldier Joanne Wingate (she/her) agrees, she thinks you are badass",
  "Writer Jia Qing Wilson-Yang (she/her) is thinking of adding character based of you, what character are you?",
  "Computer Scientist Sophie Wilson (she/her) checked the source code, you are valid",
  "Activist & organizer @ Transgender Law Center Raquel Willis (she/her) wants you to volunteer, make a speech",
  "Drag Queen Kornbread Jeté (Demoria E. Williams) (she/her) wants to sit down and spill the tea with you",
  "Barbara Ann Wilcox, (she/her) one of the 1st Trans persons to legally change their name has a lecture and you are invited to go",
  "Lawyer/ Writer/ Activist Stephen Whittle (he/him) has an education workshop, you got tickets!",
  "YouTuber Blaire White (she/her) mentioned you by name! ",
  "Climatologist & Activist Penny Whetton (she/her) has research showing you are hot",
  "Musician & Artist Janine Wegman (she/her) has a song and art piece that is about you",
  "Civil Rights Activist Brianna Westbrook (she/her) says ROCK THE VOTE, you gotta vote for yourself",
  "Actor Lachlan Watson (they/them) has an improve scene with you ",
  "Actress Annie Wallace (she/her) says you can be at times melodramatic",
  "Film TV Director Lily Wachowski (she/her) has a new special role for you to play in the next Matrix film",
  "Film TV Director Lana Wachowski (she/her) has a new special role for you to play in the next Matrix film",
  "Brazilian mixed martial arts fighter Anne Viriato (she/her) said she will beat up your enemies",
  "TV anchor Rose Venkatesan (she/her) wants to do an article on why you are so wonderful",
  "Actress & Singer Daniela Vega (she/her) wants to write a opera love ballad about you",
  "Professional Cyclist Natalie van Gogh (she/her) wants to ride bikes with you this weekend",
  "Eastern Airlines pilot who got fired Karen Ulane (she/her) is going to have a lecture, you are not busy that night",
  "TV Reporter/ Scientist Zoey Tur (she/her) has a new article on how wonderful you are",
  "Professional Wrestler Gabbi Tuft (she/her) will body slam those who oppose you !",
  "Software Developer Justine Tunney (she/her) says your pre-installed gender was wrong, you now have the one you need",
  "Writer & Actress Gabrielle Trembley (she/her) is going to play a role based on you, how awesome",
  "Artist & Politician Manuela Trasobares (she/her) has a new art piece inspired by you",
  "Actress Josie Totah (she/her) has a scene based on your life",
  "Politician & Activist Brianna Titone (she/her) says you gotta fight for your right",
  "Musician Billy Tipton (he/him) wrote a song about the positivity you share with the world",
  "Activist Efrat Tilma (she/her) says your voice matters in the fight",
  "Video Game Developer Maddy Thorston (she/her) says you are a special character in the game of life",
  "Writer Jeanne Thornton (she/her) wants to do a story in Rocksalt Magazine on you ",
  "YouTuber (Philosophy Tube) Abigail Thorn (she/her) mentioned how important you are to the Trans community",
  "TV Presenter Ramon Te Wake (she/her) thinks you are special, special edition ",
  "Voice Actress Maddie Taylor (she/her) is asking how you say 'i look stunning' ?",
  "Scientist Robyn Leigh Tanguay (she/her) reviewed the evidence, it is indeed true you are valid in your gender",
  "Free Software Programmer Audrey Tang (she/her) says you have special code in your self love software update ",
  "Model & Beauty Pageant contestant Jenna Talackova (she/her) wnats to do some photoshoots with you",
  "Singer & Model Cindy Thái Tài (she/her) has a song about your fierceness in life",
  "Fashion Model Lea T (she/her) wants to do some Instagram photos with you",
  "Singer / Activist Titica (she/her) says you shine bright",
  "Author & Activist Lou Sullivan (he/him) has a some advice, try to stay positive",
  "Model & Actress Stav Strashko (she/her) is interested in some Instagram posts with you ",
  "Cartoonist / Animation producer of She-Ra (2020) ND Stevenson (he/him) wants to animate you as a character",
  "Speaker & Activist Abby Stein (she/her) has invited you to a Jewish deli for lunch",
  "Las Vegas Showgirl Jahna Steele (she/her) is wondering if you want to to go to a show",
  "Politician Susan Stanton (she/her) understands wins and setbacks, she gets it",
  "Musician Rae Spoon (they/them) has a song for you",
  "Drag Queen Sonique (she/her) invited you to her show",
  "First Transgender nominee to US Senate Misty Snow (she/her) is fighting for you ",
  "Activist & Founder of TDOR Gwendolyn Ann Smith (she/her) wants you to keep going ",
  "Actor Brian Michael Smith (he/him) seen in The L Word , is interested in grabbing coffee with you",
  "First Transgender person elected to the German parliament Nyke Slawik loves your climate friendly actions",
  "YouTuber (Cavetown) Robin D. Skinner (he/they) have a song about how great you are ",
  "Singer Noah Skaalum (he/him) sings about the struggles and triumphs you face ",
  "Rock Musician Lucas Silveira (he/him) the 1st openly Transgender man to have a major record deal, knows the struggle  ",
  "Assistant Professor in Creative Writing at U of Calgary Vivek Shraya (she/her) wants you to express ypurself",
  "R&B Singer Jackie Shane (she/her) wants you to move your body in a positive way and direction",
  "PhD Julia Serano (she/her) of 'Whipping Girl' book fame & 'transmisogny' has a SLAM poetry event, you booked your spot "
 
]






// console.log(affirmations.length)

function between(min, max) {
  return Math.floor( Math.random() * (max - min + 1) + min) 
}


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// listening response  "/" is base
app.get("/", (req, res) => {
  res.json("Welcome to TransRest API")
  
})

app.get('/nasa', (req, res) => {
  // res.json(words)
  res.json(NASA_planets[between(1, NASA_planets.length)])
})

app.get('/affirmation', (req, res) => {
  res.json(affirmations[between(1, affirmations.length)])
})

app.get('/people', (req, res) => {
  res.json(Transgender_People[between(1, Transgender_People.length)])
})