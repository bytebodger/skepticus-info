export type FailedProphecyFulfillment = {
    verse: string;
    text: string;
};

export type FailedProphecy = {
    verse: string;
    text: string;
    description: string;
    'fulfillment verse(s)': FailedProphecyFulfillment[];
    notes: string[];
};

// Canonical Protestant Bible order used for non-alphabetical sorting.
const canonicalBooks = [
    'Genesis',
    'Exodus',
    'Leviticus',
    'Numbers',
    'Deuteronomy',
    'Joshua',
    'Judges',
    'Ruth',
    '1 Samuel',
    '2 Samuel',
    '1 Kings',
    '2 Kings',
    '1 Chronicles',
    '2 Chronicles',
    'Ezra',
    'Nehemiah',
    'Esther',
    'Job',
    'Psalms',
    'Proverbs',
    'Ecclesiastes',
    'Song of Solomon',
    'Isaiah',
    'Jeremiah',
    'Lamentations',
    'Ezekiel',
    'Daniel',
    'Hosea',
    'Joel',
    'Amos',
    'Obadiah',
    'Jonah',
    'Micah',
    'Nahum',
    'Habakkuk',
    'Zephaniah',
    'Haggai',
    'Zechariah',
    'Malachi',
    'Matthew',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Romans',
    '1 Corinthians',
    '2 Corinthians',
    'Galatians',
    'Ephesians',
    'Philippians',
    'Colossians',
    '1 Thessalonians',
    '2 Thessalonians',
    '1 Timothy',
    '2 Timothy',
    'Titus',
    'Philemon',
    'Hebrews',
    'James',
    '1 Peter',
    '2 Peter',
    '1 John',
    '2 John',
    '3 John',
    'Jude',
    'Revelation',
];

const canonicalBookLookup = new Map(
    canonicalBooks.map((book, index) => [book.toLowerCase(), index]),
);

/**
 * Failed prophecy data source.
 * Add/edit entries here and the page list updates automatically.
 */
