import { SEO } from '../seo';

export function DashboardPage()
{
    return (
        <section aria-labelledby='overview-heading'>
            <SEO
                title='Skepticus Info Hub | Overview'
                description='Quick dashboard metrics and latest skeptical research briefs.'
            />
            <header className={'page-header'}>
                <h1>
                    <a
                        aria-label={'Join the Skepticus livestream on YouTube'}
                        href={'https://tiny.cc/skepticus'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        Call in to the livestream (https://tiny.cc/skepticus)<br/>
                        (Every Tuesday night 5PM CST until...?)
                    </a>
                </h1>
                <h1>
                    <a
                        aria-label={'Watch the Skepticus YouTube channel'}
                        href={'https://www.youtube.com/@Skepticus.Channel'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        Watch the Skepticus YouTube channel (https://www.youtube.com/@Skepticus.Channel)
                    </a>
                </h1>
            </header>
            <h2>Livestream Rules</h2>
            <h3>
                <ol>
                    <li>General
                        <ol>
                            <li>No hate speech. Period. Slurs directed at race, gender, or sexual orientation will get you immediately banned.</li>
                            <li>Profanity is allowed but you must be able to construct an adult sentence without a pointless cascade of vulgarity.</li>
                            <li>Profanity and spicy attacks must be targeted to someone's position, never directly towards the person.</li>
                            <li>Doxing will not be tolerated. If someone already has a public persona (e.g., a YouTube channel, a published book, an X account, etc.) then it's fine to point that out. But you are not to "out" anyone with information that they have not already volunteered or is not already freely available.</li>
                        </ol>
                    </li>
                    <li>Chat
                        <ol>
                            <li>No gish gallops. If your "point" consists of plastering a stream of long consecutive posts in the chat, then you're just trying to bulldoze everyone else into submission. </li>
                            <li>No preaching. Believers are welcome. But if your only "contribution" is to tell everyone that they need Jebus, you can do that shit on Sunday at your local church.</li>
                            <li>Grow a pair. You are under no obligation to call in to talk to the host. But if you feel compelled to constantly bitch about the host in the chat, then grow the hell up and call in for a live conversation.</li>
                            <li>Do not comment on the appearance or speech patterns of any guest. You can make fun of the host, if that makes you feel better about yourself. </li>
                            <li>No self-promotion in the chat. Although your efforts may be appreciated/supported by other chat participants, there is just no universal rule that can be applied which will logically allow the "right" forms of self-promotion, while weeding out the spammers and scammers.</li>
                        </ol>
                    </li>
                    <li>Callers
                        <ol>
                            <li>Live conversations are reserved for those who are 18-years-old or older.  This is currently a "soft limit" while we're still only streaming on YouTube.  It will be a much harder limit once we get dual-streaming up-and-running with TikTok, because TikTok has strict limits on callers' minimum ages.</li>
                            <li>More conversation. Less "debate". If you don't know what that means, there are plenty of debate-me-bro channels out there for you to frequent instead of this one.</li>
                            <li>Stop, breathe, and let the other person talk. During animated discussion it's not uncommon for there to be some degree of talking over each other. But if you simply will not stop talking over someone else, don't be surprised if you are muted - or disconnected.</li>
                            <li>The host has the exclusive right to put you on mute at any time. For any reason. If that gets you up in your feels, then Google "how to host my own livestream". And then get the fuck out.</li>
                            <li>If, upon being unmuted, all you want to do is bitch about the fact that you were muted, then you can promptly get the fuck out.</li>
                            <li>Although most calls are one-on-one (the host and one caller) there may be other people in the conversation at any point in time. It is not your place to police other guests. If you're bothered by the contribution of another guest, you are more than welcome to start your own livestream. Then you can set all the rules that you want.</li>
                            <li>Refusing to acknowledge when you are demonstrably wrong on basic verifiable facts is a good way to get disconnected. It's also a great way to ensure that we will make highlight videos of your stupidity.</li>
                            <li>Bragging about how you completely destroyed the host, or everyone in the chat, is an excellent way to prove that you're a douchebag and an intellectual toddler.</li>
                            <li>Believers (of any stripe) are given priority in the call queue. If you're an atheist/agnostic/non, you're welcome to call in.  But please understand that the conversation is generally more engaging with a distinct difference of opinions.  So please understand if you are skipped over, of if your call is cut short, so we can get to believers who are waiting in the queue.</li>
                            <li>Self-promotion in live conversations is allowable within the discretion of the host. If you were actively invited to participate, then there's a greater chance that some reasonable self-promotion is acceptable. That chance rises precipitously if you're not being a douchebag during the call.</li>
                        </ol>
                    </li>
                </ol>
            </h3>
        </section>
    );
}
