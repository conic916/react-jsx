'use strict'
//pojedynczy element kontaktowy :
var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            <div className = {'contactItem'}>
                <img className = {'contactImage'} src = {'http://www.pulpiciak.pl/zmiana.php?adres=123030,twarze-avatar&rozdzielczosc=100x100'}/>
                <p className = {'contactLabel'}>
                    imie: {this.props.item.firstName}
                </p>
                <p className = {'contactLabel'}>
                    nazwisko: {this.props.item.lastName}
                </p>
                <a className = {'contactEmail'} href= {'mailto:' + this.props.item.email}> 
                    {this.props.item.email} 
                </a>
            </div>
        )
    },
});