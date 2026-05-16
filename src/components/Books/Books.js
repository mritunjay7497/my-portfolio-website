import { Container, Row, Col } from "react-bootstrap";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";
import Particle from "../Particle";

const books = [
  {
    title: "Understanding Distributed Systems",
    author: "Roberto Vitillo",
    thumbnail: "https://books.google.com/books/content?id=_yBlEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    amazonUrl:
      "https://www.amazon.in/Understanding-Distributed-Systems-Second-applications/dp/9355428421/ref=sr_1_1?crid=19GH1QN489T7S&dib=eyJ2IjoiMSJ9.4UtwLOaLtJ0ki21QpyKOYbR6FJrhl0I0NlOXtngzsAwvBTLTfDsqvWRYrQEy9-_cRRBWn8RwjUGgPK5RCNaVEAyNblwRkaXciafMSE8zzughS764okU-NtvEm1kGi7pBEda1g3V-roQTd4SF4TZeF-KsHJ9k0Q-NuDC8SiPGG_mw99RHnlJyGUlSZTVIjXnKFQ4_9PIQvyYT93Q4JOY31tUlGbpGUFximi_5hv7dWm0.ZgjRtcm8NJvqzumVzLDaqc8PZqirN3yFyPmSldYN7ug&dib_tag=se&keywords=understanding+distributed+systems&qid=1778963075&sprefix=understanding+distributed+s%2Caps%2C313&sr=8-1",
    isbn10: "9355428421",
    isbn13: "978-9355428424",
    note:
      "This book gave me a much clearer mental model for distributed systems, especially leader election, consensus, and fault tolerance. It helped me connect ideas like Raft, Paxos, and CAP tradeoffs to the kinds of reliability decisions engineers have to make in real production systems."
  }
];

function Books() {
  return (
    <Container fluid className="book-section">
      <Particle />
      <Container>
        <section className="bookshelf-hero">
          <div className="section-copy">
            <span className="section-kicker">Bookshelf</span>
            <h1 className="section-heading">
              A reading shelf for books that shaped how I think, build, and grow as an engineer.
            </h1>
            <p className="section-intro">
              This section showcases books I&apos;ve actually read, with their covers, my main takeaway, and direct Amazon links.
            </p>
          </div>

          <aside className="bookshelf-status-panel">
            <span className="board-label">Shelf status</span>
            <h2>{books.length} book on the shelf</h2>
            <p>
              This shelf is for books I have actually read, with the cover, my takeaway, and a direct buying link.
            </p>
          </aside>
        </section>

        <section className="bookshelf-grid-section">
          <Row className="g-4">
            {books.map((book) => (
              <Col xl={6} key={book.isbn13}>
                <article className="bookshelf-book-card">
                  <div className="bookshelf-cover-shell">
                    <img className="bookshelf-cover" src={book.thumbnail} alt={`${book.title} cover`} loading="lazy" />
                  </div>
                  <div className="bookshelf-book-copy">
                    <div className="bookshelf-book-meta">
                      <span className="bookshelf-chip">
                        <FiBookOpen />
                        <span>Read</span>
                      </span>
                    </div>

                    <h2 className="project-heading">{book.title}</h2>
                    <p className="bookshelf-author">{book.author}</p>
                    <p className="bookshelf-note">{book.note}</p>

                    <div className="bookshelf-book-footer">
                      <a className="insight-link" href={book.amazonUrl} target="_blank" rel="noreferrer">
                        <span>Buy on Amazon</span>
                        <FiArrowUpRight />
                      </a>
                    </div>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default Books;
