import useStore from "../facade/store";



export 	function useTheme() {
    const {theme} = useStore()

    return {toggleTheme}

    function toggleTheme(){
        if(!theme) return 
        const root = document.documentElement;

        if (theme.current === "dark") {
            root.style.setProperty("--background-0", "#F5DEB3");
            root.style.setProperty("--background-1", "#ee9a1d");
            root.style.setProperty("--color-0", "#006E61");
            root.style.setProperty("--color--1", "#2B8565");
            root.style.setProperty("--color--2", "#F5DEB3");
            root.style.setProperty("--color--3", "none");
            theme.current = "light"
        } else {
            root.style.setProperty("--background-0", "#1E1E1E");
            root.style.setProperty("--background-1", "#505050");
            root.style.setProperty("--color-0", "#FFFFFF");
            root.style.setProperty("--color--1", "#ffffffb9");
            root.style.setProperty("--color--2", "#ffffff8f");
            root.style.setProperty("--color--3", "#b0afaf");
            theme.current = "dark"
        }
    }
}

export function useMenu() {
    const {menu , setMenu : setMenuInState,setOverlay} = useStore()
 
    return {toggleMenu,menu,setMenu}

    function toggleMenu(){
        if(!setMenuInState) return
        if(!setOverlay) return 

        setOverlay((overlay : boolean) => !overlay)
        setMenuInState (!menu) 
    }
    function setMenu(value : boolean){
        if(!setMenuInState) return
        if(!setOverlay) return
        setMenuInState(value)
        setOverlay(value)
    }
}