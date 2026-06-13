window.onload = function () {

    const form =
    document.getElementById("farmerForm");

    if(form){

        form.addEventListener(
            "submit",
            function(event){

                event.preventDefault();

                emailjs.sendForm(
                    "service_k9xklmq",
                    "template_suy2z3x",
                    this
                )
                .then(function(){

                    alert(
                        "🌱 Welcome to Kshetravana Agro & Aquatics!\n\nThank you for your interest.\nOne of our executives will contact you soon."
                    );

                    form.reset();

                }, function(error){

                    alert(
                        "Submission failed. Please try again."
                    );

                    console.log(error);

                });

            }
        );
    }
};

function setLanguage(language){

    const heroTitle =
    document.getElementById("hero-title");

    const heroDescription =
    document.getElementById(
        "hero-description"
    );

    if(language === "en"){

        heroTitle.innerHTML =
        "Smart Agriculture & Aquatic Farming for a Better Tomorrow";

        heroDescription.innerHTML =
        "Kshetravana Agro & Aquatics partners with farmers and landowners to transform land into sustainable agricultural and aquatic ecosystems through scientific farming.";
    }

    else if(language === "te"){

        heroTitle.innerHTML =
        "భవిష్యత్తు కోసం స్మార్ట్ వ్యవసాయం & ఆక్వాటిక్ ఫార్మింగ్";

        heroDescription.innerHTML =
        "క్షేత్రవన అగ్రో & ఆక్వాటిక్స్ రైతులు మరియు భూమి యజమానులతో భాగస్వామ్యం చేసి ఆధునిక వ్యవసాయ పద్ధతుల ద్వారా స్థిరమైన వ్యవసాయాన్ని అభివృద్ధి చేస్తుంది.";
    }

    else if(language === "kn"){

        heroTitle.innerHTML =
        "ಉತ್ತಮ ನಾಳೆಗೆ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಮತ್ತು ಜಲಕೃಷಿ";

        heroDescription.innerHTML =
        "ಕ್ಷೇತ್ರವನ ಅಗ್ರೋ & ಅಕ್ವಾಟಿಕ್ಸ್ ರೈತರು ಮತ್ತು ಭೂಮಿಯ ಮಾಲೀಕರೊಂದಿಗೆ ಸಹಭಾಗಿತ್ವದಲ್ಲಿ ಸುಸ್ಥಿರ ಕೃಷಿ ಮತ್ತು ಜಲಕೃಷಿಯನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುತ್ತದೆ.";
    }
}