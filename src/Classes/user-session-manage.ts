import { AlertController, Events, App, MenuController } from 'ionic-angular';
import { AuthService } from '../providers/auth.service';
import { NetworkService } from '../providers/network.service';

// import { LoginPage } from '../pages/login/login';
import { CustomService } from '../providers/custom.service';

// declare var URLPREFIX;
declare var ROLE;
export class UserSessionManage {

    rootPage: any;
    sideMenuOptions: Array<any>;
    userImage: string;
    userName: string;

    constructor(
        public events: Events,
        public appCtrl: App,
        public authService: AuthService,
        public alertCtrl: AlertController,
        public networkService: NetworkService,
        public menu: MenuController,
        public customService: CustomService,
    ) {

        this.handleEvents();
        this.networkService.checkNetworkStatus();
        this.hasLoggedIn();
    }

    public handleEvents() {
        this.events.subscribe('user:login', () => {
            this.login();
        });
        // this.events.subscribe('session:expired', () => {
        //     this.sessionExpired();
        // });
        this.events.subscribe('user:logout', () => {
            this.logout();
        });
        this.events.subscribe("offline", () => {
            this.offline();
        });
        this.events.subscribe("online", () => {
            this.online();
        });
        this.events.subscribe("user:image", () => {
            this.imageUpdate();
        });
    }


    public hasLoggedIn() {
        this.setRootPage();
        // if (this.authService.isLoggedIn()) {
        //     this.authService.fetchUserDetails()
        //         .subscribe((res) => {
        //             // no need to do any thing as userdetails would have been saved in service
        //             this.setRootPage();
        //             // this.enablePushNotifications();
        //         }, (err: any) => {
        //             this.customService.showToast('Some error occured, Please Reopen the App or Logout');
        //         });

        // } else {
        //     this.rootPage = "LoginPage";
        // }
    }

    public login() {
        // this.setRootPage();
        this.appCtrl.getRootNavs()[0].setRoot("HomePage");
        this.decideSideMenuContent();

        // this.enablePushNotifications();
        // this.imageUpdate();
    }

    // enablePushNotifications() {
    //     this.pushMsgService.initializeFCM();
    // }

    setRootPage() {
        this.rootPage = "LoginPage";
        this.decideSideMenuContent();

        // this.appCtrl.getRootNavs()[0].setRoot("LoginPage");


        //check role and set root page

        // switch (role) {
        //     case 'g':
        //         this.menu.enable(false);
        //         // this.rootPage = HomePage;
        //         this.appCtrl.getRootNavs()[0].setRoot(HomePage);
        //         this.isGuest = true;
        //         break;

        //     case 'sa':
        //         // this.rootPage = DashboardPage;
        //         this.appCtrl.getRootNavs()[0].setRoot(DashboardPage);
        //         this.decideSideMenuContent();
        //         this.menu.enable(true);
        //         this.isGuest = false;
        //         break;

        //     case 'a':
        //         // this.rootPage = DashboardPage;
        //         this.appCtrl.getRootNavs()[0].setRoot(DashboardPage);
        //         this.decideSideMenuContent();
        //         this.menu.enable(true);
        //         this.isGuest = false;
        //         break;
        // }
        // this.imageUpdate();
    }


    decideSideMenuContent() {

        if(ROLE==='customer'){
        this.sideMenuOptions = [

            { title: 'Home', component: "HomePage", icon: 'home' },
            { title: 'Products', component: "ProductsPage", icon: 'phone-portrait' },
            { title: 'Incidents', component: "IncidentsPage", icon: 'megaphone' },
            { title: 'Logout', component: 'NA', icon: 'log-out' }
        ];
    }else{
        this.sideMenuOptions = [

            { title: 'Home', component: "HomePage", icon: 'home' },
            // { title: 'Products', component: "ProductsPage", icon: 'phone-portrait' },
            { title: 'Incidents', component: "EngineerIncidentsPage", icon: 'megaphone' },
            { title: 'Logout', component: 'NA', icon: 'log-out' }
        ];
    }
    }

    public imageUpdate() {

        this.userImage = JSON.parse(localStorage.getItem('userInfo')).picUrl;
        this.userName = JSON.parse(localStorage.getItem('userInfo')).username || '';
    }

    public logout() {

        localStorage.clear();
        
        // URLPREFIX = undefined;
        ROLE = undefined;
        this.appCtrl.getRootNavs()[0].setRoot("LoginPage");
    }

    public offline() {
        // if (this.authService.isLoggedIn()) {

        //     this.appCtrl.getRootNavs()[0].setRoot(NoInternet);
        // }
    }

    public online() {
        // if (this.authService.isLoggedIn()) {
        //     this.login();
        // } else {
        //     this.logout();
        // }
    }


    // public sessionExpired() {

    //     let alert = this.alertCtrl.create({
    //         title: 'Session Expired',
    //         message: "You're already logged in some other device. You may again login.",
    //         enableBackdropDismiss: false,
    //         buttons: [{
    //             text: 'Logout',
    //             handler: () => {
    //                 this.events.publish("user:logout");
    //             }
    //         }]
    //     });
    //     alert.present();
    // }


}


