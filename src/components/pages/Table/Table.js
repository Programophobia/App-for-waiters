const Table = () => {

    return (
        <div><h1>Table 1</h1>

        <form>
            <div>
                <label for="status"><b>Status:</b></label>
                <select id="status">
                    <option value="busy">Busy</option>
                    <option value="reserved">Reserved</option>
                    <option value="free">Free</option>
                    <option value="cleaning">Cleaning</option>
                </select>
            </div>
            <div>
                <label for="people"><b>Status:</b></label>
                <input type="number" id="people" /> / <input type="number" />
            </div>
            <div>
                <label for="bill"><b>Status:</b></label>
                $ <input type="number" id="bill" />
            </div>
            <button>Update</button>
        </form></div>
    )
}

export default Table