export const failedProphecies: FailedProphecy[] = [
     {
         verse: 'Genesis 3:15',
         text: 'I will put enmity between you and the woman and between your offspring and hers; he will strike your head, and you will strike his heel.',
         description: 'Seed of a woman (virgin birth)',
         'fulfillment verse(s)': [
             {
                 verse: 'Galatians 4:4-5',
                 text: 'But when the fullness of time had come, God sent his Son, born of a woman, born under the law, in order to redeem those who were under the law, so that we might receive adoption as children.',
             },
             {
                 verse: 'Matthew 1:18',
                 text: 'Now the birth of Jesus the Messiah took place in this way. When his mother Mary had been engaged to Joseph, but before they lived together, she was found to be pregnant from the Holy Spirit.',
             },
         ],
         notes: [
             'This is not a forecast about Jesus in any way. It\'s an etiology about why we hate snakes.',
             'This is spoken directly by god. God cannot make a prophecy. To claim otherwise, is a category error.',
             'This didn\'t happen from the perspective that Jesus in any way fulfills this. The only thing that happened is that we don\'t like snakes.',
         ],
     },
     {
         verse: 'Genesis 3:15',
         text: 'I will put enmity between you and the woman and between your offspring and hers; he will strike your head, and you will strike his heel.',
         description: 'He will bruise Satan\'s head',
         'fulfillment verse(s)': [
             {
                 verse: 'Hebrews 2:14',
                 text: 'Since, therefore, the children share flesh and blood, he himself likewise shared the same things, so that through death he might destroy the one who has the power of death, that is, the devil,',
             },
             {
                 verse: '1 John 3:8',
                 text: 'Everyone who commits sin is of the devil, for the devil has been sinning from the beginning. The Son of God was revealed for this purpose: to destroy the works of the devil.',
             },
         ],
         notes: [
             'This is not a forecast about Jesus in any way. It\'s an etiology about why we hate snakes.',
             'This is spoken directly by god. God cannot make a prophecy. To claim otherwise, is a category error.',
             'The Christian delusion here is that somehow this is a "prophecy" fulfilled by Jesus because, in Genesis 3:15, it states that the humans will strike the heads of serpents and serpents will strike the heel of humans. And then... somehow, we are to completely jump the shark and make the massive (il)logical leap that this someone is a prophecy of Jesus defeating evil and/or Satan.',
         ],
     },
     {
         verse: 'Genesis 5:24',
         text: 'Enoch walked with God; then he was no more, because God took him.',
         description: 'The bodily ascension to heaven illustrated',
         'fulfillment verse(s)': [
             {
                 verse: 'Mark 16:19',
                 text: 'So then the Lord Jesus, after he had spoken to them, was taken up into heaven and sat down at the right hand of God.',
             },
         ],
         notes: [
             'Simply illustrating that someone in a past book of the bible ascended to heaven is not in any way a prophecy.',
             'Even if we want to grant this, the plain fact is that the original verse never clearly states that Enoch ascended to heaven.',
             'This is simply not a prophecy.',
             'The supposed fulfillment verse given (Mark 16:19) was not even part of the original gospel of Mark. It was added many years later.',
         ],
     },
     {
         verse: 'Genesis 9:26-27',
         text: 'He also said, "Blessed by the LORD my God be Shem, and let Canaan be his slave. May God make space for Japheth, and let him live in the tents of Shem, and let Canaan be his slave."',
         description: 'The God of Shem will be the Son of Shem',
         'fulfillment verse(s)': [
             {
                 verse: 'Luke 3:36',
                 text: 'son of Cainan, son of Arphaxad, son of Shem, son of Noah, son of Lamech,',
             },
         ],
         notes: [
             'How blind and ignorant and audacious do you have to be to assert that a verse about Noah cursing Shem is somehow a fulfilled "prophecy" of Jesus?',
             'Jesus is literally never mentioned in the original verse. He\'s never even vaguely alluded to.',
             'Under this twisted "logic", ANYONE who is descended from Shem can some be claimed to have "fulfilled" this laughable non-prophecy.',
             'It\'s illogical to claim that Jesus is "fully god" while also claiming that he is descended from ANY human. You can\'t be fully god and have human lineage.',
         ],
     },
     {
         verse: 'Genesis 12:3',
         text: 'I will bless those who bless you, and the one who curses you I will curse, and in you all the families of the earth shall be blessed.',
         description: 'Seed of Abraham will bless all nations',
         'fulfillment verse(s)': [
             {
                 verse: 'Galatians 3:8',
                 text: 'And the scripture, foreseeing that God would reckon as righteous the gentiles by faith, declared the gospel beforehand to Abraham, saying, "All the gentiles shall be blessed in you."',
             },
             {
                 verse: 'Acts 3:25-26',
                 text: 'You are the descendants of the prophets and of the covenant that God gave to your ancestors, saying to Abraham, \'And in your descendants all the families of the earth shall be blessed.\' When God raised up his servant, he sent him first to you, to bless you by turning each of you from your wicked ways.',
             },
         ],
         notes: [
             'There is no logical way to assert that the "blessing" that will come to all the families of the earth was, and categorically must be, Jesus. Under this ridiculously vague thinking, the "blessing" could have been the invention of the internet, or the vaccine for polio, or literally any other positive things that has helped everyone around the world.',
             'It\'s culturally ethnocentric and downright arrogant to claim that all of the people of the world who lived after Abraham but BEFORE the life-and-times of Jesus were somehow "blessed" by Jesus.',
             'It\'s culturally ethnocentric and downright arrogant to claim that all of the people of the world who lived after Jesus - but NEVER HEARD OF HIM - were somehow "blessed" by Jesus.',
             'This is spoken directly by god. God cannot make a prophecy. To claim otherwise, is a category error.',
             'Trying to craft a fulfilled prophecy out of something as vague and mundane as a "blessing" is laughable.',
         ],
     },
     {
         verse: 'Genesis 12:7',
         text: 'Then the LORD appeared to Abram and said, "To your offspring I will give this land." So he built there an altar to the LORD, who had appeared to him.',
         description: 'The Promise made to Abraham\'s Seed',
         'fulfillment verse(s)': [
             {
                 verse: 'Galatians 3:16',
                 text: 'Now the promises were made to Abraham and to his offspring; it does not say, "And to offsprings," as of many, but it says, "And to your offspring," that is, to one person, who is Christ.',
             },
         ],
         notes: [
             'The "this land" that Yahweh is talking about never, in the entire mythological "history" of the Hebrew bible, was completely and totally "given to" or controlled by the Israelites.',
             'Since the time of Jesus, this land was rarely controlled by Israelites, and even when it was, it wasn\'t the entirety of the land that Yahweh is referring to here.',
             'The assertion made in Galatians that "offspring" can only refer to one person and that person must be Jesus is demonstrably ignorant.',
             'Even if we want to grant that "offspring" can only refer to a single person and even if we want to grant that this person is Jesus, it STILL fails miserably. Jesus never had any land. None at all. He was not a king. We have no record of him ever being a land owner. So this supposed prophecy would still fail.',
             'This is spoken directly by god. God cannot make a prophecy. To claim otherwise, is a category error.',
         ],
     },
     {
         verse: 'Genesis 14:18',
         text: 'And King Melchizedek of Salem brought out bread and wine; he was priest of God Most High.',
         description: 'A priest after the order of Melchizedek',
         'fulfillment verse(s)': [
             {
                 verse: 'Hebrews 6:20',
                 text: 'where Jesus, a forerunner on our behalf, has entered, having become a high priest forever according to the order of Melchizedek.',
             },
         ],
         notes: [
             'This is in no way a prophecy. Of ANYTHING. It\'s a brief past-tense narrative about King Melchizedek bringing out some bread and wine. That. Is. It.',
             'This is completely mundane.',
         ],
     },
     {
         verse: 'Genesis 14:18',
         text: 'And King Melchizedek of Salem brought out bread and wine; he was priest of God Most High.',
         description: 'King of Peace and Righteousness',
         'fulfillment verse(s)': [
             {
                 verse: 'Hebrews 7:2',
                 text: 'and to him Abraham apportioned "one-tenth of everything." His name, in the first place, means "king of righteousness"; next, he is also king of Salem, that is, "king of peace."',
             },
         ],
         notes: [
             'This is in no way a prophecy. Of ANYTHING. It\'s a brief past-tense narrative about King Melchizedek bringing out some bread and wine. That. Is. It.',
             'Allusion is NOT a prophecy.',
             'This is completely mundane.',
         ],
     },
     {
         verse: 'Genesis 14:18',
         text: 'And King Melchizedek of Salem brought out bread and wine; he was priest of God Most High.',
         description: 'The Last Supper foreshadowed',
         'fulfillment verse(s)': [
             {
                 verse: 'Matthew 26:26-29',
                 text: 'While they were eating, Jesus took a loaf of bread, and after blessing it he broke it, gave it to the disciples, and said, "Take, eat; this is my body." Then he took a cup, and after giving thanks he gave it to them, saying, "Drink from it, all of you, for this is my blood of the covenant, which is poured out for many for the forgiveness of sins. I tell you, I will never again drink of this fruit of the vine until that day when I drink it new with you in my Father\'s kingdom."',
             },
         ],
         notes: [
             'Someone in the earliest stages of purported Hebrew history, is recorded as having brought out some bread and some wine. And from that insanely mundane observation, we\'re then supposed to accept that the last supper was the fulfillment of a "prophecy" tied to that exact mundane observation.',
         ],
     },
     {
         verse: 'Genesis 17:19',
         text: 'God said, "No, but your wife Sarah shall bear you a son, and you shall name him Isaac. I will establish my covenant with him as an everlasting covenant for his offspring after him."',
         description: 'Seed of Isaac (Gen 21:12)',
         'fulfillment verse(s)': [
             {
                 verse: 'Romans 9:7',
                 text: 'and not all of Abraham\'s children are his descendants, but "it is through Isaac that descendants shall be named for you."',
             },
         ],
         notes: [
             'So the claim is that "not all of Abraham\'s children are his descendants" - which is laughably stupid and incorrect.',
             'This is spoken directly by god. God cannot make a prophecy. To claim otherwise, is a category error.',
             'This supposed "prophecy" merely says that Yahweh will make his covenant with Isaac. It doesn\'t even mention WHAT that covenant would be - so there\'s no logical way to claim that Jesus somehow IS the fulfillment of that covenant.',
         ],
     },
     {
         verse: 'Genesis 22:8',
         text: 'Abraham said, "God himself will provide the lamb for a burnt offering, my son." And the two of them walked on together.',
         description: 'The Lamb of God promised',
         'fulfillment verse(s)': [
             {
                 verse: 'John 1:29',
                 text: 'The next day he saw Jesus coming toward him and declared, "Here is the Lamb of God who takes away the sin of the world!"',
             },
         ],
         notes: [
             'If this is any sort of "prophecy" it is merely a prophecy of what god was supposed to have done in the next couple of HOURS after Abraham spoke these words.',
             'This is also a blatant LIE on the part of Abraham.',
             'God never provided a LAMB for the burnt offering. He provided a RAM.',
             'Jesus was never a burnt offering.',
             'Jesus failed basically every qualification for what was an "acceptable" sacrifice.',
             'There is no reason whatsoever to assume or imply that this passage in any way prophesies Jesus.',
         ],
     },
     {
         verse: 'Genesis 22:18',
         text: 'and by your offspring shall all the nations of the earth gain blessing for themselves, because you have obeyed my voice.',
         description: 'As Isaac\'s seed, will bless all nations',
         'fulfillment verse(s)': [
             {
                 verse: 'Galatians 3:16',
                 text: 'Now the promises were made to Abraham and to his offspring; it does not say, "And to offsprings," as of many, but it says, "And to your offspring," that is, to one person, who is Christ.',
             },
         ],
         notes: [
             'The assertion made in Galatians that "offspring" can only refer to one person and that person must be Jesus is demonstrably ignorant.',
             'Even if we want to grant that "offspring" can only refer to a single person and even if we want to grant that this person is Jesus, it STILL fails miserably. A "blessing" can be literally ANYTHING. There is no coherent reason to assert that the "blessing" in this particular instance is Jesus.',
             'This is spoken directly by god. God cannot make a prophecy. To claim otherwise, is a category error.',
         ],
     },
     {
         verse: 'Genesis 26:2-5',
         text: 'The LORD appeared to Isaac and said, "Do not go down to Egypt; settle in the land that I shall show you. Reside in this land as an alien, and I will be with you and will bless you, for to you and to your descendants I will give all these lands, and I will fulfill the oath that I swore to your father Abraham. I will make your offspring as numerous as the stars of heaven and will give to your offspring all these lands, and all the nations of the earth shall gain blessing for themselves through your offspring, because Abraham obeyed my voice and kept my charge, my commandments, my statutes, and my laws."',
         description: 'The Seed of Isaac promised as the Redeemer',
         'fulfillment verse(s)': [
             {
                 verse: 'Hebrews 11:18',
                 text: 'of whom he had been told, "It is through Isaac that descendants shall be named for you."',
             },
         ],
         notes: [
             'The "this land" that Yahweh is talking about never, in the entire mythological "history" of the Hebrew bible, was completely and totally "given to" or controlled by the Israelites.',
             'Since the time of Jesus, this land was rarely controlled by Israelites, and even when it was, it wasn\'t the entirety of the land that Yahweh is referring to here.',
             'This is spoken directly by god. God cannot make a prophecy. To claim otherwise, is a category error.',
             'For all the literalists in the house, there are more stars in the universe than humans who have ever lived.',
             'Even if we want to grant that this descendant is Jesus (and ONLY Jesus), it STILL fails miserably. Jesus never had any land. None at all. He was not a king. We have no record of him ever being a land owner. So this supposed prophecy would still fail.',
         ],
     },
     {
         verse: 'Genesis 28:12',
         text: 'And he dreamed that there was a stairway set up on the earth, the top of it reaching to heaven, and the angels of God were ascending and descending on it.',
         description: 'The Bridge to heaven',
         'fulfillment verse(s)': [
             {
                 verse: 'John 1:51',
                 text: 'And he said to him, "Very truly, I tell you, you will see heaven opened and the angels of God ascending and descending upon the Son of Man."',
             },
         ],
         notes: [
             'Because Jacob is said to have had a dream that contained a stairway to heaven, and because John tells us that in the future we will see heaven opened, this somehow counts as a fulfilled prophecy? Of... Jesus???',
             'Jacob\'s dream never mentions anything that can even reasonably be interpreted as Jesus.',
             'Jacob\'s dream is not a prophecy. Of anything. At best, it could be categorized as a vision.',
             'The passage from John makes no mention whatsoever of a bridge, or a stairway, or a ladder.',
             'It\'s not even clear from John what exactly is meant by "upon the Son of Man".',
             'This is not even a prophecy at all.',
         ],
     },
     {
         verse: 'Genesis 28:14',
         text: 'and your offspring shall be like the dust of the earth, and you shall spread abroad to the west and to the east and to the north and to the south, and all the families of the earth shall be blessed in you and in your offspring.',
         description: 'The Seed of Jacob',
         'fulfillment verse(s)': [
             {
                 verse: 'Luke 3:34',
                 text: 'son of Jacob, son of Isaac, son of Abraham, son of Terah, son of Nahor,',
             },
         ],
         notes: [
             'It\'s illogical to claim that Jesus is "fully god" while also claiming that he is descended from ANY human. You can\'t be fully god and also have human lineage.',
             'There has never existed a number of humans that exceeds the number of dust particles on earth.',
             'There is no logical way to assert that the "blessing" that will come to all the families of the earth was, and categorically must be, Jesus. Under this ridiculously vague thinking, the "blessing" could have been the invention of the internet, or the vaccine for polio, or literally any other positive things that has helped everyone around the world.',
             'With the exception of Antarctica, we had already spread "to the west and to the east and to the north and to the south" at the time that this so-called prophecy was given. Of course, the authors had no clue about this.',
         ],
     },
     {
         verse: 'Genesis 49:10',
         text: 'The scepter shall not depart from Judah, nor the ruler\'s staff from between his feet, until tribute comes to him, and the obedience of the peoples is his.',
         description: 'The time of His coming',
         'fulfillment verse(s)': [
             {
                 verse: 'Luke 2:1-7',
                 text: 'In those days a decree went out from Caesar Augustus that all the world should be registered. This was the first registration and was taken while Quirinius was governor of Syria. All went to their own towns to be registered. Joseph also went from the town of Nazareth in Galilee to Judea, to the city of David called Bethlehem, because he was descended from the house and family of David. He went to be registered with Mary, to whom he was engaged and who was expecting a child. While they were there, the time came for her to deliver her child. And she gave birth to her firstborn son and wrapped him in bands of cloth and laid him in a manger, because there was no place in the guest room.',
             },
             {
                 verse: 'Galatians 4:4',
                 text: 'But when the fullness of time had come, God sent his Son, born of a woman, born under the law,',
             },
         ],
         notes: [
             'It\'s illogical to claim that Jesus is "fully god" while also claiming that he is descended from ANY human. You can\'t be fully god and also have human lineage.',
             'This entire "prophetic" passage (which is not remotely a prophecy at all about Jesus) is entirely targeted specifically to Jacob\'s son Judah. It doesn\'t speak generically about Judah\'s descendants nor does it speak about any land that may be controlled in the future by Judah. This passage is a dying father\'s word to one of his sons - Juday. Not to Jesus.',
             'If you don\'t believe this, just look at the rest of this chapter. The entire chapter consists of nothing but Jacob\'s final words to each of his sons.',
             'The cherry-picked observation of these words from Jacob as a "prophecy" completely ignores everything else that he said to his other children and even conveniently discards everything else that he said to Judah. This is literally a textbook example of cherry picking.',
         ],
     },
     {
         verse: 'Genesis 49:10',
         text: 'The scepter shall not depart from Judah, nor the ruler\'s staff from between his feet, until tribute comes to him, and the obedience of the peoples is his.',
         description: 'The Seed of Judah',
         'fulfillment verse(s)': [
             {
                 verse: 'Luke 3:33',
                 text: 'son of Amminadab, son of Admin, son of Arni, son of Hezron, son of Perez, son of Judah,',
             },
         ],
         notes: [
             'It\'s illogical to claim that Jesus is "fully god" while also claiming that he is descended from ANY human. You can\'t be fully god and also have human lineage.',
             'This entire "prophetic" passage (which is not remotely a prophecy at all about Jesus) is entirely targeted specifically to Jacob\'s son Judah. It doesn\'t speak generically about Judah\'s descendants nor does it speak about any land that may be controlled in the future by Judah. This passage is a dying father\'s word to one of his sons - Juday. Not to Jesus.',
             'If you don\'t believe this, just look at the rest of this chapter. The entire chapter consists of nothing but Jacob\'s final words to each of his sons.',
             'The cherry-picked observation of these words from Jacob as a "prophecy" completely ignores everything else that he said to his other children and even conveniently discards everything else that he said to Judah. This is literally a textbook example of cherry picking.',
         ],
     },
     {
         verse: 'Genesis 49:10',
         text: 'The scepter shall not depart from Judah, nor the ruler\'s staff from between his feet, until tribute comes to him, and the obedience of the peoples is his.',
         description: 'Called Shiloh or One Sent',
         'fulfillment verse(s)': [
             {
                 verse: 'John 17:3',
                 text: 'And this is eternal life, that they may know you, the only true God, and Jesus Christ, whom you have sent.',
             },
         ],
         notes: [
             'Simply reading the "prophecy" verse and trying, in any way, to connect to the "fulfillment" verse is a massive stretch. It\'s not even clear how the most desperate-minded wanna be follower can stitch these two passages together.',
             'It\'s illogical to claim that Jesus is "fully god" while also claiming that he is descended from ANY human. You can\'t be fully god and also have human lineage.',
             'This entire "prophetic" passage (which is not remotely a prophecy at all about Jesus) is entirely targeted specifically to Jacob\'s son Judah. It doesn\'t speak generically about Judah\'s descendants nor does it speak about any land that may be controlled in the future by Judah. This passage is a dying father\'s word to one of his sons - Juday. Not to Jesus.',
             'If you don\'t believe this, just look at the rest of this chapter. The entire chapter consists of nothing but Jacob\'s final words to each of his sons.',
             'The cherry-picked observation of these words from Jacob as a "prophecy" completely ignores everything else that he said to his other children and even conveniently discards everything else that he said to Judah. This is literally a textbook example of cherry picking.',
         ],
     },
     {
         verse: 'Genesis 49:10',
         text: 'The scepter shall not depart from Judah, nor the ruler\'s staff from between his feet, until tribute comes to him, and the obedience of the peoples is his.',
         description: 'Messiah to come before Judah lost identity',
         'fulfillment verse(s)': [
             {
                 verse: 'John 11:47-52',
                 text: 'So the chief priests and the Pharisees called a meeting of the council and said, "What are we to do? This man is performing many signs. If we let him go on like this, everyone will believe in him, and the Romans will come and destroy both our holy place and our nation." But one of them, Caiaphas, who was high priest that year, said to them, "You know nothing at all! You do not understand that it is better for you to have one man die for the people than to have the whole nation destroyed." He did not say this on his own, but being high priest that year he prophesied that Jesus was about to die for the nation, and not for the nation only, but to gather into one the dispersed children of God.',
             },
         ],
         notes: [
             'Simply reading the "prophecy" verse and trying, in any way, to connect to the "fulfillment" verse is a massive stretch. It\'s not even clear how the most desperate-minded wanna be follower can stitch these two passages together.',
             'It\'s illogical to claim that Jesus is "fully god" while also claiming that he is descended from ANY human. You can\'t be fully god and also have human lineage.',
             'This entire "prophetic" passage (which is not remotely a prophecy at all about Jesus) is entirely targeted specifically to Jacob\'s son Judah. It doesn\'t speak generically about Judah\'s descendants nor does it speak about any land that may be controlled in the future by Judah. This passage is a dying father\'s word to one of his sons - Juday. Not to Jesus.',
             'If you don\'t believe this, just look at the rest of this chapter. The entire chapter consists of nothing but Jacob\'s final words to each of his sons.',
             'The cherry-picked observation of these words from Jacob as a "prophecy" completely ignores everything else that he said to his other children and even conveniently discards everything else that he said to Judah. This is literally a textbook example of cherry picking.',
         ],
     },
     {
         verse: 'Genesis 49:10',
         text: 'The scepter shall not depart from Judah, nor the ruler\'s staff from between his feet, until tribute comes to him, and the obedience of the peoples is his.',
         description: 'Unto Him shall the obedience of the people be',
         'fulfillment verse(s)': [
             {
                 verse: 'John 10:16',
                 text: 'I have other sheep that do not belong to this fold. I must bring them also, and they will listen to my voice. So there will be one flock, one shepherd.',
             },
         ],
         notes: [
             'Because Jesus is basically claiming that everyone will (eventually) listen to him, this somehow applies to the last words of Jacob given to his son Judah?',
             'Because Jesus expects obedience (like sheeple), this somehow applies to the last words of Jacob given to his son Judah?',
             'Simply reading the "prophecy" verse and trying, in any way, to connect to the "fulfillment" verse is a massive stretch. It\'s not even clear how the most desperate-minded wanna be follower can stitch these two passages together.',
             'It\'s illogical to claim that Jesus is "fully god" while also claiming that he is descended from ANY human. You can\'t be fully god and also have human lineage.',
             'This entire "prophetic" passage (which is not remotely a prophecy at all about Jesus) is entirely targeted specifically to Jacob\'s son Judah. It doesn\'t speak generically about Judah\'s descendants nor does it speak about any land that may be controlled in the future by Judah. This passage is a dying father\'s word to one of his sons - Juday. Not to Jesus.',
             'If you don\'t believe this, just look at the rest of this chapter. The entire chapter consists of nothing but Jacob\'s final words to each of his sons.',
             'The cherry-picked observation of these words from Jacob as a "prophecy" completely ignores everything else that he said to his other children and even conveniently discards everything else that he said to Judah. This is literally a textbook example of cherry picking.',
         ],
     },
 ];

