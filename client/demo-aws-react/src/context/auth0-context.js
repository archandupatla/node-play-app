import React, {createContext} from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
export const Auth0Context = createContext();

export class Auth0Provider extends React.Component{
    state = {
        auth0Client:null,
        isAuthenticated: false,
        user:null
    }
    config = {
        domain: process.env.REACT_APP_DOMAIN,
        client_id:process.env.REACT_APP_CLIENT_ID,
        redirect_uri:process.env.REACT_APP_ENV==='local' ? window.location.origin:'https://demo-portal.net',
        
    }
    componentDidMount(){
        
        this.initializeAuth0Client();
    }
    handleRedirectedCallBack = async ()=> {
        this.setState({isLoading: true});
        await this.state.auth0Client.handleRedirectCallback();
        const user = await this.state.auth0Client.getUser();
        window.history.replaceState({}, document.title, window.location.pathname);
        // user.then((data)=>{
        //     this.setState({user:data, isLoading:false, isAuthenticated: true});
        // })
       this.setState({user, isLoading:false, isAuthenticated: true});
    }
    initializeAuth0Client = async ()=>{
        const auth0Client = await createAuth0Client(this.config);
        
        this.setState({auth0Client:auth0Client});
        const isAuthenticated = await auth0Client.isAuthenticated();
        const user = isAuthenticated?await auth0Client.getUser():null;
        if(window.location.search.includes('code=')){
            return this.handleRedirectedCallBack();
        }
        this.setState({isLoading: false,isAuthenticated:isAuthenticated,user:user});
        window.history.replaceState({}, document.title, window.location.pathname);

    }
    render(){
        
        const {auth0Client,isLoading,isAuthenticated,user} = this.state;
        const configObject = {isLoading,
            isAuthenticated,
            user,
            loginWithRedirect: (...p)=>auth0Client.loginWithRedirect(...p),
            getTokenSilently: (...p)=>auth0Client.getTokenSilently(...p),
            getIdTokenClaims:(...p)=>auth0Client.getIdTokenClaims(...p),
            logout:(...p)=>auth0Client.logout(...p)
        }
        return(
            <Auth0Context.Provider value={configObject}>
            {this.props.children}
        </Auth0Context.Provider>
        )
       
    }
}