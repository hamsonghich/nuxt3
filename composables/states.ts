import { useState } from "nuxt/app";

export const useCounter = () => useState('counter', () => 1)

export const useUserData = () => {
    const userData = useState('user', () => {})
    const setUserData = (user: any) => {
        userData.value = user
    }
    return {
        userData,
        setUserData
    }
}

export const usePersonData = () => {
    const personData = useState('person', () => {})
    const setPersonData = (person: any) => {
        personData.value = person
    }
    return {
        personData,
        setPersonData
    }
}
