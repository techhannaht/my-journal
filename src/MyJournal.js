import { JournalForm } from "./JournalForm"
import { JournalList } from "./JournalList"
import { Weather } from "./Weather"

export const MyJournal = () => {

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">
            My Journal
          </h1>
          <p className="subtitle">
            Tell me how you <strong> really </strong> feel.
          </p>
          <div className="columns">
            <div class="column is-three-fifths">
              <JournalForm />
            </div>
            <div class="column">
              <Weather />
            </div>
          </div>
          <JournalList/>

        </div>
      </section>
    </>
  )

}