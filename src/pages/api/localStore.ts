interface Persona {
    persona : string;
}

const PERSONA_KEY = 'personas';

export const savePersona = (persona : Persona)=>{
    const personas = getPersonas();
    personas.push(persona);
    localStorage.setItem(PERSONA_KEY, JSON.stringify(personas));
};

export const getPersonas = (): Persona[]=>{
    const personas = localStorage.getItem(PERSONA_KEY);
    return personas ? JSON.parse(personas) : [];
};

export const deletePersona = (key : number)=>{
    const personas = getPersonas();
    personas.splice(key);
    localStorage.setItem(PERSONA_KEY, JSON.stringify(personas));
};

const AUTH_KEY = 'autentificado'

export const login = ()=>{
    localStorage.setItem(AUTH_KEY, 'true');
};

export const logout = ()=>{
    localStorage.removeItem(AUTH_KEY);
};

export const esAutentificado = (): boolean =>{
    return localStorage.getItem(AUTH_KEY) === 'true';
};