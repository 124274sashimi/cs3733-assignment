import "./list.css"
function List() {
    return (
        <>
            Here are some fun facts about myself:
            <ul>
                <li>I've been playing tetris for 3 years!</li>
                <li>My favorite piece is the T piece</li>
                <li>I can place over 2 pieces every second!</li>
                <li>I've played in over 20 tournaments</li>
                <li>I developed a tetris bot to find "optimal" play in tetris</li>
            </ul>

            <article>
                <div className="box1">
                    <p style={{fontWeight: "bold"}}> Favorite Foods:</p>
                    <ul style={{textAlign: "left"}}>
                        <li> Tacos</li>
                        <li> Chocolate</li>
                        <li> Blackberries</li>
                        <li> Red Apples</li>
                        <li> Twix</li>
                        <li> Soup</li>
                    </ul>
                </div>

                <div className="box1">
                    <p style={{fontWeight: "bold"}}> Pet Peeves:</p>
                    <ul style={{textAlign: "left"}}>
                        <li> Bad Posture</li>
                        <li> Crocs</li>
                        <li> Greezy Hair</li>
                        <li> Being Ugly</li>
                        <li> Sweatpants</li>
                        <li> Mcdonalds</li>
                    </ul>
                </div>
            </article>

        </>
    );
}

export default List;