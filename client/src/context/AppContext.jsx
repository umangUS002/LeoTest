import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [token, setTokenState] = useState(() => {
        return localStorage.getItem('token') || null;
    });
    const [showLogin, setShowLogin] = useState(false);

    const [events, setEvents] = useState([]);
    const [allContent, setAllContent] = useState([]);

    const setToken = (newToken) => {
        setTokenState(newToken);
        if (newToken) {
            localStorage.setItem('token', newToken);
        } else {
            localStorage.removeItem('token');
        }
    };

    const fetchEvents = async () => {
        try {
            const { data } = await axios.get('/api/event/all-events');
            data.success ? setEvents(data.events) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const fetchContent = async () => {
        try {
            const { data } = await axios.get('/api/content/all-content');
            data.success ? setAllContent(data.content) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
    console.log("Current token:", token); // Add this line
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}, [token]);

    useEffect(() => {
        fetchEvents();
        fetchContent();
    }, []);

    const value = {
        token,
        setToken,
        showLogin,
        setShowLogin,
        axios,
        toast,
        events,
        allContent,
        fetchEvents,
        fetchContent
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};


export const useAppContext = () => {
    return useContext(AppContext)
}