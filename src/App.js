import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <div class="nav-bar">
          <a href="">About</a>
          <a href="">Extensions</a>
          <a href="">Newsletters</a>
          <a href="">Reviews</a>
          <a href="">Sign-In</a>
        </div>
      </header>
      <div class="body">
        <div class="home-display">
          <div id="box-1">
              <h1>Gawth3r Platform Main Hub</h1>
              <h3><i><u>A Place For Everyone</u> ~ <u>By The People</u> ~ <u>For The People</u></i></h3>
              <p>
                Hi and Welcome! Here on the home page, you can obtain access
                to all of our content by clicking the <i>Join Us</i> button at
                the top of the page, and sign up to become a member. We also
                encourage you to join our discord so that you can stay current 
                with our latest bot, website, game, and programming events and 
                updates plus chat with other members across the globe! We even have
                sections for members to be able to ask questions and further their 
                knowledge, post useful resource links, and more. Also, with a dedicated 
                support section (and staff), we will be able to bring you more adequate 
                support with members from various parts of the community readily available
                (when online) to help you with your latest bug, or issue! So come join us 
                and be apart of something bigger and better
              </p>
          </div>
          <div id="box-2">
              <iframe src="https://discord.com/widget?id=779290532622893057&theme=dark"
                  width="350" height="300"
                  allowtransparency="true" frameborder="0"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              >
              </iframe>
          </div>
        </div>
        <div class="about-display">
          <h1>About Gawth3r</h1>
          <div id="box-1">
            <p>Did you know that Gawth3r used to be known as ButtlerBot?</p>
          </div>
          <div id="box-2">
            <p>
              Yep! Gawth3r was once known as Buttlerbot. Buttlerbot came about
              back around the year 2019 with my best friend, Chris. We were chilln'
              one day and I was watching him program and found it to be quite interesting.
              I started asking questions, and what different things did plus I would name
              things and bet that he couldn't do it. Boy..he sure could, haha! I decided at
              that point that I wanted to learn how to do this. The first thing I had to
              decide on was, "What is something you can bring to the table that someone else
              already hasn't?" -Chris. I told him that I use discord and wondered if the bots
              were just simply premade, and you got them from the website or were they created
              by people like he and i? He replied that we could make one ourselves, so then the
              adventure began. To fast-forward a bit, though, he tried to get me to understand
              that mastering the basics was a very important building-block, but I refused to
              listen. After numerous hours of begging for help, pissing people off, getting pissed
              off, throwing my computer across the room....you get the point, I had finally
              started understanding the code and how it worked, but it was just with building a
              discord bot. Outside of the discord python library, I couldn't tell you, or show you, 
              how to do anything. However, I digress. After much struggle with trying to figure out 
              who and what I wanted my bot to be I decided I wanted to make him my own type of smart 
              assistant that worked within the discord platform. Multiple, Multiple repositories later,
              I switched gears and started working ButtlerBot from being a discord assistant to being 
              an at-home assistant like Alexa, Google, and Amazon. It was going alright for a while, but 
              then my work environment became corrupt and I just couldn't bring myself to re-construct
              the project. So then I took a break from coding, played some video games, and now we
              (Chris and I) are back to bring you the best platform available to any and all members
              within the discord community, and more.
            </p>
          </div>
        </div>
        <div className="art-display">
          <h3>Art Display</h3>
          <p>The Art Display Is Currently Under Construction</p>
        </div>
        <div className="discord-display">
          <h1>Gawth3rs Roles && Rules</h1>
          <h3>If interested in becoming staff, <a href="">click here</a>.</h3>
          <h3>If interested in becoming apart of the dev team, <a href="../application/devs/Application.html">click here</a></h3>
          <p>
            Below are two (2) charts. The first is Gawth3rs Roles and what each one is responsible for. 
            The second are our rules which apply to both the discord, and the website as whole.
          </p>
          <table>
            <caption>Gawth3rs Roles</caption>
            <tr>
              <th>Role Name</th>
              <th>Role Description</th>
              <th>Member Count</th>
            </tr>
            <tr>
              <td>Owner</td>
              <td>
                Those who are the acting heads/active owners of the various 
                extensions of the Gawth3r Platform
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>Gawth3r</td>
              <td>The main bot himself ❤️ give it up WOOT WOOT!</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Gawth3rs Brothers</td>
              <td>The main bots family, the awesome backbones!</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Head Admin</td>
              <td>The HBIC (Head Bravo In Charge)! He is over every staff member of each extension. He is the Owners Right-Hand Person xD</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Developers</td>
              <td>The backbones to the platform. The bosses in charge of keeping us electronically running and connected</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Administrators</td>
              <td>The beautiful ones who orchestrate events, and rules, within our discord extension</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Moderator</td>
              <td>The faithful ones who support in orchestrating events, and rules, within our discord extension</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Cyber Admin</td>
              <td>The fearless ones who battles our foes online, and help ensure our secrets are kept safe :P</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Cyber Moderator</td>
              <td>The minions who keep watch on the grounds' eye level for our enemies</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Support Staff</td>
              <td>The medics of the family. If you are unaware of what to do, or where to go, please come to the hospital :P it's also a welcome center :P</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Community Helper</td>
              <td>The support for the Welcome Center. They clean the toilets, haha jk jk</td>
              <td>0</td>
            </tr>
            <tr>
              <td>WoW Staff</td>
              <td>The hopeful battle leaders that defend us against our enemies within Azeroth! (Who knew there were so many?)</td>
              <td>0</td>
            </tr>
            <tr>
              <td>WoW Member</td>
              <td>The wounded warriors who fight for us with metal and catapults a-blazin'</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Nitro Member</td>
              <td>Our sought-out ones. Those who are the rich and famous within the kingdom.</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Streamer</td>
              <td>Those who live life on the edges, and live to tell the tale!</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Summoners War</td>
              <td>Our rune stone masters from afar, traveling all the way in from their summoning islands are our Summoners War-riors!</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Artistry</td>
              <td>The ones that remind us from time to time that our shoes don't match our socks which do not match our pants which will never match that top and with that hair? Are you kidding me?! BACK IN THE CLOSET WITH YOU!</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Programming</td>
              <td>The ones who literally dont care. Do not get in our way, but we will be your best friend. Also, remember we can reset your car battery from our couch, watch out Tesla owners</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Gaming</td>
              <td>Bruh.....where did that sniper come from?!?! AHHHHHHHHH!!!!</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Member</td>
              <td>I'm bored........Can someone help me find something to do? Otherwise, I'm just going to annoy you, hehe</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Muted</td>
              <td>Can you hear me? AT&T Hello?!</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Kicked</td>
              <td>Oof, my ass crack @_@</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Banned</td>
              <td>Can you see me? I see you, hehe. That's right. I see you through the cracks in the wall, hehe, may I have some bread please sir?</td>
              <td>0</td>
            </tr>
          </table>
          <table>
            <caption>Gawth3rs Rules</caption>
            <tr>
              <th>Rule #</th>
              <th>Rule Name</th>
              <th>Rule Description</th>
            </tr>
            <tr>
              <td>Respect</td>
              <td>It does not matter what is happening or who is involved, respect is a must at all times. Calling someone out their name, calling them names, throwing around insults just because you are mad will get you permanently banned.</td>
            </tr>
            <tr>
              <td>Sharing Code</td>
              <td>
                When sharing code, please use one of the following links:<br></br>
                <a href="https://gist.github.com">Github Gist</a>, 
                <a href="https://codepen.io">CodePen</a>, 
                <a href="https://jsfiddle.net">JSFiddle</a>, 
                <a href="https://codepad.co">Codepad</a>, 
                <a href="https://codeshare.io">Codeshare</a>,
                <a href="https://jsbin.com/?html">JS Bin</a>,
                <a href="https://liveweave.com">Liveweave</a>
              </td>
            </tr>
            <tr>
              <td>Spamming</td>
              <td>If the bot has to enact a message limiter on you because you are sending too many messages within too short of a time frame, and it happens to frequently, you will automatically be placed in the muted role for the corresponding amount of time. See the puishment chart.</td>
            </tr>
            <tr>
              <td>Excessive Foul Language</td>
              <td>I understand that more than none of the members are adults, myself included. I understand that we cuss, and so do minors, however, if you start to use multiple cuss words per sentence, or you are cussing in every single sentence, you will be muted. No question about it. Be respectful. See rule one.</td>
            </tr>
            <tr>
              <td>NSFW Content</td>
              <td>At no, and I mean, NO POINT IN TIME should ANY NSFW content be posted within the discord channel if there is NOT a channel already created for it! If you are caught sending NSFW content within any channel of the discord, or within the direct messages of another member of the discord, you will be banned and the Discord Staff will be notified.</td>
            </tr>
          </table>
        </div>
        <div className="games-display">
          <h3>Games Display</h3>
          <p>The Games Display Is Currently Under Construction</p>
        </div>
        <div className="newsletter-display">
          <h3>Newsletter Display</h3>
          <p>The Newsletter Display Is Currently Under Construction</p>
        </div>
        <div className="programming-display">
          <h3>Programming Display</h3>
          <p>The Programming Display Is Currently Under Construction</p>
        </div>
        <div className="reviews-display">
          <h3>Reviews Display</h3>
          <p>The Reviews Display Is Currently Under Construction</p>
        </div>
        <div className="signin-display">
          <h3>Sign In Display</h3>
          <p>The Sign In Display Is Currently Under Construction</p>
        </div>
      </div>
    </div>
  );
}

export default App;
