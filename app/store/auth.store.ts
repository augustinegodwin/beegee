import { create } from 'zustand'
import { getAuthenticatedUser } from '../lib/async_data';
type AuthState = {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;

    setIsAuthenticated: (value: boolean) => void;
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;

    fetchAuthenticatedUser: () => Promise<void>;
}
export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated:false,
  user:null,
  isLoading:true,
  setIsAuthenticated:(value)=>set({isAuthenticated:value}),
  setUser:(value)=>set({user:value}),
  setLoading:(value)=>set({isLoading:value}),
  fetchAuthenticatedUser:async ()=> {
    set({isLoading:true})
    try {
        const user=await getAuthenticatedUser({ phoneNumber: "09032457431", password: "mark2024" })
        if (user) set({isAuthenticated:true,user: (user as unknown) as User})
        else set({isAuthenticated:false,user:null})
    } catch (error) {
        console.log("Fetch Authentication error",error)
        set({isAuthenticated:false,user:null})
    }finally{
        set({isLoading:false})
    }
  }
}))