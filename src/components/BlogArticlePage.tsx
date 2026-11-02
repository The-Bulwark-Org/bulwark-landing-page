import { Header } from './Header';
import { JourneySection } from './JourneySection';
import { FaqSection } from './FaqSection';
import { SiteFooter } from './SiteFooter';

interface BlogArticlePageProps {
  onJoinWaitlist: () => void;
}

export function BlogArticlePage({ onJoinWaitlist }: BlogArticlePageProps) {
  return (
    <div className="page-dark blog-article-page" id="hero">
      <Header onJoinWaitlist={onJoinWaitlist} />
      <main className="blog-article">
        <a className="blog-article__back" href="/blog">← Back to blog</a>
        <header className="blog-article__header">
          <p className="blog-article__meta">November 2, 2026 <span aria-hidden="true">|</span> 6 min read</p>
          <h1>A Slip Isn't Day One: What to Do in the 24 Hours After a Relapse</h1>
          <img src="/assets/womanbrain.svg" alt="Illustration of a woman with a colorful brain" />
        </header>

        <article className="blog-article__content">
          <p>You had a run going. Maybe it was a few days, maybe a few months. Then one night it ended, and now you're looking at a counter that says zero and listening to a voice in your head that says you're right back where you started.</p>
          <p>You're not. A slip can feel like a total reset, but it didn't erase what you practiced. What you do in the next 24 hours matters far more than the slip itself. Treated as information instead of a verdict, it's one of the most useful moments in changing a habit.</p>

          <h2>Why "back to Day One" is the wrong way to see it</h2>
          <p>A lot of people, and a lot of tracking tools, measure progress with one number: days since the last slip. It's easy to understand, but it tells a harsh story. A month of real change ends up looking exactly the same as never having tried.</p>
          <p>What changed during your run is still there. You learned what your triggers look like. You practiced getting through urges. You built routines that made some nights easier. One bad night doesn't remove any of that.</p>
          <p>There's also a practical reason to drop the reset mindset. The "I already blew it" feeling, which researchers call the abstinence violation effect, is often what turns one slip into a long spiral. If everything is ruined anyway, why stop now? Seeing the slip as a single event, not a collapse, makes it much easier to stop there.</p>

          <h2>The first hour: stop the spiral, not the feelings</h2>
          <p>You'll probably feel frustrated, embarrassed, or flat. That's normal. You don't need to fix the feelings tonight. You only need to keep one slip from becoming three.</p>
          <ul>
            <li><strong>Put distance between you and the trigger.</strong> Close the tab, put the phone in another room, get up and leave the space you were in.</li>
            <li><strong>Name it plainly.</strong> "I slipped. That happened. It doesn't decide the rest of tonight or tomorrow."</li>
            <li><strong>Do one kind thing for your body.</strong> Drink some water, take a shower, and go to sleep if it's late.</li>
            <li><strong>Skip the punishment.</strong> No 2 a.m. promises that it will never happen again, no hour of writing about how weak you are. Guilt can feel like accountability, but heavy shame tends to push people back toward the habit for relief.</li>
          </ul>

          <h2>The next day: look at what happened like a detective</h2>
          <p>Once you've slept, look back with curiosity instead of judgment. Write down short answers to four questions:</p>
          <ol>
            <li>When was it? The time, the day, and where you were.</li>
            <li>What was going on before? Were you tired, stressed, lonely, bored, or alone with nothing planned?</li>
            <li>What was the first small step? It's rarely the habit itself. It's usually something smaller, like staying up late, opening one app, or scrolling in bed.</li>
            <li>Where could I have stepped off? Find the earliest point where a different choice was still easy.</li>
          </ol>
          <p>Here's what that can look like: "Sunday, 1 a.m., in bed. I'd argued with my brother and couldn't sleep. It started with scrolling short videos. The easiest exit would have been leaving my phone to charge outside the bedroom."</p>
          <p>That last line is your plan.</p>

          <h2>Change one thing</h2>
          <p>Pick one small change that matches the first step you found.</p>
          <ul>
            <li>If it started with your phone in bed, charge it in another room.</li>
            <li>If it followed a stressful conversation, plan a ten-minute walk or a call with a friend after hard days.</li>
            <li>If it happened on an empty weekend evening, decide on Saturday afternoon what you'll do that night.</li>
          </ul>
          <p>One change you'll actually keep beats a list of ten you'll abandon by Wednesday.</p>

          <h2>Tell someone, if you can</h2>
          <p>Secrecy keeps habits strong. If you have a partner, a friend, a therapist, or a support group you trust, a short message is enough: "Rough night, I slipped. I figured out what set it off, and I'm back on my plan today." You don't need to share details.</p>
          <p>If you don't have someone like that yet, finding one person is worth adding to your plan.</p>

          <h2>Count what matters</h2>
          <p>A streak is one way to measure progress, but it isn't the only one, or the most honest. Try tracking:</p>
          <ul>
            <li>How many urges you got through this week</li>
            <li>How many nights you followed your plan</li>
            <li>How quickly you got back on track after a slip</li>
          </ul>
          <p>A slip followed by a fast recovery is progress. Over time, you'll likely notice the gaps between slips getting longer and the recoveries getting quicker.</p>

          <h2>When to get more support</h2>
          <p>If slips are frequent, you feel out of control, or the habit is hurting your relationships, work, or mental health, talk to a licensed therapist, ideally one who works with compulsive sexual behavior or habit change. Asking for help isn't failing. It's adding a tool.</p>

          <h2>How we're building Bulwark around this</h2>
          <p>We started building Bulwark because so many people described the same experience with recovery apps: one slip, the streak disappears, and the app suddenly feels like it's keeping score against them.</p>
          <p>So Bulwark is being designed differently:</p>
          <ul>
            <li>A slip doesn't erase your history. Your progress stays, and the app helps you look at what happened, the same way this guide does.</li>
            <li>The panic button is always free, for the moments when an urge hits hardest.</li>
            <li>Real one-on-one accountability partners, not quiet group forums.</li>
            <li>Honest pricing, shown before you start.</li>
          </ul>
          <p>Bulwark is in development now. If you'd like to be among the first to try it, join our waitlist. We'll only email you when we have something useful to share.</p>
          <button className="blog-article__cta" type="button" onClick={onJoinWaitlist}>Join the Bulwark waitlist</button>
        </article>
      </main>
      <JourneySection />
      <FaqSection onJoinWaitlist={onJoinWaitlist} />
      <SiteFooter onJoinWaitlist={onJoinWaitlist} />
    </div>
  );
}
