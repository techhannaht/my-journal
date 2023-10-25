export const MoodSelect = () => {



    return (
        <div className="field">
            <label className="label">Mood</label>
            <div className="control">
                <div className="select">
                    <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                        {/*map through moods*/}
                    </select>
                </div>
            </div>
        </div>
    )
}