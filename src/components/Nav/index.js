import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const categories = [
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    /* console log the clicked names in nav bar */
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => categorySelected("About")}>
                            About me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => categorySelected('Contact')}>
                            Contact
                        </span>
                    </li>
                    {/* Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique */}
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            {/* on click utilize categorySelected function */}
                            <span onClick={() => categorySelected(category.name)} >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;