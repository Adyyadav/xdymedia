export const SPLASH_KEY = "xdy_splash_seen";

// Runs in <head> before first paint: decides whether this visit gets a splash.
// CSS keys off the class it adds, so there is no flash of page content and no
// hydration mismatch. The 6s timer is a failsafe so a JS failure can never
// leave the overlay stuck on screen.
export const SPLASH_BOOT_SCRIPT = `try{if(!sessionStorage.getItem("${SPLASH_KEY}")){var d=document.documentElement;d.classList.add("xdy-splash");setTimeout(function(){d.classList.remove("xdy-splash")},6000)}}catch(e){}`;
