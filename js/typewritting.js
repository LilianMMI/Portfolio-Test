/* Function init typewritting effect */
const typewritting = () => {

    /* Define variables */
    let SENTENCES_TYPEWRITTER = ["Search engine optimisation", "Front-end", "UI/UI", "Frameworks", "Git", "Back-end",];
    let typewritter_text = document.querySelector("#typewritter_text");

    /* Promise resolve with delay */
    let delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    /* writting effect */
    async function write_effect(sentence) {
        for (let i = 0; i < sentence.length; i++) {
            typewritter_text.innerHTML += sentence.charAt(i);
            await delay(30);
        }
    }

    /* erase effect */
    async function erase_effect(sentence) {
        for (let i = sentence.length; i > 0; i--) {
            typewritter_text.innerHTML = typewritter_text.innerHTML.slice(0, -1);
            await delay(10);
        }
    }

    /* loop to re iterate previous effects */
    async function loop_write_effect() {
        for (let sentence of SENTENCES_TYPEWRITTER) {
            await write_effect(sentence);
            await delay(1500);
            await erase_effect(sentence);
            await delay(0);

        };
        loop_write_effect();
    }

    loop_write_effect();
}