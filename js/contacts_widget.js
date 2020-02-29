HookContactInfoEvent();

function HookContactInfoEvent() {
    var infoTypeDropdown = document.querySelector( ".contacts-widget .contacts-info-switch" );

    if( infoTypeDropdown ) {
        infoTypeDropdown.addEventListener( "change", SwitchContactInfo );
    }
}

function SwitchContactInfo( event ) {
    var chosenOptionIndex = this.selectedIndex;

    SwapContactInfo( this.options[ chosenOptionIndex ].value );
}

function SwapContactInfo( primaryOption ) {
    var emailOptions = document.querySelectorAll( ".contacts-widget .contacts-contact-info .contacts-email" );
    var phoneOptions = document.querySelectorAll( ".contacts-widget .contacts-contact-info .contacts-phone" );

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