'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">svs-f documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-1a1125b13407fad6088c6dd425cd7f1c99c24143dcf0b17172eb42a21b72b7624c603d654fe99b6036b455280d8ce9744e11267b0b029b34d560475423c8f514"' : 'data-target="#xs-components-links-module-AdminModule-1a1125b13407fad6088c6dd425cd7f1c99c24143dcf0b17172eb42a21b72b7624c603d654fe99b6036b455280d8ce9744e11267b0b029b34d560475423c8f514"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-1a1125b13407fad6088c6dd425cd7f1c99c24143dcf0b17172eb42a21b72b7624c603d654fe99b6036b455280d8ce9744e11267b0b029b34d560475423c8f514"' :
                                            'id="xs-components-links-module-AdminModule-1a1125b13407fad6088c6dd425cd7f1c99c24143dcf0b17172eb42a21b72b7624c603d654fe99b6036b455280d8ce9744e11267b0b029b34d560475423c8f514"' }>
                                            <li class="link">
                                                <a href="components/BodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoursesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateDoctorantComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateDoctorantComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateFormationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateFormationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateNewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateNewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatabaseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListDoctorantComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListDoctorantComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListProfComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListProfComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListStaffComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListStaffComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MiniProfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MiniProfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResumeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScreenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScreenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SublevelMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SublevelMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8912bdb102ebca0c000345da267b85ceaf75509b61dbfd00337ffb462283e4c0093dac5bf7f2514dbefefb3a9ea9a2d0e37058525e176eb90cbd183106edc4fc"' : 'data-target="#xs-components-links-module-AppModule-8912bdb102ebca0c000345da267b85ceaf75509b61dbfd00337ffb462283e4c0093dac5bf7f2514dbefefb3a9ea9a2d0e37058525e176eb90cbd183106edc4fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8912bdb102ebca0c000345da267b85ceaf75509b61dbfd00337ffb462283e4c0093dac5bf7f2514dbefefb3a9ea9a2d0e37058525e176eb90cbd183106edc4fc"' :
                                            'id="xs-components-links-module-AppModule-8912bdb102ebca0c000345da267b85ceaf75509b61dbfd00337ffb462283e4c0093dac5bf7f2514dbefefb3a9ea9a2d0e37058525e176eb90cbd183106edc4fc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-c66f12d412ddb777b0bb89357164706965db19dc017ef0742a82e72fea6dd99cdc70fbeb0502942a1a0655fe42826b51b7a6c008789a99b1948f87ead4fc1675"' : 'data-target="#xs-components-links-module-AuthModule-c66f12d412ddb777b0bb89357164706965db19dc017ef0742a82e72fea6dd99cdc70fbeb0502942a1a0655fe42826b51b7a6c008789a99b1948f87ead4fc1675"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-c66f12d412ddb777b0bb89357164706965db19dc017ef0742a82e72fea6dd99cdc70fbeb0502942a1a0655fe42826b51b7a6c008789a99b1948f87ead4fc1675"' :
                                            'id="xs-components-links-module-AuthModule-c66f12d412ddb777b0bb89357164706965db19dc017ef0742a82e72fea6dd99cdc70fbeb0502942a1a0655fe42826b51b7a6c008789a99b1948f87ead4fc1675"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreRoutingModule.html" data-type="entity-link" >CoreRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DoctorantModule.html" data-type="entity-link" >DoctorantModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DoctorantModule-275b95ab555b3e4b9cd19c0dbce820c072b7dab1d0c0d8d83aa254319966c61a49afae87e676ddfa4701e8324c5f347a66a514948b2f42bddaedb9ac6b1d6db0"' : 'data-target="#xs-components-links-module-DoctorantModule-275b95ab555b3e4b9cd19c0dbce820c072b7dab1d0c0d8d83aa254319966c61a49afae87e676ddfa4701e8324c5f347a66a514948b2f42bddaedb9ac6b1d6db0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DoctorantModule-275b95ab555b3e4b9cd19c0dbce820c072b7dab1d0c0d8d83aa254319966c61a49afae87e676ddfa4701e8324c5f347a66a514948b2f42bddaedb9ac6b1d6db0"' :
                                            'id="xs-components-links-module-DoctorantModule-275b95ab555b3e4b9cd19c0dbce820c072b7dab1d0c0d8d83aa254319966c61a49afae87e676ddfa4701e8324c5f347a66a514948b2f42bddaedb9ac6b1d6db0"' }>
                                            <li class="link">
                                                <a href="components/BodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalendarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MiniProfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MiniProfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScreenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScreenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DoctorantRoutingModule.html" data-type="entity-link" >DoctorantRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-385cdf460d329bca5eca2c1b615eb672bdd414d69e07573bb8e9e930b5edaf607f0ce57c0442d61c8137b78789592367155ca1789d11a36e2d3dd9b4f84bec96"' : 'data-target="#xs-components-links-module-PublicModule-385cdf460d329bca5eca2c1b615eb672bdd414d69e07573bb8e9e930b5edaf607f0ce57c0442d61c8137b78789592367155ca1789d11a36e2d3dd9b4f84bec96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-385cdf460d329bca5eca2c1b615eb672bdd414d69e07573bb8e9e930b5edaf607f0ce57c0442d61c8137b78789592367155ca1789d11a36e2d3dd9b4f84bec96"' :
                                            'id="xs-components-links-module-PublicModule-385cdf460d329bca5eca2c1b615eb672bdd414d69e07573bb8e9e930b5edaf607f0ce57c0442d61c8137b78789592367155ca1789d11a36e2d3dd9b4f84bec96"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BodyComponent-1.html" data-type="entity-link" >BodyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BodyComponent-2.html" data-type="entity-link" >BodyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CalendarComponent-1.html" data-type="entity-link" >CalendarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChatsComponent-1.html" data-type="entity-link" >ChatsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContactComponent.html" data-type="entity-link" >ContactComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CoursesComponent-1.html" data-type="entity-link" >CoursesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CoursesComponent-2.html" data-type="entity-link" >CoursesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniProfilComponent-1.html" data-type="entity-link" >MiniProfilComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilComponent.html" data-type="entity-link" >ProfilComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilComponent-1.html" data-type="entity-link" >ProfilComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ScreenComponent-1.html" data-type="entity-link" >ScreenComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsComponent-1.html" data-type="entity-link" >SettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidenavComponent-1.html" data-type="entity-link" >SidenavComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                            <li class="link">
                                <a href="classes/Courses.html" data-type="entity-link" >Courses</a>
                            </li>
                            <li class="link">
                                <a href="classes/Doctorant.html" data-type="entity-link" >Doctorant</a>
                            </li>
                            <li class="link">
                                <a href="classes/Formation.html" data-type="entity-link" >Formation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Information.html" data-type="entity-link" >Information</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/News.html" data-type="entity-link" >News</a>
                            </li>
                            <li class="link">
                                <a href="classes/TPayloadPdp.html" data-type="entity-link" >TPayloadPdp</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoursesService.html" data-type="entity-link" >CoursesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DoctorantService.html" data-type="entity-link" >DoctorantService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatsService.html" data-type="entity-link" >StatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICredentials.html" data-type="entity-link" >ICredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INavbarData.html" data-type="entity-link" >INavbarData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToken.html" data-type="entity-link" >IToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SideNavToggle.html" data-type="entity-link" >SideNavToggle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SideNavToggle-1.html" data-type="entity-link" >SideNavToggle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SideNavToggle-2.html" data-type="entity-link" >SideNavToggle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SideNavToggle-3.html" data-type="entity-link" >SideNavToggle</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});