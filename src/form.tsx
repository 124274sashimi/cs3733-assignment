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
            <input type="checkbox"/>
            <label htmlFor="uname">Looking for Coaching</label>
            <br/>
            <input type="checkbox"/>
            <label htmlFor="pwd">Can Coach</label>
            <br/>
        </>
    );
}

function RadioButtons() {
    return (
        <>
            <input type="radio" name="rank"/>
            <label htmlFor="uname">Looking for Coaching</label>
            <br/>
            <input type="radio" name="rank"/>
            <label htmlFor="pwd">Can Coach</label>
            <br/>
        </>
    );
}

function SubmitButton() {
    return (
        <input type="submit" value="Submit" />
    )
}

export default Form;