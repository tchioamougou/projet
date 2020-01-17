<template>
<div>
    <b-navbar toggleable="lg" type="dark" id="dc_navbar" fixed="top">
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
                <b-navbar-nav>
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#" @click="$i18n.locale = 'en'">EN</b-dropdown-item>
                        <b-dropdown-item href="#" @click="$i18n.locale = 'fr'">FR</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item href="#">Sign in</b-nav-item>
                    <b-nav-item href="#">Sign out</b-nav-item>
                </b-navbar-nav>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

    <!--    Begin carousel  -->
    <div id="dc_carousel">
        <div id="dc_carouselText">
            <h1>{{$t('carouselHeader')}}</h1>
            <h4>{{$t('carouselSubtitle')}}</h4>
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
        <button  @click="search()" class="btn btn-outline-success my-2 my-sm-0">
            Click here for advanced research
            <svg class="bi bi-arrow right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
             clip-rule="evenodd"/></svg>
            
        </button>
    </div>
    <div class="dc_posts">
        <h1>Latest posts</h1>
    </div>
            
    <div class="dc_sampleProperty">
        <h1 class="text-left"> Maisons </h1>
        <div class="container">
            <div class="row flex-row flex-nowrap">
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House1.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Maison</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 80000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House2.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Maison</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 80000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House3.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Maison</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 80000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/house4.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Maison</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 80000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0">
                See more
                <svg class="bi bi-arrow right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                clip-rule="evenodd"/></svg>            
            </button>
        </div>
        <h1 class="text-left"> Chambres </h1>
        <div class="container">
            <div class="row flex-row flex-nowrap">
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House1.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Chambre</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 80000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House2.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Chambre</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 50000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House3.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 0</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 0</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Chambre</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 30000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/house4.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Chambre</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 30000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0">
                See more
                <svg class="bi bi-arrow right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                clip-rule="evenodd"/></svg>
            </button>
        </div>
        <h1 class="text-left"> Appartements </h1>
        <div class="container">
            <div class="row flex-row flex-nowrap">
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House1.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Appartement</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 80000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House2.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Appartement</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 80000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House3.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Appartement</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 80000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/house4.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Appartement</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 80000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0">
                See more
                <svg class="bi bi-arrow right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                clip-rule="evenodd"/></svg>                
            </button>
        </div>
        <h1 class="text-left"> Studios </h1>
        <div class="container">
            <div class="row flex-row flex-nowrap">
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House1.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Studios</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 80000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House2.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Studio</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 50000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/House3.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 0</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 0</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Studio</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 30000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
                <div class="dc_card col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
                    <img src="../assets/house4.jpeg" class="dc_imgcard img-thumbnail">
                    <div class="dc_subheader">
                        <div class="columns card-title">
                            <span class="dc_desc column"><img src="../assets/chambre.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/douche.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/cuisine.png"/> 1</span>
                            <span class="dc_desc column"><img src="../assets/placard.png"/> 1</span>
                        </div>
                    </div>
                    <div class="dc_cardBody card-body">
                        <div class="columns card-text">
                            <div class="column">
                                <span><img src="../assets/type.png"/> Studio</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/map.png"/> Yaoundé</span>
                            </div>
                        </div>
                        <div class="columns card-text">
                            <div class="column">
                                <span> <img src="../assets/address.png"/> 2500 Avenue Byem Assi</span>
                            </div>
                            <div class="column">
                                <span> <img src="../assets/moneyHolder.png"/> 30000 XAF</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-info">See more Infos</a>
                    </div>
                </div>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0">
                See more
                <svg class="bi bi-arrow right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                clip-rule="evenodd"/></svg>
            </button>
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
    },
    methods:{
      search(){
        this.$router.push("/recherche");
      }
    }
}
</script>

<style scoped>
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
.dc_sampleProperty{
    background: transparent linear-gradient(180deg, #2d1d38, #3a0e46, #09040a);
    padding: 20px;
}

.dc_sampleProperty h1{
    font-size: 2em;
    color: white;
    margin-bottom: 5px;
    border-bottom: 1px solid #fff;
}
.dc_posts{
    font-size: 2em;
    margin-bottom: 10px;
    margin: 5px;
}
div.dc_cardBody span img{
    width: 25px;
    height: 25px;
}

div.dc_cardBody span{
    float: left;
    font-size: 0.6em;
}

.dc_subheader span.dc_desc{
    float: left;
    font-size: 0.6em;
}
.dc_subheader span.dc_desc img{
    margin: 5px;
    width: 18px;
    height: 18px;
}
.dc_imgcard{
    width: 100%;
    height: 250px;
}
.dc_card{
    margin: 5px;
}
</style>
