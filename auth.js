(function(){
    function qs(s){return document.querySelector(s);}    
    function getNext(){
        const p = new URLSearchParams(window.location.search);
        return p.get('next') || 'index.html';
    }

    function isLoginPage(){
        const path = window.location.pathname.split('/').pop();
        return path === 'login.html';
    }

    function isAuthenticated(){
        return sessionStorage.getItem('auth') === 'true' || localStorage.getItem('auth') === 'true';
    }

    function getStoredUser(){
        return sessionStorage.getItem('user') || localStorage.getItem('user') || null;
    }

    function redirectToLogin(){
        const next = encodeURIComponent(window.location.pathname + window.location.search);
        window.location.href = 'login.html?next=' + next;
    }

    // If on login page, expose login/logout helpers for the page script
    // users storage: array form [{email}] - email-based authentication
    function _loadUsers(){
        try{
            const raw = JSON.parse(localStorage.getItem('users') || '[]');
            if(Array.isArray(raw)) return raw;
            return [];
        }catch(e){ return []; }
    }
    function _saveUsers(arr){ localStorage.setItem('users', JSON.stringify(arr)); }

    function _findUserByEmail(email){
        if(!email) return null;
        const users = _loadUsers();
        return users.find(u => u.email === email) || null;
    }

    function _isValidEmail(email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    if(isLoginPage()){
        window.Auth = {
            // login with email. Create account if user doesn't exist (email-based, no password).
            login: function(email, remember){
                if(!email || !_isValidEmail(email)) return false;
                const users = _loadUsers();
                let user = _findUserByEmail(email);
                if(!user){
                    // create new account
                    user = { email: email };
                    users.push(user);
                    _saveUsers(users);
                }
                if(remember){
                    localStorage.setItem('auth','true');
                    localStorage.setItem('user', email);
                } else {
                    sessionStorage.setItem('auth','true');
                    sessionStorage.setItem('user', email);
                }
                return true;
            },
            logout: function(){ sessionStorage.removeItem('auth'); localStorage.removeItem('auth'); sessionStorage.removeItem('user'); localStorage.removeItem('user'); },
            getUser: getStoredUser
        };
        return;
    }

    // For all other pages, check authentication and redirect if needed
    if(!isAuthenticated()){
        redirectToLogin();
        return;
    }

    // If authenticated, add a greeting and logout button to the nav
    document.addEventListener('DOMContentLoaded', function(){
        const nav = qs('nav ul');
        if(!nav) return;
        const user = getStoredUser();
        if(user){
            const greet = document.createElement('li');
            greet.style.color = 'var(--header-text)';
            greet.textContent = 'Hola, ' + user;
            nav.appendChild(greet);
        }
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.id = 'logout-btn';
        btn.textContent = 'Cerrar sesión';
        btn.style.background = 'transparent';
        btn.style.border = 'none';
        btn.style.color = 'var(--header-text)';
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function(){
            sessionStorage.removeItem('auth'); localStorage.removeItem('auth'); sessionStorage.removeItem('user'); localStorage.removeItem('user');
            window.location.href = 'login.html';
        });
        li.appendChild(btn);
        nav.appendChild(li);
    });

})();
