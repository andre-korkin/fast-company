export function validator (data, config) {
    const errors = {}

    for (const field in data) {
        errors[field] = []
        for (const validateMethod in config[field]) {
            const error = validate(validateMethod, data[field], config[field][validateMethod])
            error && errors[field].push(error)
        }
    }

    return errors


    function validate (validateMethod, data, config) {
        switch (validateMethod) {
            case 'isRequired':
                if (data.trim() === '') return config.message
                break
            case 'isEmail': {
                const emailRegExp = /^\S+@\S+\.\S+$/g
                if (!emailRegExp.test(data)) return config.message
                break
            }
            case 'isUpperSymbol': {
                const passRegExp = /[A-Z]+/g
                if (!passRegExp.test(data)) return config.message
                break
            }
            case 'isDigit': {
                const passRegExp = /\d+/g
                if (!passRegExp.test(data)) return config.message
                break
            }
            case 'isMin':
                if (data.length < config.value) return config.message
                break
            default:
                break
        }
    }
}
