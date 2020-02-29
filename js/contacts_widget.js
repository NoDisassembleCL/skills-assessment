HookContactInfoEvent();

function HookContactInfoEvent() {
    var infoTypeDropdowns = document.querySelectorAll( ".contacts-widget .contacts-info-switch" );

    if( infoTypeDropdowns.length > 0 ) {
        for( var i = 0; i < infoTypeDropdowns.length; i++ ) {
            infoTypeDropdowns[ i ].addEventListener( "change", SwitchContactInfo );
        }
    }
}

function SwitchContactInfo( event ) {
    var chosenOptionIndex = this.selectedIndex;

    SwapContactInfo( this.options[ chosenOptionIndex ].value, this.parentNode.parentNode );
}

function SwapContactInfo( primaryOption, parentWidget ) {
    var emailOptions = parentWidget.querySelectorAll( ".contacts-widget .contacts-contact-info .contacts-email" );
    var phoneOptions = parentWidget.querySelectorAll( ".contacts-widget .contacts-contact-info .contacts-phone" );

    for( var i = 0; i < emailOptions.length; i++ ) {
        if( primaryOption === "email" ) {
            emailOptions[ i ].classList.add( "active" );
        }
        else {
            emailOptions[ i ].classList.remove( "active" );
        }
    }

    for( var i = 0; i < phoneOptions.length; i++ ) {
        if( primaryOption === "phone" ) {
            phoneOptions[ i ].classList.add( "active" );
        }
        else {
            phoneOptions[ i ].classList.remove( "active" );
        }
    }
}