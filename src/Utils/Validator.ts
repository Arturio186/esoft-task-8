class Validator {
    static CheckEmail(email : string) {
        return String(email).match( // УКРАЛ ;D
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    static CheckInteger(value : string | number) {
        return (value != null) && (value !== '') && !isNaN(Number(value.toString()));
    }
    
    static CheckRequired(value : string) {
        return String(value).length !== 0
    }
}

export default Validator
