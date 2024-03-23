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
            <br/>
            <label>Password:</label>
            <input type="text"/>
            <br/>

            <div className="checkList">
                <form>
                    <label htmlFor="name"> Name on Card</label>
                    <input type="text" id="name" name="name" placeholder="Full Name"/>
                    <br/>

                    <label htmlFor="cardnum"> Credit Card Number</label>
                    <input type="number" id="cardnum" name="name" placeholder="Enter Number"/>
                    <br/>

                    <label htmlFor="cvc"> CVC</label>
                    <input type="number" id="cvc" name="name"/>
                    <br/>

                    <label htmlFor="exp"> Expiration Date</label>
                    <input type="date" id="exp" name="name" placeholder="xx/xx"/>
                    <br/>

                    <input type="reset"/>
                    <br/>

                </form>
            </div>

        </>
    );
}

function Checkboxes() {
    return (
        <>
            <br/>
            Status:
            <br/>
            <input type="checkbox" id="looking-coach"/>
            <label htmlFor="looking-coach">Looking for Coaching</label>
            <br/>
            <input type="checkbox" id="can-coach"/>
            <label htmlFor="can-coach">Can Coach</label>
            <br/>

            <div className="checkList">
                <label> Intersect:</label>
                <br/>
                <input type="checkbox" id="development" value="interest_development" name="user_interset"/>
                <label htmlFor="development"> Development </label>
                <br/>

                <input type="checkbox" id="design" value="interest_development" name="user_interset"/>
                <label htmlFor="design"> Design </label>
                <br/>

                <input type="checkbox" id="business" value="interest_development" name="user_interset"/>
                <label htmlFor="business"> Business </label>
            </div>
        </>
    );
}

function RadioButtons() {
    return (
        <>
            <br/>
            Rank:
            <br/>
            <input type="radio" name="rank" id="a-d"/>
            <label htmlFor="a-d">A+ - D</label>
            <br/>
            <input type="radio" name="rank" id="ss-s"/>
            <label htmlFor="ss-s">SS - S-</label>
            <br/>
            <input type="radio" name="rank" id="x-u"/>
            <label htmlFor="x-u">X - U-</label>
            <br/>


            <article className="title" >
                <h1 className="title"> Favorite Color? </h1>

                <input type="radio" name="color" id="rad1" value="standard"/>
                <label htmlFor="rad1" className="radioStyle" > Yellow</label>

                <input type="radio" name="color" id="rad2" value="express"/>
                <label htmlFor="rad2" className="radioStyle" > Blue </label>

                <input type="radio" name="color" id="rad3" value="express"/>
                <label htmlFor="rad3" className="radioStyle" > Pink </label>

            </article>article

        </>
    );
}

function SubmitButton() {
    return (
        <input type="submit" value="Submit"/>

    )
}

export default Form;