function getSatelliteDetails() {
    const satellite = JSON.parse(localStorage.getItem('selectedSatellite'));
    if (!satellite) {
        document.getElementById('satellite-details').innerHTML = '<p>No satellite data available.</p>';
        return;
    }

    const container = document.getElementById('satellite-details');
    container.innerHTML = `
        <div class="satellite-name heading">
            <h1 class="slide-up">${satellite.name}</h1>
        </div>
        <div class="flex-container slide-up">
            <div class="satellite-info information slide-up">
                <p id="maiden-flight" class="slide-up">The ${satellite.name} was launched to outer space on ${satellite.maiden_flight}</p>
                <p id="type" class="slide-up">Satellite Type: ${satellite.agency.type}</p>
                <p id="capability" class="slide-up">Satellite Capability: ${satellite.capability}</p>
                <div class="sat-wiki-link">
                    <a id="wiki-link" href="${satellite.wiki_link}" target="_blank" class="button-86">Learn more about this Satellite</a>
                </div>
            </div>
            <div class="vl slide-up"></div>
            <div class="sat-other-flex-container slide-up">
                <div class="tags">
                    <span id="tag-abbreviation" class="tag">${satellite.agency.abbrev}</span>
                    <span id="tag-country" class="tag">${satellite.agency.country_code}</span>
                    <span id="tag-type" class="tag">${satellite.agency.type}</span>
                </div>
                <img id="sat-image" src="${satellite.image_url}" alt="${satellite.name}" height="275vh">
                <div class="extra-sat-info">
                    <button id="human-rated-btn" class="collapsible">Human Rated</button>
                    <div id="human-rated" class="content">
                        <p>${satellite.human_rated ? "Yes" : "No"}</p>
                    </div>
                    <button id="crew-capacity-btn" class="collapsible">Crew Capacity</button>
                    <div id="crew-capacity" class="content">
                        <p>${satellite.crew_capacity}</p>
                    </div>
                    <button id="in-use-btn" class="collapsible">In Use</button>
                    <div id="in-use" class="content">
                        <p>${satellite.in_use ? "Yes" : "No"}</p>
                    </div>
                </div>
                <div class="share-buttons-container">
                    <div class="share-list">
                        <!-- FACEBOOK -->
                        <a class="fb-h" onclick="return fbs_click()" target="_blank">
                            <img src="https://img.icons8.com/material-rounded/96/000000/facebook-f.png">
                        </a>
                        <!-- TWITTER -->
                        <a class="tw-h" onclick="return tbs_click()" target="_blank">
                            <img src="https://img.icons8.com/material-rounded/96/000000/twitter-squared.png">
                        </a>
                        <!-- LINKEDIN -->
                        <a class="li-h" onclick="return lbs_click()" target="_blank">
                            <img src="https://img.icons8.com/material-rounded/96/000000/linkedin.png">
                        </a>
                        <!-- REDDIT -->
                        <a class="re-h" onclick="return rbs_click()" target="_blank">
                            <img src="https://img.icons8.com/ios-glyphs/90/000000/reddit.png">
                        </a>
                        <!-- PINTEREST -->
                        <a data-pin-do="buttonPin" data-pin-config="none" class="pi-h" onclick="return pbs_click()" target="_blank">
                            <img src="https://img.icons8.com/ios-glyphs/90/000000/pinterest.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <hr class="separator">
        <div class="agency">
            <div class="about-agency-heading heading">
                <h1>ABOUT AGENCY</h1>
            </div>
            <div class="agency-container">
                <div id="agency-logo" class="agency-logo background background--zoom background--2">
                </div>
            </div>
            <div class="vl scroll-vl"></div>
            <div class="agency-description">
                <p>${satellite.agency.description}</p>
                <div class="agency-info">
                    <button class="collapsible">Founding Year</button>
                    <div id="founding" class="content">
                        <p>${satellite.agency.founding_year}</p>
                    </div>
                    <button class="collapsible">Administrator</button>
                    <div id="admin" class="content">
                        <p>${satellite.agency.administrator}</p>
                    </div>
                    <button class="collapsible">Launchers</button>
                    <div id="launchers" class="content">
                        <p>${satellite.agency.launchers}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Update the agency logo background image
    document.getElementById("agency-logo").style.backgroundImage = `url(${satellite.agency.logo_url})`;
}

getSatelliteDetails();

// For Collapsible sections below the satellite image
function collapsibleSectionsUnderImage() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

collapsibleSectionsUnderImage();

// For social media buttons 
{
    var pageLink = window.location.href;
    var pageTitle = String(document.title).replace(/\&/g, "%26");

    function fbs_click() {
        window
            .open(
                `http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,
                "sharer",
                "toolbar=0,status=0,width=626,height=436",
                "_blank"
            )
            .focus();
    }

    function tbs_click() {
        window.open(
            `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,
            "sharer",
            "toolbar=0,status=0,width=626,height=436"
        );
        return false;
    }

    function lbs_click() {
        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`,
            "sharer",
            "toolbar=0,status=0,width=626,height=436"
        );
        return false;
    }

    function rbs_click() {
        window.open(
            `https://www.reddit.com/submit?url=${pageLink}`,
            "sharer",
            "toolbar=0,status=0,width=626,height=436"
        );
        return false;
    }

    function pbs_click() {
        window.open(
            `https://www.pinterest.com/pin/create/button/?&text=${pageTitle}&url=${pageLink}&description=${pageTitle}`,
            "sharer",
            "toolbar=0,status=0,width=626,height=436"
        );
        return false;
    }
}

// For scroll
function moveElementOnScroll() {
    window.addEventListener('scroll', function () {
        const agencyContainer = document.querySelector('.agency-container');
        const agencyDescription = document.querySelector('.agency-description');
        const scrollVL = document.querySelector('.scroll-vl');
        const scrollPosition = window.scrollY;
        const triggerHeight = window.innerHeight * 0.90;

        if (scrollPosition > triggerHeight) {
            agencyContainer.style.transform = 'translateX(-10%)';
            setTimeout(() => {
                agencyDescription.classList.add('visible');
                scrollVL.classList.add('visible');
            }, 200); // Wait for the agencyContainer to move halfway before showing description
        } else {
            agencyContainer.style.transform = 'translate(25%)';
            agencyDescription.classList.remove('visible');
            scrollVL.classList.remove('visible');
        }
    });
}

moveElementOnScroll();

// Slide up on page load
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-up');

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('slide-visible');
        }, index * 200); // stagger the animation with a 200ms delay for each element
    });
});