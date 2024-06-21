import './page.scss';
import Link from 'next/link';

export default function BikePolo() {
  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="content-url-name">
          <div className="url-path">
            <span>
              <Link href="/about"> about </Link>
              {'>'}
            </span>
          </div>
          <h1>Bike Polo</h1>
        </div>
        <div className="video-description">
          <div className="video">
            <iframe
              height="50%"
              src="https://www.youtube.com/embed/7FM4ZLJMoMQ?si=N-kQZKzkzEFWIBaV"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              alt="Video about Bike Polo Tournament, Berlin Mixed 2018"
            />

            <h3>Useful links:</h3>
            <ul>
              <li>
                <Link href="https://poloverse.net/">
                  https://poloverse.net/
                </Link>
              </li>
            </ul>
          </div>
          <div className="description">
            <p>
              Hardcourt bike polo is an exciting and fast-paced sport that
              merges cycling with the strategic elements of traditional polo.
              Played on hard surfaces like asphalt or concrete, this modern
              variation involves teams of three players riding bicycles and
              using mallets to hit a small ball into the opposing team's goal.
            </p>
            Key features of hardcourt bike polo include:
            <ul>
              <li>
                <strong>Specialized Equipment:</strong>
                <p>
                  Players use robust, agile bikes and lightweight mallets
                  designed for precision and durability.
                </p>
              </li>
              <li>
                <strong>Gameplay:</strong>
                <p>
                  Matches are intense and strategic, with players maneuvering
                  swiftly to control the ball and outscore their opponents. Each
                  game is typically played in timed periods, often with the
                  first team to score five goals emerging as the winner.
                </p>
              </li>

              <li>
                <strong>Rules:</strong>
                <p>
                  {' '}
                  The sport has specific rules to ensure fair play and safety,
                  such as players having to tap out if their foot touches the
                  ground and restrictions on player-to-player contact to avoid
                  injuries.
                </p>
              </li>
            </ul>
            <p>
              Hardcourt bike polo requires a blend of cycling skill, hand-eye
              coordination, and teamwork, making it an engaging and challenging
              sport. It has a dedicated community of players and fans worldwide,
              with regular tournaments and local meetups. This sport appeals to
              cycling enthusiasts looking for a new challenge and offers a fun,
              competitive way to stay active and socialize.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
