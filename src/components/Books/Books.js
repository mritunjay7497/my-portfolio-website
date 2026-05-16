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
  },
  {
    title: "You Don't Know JS Yet: Scope & Closures",
    author: "Kyle Simpson",
    thumbnail: "https://books.google.com/books/content?vid=ISBN9798621536459&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    amazonUrl:
      "https://www.amazon.in/gp/product/1449335586?ref_=dbs_m_mng_rwt_calw_tpbk_0&storeType=ebooks&qid=1778967310&sr=8-2",
    isbn13: "979-8621536459",
    note:
      "This book explains how JavaScript scope really works, how lexical scope shapes variable resolution, and why closures are such a fundamental part of the language. It is especially useful for building a stronger mental model of functions, module patterns, and cleaner code organization."
  },
  {
    title: "You Don't Know JS: This & Object Prototypes",
    author: "Kyle Simpson",
    thumbnail: "https://books.google.com/books/content?id=cE4BBAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    amazonUrl:
      "https://www.amazon.in/You-Dont-Know-JS-Prototypes/dp/9351107248/ref=sr_1_2?crid=2SORT9F3LBJK8&dib=eyJ2IjoiMSJ9.1XlIqT_1Zsf7q22S4X4XJkc5Qryc4P5SiAXhok3AOQrEr3GmDEOsExFqwcq4swYB0GYRpx4-N048mH6PEhuzRCafaML6d77RpAfUXPUhYnoTcSwux5msjj7SZMPkP69Q.ZXUkfJI9JFHGTQHYCQsSBE92G_bLYUYkpGzxTGVhBLU&dib_tag=se&keywords=you+don%27t+know+js+yet+async&qid=1778967310&sprefix=you+don%27t+know+async%2Caps%2C295&sr=8-2",
    isbn10: "9789351107248",
    isbn13: "978-9351107248",
    note:
      "This book focuses on two ideas that often confuse JavaScript developers: how `this` is bound at runtime and how object prototypes shape inheritance and delegation. It gives a deeper understanding of method calls, object behavior, and how JavaScript differs from classical object-oriented languages."
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann & Chris Riccomini",
    thumbnail: "https://books.google.com/books/content?id=p1heDgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    amazonUrl:
      "https://www.amazon.in/Designing-Data-Intensive-Applications-Maintainable-Greyscale/dp/9368089043/ref=sr_1_1?crid=1YM3QN3ZVYN3O&dib=eyJ2IjoiMSJ9.Qs_52q5Ti6hIQQLoVgpN8NrscsclqJJdX2tbe8fNJbwY2dmtUaZdj5w8twvvLDCWki-gyBeoUhxcacn5G2K0ukCh9vLWM5aL3nRFaZiSG8Bw8JItuyzDF-O1xtUzFUi1n7mjmSqagdYkc7Ex4kobxYo5Cc9m5agoyXN3lb87iP3brZJOuXipWFWt8Qm33cEYlUYk5YJKaQ4mdc-rFPhaXZB78sS7BV-T8P0zyo6_vGQ.zN1Lt6tPusqSXjnqz0xd7L6lWOXvR7H-7WsRaA9GoTs&dib_tag=se&keywords=designing+data-intensive+applications&qid=1778967403&sprefix=designing+d%2Caps%2C310&sr=8-1",
    isbn10: "9368089043",
    isbn13: "978-9368089049",
    note:
      "This book covers the core ideas behind building reliable and scalable data systems, including storage engines, replication, partitioning, transactions, stream processing, and consistency tradeoffs. It is valuable because it connects distributed systems theory with the architectural decisions engineers make in real-world backend systems."
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
            <h2>{books.length} books on the shelf</h2>
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
                    {book.note ? <p className="bookshelf-note">{book.note}</p> : null}

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
