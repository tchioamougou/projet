<template>
<div>
    <b-navbar toggleable="lg" type="dark" id="dc_navbar">
        <button class="btn btn-outline-info my-2 my-sm-0">Dream City</button>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#" active>Home</b-nav-item>
                <b-nav-item href="#">Location</b-nav-item>
                <b-nav-item href="#">Move house</b-nav-item>
                <b-nav-item href="#">Announcement</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-navbar-nav>
                    <b-nav-item href="#">Sign in</b-nav-item>
                    <b-nav-item href="#">Sign out</b-nav-item>
                </b-navbar-nav>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

    <!--    Begin carousel  -->
    <div id="dc_carousel">
        <div id="dc_carouselText">
            <h1>LOCATION EN UN CLICK</h1>
            <h4>Louer sans dépenser aucun frais est notre concept</h4>
            <div id="dc_miniSearch">
                <div class="columns">
                    <div class="column">
                        <b-form-select v-model="selected" :options="propertyTypes"></b-form-select>
                    </div>
                    <div class="column">
                        <b-form-input placeholder="Town name"></b-form-input>
                    </div>
                    <div class="column">
                        <b-form-input placeholder="Maximum Price "></b-form-input>
                    </div>
                </div>
            </div>
            <button class="btn btn-outline-info my-2 my-sm-0">Fast Search</button>
        </div>
    </div>
    <!--     End carousel   -->

    <div class="dc_advanceSearchBtn">
        <button class="btn btn-outline-success my-2 my-sm-0">
            Click here for advanced research
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 226 226" style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                    <path d="M0,226v-226h226v226z" fill="none"></path>
                    <g fill="#2ecc71">
                        <path d="M131.83333,46.42122l-14.125,14.125l43.0371,43.03711h-132.49544v18.83333h132.49544l-43.0371,43.0371l14.125,14.125l66.57877,-66.57877z"></path>
                    </g>
                </g>
            </svg>
        </button>
    </div>

    <div class="dc_sampleProperty">
        <h1>Latest posts</h1>
        <div>
            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
                <b-card-text>
                    Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'Chambres',
            propertyTypes: [
                { text: 'Chambres' },
                { text: 'Studios' },
                { text: 'Appartements' },
                { text: 'Maisons' }
            ]
        }
    }
}
</script>

<style>
#dc_navbar {
    background: linear-gradient(130deg, rgb(1, 82, 158), #3286d4);
    width: auto;
    margin-top: 0px;
    border: 2px;
}

#dc_carousel {
    height: 600px;
    background: transparent url(../assets/ville1.jpg);
    background-size: cover;
    color: white;
    font: bold;
}

div#dc_carousel h1 {
    font-size: 3em;
}

#dc_carouselText {
    height: 400px;
    padding-top: 150px;
}

div#dc_carouselText button {
    font-size: 1.1em;
}

#dc_miniSearch {
    width: 750px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #fff;
    margin-top: 200px;
    margin-bottom: 8px;
    padding: 5px;
}

.dc_advanceSearchBtn {
    margin: 20px;
}

.dc_sampleProperty h1{
    font-size: 2em;
    margin-bottom: 10px;
}
</style>
