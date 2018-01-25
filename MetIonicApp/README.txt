

1. node_modules\ionic-angular\navigation\nav-controller-base-d.ts
   Comment out /*implements NavController*/ on line 20. (Double click error to get there.)
2. Edit package.json
   Change to "rxjs": "5.5.6"
   Change to "typescript": "2.6.2"
   Close Visual Studio
   At command prompt (within solution): npm install
3. Copy/Rename: resources\windows\splash>copy Splash620x300.scale-100.png SplashScreenPhone.png
