(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "TyZeff";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

            
        danceCommand: {
                command: 'dance',
                rank: 'user',
                type: 'startsWith',
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                      var msg = chat.message;
                        var space = msg.indexOf(' ');
                        if (space === -1) {
                        basicBot.userUtilities.lookupUserName(name);
                            var danceNumber = Math.floor(Math.random() * basicBot.chat.dances.length);
                        API.sendChat(subChat(basicBot.chat.dances[danceNumber], {name: chat.un}));
                            
                        }
                        else {
                        var pairdanceNumber = Math.floor(Math.random() * basicBot.chat.pairdances.length);
                            var name2 = msg.substring(space + 1);
                            basicBot.userUtilities.lookupUserName(name);
                      API.sendChat(subChat(basicBot.chat.pairdances[pairdanceNumber], {name: chat.un, name2: name2}));
                      
                    }
                }
            }
        },
            
        maowCommand: {
          command: 'maow',
                rank: 'user',
                type: 'exact',
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                      API.sendChat(subChat(basicBot.chat.maow));
                    }
                }
        },

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "=^.°.^= MofChillout bot",
      language: "english",
      chatLink: "https://rawgit.com/" + fork + "/MoC-plugdj-Bot/master/lang/en.json",
      scriptLink: "https://rawgit.com/basicBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: false, // true or false
      autowoot: true,
      autoskip: false,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: true,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 5,
      historySkip: false,
      timeGuard: true,
      maximumSongLength: 15,
      autodisable: true,
      commandCooldown: 30,
      usercommandsEnabled: true,
      skipPosition: 3,
      skipReasons: [
      ["theme", "This song does not fit the room theme. "],
      ["op", "This song is on the OP list. "],
      ["history", "This song is in the history. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 5,
      motd: "Temporary Message of the Day",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: "http://www.masterofchillout.com/genres",
      themeLink: null,
      fbLink: "https://www.facebook.com/MoChillout/",
      youtubeLink: "https://www.youtube.com/channel/UCP539KDKw8uOJiR-VDu3CIA",
      website: "http://www.masterofchillout.com/",
      intervalMessages: ["\"All in all you're just another brick in the wall.\" - Pink Floyd"],
                        ["\"All music comes from God.\" - Johnny Cash"],
                        ["\"All you need is love.\" - John Lennon"],
                        ["\"And in the end, the love you take is equal to the love you make.\" - The Beatles"],
                        ["\"Classical music played in restaurants increases the amount people spend on wine."],
                        ["\"Don't criticize what you can't understand.\" -  Bob Dylan"],
                        ["\"Don't do drugs, don’t have unprotected sex, don’t be violent... leave that to me.\" - Eminem"],
                        ["\"Droplets of yes and no, in an ocean of maybe.\" - Faith No More"],
                        ["\"Elvis died the day he went into the army.\" - John Lennon"],
                        ["\"Emancipate yourselves from mental slavery. None but ourselves can free our minds.\" - Bob Marley"],
                        ["\"Even the genius asks questions.\" - 2 Pac"],
                        ["\"Every bad situation is a blues song waiting to happen.\" - Amy Winehouse"],
                        ["\"Every new beginning comes from some other beginning's end.\" - Semisonic, Closing Time"],
                        ["\"Get up, stand up, Stand up for your rights. Get up, stand up, Don't give up the fight.\" - Bob Marley"],
                        ["\"How many times can a man turn his head, and pretend that he just doesn't see?\" - Bob Dylan"],
                        ["\"I can't write a line without music - it provides just the right amount of distraction to keep me focused. Clearly, I still miss the noisy roommates.\" - Stacy Schiff"],
                        ["\"I don't know anything about music. In my line you don't have to.\" - Elvis Presley"],
                        ["\"I don't make music for eyes. I make music for ears.\" - Adele"],
                        ["\"I don't want to be in love but you're makin' me\" -  Jonny Lang"],
                        ["\"I gave her my heart but she wanted my soul..\" - Bob Dylan"],
                        ["\"I liberate minds with my music. That's more important than liberating a few people from apartheid or whatever.\" - Kanye West"],
                        ["\"I like playing heavy metal music and pretending I'm a vampire in front of the mirror.\" - Luke Mably"],
                        ["\"I listen to music that is of our time and I just get angry.\" - Amy Winehouse"],
                        ["\"I look at you and I write down what I hear.\" - Virgil Thomson"],
                        ["\"I need drama in my life to keep making music.\" - Eminem"],
                        ["\"I think music is the most phenomenal platform for intellectual thought.\" - Annie Lennox"],
                        ["\"I try to use my music to move these people to act.\" - Jimi Hendrix"],
                        ["\"I want to be like Gandhi and Martin Luther King and John Lennon - but I want to stay alive.\" - Madonna "],
                        ["\"I want to party in space because I make alien music.\" - David Guetta"],
                        ["\"I won't be happy until I’m as famous as God.\" - Madonna"],
                        ["\"I'd rather be a hammer than a nail.\" - Simon and Garfunkel, El Condor Pasa"],
                        ["\"I'd trade all my tomorrows for one single yesterday.\" - Kris Kristofferson"],
                        ["\"If music be the food of love, play on.\" - William Shakespeare"],
                        ["\"If there's a future, we want it now.\" - Hayley Williams"],
                        ["\"If you choose not to decide, you still have made a choice.\" - Rush, Freewill"],
                        ["\"If you like my music, great, and if you don't, whatever. I'm going to keep making it either way.\" - Katy Perry"],
                        ["\"If you pour some music on whatever's wrong, it'll sure help out.\" - Levon Helm "],
                        ["\"If you want my body and you think I'm sexy come on sugar let me know.\" - Rod Stewart"],
                        ["\"Imagine all the people leaving life in peace.\" - John Lenon"],
                        ["\"It gets better and better being me.\" - Liam Gallagher "],
                        ["\"It's better to burn out, than to fade away.\" - Neil Young"],
                        ["\"It's the end of the world as we know it and I feel fine. \" - REM"],
                        ["\"I've found that no matter what life throws at me, music softens the blow.\" -  Bryce Anderson"],
                        ["\"Jazz is a white term to define black people. My music is black classical music.\" - Nina Simone"],
                        ["\"Let everyone else call your idea crazy. Just keep going.\" - Phil Knight"],
                        ["\"Love is a battlefield.\" - Pat Benatar"],
                        ["\"Madonna is closer to organised prostitution than anything else.\" - Morrissey"],
                        ["\"Most people live and die with their music still unplayed. They never dare to try.\" - Mary Kay Ash"],
                        ["\"Mozart's music is like an X-ray of your soul - it shows what is there, and what isn't.\" - Isaac Stern"],
                        ["\"Music became a healer for me.\" - Eric Clapton"],
                        ["\"Music can change the world because it can change people.\" - Bono"],
                        ["\"Music doesn't lie. If there is something to be changed in this world, then it can only happen through music.\" - Jimi Hendrix"],
                        ["\"Music fills the infinite between two souls.\" - Rabindranath Tagore"],
                        ["\"Music has power to create a universe or to destroy a civilization.\" -  Katherine Neville"],
                        ["\"Music is a higher revelation than all wisdom and philosophy.\" - Ludwig van Beethoven"],
                        ["\"Music is a weapon in the war against unhappiness.\" - Jason Mraz"],
                        ["\"Music is about listening, the more you play, the more the magic spreads.\" - Maynard James Keenan"],
                        ["\"Music is my hustle.\" - Pitbull"],
                        ["\"Music is my life, it is a reflection of what I go through.\" - Lenny Kravitz"],
                        ["\"Music is my religion.\" - Jimi Hendrix"],
                        ["\"Music is the mediator between the spiritual and the sensual life.\" - Ludwig van Beethoven"],
                        ["\"Music is the only language in which you cannot say a mean or sarcastic thing.\" -  John Erskine"],
                        ["\"Music is the silence between the notes.\" - Claude Debussy"],
                        ["\"Music is the soundtrack of your life.\" - Dick Clark"],
                        ["\"Music is the strongest form of magic.\" - Marilyn Manson"],
                        ["\"Music is the universal language of mankind.\" - Henry Wadsworth Longfellow"],
                        ["\"Music is the wine that fills the cup of silence.\" -  Robert Fripp"],
                        ["\"Music produces a kind of pleasure which human nature cannot do without.\" -  Confucius"],
                        ["\"Music really becomes the soundtrack to the major events to your life.\" - Sheryl Crow"],
                        ["\"Music should be your escape.\" - Missy Elliott"],
                        ["\"Music should strike fire from the heart of man, and bring tears from the eyes of woman.\" - Ludwig van Beethoven"],
                        ["\"Music washes away from the soul the dust of everyday life.\" - Berthold Auerbach"],
                        ["\"Music, not sex, got me aroused.\" - Marvin Gaye"],
                        ["\"My father was a minister and so rock music was banned in our house.\" - Tori Amos"],
                        ["\"My music is a luxury.\" - Lana Del Rey"],
                        ["\"My music will go on forever. Maybe it's a fool say that, but when me know facts me can say facts. My music will go on forever.\" -Bob Marley "],
                        ["\"Next to the Word of God, the noble art of music is the greatest treasure in the world.\" - Martin Luther"],
                        ["\"Ob-la-di, Ob-la-da, life goes on. La la how the life goes on.\" - The Beatles"],
                        ["\"Of course we’re doing it for the money. We’ve always done it for the money.\" - Mick Jagger"],
                        ["\"One good thing about music, when it hits you, you feel no pain.\" - Bob Marley"],
                        ["\"one love, one heart\" - Bob Marley"],
                        ["\"Optimism is my best defense.\" - Rod Stewart"],
                        ["\"People haven't always been there for me, but music always has.\" - Taylor Swift"],
                        ["\"Rock music is not meant to be perfect.\" - Ozzy Osbourne"],
                        ["\"Send me dead flowers to my wedding and I won't forget to put roses on your grave.\" - The Rolling Stones"],
                        ["\"Since my baby left me, I've found a new place to dwell, down at the end of Lonely Street at Heartbreak Hotel.\" - Elvis Presley"],
                        ["\"That was when I realised that music is the most profound, magical form of communication there is.\" - Lesley Garrett"],
                        ["\"The only love affair I have ever had was with music.\" - Maurice Ravel"],
                        ["\"The only proof he needed for the existance of God was music.\" - Kurt Vonnegut"],
                        ["\"The pain of war cannot exceed the woe of aftermath.\" - Led Zeppelin"],
                        ["\"the people who are crazy enough to think they can change the world are the ones who do.\" - Steve Jobs"],
                        ["\"The roots of my music start from the ghetto.\" - Ziggy Marley"],
                        ["\"The words of the prophets are written on the subway walls.\" - Simon and Garfunkel"],
                        ["\"There are two means of refuge from the miseries of life: music and cats.\" - Albert Schweitzer"],
                        ["\"There's people making babies to my music. That's nice.\" - Barry White"],
                        ["\"Thinking is the best way to travel.\" - The Moody Blues"],
                        ["\"To study music, we must learn the rules. To create music, we must break them.\" - Nadia Boulanger"],
                        ["\"War is not the answer, because only love can conquer hate.\" - Marvin Gaye"],
                        ["\"We don't like their sound, and guitar music is on the way out.\" - Decca Records' rejection letter to The Beatles, 1962."],
                        ["\"We learned more from a three minute record than we ever learned in school.\" - Bruce Springsteen"],
                        ["\"We're just two lost souls swimming in a fish bowl year after year. \" - Pink Floyd, Wish You Were Here"],
                        ["\"When I die, bury me on my stomach and let the world kiss my ass.\" - L.L. Cool J"],
                        ["\"When my soul was in the lost-and-found, You came along to claim it.\" - Carole King"],
                        ["\"When you call my name, I salivate like Pavlov's dog.\" - The Rolling Stones, Bitch"],
                        ["\"Where words fail, music speaks.\" - Hans Christian Andersen"],
                        ["\"Without music to decorate it, time is just a bunch of boring production deadlines or dates by which bills must be paid.\" - Frank Zappa"],
                        ["\"Without music, life would be a mistake.\" - Friedrich Nietzsche"],
                        ["\"Yesterday, all my troubles seemed so far away..\" - The Beatles"],
                        ["\"You bought a guitar to punish your Mom.\" - Pink Floyd, Welcome To The Machine"],
                        ["\"You don't have to be old to be wise.\" - Judas Priest"],
                        ["\"Genius is eternal patience\" - Michelangelo"],
                        ["\"Life is one grand, sweet song, so start the music\" - Ronald Reagan"],
                        ["\"Without music, life is a journey through a desert\" - Pat Conroy"],
                        ["\"Music always helps no matter what you're going through\" - Moon Dust"],
                        ["Album sales in a particular genre of music go up as the music gets simpler."],
                        ["Listening to music is one of the few activities that utilizes the entire brain"],
                        ["Listening to sad music provokes more nostalgia than sadness."],
                        ["Researchers have found that listening to hip-hop can promote self-healing, resilience, and empowerment."],
                        ["Songs that get stuck in your head are called 'earworms'."],
                        ["The 'mere exposure effect' makes us like certain music just because we hear it a lot."],
                        ["Amazing things come to those who wait."],
                        ["You usually have to wait for that which is worth waiting for..."],
                        ["If you spend your whole life waiting for the storm, you'll never enjoy the sunshine."],
                        ["Don't wait for the perfect moment. Take the moment and make it perfect."],
                        ["Don't wait for opportunity. Create it."],
                        ["Glorious things are waiting for you. We're just getting them ready."],
                        ["Patience is not simply the ability to wait - it's how we behave while we're waiting."],
      messageInterval: 60,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
          NSFW: "https://rawgit.com/" + fork + "/MoC-plugdj-Bot/master/blacklists/NSFWlist.json",
          OP: "https://rawgit.com/" + fork + "/MoC-plugdj-Bot/master/blacklists/OPlist.json",
          troll: "https://rawgit.com/" + fork + "/MoC-plugdj-Bot/master/blacklists/Trolllist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
