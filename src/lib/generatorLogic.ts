export const generatePassword = (length: number, complexity: string): string => {

    // define complexity level characters
    const lowComplexityChars = 'abcdefghijklmnopqrstuvwxyz';
    const mediumComplexityChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const highComplexityChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    
    let characters = lowComplexityChars;

    if (complexity === 'medium') {
        characters += mediumComplexityChars;
    } else if (complexity === 'high') {
        characters += mediumComplexityChars + highComplexityChars;
    }


    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    console.log(password);
    return password;
}