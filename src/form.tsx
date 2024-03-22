function Form() {
    return (
        <form>
            <TextInput />
            <Checkboxes />
            <RadioButtons />
            <SubmitButton />
        </form>
    )

}

function TextInput() {
    return (
        <>
            <label>Username:</label>
            <input type="text"/>
            <br />
            <label>Password:</label>
            <input type="text"/>
            <br />
        </>
    );
}

function Checkboxes() {
    return (
        <>
            Status:
            <br />
            <input type="checkbox" id="looking-coach"/>
            <label htmlFor="looking-coach">Looking for Coaching</label>
            <br/>
            <input type="checkbox" id="can-coach"/>
            <label htmlFor="can-coach">Can Coach</label>
            <br/>
        </>
    );
}

function RadioButtons() {
    return (
        <>
            Rank:
            <br />
            <input type="radio" name="rank" id="a-d"/>
            <label htmlFor="a-d">A+ - D</label>
            <br/>
            <input type="radio" name="rank" id="ss-s"/>
            <label htmlFor="ss-s">SS - S-</label>
            <br/>
            <input type="radio" name="rank" id="x-u"/>
            <label htmlFor="x-u">X - U-</label>
            <br/>
        </>
    );
}

function SubmitButton() {
    return (
        <input type="submit" value="Submit"/>
    )
}

export default Form;