var questionColor = process.argv[2] || "gray";

var readline = require('readline');
var chalk = require('chalk');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var story = {
    q: "Welcome to Kit Kat! Would you like to come in?",
    answers: {
        yes: {
            q: "Are you sure? Kit Kat is Berlin's most notorious techno sex club - things might get weird.",
            answers: {
                yes: {
                    q: "Great, techno and sex do go hand-in-hand afterall. What are you wearing?",
                    answers: {
                        "something scandalous": {
                            q: "You're in! After grabbing a drink, you're sitting near the outdoor swimming pool, watching naked men and women caressing one another's genitals, when you're approached by a woman named Jess. What do you say to her?",
                            answers: {
                                hello: {
                                    q: "Jess stares at you lavishly for a moment and then asks if you would 'fancy a foursome' with her and two other friends visiting from Poland. What do you say?",
                                    answers: {
                                        sure: {
                                            q: "You follow Jess and her friends through a series of murky black tunnels to a hidden bar downstairs. On the way, you encounter a Manfred - an infamous club-goer who spends between 6-8 hours a night wanking furiously in the stairwell. Do you talk to him?",
                                            answers: {
                                                yes: chalk.red("Manfred glances up at you and puffs breathlessly, 'You see bodies, such bodies here. Do you see them, all the bodies?' as he pleasures himself. You wind up feeling so disturbed that you eventually leave."),
                                                no: {
                                                    q: "Good choice. You finally reach the bar, order a vodka mate and sip on it as you assess the situation. Jess' friend Tia reaches into your waistband and asks if you're ready. Well, are you?",
                                                    answers: {
                                                        yes: chalk.red("You leave 20 minutes later and swear to yourself that you'll never speak with anyone about this night. Ever."),
                                                        no: chalk.red("The girls find someone else to play with, you're left to drink alone and eventually leave feeling dirty and undesirable."),
                                                    }
                                                },
                                            }
                                        },
                                        "no thanks": chalk.red("After mulling around the dance floor for a bit, you realize that you won't find a better option. Too bad."),
                                    }
                                },
                                nothing: {
                                    q: "She's not your type, that's ok. You go inside and stumble across a bondage swing hanging in one of the bungalows toward the back. A British expat named Dave grabs your ass from behind and proposes, 'Shall we give it a go?' What's your answer?",
                                    answers: {
                                        yes: chalk.red("You're never seen again."),
                                        no: chalk.red("You decide that this place is too extra and you get the hell out of there."),
                                    }
                                }
                            }
                        },
                        "ordinary street wear": chalk.red("You're denied entry at the door. Better luck next time."),
                    }
                },
                no: chalk.red("Yeah, it's not really for the faint of heart. Maybe next time."),
            }
        },
        no: chalk.red("Your loss."),
    }
};


function askQuestion(q) {
    var question = q.q + ' [' + Object.keys(q.answers).join(' or ') + '] ';
    rl.question(chalk[questionColor](question), function(a) {
        if (typeof q.answers[a] == 'object') {
            askQuestion(q.answers[a]);
        } else {
            console.log(q.answers[a]);
            rl.close();
        }
    });
}

askQuestion(story);
