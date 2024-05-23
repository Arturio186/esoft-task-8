const CheckObjectProperties = (target : object, properties : string[]) : boolean => {
    return properties.every(property => target.hasOwnProperty(property));
} 

export default CheckObjectProperties;