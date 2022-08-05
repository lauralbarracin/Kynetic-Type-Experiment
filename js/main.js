(() => {
    // grab a ref to the audio
    let track = document.querySelector('audio'),
        startBut = document.querySelector('.start-button'),
        introText = document.querySelector('#intro');

    function startTextAnim() {
        // start the audio
        track.play();        
        // add some animation classes to the main text animation paths
        let textAnimPaths = document.querySelectorAll('#first-twenty > path'),//#id
            IntroLogo = document.querySelector('.introLogo');   //. class

        textAnimPaths.forEach(path => path.classList.add('text-fade'));

        IntroLogo.classList.add('zoom-logo');//

        // hide the play button
        startBut.classList.add('hidden');
        introText.classList.add('hidden');
    }

    function setup() {
        // animate the start screen away
        // select the pieces
        let introText = document.querySelectorAll("#intro g"), //como lo llamo?
            IntroLogo = document.querySelector('.waiting-intro');

        // add the animation class to make them disappear
        IntroLogo.classList.add('intro-fade');

        IntroLogo.addEventListener('animationend', startTextAnim);

        
        IntroLogo.classList.add('animate-birds');//

    }

    startBut.addEventListener('click', setup);
})();