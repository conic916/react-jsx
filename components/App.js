'use strict'

// lista z kontaktami (contacts) i obiekt z kontaktem ( contactForm)
var contacts = [{
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com',
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};


/// dodajemy dwa komponenty z ktorych korzystamy Contactform i Contacts
//do kazdego z nich przekazujemy propsy
// komponent o nazwie kl.name = odpowiednik id w html
var App = React.createClass({
    render: function () {
        return ( <
            div className = {
                'app'
            } >
            <
            ContactForm contact = {
                contactForm
            }
            /> <
            Contacts items = {
                contacts
            }
            /> </div >
        );
    }
});