type VerseSortParts = {
    bookIndex: number;
    chapter: number;
    verse: number;
};

function parseVerseSortParts(reference: string): VerseSortParts
{
    const normalizedReference = reference.trim();
    const loweredReference = normalizedReference.toLowerCase();

    let bookIndex = Number.MAX_SAFE_INTEGER;
    let matchedBook = '';

    for (const book of canonicalBooks)
    {
        const loweredBook = book.toLowerCase();

        if (loweredReference === loweredBook || loweredReference.startsWith(`${loweredBook} `))
        {
            matchedBook = book;
            break;
        }
    }

    if (matchedBook)
    {
        bookIndex = canonicalBookLookup.get(matchedBook.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
    }

    const chapterAndVersePart = matchedBook
        ? normalizedReference.slice(matchedBook.length).trim()
        : normalizedReference;

    const chapterVerseMatch = chapterAndVersePart.match(/(\d+)\s*:\s*(\d+)/);

    return {
        bookIndex,
        chapter: chapterVerseMatch ? Number(chapterVerseMatch[1]) : Number.MAX_SAFE_INTEGER,
        verse: chapterVerseMatch ? Number(chapterVerseMatch[2]) : Number.MAX_SAFE_INTEGER,
    };
}

export function getFailedPropheciesSorted(): FailedProphecy[]
{
    return [...failedProphecies].sort((a, b) =>
    {
        const left = parseVerseSortParts(a.verse);
        const right = parseVerseSortParts(b.verse);

        if (left.bookIndex !== right.bookIndex)
        {
            return left.bookIndex - right.bookIndex;
        }

        if (left.chapter !== right.chapter)
        {
            return left.chapter - right.chapter;
        }

        if (left.verse !== right.verse)
        {
            return left.verse - right.verse;
        }

        return a.verse.localeCompare(b.verse);
    });
}
