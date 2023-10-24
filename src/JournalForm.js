import { MoodSelect } from "./MoodSelect"

export const JournalForm = () => {




    return (
        <form>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Name Your Entry" />
                </div>
            </div>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" type="date" />
                </div>
            </div>

            <MoodSelect />

            <div className="field">
                <label className="label">Write It</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Tell me about it..."></textarea>
                </div>
            </div>
            <div className="control">
                <button className="button is-primary">Submit</button>
            </div>

        </form>


    )
}