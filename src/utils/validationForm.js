// Validation du nom (prénom ou nom de famille)
export const validateName = (name) => {
    const regexNumber = /[0-9]/;
    if (!name || name.length < 2 || regexNumber.test(name)) {
        return "Name must be at least 2 characters long and not contain numbers.";
    }
    return "";
};

// Validation de l'adresse email
export const validateEmail = (email) => {
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegExp.test(email)) {
        return "Please enter a valid email address.";
    }
    return "";
};

// Validation de la date de naissance
export const validateBirthDate = (birthDate) => {
    const currentDate = new Date();
    const date = new Date(birthDate);

    if (!birthDate) {
        return "Birth date is required.";
    }

    const calculateAge = (birthDate, currentDate) => {
        const birthYear = birthDate.getFullYear();
        const currentYear = currentDate.getFullYear();
        let age = currentYear - birthYear;

        const birthMonth = birthDate.getMonth();
        const currentMonth = currentDate.getMonth();
        if (
            currentMonth < birthMonth ||
            (currentMonth === birthMonth &&
                currentDate.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    };

    const age = calculateAge(date, currentDate);
    if (age < 13) {
        return "You must be at least 13 years old.";
    }

    return "";
};

// Validation des nombres (par exemple pour les tournois)
export const validateNumberInput = (value, min = 0, max = 99) => {
    if (!value || isNaN(value) || value < min || value > max) {
        return `Value must be a number between ${min} and ${max}.`;
    }
    return "";
};

// Validation des boutons radio
export const validateRadio = (options) => {
    const isChecked = options.some((option) => option.checked);
    if (!isChecked) {
        return "Please select an option.";
    }
    return "";
};

// Validation des cases à cocher
export const validateCheckbox = (isChecked) => {
    if (!isChecked) {
        return "You must agree to the terms and conditions.";
    }
    return "";
};

// Validation du mot de passe
export const validatePassword = (password) => {
    const passwordRegExp = /^[a-zA-Z0-9!@#$%^&*_-]{8,}$/;
    // Au moins 8 caractères avec des caractères spéciaux autorisés
    if (!password || !passwordRegExp.test(password)) {
        return "Password must be at least 8 characters long and include letters, numbers, and the following special characters: !@#$%^&*_-";
    }
    return ""; // Pas d'erreur
};

// Validation des caractères alphanumériques pour le nom d'utilisateur
export const isAlphanumeric = (str) => {
    const alphanumericRegExp = /^[a-zA-Z0-9]*$/; // Seulement des lettres et chiffres
    if (!str || !alphanumericRegExp.test(str)) {
        return "User Name can only contain alphanumeric characters.";
    }
    return ""; // Pas d'erreur
};

// Fonction générique pour vérifier si un champ est vide
export const isNotEmpty = (value, fieldName = "Field") => {
    if (!value || value.trim() === "") {
        return `${fieldName} cannot be empty.`;
    }
    return ""; // Pas d'erreur
};
